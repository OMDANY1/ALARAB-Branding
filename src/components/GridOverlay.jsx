import React from 'react';

/**
 * Global 12-Column Grid Debugger Overlay
 * Toggled from top bar for inspecting layout alignment against Pentagram standards.
 */
export const GridOverlay = ({ visible }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40 max-w-[1720px] mx-auto px-6 md:px-12">
      <div className="grid grid-cols-12 gap-[var(--grid-gutter)] h-full w-full opacity-20">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i} 
            className="bg-[#E64648]/10 border-x border-[#E64648]/40 h-full flex flex-col justify-between items-center py-4 text-[10px] font-en font-bold text-[#E64648]"
          >
            <span>COL {i + 1}</span>
            <span>COL {i + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
