import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAnnotations } from '@/contexts/AnnotationContext';

interface AnnotationProps {
  title: string;
  body: string;
  entryId?: string;
  className?: string;
  side?: 'top' | 'bottom';
  children: React.ReactNode;
}

export const Annotation: React.FC<AnnotationProps> = ({
  title,
  body,
  entryId,
  className = '',
  side = 'bottom',
  children,
}) => {
  const { isOn } = useAnnotations();
  const [hovered, setHovered] = useState(false);

  if (!isOn) return <>{children}</>;

  const popoverY = side === 'bottom'
    ? 'top-full mt-2'
    : 'bottom-full mb-2';

  return (
    <div className={`relative ${className}`}>
      {children}

      {/* Highlight ring — pointer-events-none so it doesn't block interaction */}
      <span
        className="absolute inset-0 rounded-[inherit] ring-2 ring-primary-400/50 pointer-events-none"
        aria-hidden
      />

      {/* Pin */}
      <button
        className="absolute -top-2 -right-2 z-50 w-5 h-5 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center shadow-lg text-[9px] font-black leading-none transition-colors"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label={`Design annotation: ${title}`}
      >
        ⓘ
      </button>

      {/* Popover */}
      {hovered && (
        <div
          className={`absolute right-0 ${popoverY} z-[200] w-72 bg-[#111827] text-white rounded-2xl p-4 shadow-2xl pointer-events-none`}
          role="tooltip"
        >
          <p className="text-[12px] font-bold text-primary-400 uppercase tracking-widest mb-1.5">{title}</p>
          <p className="text-[13px] text-white/80 leading-relaxed">{body}</p>
          {entryId && (
            <p className="mt-2.5 text-[11px] text-primary-400 font-medium">
              See entry: {entryId} →
            </p>
          )}
        </div>
      )}
    </div>
  );
};
