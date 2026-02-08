import React, { useRef, useEffect } from 'react';

// Abstract electrotechnical animation — arcs, sparks, circuit nodes
export default function HeroBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let w, h;

    const resize = () => {
      w = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    const cW = () => canvas.offsetWidth;
    const cH = () => canvas.offsetHeight;

    // Nodes — fixed circuit junction points
    const nodeCount = 40;
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * cW(),
      y: Math.random() * cH(),
      r: 2 + Math.random() * 3,
      pulse: Math.random() * Math.PI * 2,
      speed: 0.01 + Math.random() * 0.02,
    }));

    // Arcs — electric arcs between nearby nodes
    const getArcs = () => {
      const arcs = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 220) {
            arcs.push({ a: nodes[i], b: nodes[j], dist });
          }
        }
      }
      return arcs;
    };
    const arcs = getArcs();

    // Sparks — fast particles
    const sparks = Array.from({ length: 60 }, () => ({
      x: Math.random() * cW(),
      y: Math.random() * cH(),
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 1.2,
      life: Math.random(),
      maxLife: 0.5 + Math.random() * 1.5,
      size: 1 + Math.random() * 2,
    }));

    // Pulse waves — expanding circles
    const pulseWaves = [];
    let lastPulse = 0;

    let time = 0;

    const draw = () => {
      time += 0.016;
      const W = cW();
      const H = cH();
      ctx.clearRect(0, 0, W, H);

      // Trigger pulse wave every ~2.5s from random node
      if (time - lastPulse > 2.5) {
        const n = nodes[Math.floor(Math.random() * nodes.length)];
        pulseWaves.push({ x: n.x, y: n.y, r: 0, maxR: 120 + Math.random() * 100, alpha: 0.3 });
        lastPulse = time;
      }

      // Draw pulse waves
      for (let i = pulseWaves.length - 1; i >= 0; i--) {
        const pw = pulseWaves[i];
        pw.r += 1.2;
        pw.alpha *= 0.985;
        if (pw.alpha < 0.01) { pulseWaves.splice(i, 1); continue; }
        ctx.beginPath();
        ctx.arc(pw.x, pw.y, pw.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(6, 182, 212, ${pw.alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw arcs — electric connections with jitter
      arcs.forEach(arc => {
        const brightness = 0.06 + 0.06 * Math.sin(time * 2 + arc.dist);
        ctx.beginPath();
        // Slightly jagged line for electric feel
        const steps = 6;
        ctx.moveTo(arc.a.x, arc.a.y);
        for (let s = 1; s < steps; s++) {
          const t = s / steps;
          const mx = arc.a.x + (arc.b.x - arc.a.x) * t + (Math.random() - 0.5) * 6;
          const my = arc.a.y + (arc.b.y - arc.a.y) * t + (Math.random() - 0.5) * 6;
          ctx.lineTo(mx, my);
        }
        ctx.lineTo(arc.b.x, arc.b.y);
        ctx.strokeStyle = `rgba(94, 234, 212, ${brightness})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      });

      // Draw nodes
      nodes.forEach(n => {
        n.pulse += n.speed;
        const glow = 0.3 + 0.3 * Math.sin(n.pulse);
        // Outer glow
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 5);
        grad.addColorStop(0, `rgba(6, 182, 212, ${glow * 0.4})`);
        grad.addColorStop(1, 'rgba(6, 182, 212, 0)');
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 5, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
        // Core
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 240, 255, ${glow})`;
        ctx.fill();
      });

      // Draw & update sparks
      sparks.forEach(s => {
        s.x += s.vx;
        s.y += s.vy;
        s.life += 0.016;
        if (s.life > s.maxLife) {
          s.x = Math.random() * W;
          s.y = Math.random() * H;
          s.life = 0;
          s.vx = (Math.random() - 0.5) * 1.2;
          s.vy = (Math.random() - 0.5) * 1.2;
        }
        const alpha = Math.max(0, 1 - s.life / s.maxLife) * 0.5;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(249, 115, 22, ${alpha})`;
        ctx.fill();
      });

      // Occasional bright flash-arc
      if (Math.random() < 0.008) {
        const n1 = nodes[Math.floor(Math.random() * nodes.length)];
        const n2 = nodes[Math.floor(Math.random() * nodes.length)];
        if (n1 !== n2) {
          ctx.beginPath();
          const segs = 10;
          ctx.moveTo(n1.x, n1.y);
          for (let s = 1; s < segs; s++) {
            const t = s / segs;
            ctx.lineTo(
              n1.x + (n2.x - n1.x) * t + (Math.random() - 0.5) * 20,
              n1.y + (n2.y - n1.y) * t + (Math.random() - 0.5) * 20
            );
          }
          ctx.lineTo(n2.x, n2.y);
          ctx.strokeStyle = 'rgba(200, 168, 80, 0.5)';
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }

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
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.7 }}
    />
  );
}