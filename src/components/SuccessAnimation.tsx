import { useEffect, useRef } from 'react';

export default function SuccessAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 200;
    canvas.height = 200;

    let frame = 0;
    const primaryColor = '#928466';

    function drawCheckmark(progress: number) {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const size = 40;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Set up styles
      ctx.strokeStyle = primaryColor;
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      // Add subtle glow effect
      ctx.shadowColor = primaryColor;
      ctx.shadowBlur = 15;

      ctx.beginPath();
      
      // First line of checkmark
      const firstLineProgress = Math.min(1, progress * 2);
      if (firstLineProgress > 0) {
        ctx.moveTo(centerX - size, centerY);
        ctx.lineTo(
          centerX - size + (size * 0.4 * firstLineProgress),
          centerY + (size * 0.4 * firstLineProgress)
        );
      }

      // Second line of checkmark
      const secondLineProgress = Math.max(0, Math.min(1, progress * 2 - 1));
      if (secondLineProgress > 0) {
        ctx.moveTo(centerX - size + (size * 0.4), centerY + (size * 0.4));
        ctx.lineTo(
          centerX - size + (size * 0.4) + (size * 1.2 * secondLineProgress),
          centerY + (size * 0.4) - (size * 0.8 * secondLineProgress)
        );
      }

      ctx.stroke();
    }

    function animate() {
      const progress = Math.min(1, frame / 30);
      drawCheckmark(progress);

      if (frame < 30) {
        frame++;
        requestAnimationFrame(animate);
      }
    }

    animate();

    return () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-[200px] h-[200px] mx-auto"
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  );
}