import React, { useState, useRef, useEffect } from 'react';

interface TooltipProps {
  content: React.ReactNode;
  side?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  side = 'top',
  className = '',
  children,
  delay = 120,
}) => {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    timerRef.current = setTimeout(() => setVisible(true), delay);
  };
  const hide = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setVisible(false);
  };

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  const positionClasses: Record<NonNullable<TooltipProps['side']>, string> = {
    top:    'bottom-full mb-2.5 left-1/2 -translate-x-1/2',
    bottom: 'top-full mt-2.5 left-1/2 -translate-x-1/2',
    left:   'right-full mr-2.5 top-1/2 -translate-y-1/2',
    right:  'left-full ml-2.5 top-1/2 -translate-y-1/2',
  };

  const arrowClasses: Record<NonNullable<TooltipProps['side']>, string> = {
    top:    'top-full left-1/2 -translate-x-1/2 border-t-slate-900',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 border-b-slate-900',
    left:   'left-full top-1/2 -translate-y-1/2 border-l-slate-900',
    right:  'right-full top-1/2 -translate-y-1/2 border-r-slate-900',
  };

  return (
    <div
      className={`relative inline-flex ${className}`}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}

      {visible && (
        <div
          className={`absolute ${positionClasses[side]} z-[500] pointer-events-none`}
          role="tooltip"
        >
          <div className="bg-[#111827] text-white rounded-xl px-3 py-2 text-[12px] font-medium shadow-xl whitespace-nowrap animate-fade-in">
            {content}
          </div>
          <div
            className={`absolute border-4 border-transparent ${arrowClasses[side]}`}
          />
        </div>
      )}
    </div>
  );
};
