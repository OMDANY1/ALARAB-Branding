import React from 'react';

export const PhotographyChapter = ({ lang }) => {
  return (
    <section id="scene-07" className="scene-stage p-0 bg-[#0E0D0D]">
      <div className="w-full h-full min-h-screen relative flex flex-col justify-between p-8 md:p-16 overflow-hidden">
        
        {/* Full-Bleed High-Contrast Image Background */}
        <img 
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1800&q=90" 
          alt="Food is the Hero" 
          className="absolute inset-0 w-full h-full object-cover filter brightness-75 contrast-125 saturate-110"
        />
        
        {/* Dark Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0D] via-transparent to-[#0E0D0D]/80 pointer-events-none"></div>

        {/* Top Meta */}
        <div className="flex justify-between items-center z-10 w-full border-b border-white/10 pb-6">
          <span className="text-xs font-en tracking-[0.3em] text-[#E64648] uppercase font-bold">
            SCENE 07 / PHOTOGRAPHY MONOGRAPH
          </span>
          <span className="text-xs font-en text-[#EFEAE4]/70 uppercase tracking-widest">
            FOOD IS ALWAYS THE HERO
          </span>
        </div>

        {/* Center Display Statement */}
        <div className="my-auto z-10 max-w-4xl">
          <h2 className="text-title-huge text-[#EFEAE4] font-ar leading-none mb-6 drop-shadow-2xl">
            {lang === 'ar' ? 'الطعام هو البطل الحقيقي. النار والدخان وقوام اللحم.' : 'Food is the hero. Fire, charcoal smoke & raw knife textures.'}
          </h2>
        </div>

        {/* Bottom Specs */}
        <div className="flex justify-between items-center z-10 w-full border-t border-white/10 pt-6 text-xs font-en text-[#EFEAE4]/70 uppercase tracking-widest">
          <span>MACRO TEXTURES • DRAMATIC AMBER KEY LIGHT</span>
          <span>NO ARTIFICIAL PROPS</span>
        </div>

      </div>
    </section>
  );
};
