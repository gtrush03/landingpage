import { useEffect, useRef } from 'react';

export default function Grain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let frame = 0;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const noise = () => {
      const w = canvas.width;
      const h = canvas.height;
      const idata = ctx.createImageData(w, h);
      const buffer32 = new Uint32Array(idata.data.buffer);
      const len = buffer32.length;

      // Create dynamic noise pattern
      for (let i = 0; i < len; i++) {
        const x = i % w;
        const y = Math.floor(i / w);
        
        // Create varied noise patterns
        const noise1 = Math.random();
        const noise2 = Math.sin(x * 0.01 + time) * Math.cos(y * 0.01 + time);
        const noise3 = Math.sin(time * 0.5) * 0.2;
        
        // Combine different noise patterns
        const finalNoise = (noise1 + Math.abs(noise2) + noise3) / 2.2;
        
        // Add vignette effect
        const centerX = w / 2;
        const centerY = h / 2;
        const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
        const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
        const vignette = 1 - (distance / maxDistance);
        
        // Combine noise with vignette
        if (finalNoise * vignette < 0.5) {
          buffer32[i] = 0xff000000;
        }
      }

      ctx.putImageData(idata, 0, 0);
    };

    const loop = () => {
      time += 0.01;
      frame = (frame + 1) % 2;
      if (frame === 0) {
        noise();
      }
      animationFrameId = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener('resize', resize);
    loop();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.025]"
        style={{ mixBlendMode: 'overlay' }}
      />
      <div className="pointer-events-none fixed inset-0 z-[49] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)]" />
      <div className="pointer-events-none fixed inset-0 z-[48] opacity-30 mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyIiBoZWlnaHQ9IjIiPjxmaWx0ZXIgaWQ9ImEiIHg9IjAiIHk9IjAiPjxmZVR1cmJ1bGVuY2UgYmFzZUZyZXF1ZW5jeT0iLjIiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')]" />
      </div>
    </>
  );
}