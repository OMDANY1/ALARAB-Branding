import React from 'react';
import { SvgLogo } from './SvgLogo';
import { EmberCanvas } from './EmberCanvas';
import { brandInfo } from '../data/brandData';
import { ChevronDown } from './Icons';

export const HeroChapter = ({ lang }) => {
  return (
    <section id="scene-01" className="scene-stage bg-[#0E0D0D]">
      
      {/* Ember Particle Background Engine */}
      <EmberCanvas />

      {/* Background Heat Radial Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E64648]/10 rounded-full blur-[180px] pointer-events-none"></div>

      {/* Top Scene Meta */}
      <div className="flex justify-between items-center z-10 w-full border-b border-[#EFEAE4]/10 pb-6">
        <span className="text-xs font-en tracking-[0.3em] text-[#E64648] uppercase font-bold">
          SCENE 01 / THE AWAKENING
        </span>
        <span className="text-xs font-en text-[#EFEAE4]/40 uppercase tracking-widest">
          KINGDOM OF SAUDI ARABIA
        </span>
      </div>

      {/* Center Stage Monumental Composition */}
      <div className="my-auto z-10 flex flex-col items-center text-center max-w-6xl mx-auto py-12">
        
        {/* Sacred Skewer Icon */}
        <div className="w-36 sm:w-48 md:w-60 h-auto mb-12 filter drop-shadow-[0_30px_60px_rgba(230,70,72,0.35)] transition-transform duration-1000 hover:scale-105">
          <SvgLogo variant="arabic-red" />
        </div>

        {/* Oversized Display Title */}
        <h1 className="text-display-giant text-[#EFEAE4] font-ar mb-6 tracking-tight drop-shadow-2xl">
          {lang === 'ar' ? brandInfo.nameAr : brandInfo.nameEn}
        </h1>

        {/* Tagline */}
        <p className="text-editorial-quote text-[#EFEAE4]/80 font-ar max-w-4xl font-medium leading-tight">
          {lang === 'ar' ? brandInfo.taglineAr : brandInfo.taglineEn}
        </p>

      </div>

      {/* Bottom Scene Footer */}
      <div className="flex justify-between items-center z-10 w-full border-t border-[#EFEAE4]/10 pt-6">
        <span className="text-xs font-en text-[#EFEAE4]/40 tracking-widest uppercase">
          FLAGSHIP BRAND EXPERIENCE
        </span>

        <div 
          className="flex items-center gap-3 text-xs font-en text-[#E64648] tracking-widest uppercase cursor-pointer hover:text-[#EFEAE4] transition-colors"
          onClick={() => document.getElementById('scene-02')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span>SCROLL TO ENTER MANIFESTO</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>

    </section>
  );
};
