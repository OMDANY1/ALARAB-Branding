import React from 'react';

export const ColorSystemChapter = ({ lang }) => {
  return (
    <section id="scene-06" className="scene-stage p-0 bg-[#0E0D0D]">
      
      {/* 3 Vertical Full-Height Screen Spanning Color Columns */}
      <div className="w-full h-full min-h-screen grid grid-cols-1 md:grid-cols-3 relative">
        
        {/* Column 1: Primary Burgundy */}
        <div className="bg-[#E64648] text-[#EFEAE4] p-8 md:p-16 flex flex-col justify-between h-[33vh] md:h-full border-b md:border-b-0 md:border-r border-black/20 group hover:flex-grow transition-all duration-700">
          <span className="text-xs font-en font-bold tracking-[0.3em] uppercase">01 / PRIMARY BURGUNDY</span>
          <div>
            <h3 className="text-4xl md:text-6xl font-black font-en mb-2">#E64648</h3>
            <p className="text-xs font-en opacity-80 uppercase tracking-widest">PANTONE 1795 C • FIRE & ACCENTS</p>
          </div>
        </div>

        {/* Column 2: Warm Cream */}
        <div className="bg-[#EFEAE4] text-[#0E0D0D] p-8 md:p-16 flex flex-col justify-between h-[33vh] md:h-full border-b md:border-b-0 md:border-r border-black/20 group hover:flex-grow transition-all duration-700">
          <span className="text-xs font-en font-bold tracking-[0.3em] uppercase text-[#E64648]">02 / WARM CREAM</span>
          <div>
            <h3 className="text-4xl md:text-6xl font-black font-en mb-2">#EFEAE4</h3>
            <p className="text-xs font-en opacity-80 uppercase tracking-widest text-[#1A1615]">PANTONE 7534 C • TYPOGRAPHY & LIGHT SURFACES</p>
          </div>
        </div>

        {/* Column 3: Deep Charcoal */}
        <div className="bg-[#0E0D0D] text-[#EFEAE4] p-8 md:p-16 flex flex-col justify-between h-[33vh] md:h-full group hover:flex-grow transition-all duration-700">
          <span className="text-xs font-en font-bold tracking-[0.3em] uppercase text-[#E64648]">03 / DEEP CHARCOAL</span>
          <div>
            <h3 className="text-4xl md:text-6xl font-black font-en mb-2">#0E0D0D</h3>
            <p className="text-xs font-en opacity-80 uppercase tracking-widest text-[#EFEAE4]/60">PANTONE BLACK 6 C • CINEMATIC STAGE BACKDROP</p>
          </div>
        </div>

      </div>

    </section>
  );
};
