import React from 'react';
import { SvgLogo } from './SvgLogo';

export const LogoSystemChapter = ({ lang }) => {
  return (
    <section id="scene-03" className="scene-stage bg-[#E64648] text-[#EFEAE4]">
      
      {/* Top Scene Meta */}
      <div className="flex justify-between items-center z-10 w-full border-b border-[#EFEAE4]/20 pb-6">
        <span className="text-xs font-en tracking-[0.3em] text-[#EFEAE4] uppercase font-bold">
          SCENE 03 / THE SACRED MARK
        </span>
        <span className="text-xs font-en text-[#EFEAE4]/70 uppercase tracking-widest">
          PRIMARY BRAND SIGNATURE
        </span>
      </div>

      {/* Center Stage Massive Sacred Logo */}
      <div className="my-auto z-10 flex flex-col items-center text-center max-w-5xl mx-auto py-12">
        
        {/* Massive Vector Logo Stage */}
        <div className="w-56 sm:w-80 md:w-[30rem] h-auto mb-12 filter drop-shadow-[0_30px_60px_rgba(0,0,0,0.3)] transition-transform duration-1000 hover:scale-105">
          <SvgLogo variant="arabic-white" />
        </div>

        {/* Caption */}
        <h2 className="text-title-huge text-[#EFEAE4] font-ar leading-none">
          {lang === 'ar' ? 'الشعار مقدّس. لا يُعدّل ولا يُعاد رسمه.' : 'Sacred & Untouchable Visual Identity'}
        </h2>

      </div>

      {/* Bottom Scene Footer */}
      <div className="flex justify-between items-center z-10 w-full border-t border-[#EFEAE4]/20 pt-6 text-xs font-en text-[#EFEAE4]/70 uppercase tracking-widest">
        <span>PRIMARY BURGUNDY (#E64648)</span>
        <span>ALWAYS PRESERVE CLEAR SPACE</span>
      </div>

    </section>
  );
};
