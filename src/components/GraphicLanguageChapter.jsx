import React from 'react';

export const GraphicLanguageChapter = ({ lang }) => {
  return (
    <section id="scene-08" className="scene-stage bg-[#141212]">
      
      {/* Top Scene Meta */}
      <div className="flex justify-between items-center z-10 w-full border-b border-[#EFEAE4]/10 pb-6">
        <span className="text-xs font-en tracking-[0.3em] text-[#E64648] uppercase font-bold">
          SCENE 08 / RHYTHM OF SPACE
        </span>
        <span className="text-xs font-en text-[#EFEAE4]/40 uppercase tracking-widest">
          12-COLUMN ARCHITECTURAL SYSTEM
        </span>
      </div>

      {/* Center Asymmetrical Monograph */}
      <div className="my-auto z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
        
        {/* Left Column: Massive Statement */}
        <div className="lg:col-span-6">
          <span className="text-xs font-en text-[#C5A059] font-bold tracking-widest uppercase block mb-4">
            PROPORTION & MARGIN HARMONY
          </span>
          <h2 className="text-title-huge text-[#EFEAE4] font-ar leading-none mb-8">
            {lang === 'ar' ? 'الاتزان الهندسي والمساحات السلبية الحرة' : 'Architectural Grid Harmony & Dramatic Negative Space'}
          </h2>
          <p className="text-editorial-sub font-ar">
            {lang === 'ar' ? 'المساحات السلبية الواسعة تمنح التصميم وقاره ورزانته.' : 'Generous negative space imbues every layout with calm, unshakeable authority.'}
          </p>
        </div>

        {/* Right Column: Full-Bleed High-Contrast Image Visual */}
        <div className="lg:col-span-6 h-[60vh] rounded-2xl overflow-hidden relative">
          <img 
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=85" 
            alt="Negative Space Grid" 
            className="w-full h-full object-cover filter brightness-75 contrast-125 saturate-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141212] via-transparent to-transparent"></div>
        </div>

      </div>

      {/* Bottom Scene Footer */}
      <div className="flex justify-between items-center z-10 w-full border-t border-[#EFEAE4]/10 pt-6 text-xs font-en text-[#EFEAE4]/40 uppercase tracking-widest">
        <span>ASYNCHRONOUS EDITORIAL ALIGNMENT</span>
        <span>SAUDI CULINARY MONOGRAPH</span>
      </div>

    </section>
  );
};
