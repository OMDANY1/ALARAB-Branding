import React from 'react';
import { SvgLogo } from './SvgLogo';
import { EmberCanvas } from './EmberCanvas';
import { brandInfo } from '../data/brandData';
import { ArrowUp } from './Icons';

export const ClosingChapter = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="scene-13" className="scene-stage bg-[#0E0D0D] border-t border-[#E64648]/40 relative overflow-hidden">
      
      {/* Ember Engine */}
      <EmberCanvas />

      {/* Radial Heat Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E64648]/15 rounded-full blur-[200px] pointer-events-none"></div>

      {/* Top Scene Meta */}
      <div className="flex justify-between items-center z-10 w-full border-b border-[#EFEAE4]/10 pb-6">
        <span className="text-xs font-en tracking-[0.3em] text-[#E64648] uppercase font-bold">
          SCENE 13 / THE FINALE
        </span>
        <span className="text-xs font-en text-[#EFEAE4]/40 uppercase tracking-widest">
          AL ARAB BRAND IDENTITY
        </span>
      </div>

      {/* Center Finale Stage */}
      <div className="my-auto z-10 flex flex-col items-center text-center max-w-5xl mx-auto py-12">
        
        {/* Sacred Skewer Icon */}
        <div className="w-40 sm:w-56 h-auto mb-10 cursor-pointer transition-transform duration-1000 hover:scale-105" onClick={scrollToTop}>
          <div className="filter drop-shadow-[0_30px_60px_rgba(230,70,72,0.4)]">
            <SvgLogo variant="arabic-red" />
          </div>
        </div>

        <h2 className="text-display-giant text-[#EFEAE4] font-ar mb-6 leading-none">
          {lang === 'ar' ? 'هيبة المذاق.' : 'CULINARY AUTHORITY'}
        </h2>

        <p className="text-editorial-quote text-[#EFEAE4]/80 max-w-3xl font-ar mb-12 font-medium">
          {lang === 'ar' ? 'أصالة الحرفة. هيبة المذاق. علامة صُممت لتعيش خالداً.' : 'Saudi Culinary Heritage. Built to stand unchanged.'}
        </p>

        {/* Reset Button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-3 bg-[#E64648] text-[#EFEAE4] hover:bg-[#D03537] text-sm font-en tracking-widest uppercase px-8 py-4 rounded-full shadow-2xl transition-all duration-300"
        >
          <ArrowUp className="w-4 h-4" />
          <span>RETURN TO COVER STAGE</span>
        </button>

      </div>

      {/* Bottom Footer */}
      <div className="flex justify-between items-center z-10 w-full border-t border-[#EFEAE4]/10 pt-6 text-xs text-[#EFEAE4]/40 font-en uppercase tracking-widest">
        <span>© 2026 AL ARAB (شاورما العراب)</span>
        <span>FLAGSHIP DIGITAL BRAND EXPERIENCE</span>
      </div>

    </section>
  );
};
