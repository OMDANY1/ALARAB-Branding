import React from 'react';
import { SvgLogo } from './SvgLogo';
import { brandInfo } from '../data/brandData';
import { ChevronDown, Flame } from './Icons';

export const HeroChapter = ({ lang }) => {
  return (
    <section id="chapter-01" className="min-h-screen relative flex flex-col justify-between pt-32 pb-16 px-6 md:px-16 overflow-hidden bg-[#0E0D0D]">
      
      {/* Background Subtle Ember Overlay & Architectural Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#E64648_1px,transparent_1px)] [background-size:32px_32px]"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E64648]/10 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Top Meta Details */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 z-10 border-b border-[#EFEAE4]/10 pb-8">
        <div>
          <span className="text-xs font-en tracking-[0.3em] text-[#E64648] uppercase font-bold block mb-1">
            01 / COVER & HERO
          </span>
          <span className="text-sm font-en text-[#EFEAE4]/60 uppercase tracking-widest block">
            Saudi Arabia • Premium Culinary Identity
          </span>
        </div>
        <div className="flex items-center gap-3 bg-[#1A1615] px-4 py-2 rounded-full border border-[#E64648]/30">
          <Flame className="w-4 h-4 text-[#E64648] animate-pulse" />
          <span className="text-xs font-bold text-[#EFEAE4] tracking-wider uppercase font-en">
            FIRE • KNIFE • CRAFT
          </span>
        </div>
      </div>

      {/* Center Stage: Hero Logo & Massive Typography */}
      <div className="my-auto py-12 z-10 flex flex-col items-center text-center">
        
        {/* Sacred Skewer Icon Showcase */}
        <div className="w-36 md:w-56 h-auto mb-8 transition-transform duration-700 hover:scale-105 filter drop-shadow-[0_20px_40px_rgba(230,70,72,0.2)]">
          <SvgLogo variant="arabic-red" />
        </div>

        {/* Hero Title */}
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-black text-[#EFEAE4] tracking-tight mb-6 font-ar leading-none">
          {lang === 'ar' ? brandInfo.nameAr : brandInfo.nameEn}
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-2xl md:text-3xl text-[#EFEAE4]/80 max-w-3xl font-medium mb-10 leading-relaxed font-ar">
          {lang === 'ar' ? brandInfo.taglineAr : brandInfo.taglineEn}
        </p>

        {/* Keyword Pills */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-4xl">
          {brandInfo.keywords.map((kw, i) => (
            <span 
              key={i} 
              className="px-4 py-2 rounded-full text-xs font-medium bg-[#1A1615] text-[#EFEAE4]/80 border border-[#EFEAE4]/10 hover:border-[#E64648] hover:text-[#EFEAE4] transition-all duration-300"
            >
              {lang === 'ar' ? kw.ar : kw.en}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Hero Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 z-10 pt-8 border-t border-[#EFEAE4]/10">
        <div className="text-xs text-[#EFEAE4]/50 font-en uppercase tracking-wider">
          PENTAGRAM / COLLINS LEVEL EDITORIAL PRESENTATION
        </div>
        
        {/* Scroll Cue */}
        <div className="flex items-center gap-3 text-xs text-[#E64648] font-en tracking-widest uppercase cursor-pointer" onClick={() => document.getElementById('chapter-02')?.scrollIntoView({ behavior: 'smooth' })}>
          <span>SCROLL TO EXPLORE BRAND STORY</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
