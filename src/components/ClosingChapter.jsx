import React from 'react';
import { SvgLogo } from './SvgLogo';
import { ArrowUp } from './Icons';

export const ClosingChapter = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="chapter-13" className="min-h-screen relative flex flex-col justify-between pt-32 pb-16 px-6 md:px-16 bg-[#0E0D0D] border-t border-[#E64648]/30 overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E64648]/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Header Badge */}
      <div className="flex justify-between items-center z-10 pb-6 border-b border-[#EFEAE4]/10">
        <span className="text-xs font-en text-[#E64648] tracking-[0.3em] font-bold uppercase">
          13 / CLOSING STATEMENT
        </span>
        <span className="text-xs font-en text-[#EFEAE4]/50">
          AL ARAB BRAND BOOK • FINALE
        </span>
      </div>

      {/* Main Closing Hero Stage */}
      <div className="my-auto py-16 z-10 flex flex-col items-center text-center">
        
        {/* Animated Skewer Symbol */}
        <div className="w-32 sm:w-48 h-auto mb-8 cursor-pointer transition-transform duration-700 hover:scale-110" onClick={scrollToTop}>
          <SvgLogo variant="arabic-red" />
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-[#EFEAE4] font-ar mb-6 leading-tight">
          {lang === 'ar' ? 'هيبة المذاق. أصالة الحرفة.' : 'Culinary Authority. Pure Craft.'}
        </h2>

        <p className="text-lg sm:text-2xl text-[#EFEAE4]/70 max-w-3xl font-ar mb-10 font-medium">
          {lang === 'ar' ? 'شكراً لاهتمامكم بهوية شاورما العراب. الهوية الرسمية المصممة لتعيش خالداً.' : 'Thank you for discovering AL ARAB brand presentation. Timeless, confident, and unapologetic.'}
        </p>

        {/* Back To Top Button */}
        <button
          onClick={scrollToTop}
          className="btn-editorial flex items-center gap-3 bg-[#E64648] text-[#EFEAE4] border-[#E64648] hover:bg-[#D03537]"
        >
          <ArrowUp className="w-4 h-4" />
          <span>{lang === 'ar' ? 'العودة إلى البداية' : 'BACK TO TOP'}</span>
        </button>
      </div>

      {/* Footer Credits */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 z-10 pt-8 border-t border-[#EFEAE4]/10 text-xs text-[#EFEAE4]/50 font-en">
        <span>© 2026 AL ARAB (شاورما العراب). ALL RIGHTS RESERVED.</span>
        <span>LUXURY EDITORIAL CASE STUDY PRESENTATION</span>
      </div>

    </section>
  );
};
