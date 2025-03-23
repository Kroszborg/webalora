type CircuitBreakerOptions = {
  failureThreshold: number;
  resetTimeout: number;
};

type CircuitBreakerState = 'CLOSED' | 'OPEN' | 'HALF_OPEN';

export class CircuitBreaker {
  private state: CircuitBreakerState = 'CLOSED';
  private failureCount = 0;
  private nextAttempt = Date.now();
  private readonly failureThreshold: number;
  private readonly resetTimeout: number;
  private readonly name: string;

  constructor(options: Partial<CircuitBreakerOptions> & { name?: string } = {}) {
    this.failureThreshold = options.failureThreshold || 3;
    this.resetTimeout = options.resetTimeout || 30000; // 30 seconds
    this.name = options.name || 'circuit';
    
    // Log creation for debugging
    console.log(`Circuit breaker '${this.name}' created with threshold ${this.failureThreshold} and timeout ${this.resetTimeout}ms`);
  }

  async execute<T>(fn: () => Promise<T>, fallback?: () => Promise<T>): Promise<T> {
    if (this.state === 'OPEN') {
      if (Date.now() > this.nextAttempt) {
        console.log(`Circuit '${this.name}' attempting to transition from OPEN to HALF_OPEN`);
        this.state = 'HALF_OPEN';
      } else if (fallback) {
        console.log(`Circuit '${this.name}' is OPEN, using fallback`);
        return fallback();
      } else {
        console.log(`Circuit '${this.name}' is OPEN, no fallback available`);
        throw new Error(`Circuit '${this.name}' is OPEN`);
      }
    }

    try {
      const result = await fn();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      console.error(`Circuit '${this.name}' registered a failure:`, error);
      
      if (fallback) {
        console.log(`Circuit '${this.name}' is using fallback after failure`);
        return fallback();
      }
      throw error;
    }
  }

  private onSuccess(): void {
    if (this.state !== 'CLOSED') {
      console.log(`Circuit '${this.name}' transitioned to CLOSED from ${this.state}`);
    }
    
    this.failureCount = 0;
    this.state = 'CLOSED';
  }

  private onFailure(): void {
    this.failureCount += 1;
    console.log(`Circuit '${this.name}' failure count: ${this.failureCount}/${this.failureThreshold}`);
    
    if (this.state === 'HALF_OPEN' || this.failureCount >= this.failureThreshold) {
      this.state = 'OPEN';
      this.nextAttempt = Date.now() + this.resetTimeout;
      console.log(`Circuit '${this.name}' transitioned to OPEN until ${new Date(this.nextAttempt).toISOString()}`);
    }
  }
  
  // Get the current state for monitoring
  getState(): { state: CircuitBreakerState; failureCount: number; nextAttempt: number | null } {
    return {
      state: this.state,
      failureCount: this.failureCount,
      nextAttempt: this.state === 'OPEN' ? this.nextAttempt : null
    };
  }
}