import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  baseRadius: number;
}

export const NeuralCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates & smooth trailing orb
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 220,
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Neon Cyber Palette: Electric Cyan, Cyber Violet, Neon Emerald, Magenta
    const colors = ['#06b6d4', '#8b5cf6', '#3b82f6', '#ec4899', '#10b981'];
    let particles: Particle[] = [];

    const initParticles = () => {
      particles = [];
      const count = Math.min(Math.floor((width * height) / 11000), 100);

      for (let i = 0; i < count; i++) {
        const rad = Math.random() * 2 + 1;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random() * 2 + 0.5, // 3D depth layer
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          radius: rad,
          baseRadius: rad,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    initParticles();

    // 60 FPS Cinematic Render Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation (spring physics for ambient light)
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // 1. Draw Cinematic Holographic Ambient Light Orb under cursor
      const gradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        mouse.radius * 1.5
      );
      gradient.addColorStop(0, 'rgba(139, 92, 246, 0.12)');
      gradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.06)');
      gradient.addColorStop(1, 'rgba(8, 9, 13, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // 2. Update and draw 3D floating particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx * p.z;
        p.y += p.vy * p.z;

        // Bounce on boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Interactive gravity with mouse
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const dirX = (dx / dist) * force * 4 * p.z;
          const dirY = (dy / dist) * force * 4 * p.z;
          p.x -= dirX;
          p.y -= dirY;
        }

        // Draw glowing particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * p.z, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 12 * p.z;
        ctx.shadowColor = p.color;
        ctx.fill();

        // 3. Draw Cyber Neural Connection Lines with 3D Depth Opacity
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);

          if (dist2 < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const opacity = (1 - dist2 / 130) * 0.22 * Math.min(p.z, p2.z);
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
            ctx.lineWidth = 0.8 * p.z;
            ctx.shadowBlur = 0;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.85 }}
    />
  );
};