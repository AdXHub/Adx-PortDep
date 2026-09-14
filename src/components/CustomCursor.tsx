import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'x' | 'play' | 'pointer'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    // Only enable on desktop/mouse devices
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsFinePointer(mediaQuery.matches);

    const handlePointerChange = (e: MediaQueryListEvent) => {
      setIsFinePointer(e.matches);
    };
    mediaQuery.addEventListener('change', handlePointerChange);

    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Detect hover target
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttr = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      if (cursorAttr === 'x') {
        setCursorType('x');
      } else if (cursorAttr === 'play') {
        setCursorType('play');
      } else if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]') ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A'
      ) {
        setCursorType('pointer');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      mediaQuery.removeEventListener('change', handlePointerChange);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isFinePointer || !isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
      aria-hidden="true"
    >
      {/* Outer Shape */}
      {cursorType === 'default' && (
        <div className="-translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-[#7C3AED]/70 bg-[#7C3AED]/10 backdrop-blur-[1px] transition-all duration-200 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
        </div>
      )}

      {cursorType === 'pointer' && (
        <div className="-translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-[#22D3EE] bg-[#22D3EE]/15 shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-150 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-[#FACC15]" />
        </div>
      )}

      {cursorType === 'x' && (
        <div className="-translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#7C3AED] border-2 border-[#22D3EE] shadow-[0_0_20px_rgba(124,58,237,0.8)] flex items-center justify-center text-white font-display font-black text-sm tracking-wider animate-pulse">
          ✕
        </div>
      )}

      {cursorType === 'play' && (
        <div className="-translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-tr from-[#7C3AED] to-[#22D3EE] border border-white shadow-[0_0_25px_rgba(34,211,238,0.6)] flex items-center justify-center text-black font-impact text-xs tracking-wider">
          PLAY ▶
        </div>
      )}
    </div>
  );
};
