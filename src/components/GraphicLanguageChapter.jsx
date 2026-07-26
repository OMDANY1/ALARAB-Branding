import React from 'react';

export const GraphicLanguageChapter = ({ lang }) => {
  return (
    <section id="scene-08" className="scene-stage-editorial bg-[#0E0D0D] overflow-hidden relative">
      
      {/* Background Local Monograph Image with Blend Overlay */}
      <div className="absolute inset-0 opacity-40 mix-blend-luminosity pointer-events-none">
        <img 
          src="/images/all backing.png" 
          alt="Architectural Alignment" 
          className="w-full h-full object-cover filter contrast-150 brightness-50"
        />
      </div>

      {/* Hairline Architectural Blueprint Lines Across Viewport */}
      <div className="absolute inset-0 pointer-events-none opacity-20 flex justify-between px-12 md:px-24">
        <div className="w-[1px] h-full bg-[#EFEAE4]"></div>
        <div className="w-[1px] h-full bg-[#EFEAE4]"></div>
        <div className="w-[1px] h-full bg-[#EFEAE4]"></div>
        <div className="w-[1px] h-full bg-[#EFEAE4]"></div>
      </div>

      {/* Top Scene Meta */}
      <div className="flex justify-between items-center z-10 w-full hairline-border-b pb-6 relative">
        <span className="text-meta-label text-[#E64648]">
          SCENE 08 / ARCHITECTURAL RHYTHM
        </span>
        <span className="text-meta-label text-[#EFEAE4]/40">
          12-COLUMN BLUEPRINT
        </span>
      </div>

      {/* Center Monolith Typography */}
      <div className="my-auto z-10 w-full max-w-6xl mx-auto text-center py-12 relative">
        
        <span className="text-meta-label text-[#C5A059] block mb-6">
          THE ART OF NEGATIVE SPACE
        </span>

        <h2 className="text-display-monolith text-[#EFEAE4] font-ar leading-none mb-8 tracking-tighter">
          {lang === 'ar' ? 'الاتزان والرتم' : 'PROPORTION & RHYTHM'}
        </h2>

        <p className="text-editorial-quote text-[#EFEAE4]/80 font-ar max-w-4xl mx-auto font-medium leading-tight">
          {lang === 'ar' ? 'المساحة السلبية ليست فراغاً، بل هي الصوت الهادئ الذي يمنح الهوية هيبتها.' : 'Negative space is not empty space; it is the calm voice of authority.'}
        </p>

      </div>

      {/* Bottom Scene Footer */}
      <div className="flex justify-between items-center z-10 w-full hairline-border-t pt-6 text-meta-label text-[#EFEAE4]/40 relative">
        <span>ASYNCHRONOUS EDITORIAL RHYTHM</span>
        <span>SAUDI CULINARY BRAND IDENTITY</span>
      </div>

    </section>
  );
};
