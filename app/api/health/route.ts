import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Check CMS connectivity
    const cmsHealthCheck = fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL || 'https://cms.webalora.com'}/api/health`, { 
      method: 'HEAD',
      cache: 'no-store', 
      next: { revalidate: 0 }
    }).then(res => res.ok).catch(() => false);
    
    // Check secondary API connectivity
    const secondaryApiCheck = fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://cms.webalora.com'}/api/health`, { 
      method: 'HEAD',
      cache: 'no-store', 
      next: { revalidate: 0 }
    }).then(res => res.ok).catch(() => false);
    
    // Wait for all checks to complete
    const [cmsStatus, secondaryApiStatus] = await Promise.all([
      cmsHealthCheck,
      secondaryApiCheck
    ]);
    
    const healthStatus = {
      status: cmsStatus && secondaryApiStatus ? 'healthy' : 'degraded',
      services: {
        cms: cmsStatus ? 'connected' : 'disconnected',
        secondaryApi: secondaryApiStatus ? 'connected' : 'disconnected',
      },
      timestamp: new Date().toISOString(),
    };
    
    return NextResponse.json(healthStatus);
  } catch (error) {
    return NextResponse.json(
      { 
        status: 'unhealthy', 
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
      }, 
      { status: 500 }
    );
  }
}