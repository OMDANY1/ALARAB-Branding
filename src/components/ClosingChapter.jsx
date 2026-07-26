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
    <section id="chapter-13" className="viewport-stage bg-[#0E0D0D] border-t border-[#E64648]/40 relative overflow-hidden flex flex-col justify-between">
      
      {/* HTML5 Canvas Ember Engine */}
      <EmberCanvas />

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E64648]/15 rounded-full blur-[180px] pointer-events-none"></div>

      {/* Watermark Section Number */}
      <div className="watermark-number">13</div>

      {/* Header Badge */}
      <div className="flex justify-between items-center z-10 pb-6 border-b border-[#EFEAE4]/10 max-w-[1720px] mx-auto w-full px-6 md:px-12">
        <span className="text-xs font-en text-[#E64648] tracking-[0.3em] font-bold uppercase">
          CHAPTER 13 • THE FINALE
        </span>
        <span className="text-xs font-en text-[#EFEAE4]/50">
          AL ARAB BRAND Identity Presentation
        </span>
      </div>

      {/* Main Closing Hero Stage */}
      <div className="my-auto py-16 z-10 flex flex-col items-center text-center max-w-5xl mx-auto px-6">
        
        {/* Animated Skewer Symbol */}
        <div className="w-40 sm:w-56 h-auto mb-10 cursor-pointer transition-transform duration-700 hover:scale-110" onClick={scrollToTop}>
          <div className="filter drop-shadow-[0_25px_50px_rgba(230,70,72,0.4)]">
            <SvgLogo variant="arabic-red" />
          </div>
        </div>

        <h2 className="text-5xl sm:text-7xl md:text-9xl font-black text-[#EFEAE4] font-ar mb-6 leading-tight drop-shadow-2xl">
          {lang === 'ar' ? 'هيبة المذاق. أصالة الحرفة.' : 'Culinary Authority. Pure Craft.'}
        </h2>

        <p className="text-xl sm:text-2xl text-[#EFEAE4]/80 max-w-3xl font-ar mb-12 font-medium leading-relaxed">
          {lang === 'ar' ? 'شكراً لاهتمامكم بهوية شاورما العراب. الهوية الرسمية المصممة لتعيش خالداً.' : 'Thank you for discovering AL ARAB brand presentation. Timeless, confident, and unapologetic.'}
        </p>

        {/* Back To Top Button */}
        <button
          onClick={scrollToTop}
          className="btn-editorial flex items-center gap-3 bg-[#E64648] text-[#EFEAE4] border-[#E64648] hover:bg-[#D03537] text-base px-8 py-4 rounded-full shadow-2xl shadow-[#E64648]/40"
        >
          <ArrowUp className="w-5 h-5" />
          <span>{lang === 'ar' ? 'العودة إلى بداية كتاب الهوية' : 'RESET TO COVER STAGE'}</span>
        </button>
      </div>

      {/* Footer Credits */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 z-10 pt-8 border-t border-[#EFEAE4]/10 text-xs text-[#EFEAE4]/50 font-en max-w-[1720px] mx-auto w-full px-6 md:px-12">
        <span>© 2026 AL ARAB (شاورما العراب). ALL RIGHTS RESERVED.</span>
        <span>LUXURY EDITORIAL DIGITAL EXPERIENCE</span>
      </div>

    </section>
  );
};
