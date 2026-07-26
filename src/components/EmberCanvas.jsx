import React, { useEffect, useRef } from 'react';

/**
 * HTML5 Canvas Particle Engine
 * Renders slow, organic rising charcoal embers and subtle smoke heat.
 */
export const EmberCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    const particleCount = 45;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 0.5,
        speedY: Math.random() * 0.4 + 0.15,
        speedX: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.7 + 0.2,
        maxOpacity: Math.random() * 0.8 + 0.2,
        fadeSpeed: Math.random() * 0.005 + 0.002,
        growing: Math.random() > 0.5,
        color: Math.random() > 0.3 ? '#E64648' : '#C5A059' // Burgundy embers + Soft Brass sparks
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Move particle upward
        p.y -= p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.01) * 0.15;

        // Opacity pulsing
        if (p.growing) {
          p.opacity += p.fadeSpeed;
          if (p.opacity >= p.maxOpacity) p.growing = false;
        } else {
          p.opacity -= p.fadeSpeed;
          if (p.opacity <= 0.1) p.growing = true;
        }

        // Reset if off top or screen edges
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
          p.opacity = 0.1;
        }

        // Draw glowing ember dot
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.shadowBlur = p.size * 4;
        ctx.shadowColor = p.color;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};
