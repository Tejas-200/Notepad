import React, { useRef, useEffect, useState } from 'react';

const LineCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [linePosition, setLinePosition] = useState(160); // Initial vertical position

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const context = canvas.getContext('2d');
      if (context) {
        context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        context.beginPath();
        context.moveTo(0, linePosition);  // Starting point of the line
        context.lineTo(canvas.width, linePosition);  // Ending point of the line
        context.strokeStyle = 'black';  // Line color
        context.lineWidth = 2;  // Line width
        context.stroke();
      }
    }
  }, [linePosition]);

  // Resize event listener
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const context = canvas.getContext('2d');
        if (context) {
          context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
          context.beginPath();
          context.moveTo(0, linePosition);  // Starting point of the line
          context.lineTo(canvas.width, linePosition);  // Ending point of the line
          context.strokeStyle = 'black';  // Line color
          context.lineWidth = 2;  // Line width
          context.stroke();
        }
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [linePosition]);

  return (
    <canvas ref={canvasRef} style={{ width: '100%', height: '100vh', outline: 'none', position: 'absolute', top: 0, left: 0 }} />
  );
};

export default LineCanvas;
