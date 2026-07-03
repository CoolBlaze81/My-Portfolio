import { useEffect, useRef, useState } from 'react';
import type { ReactNode, CSSProperties } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * Wraps its children in a container that "magnetically" follows the cursor
 * once the pointer comes within `padding` pixels of the element's edges.
 * The translation is divided by `strength`, so higher strength = subtler pull.
 */
export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
  style,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleWindowMouseMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;

      const { left, top, width, height } = el.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;

      const withinX = Math.abs(distX) < width / 2 + padding;
      const withinY = Math.abs(distY) < height / 2 + padding;

      if (withinX && withinY) {
        setIsActive(true);
        setTranslate({ x: distX / strength, y: distY / strength });
      } else {
        setIsActive(false);
        setTranslate({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleWindowMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleWindowMouseMove);
  }, [padding, strength]);

  return (
    <div ref={ref} className={className} style={style}>
      <div
        style={{
          transform: `translate3d(${translate.x}px, ${translate.y}px, 0)`,
          transition: isActive ? activeTransition : inactiveTransition,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  );
}
