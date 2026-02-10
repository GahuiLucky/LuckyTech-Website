import React, { useEffect, useRef } from 'react';

export default function EngineeringBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let w, h;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Floating particles — blue tinted, very subtle
    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.12 + 0.03,
    }));

    // Slow drifting lines
    const lines = Array.from({ length: 6 }, () => ({
      x1: Math.random() * w,
      y1: Math.random() * h,
      angle: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.0003 + 0.0001,
      length: Math.random() * 300 + 200,
      alpha: Math.random() * 0.04 + 0.01,
    }));

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      t += 0.005;

      // Draw connection lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            const a = (1 - dist / 200) * 0.04;
            ctx.strokeStyle = `rgba(59,91,219,${a})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59,91,219,${p.alpha})`;
        ctx.fill();
      });

      // Draw drifting lines
      lines.forEach(l => {
        l.angle += l.speed;
        const x2 = l.x1 + Math.cos(l.angle + t) * l.length;
        const y2 = l.y1 + Math.sin(l.angle + t) * l.length;
        ctx.strokeStyle = `rgba(59,91,219,${l.alpha})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(l.x1 + Math.sin(t * 0.3) * 20, l.y1 + Math.cos(t * 0.2) * 20);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ position: 'absolute', inset: 0 }}
    />
  );
}