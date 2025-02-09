"use client";

import { useRef, useEffect } from "react";
import { useTheme } from "next-themes";

export const Particles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Array<{
      x: number;
      y: number;
      dx: number;
      dy: number;
      size: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const numberOfParticles = Math.floor(
        (canvas.width * canvas.height) / 15000
      );

      for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * 0.5,
          dy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 1.5 + 0.5,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle =
        theme === "dark"
          ? "rgba(255, 255, 255, 0.5)"
          : "rgba(255, 255, 255, 0.7)";
      ctx.beginPath();

      particles.forEach((particle) => {
        ctx.moveTo(particle.x, particle.y);
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;
      });

      ctx.fill();
    };

    let animationFrameId: number;

    const animate = () => {
      drawParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" />
  );
};
