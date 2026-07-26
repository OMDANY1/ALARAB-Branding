import React from 'react';

export const TypographyChapter = ({ lang }) => {
  return (
    <section id="scene-05" className="scene-stage bg-[#0E0D0D]">
      
      {/* Top Scene Meta */}
      <div className="flex justify-between items-center z-10 w-full border-b border-[#EFEAE4]/10 pb-6">
        <span className="text-xs font-en tracking-[0.3em] text-[#E64648] uppercase font-bold">
          SCENE 05 / TYPOGRAPHY AS ART
        </span>
        <span className="text-xs font-en text-[#EFEAE4]/40 uppercase tracking-widest">
          TAJAWAL & GEOMETRIC GROTESK
        </span>
      </div>

      {/* Center Full-Bleed Wall of Type */}
      <div className="my-auto z-10 w-full flex flex-col justify-center py-12 space-y-6">
        
        {/* Enormous Arabic Display Glyph Wall */}
        <div className="w-full overflow-hidden text-center">
          <span className="text-display-giant font-black text-[#EFEAE4] font-ar block tracking-tighter leading-none hover:text-[#E64648] transition-colors duration-700 cursor-default">
            شاورما العراب
          </span>
        </div>

        {/* English Grotesk Juxtaposition */}
        <div className="w-full text-center">
          <span className="text-title-huge font-extrabold text-[#C5A059] font-en block tracking-widest uppercase">
            SHAWRMA ALARAB
          </span>
        </div>

        {/* Subhead Statement */}
        <div className="max-w-3xl mx-auto text-center pt-8">
          <p className="text-editorial-sub font-ar">
            {lang === 'ar' ? 'الخطوط في هوية العراب تفرض الهيبة والوقار بدون الحاجة للزخرفة.' : 'Typography commands space with quiet authority and unyielding confidence.'}
          </p>
        </div>

      </div>

      {/* Bottom Scene Footer */}
      <div className="flex justify-between items-center z-10 w-full border-t border-[#EFEAE4]/10 pt-6 text-xs font-en text-[#EFEAE4]/40 uppercase tracking-widest">
        <span>TAJAWAL BLACK 900 • INTER TIGHT 800</span>
        <span>EDITORIAL TYPOGRAPHIC SYSTEM</span>
      </div>

    </section>
  );
};
