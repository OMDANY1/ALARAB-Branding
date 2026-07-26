import React, { useState } from 'react';
import { SvgLogo } from './SvgLogo';
import { EmberCanvas } from './EmberCanvas';
import { brandInfo } from '../data/brandData';
import { ChevronDown, Flame, Sparkles } from './Icons';

export const HeroChapter = ({ lang }) => {
  const [hoveredKeyword, setHoveredKeyword] = useState(null);

  return (
    <section id="chapter-01" className="min-h-screen relative flex flex-col justify-between pt-32 pb-16 px-6 md:px-16 overflow-hidden bg-[#0E0D0D]">
      
      {/* HTML5 Canvas Ember & Smoke Particle Engine */}
      <EmberCanvas />

      {/* Radial Background Heat Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E64648]/12 rounded-full blur-[160px] pointer-events-none"></div>

      {/* Top Meta Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 z-10 border-b border-[#EFEAE4]/10 pb-8">
        <div>
          <span className="text-xs font-en tracking-[0.3em] text-[#E64648] uppercase font-bold block mb-1">
            CHAPTER 01 • THE OPENING
          </span>
          <span className="text-sm font-en text-[#EFEAE4]/60 uppercase tracking-widest block">
            Kingdom of Saudi Arabia • Culinary Identity
          </span>
        </div>

        <div className="flex items-center gap-3 bg-[#1A1615] px-4 py-2 rounded-full border border-[#E64648]/30 shadow-lg shadow-[#E64648]/10">
          <Flame className="w-4 h-4 text-[#E64648] animate-pulse" />
          <span className="text-xs font-bold text-[#EFEAE4] tracking-wider uppercase font-en">
            FIRE • KNIFE • CRAFT
          </span>
        </div>
      </div>

      {/* Center Hero Stage */}
      <div className="my-auto py-12 z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
        
        {/* Sacred Skewer Icon Showcase with Pulsing Ember Glow */}
        <div className="w-40 sm:w-52 md:w-64 h-auto mb-10 relative cursor-pointer transition-transform duration-700 hover:scale-105 group">
          <div className="absolute inset-0 bg-[#E64648]/20 rounded-full blur-2xl group-hover:bg-[#E64648]/40 transition-all duration-700"></div>
          <div className="relative z-10 filter drop-shadow-[0_25px_50px_rgba(230,70,72,0.35)]">
            <SvgLogo variant="arabic-red" />
          </div>
        </div>

        {/* Hero Title */}
        <h1 className="text-6xl sm:text-8xl md:text-[10rem] font-black text-[#EFEAE4] tracking-tight mb-6 font-ar leading-none drop-shadow-2xl">
          {lang === 'ar' ? brandInfo.nameAr : brandInfo.nameEn}
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl md:text-3xl text-[#EFEAE4]/90 max-w-3xl font-medium mb-12 leading-relaxed font-ar">
          {lang === 'ar' ? brandInfo.taglineAr : brandInfo.taglineEn}
        </p>

        {/* Interactive Keyword Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 md:gap-3 max-w-4xl">
          {brandInfo.keywords.map((kw, i) => (
            <button 
              key={i} 
              onMouseEnter={() => setHoveredKeyword(i)}
              onMouseLeave={() => setHoveredKeyword(null)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 border ${hoveredKeyword === i ? 'bg-[#E64648] border-[#E64648] text-[#EFEAE4] scale-105 shadow-lg shadow-[#E64648]/30' : 'bg-[#1A1615] text-[#EFEAE4]/80 border-[#EFEAE4]/10'}`}
            >
              {lang === 'ar' ? kw.ar : kw.en}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Footer Cue */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 z-10 pt-8 border-t border-[#EFEAE4]/10">
        <div className="text-xs text-[#EFEAE4]/50 font-en uppercase tracking-wider">
          Pentagram / Collins Caliber Brand Identity Website
        </div>
        
        {/* Scroll Cue */}
        <div 
          className="flex items-center gap-3 text-xs text-[#E64648] font-en tracking-widest uppercase cursor-pointer hover:text-[#EFEAE4] transition-colors" 
          onClick={() => document.getElementById('chapter-02')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span>SCROLL TO EXPLORE BRAND STORY</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
