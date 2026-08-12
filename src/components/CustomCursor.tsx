import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop pointer devices
    if (window.innerWidth < 768 || 'ontouchstart' in window) return;

    setIsVisible(true);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animId: number;
    let isHovered = false;
    let isMouseDown = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    const onMouseDown = () => {
      isMouseDown = true;
    };

    const onMouseUp = () => {
      isMouseDown = false;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('a, button, [role="button"], input, textarea, select, .cursor-pointer, .glass-panel')
      ) {
        isHovered = true;
      } else {
        isHovered = false;
      }
    };

    // Smooth lerp rendering loop
    const render = () => {
      // Smooth interpolation coefficient
      const lerpSpeed = isHovered ? 0.22 : 0.14;
      ringX += (mouseX - ringX) * lerpSpeed;
      ringY += (mouseY - ringY) * lerpSpeed;

      if (ringRef.current) {
        const scale = isMouseDown ? 0.75 : isHovered ? 1.6 : 1;
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${scale})`;
        ringRef.current.style.borderColor = isHovered ? 'rgba(6, 182, 212, 0.9)' : 'rgba(139, 92, 246, 0.6)';
        ringRef.current.style.backgroundColor = isHovered ? 'rgba(6, 182, 212, 0.12)' : 'rgba(139, 92, 246, 0.03)';
      }

      animId = requestAnimationFrame(render);
    };

    render();

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision Core Glow Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-3 h-3 bg-cyan-400 rounded-full pointer-events-none z-[99999] transition-opacity duration-300"
        style={{
          willChange: 'transform',
          boxShadow: '0 0 12px #06B6D4, 0 0 24px #06B6D4, 0 0 36px #8B5CF6',
        }}
      />

      {/* Outer Magnetic Glowing Halo Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-11 h-11 border-[1.5px] rounded-full pointer-events-none z-[99998] transition-colors duration-200 ease-out"
        style={{
          willChange: 'transform',
          boxShadow: '0 0 20px rgba(139, 92, 246, 0.25)',
        }}
      />
    </>
  );
};

export default CustomCursor;
