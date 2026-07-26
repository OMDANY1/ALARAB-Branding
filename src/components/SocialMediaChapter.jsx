import React from 'react';

export const SocialMediaChapter = ({ lang }) => {
  return (
    <section id="scene-11" className="scene-stage bg-[#0E0D0D]">
      
      {/* Top Scene Meta */}
      <div className="flex justify-between items-center z-10 w-full border-b border-[#EFEAE4]/10 pb-6">
        <span className="text-xs font-en tracking-[0.3em] text-[#E64648] uppercase font-bold">
          SCENE 11 / DIGITAL MOTION
        </span>
        <span className="text-xs font-en text-[#EFEAE4]/40 uppercase tracking-widest">
          120FPS CINEMATOGRAPHY
        </span>
      </div>

      {/* Center Device Frame Visual Monograph */}
      <div className="my-auto z-10 w-full flex flex-col items-center text-center max-w-5xl mx-auto py-12">
        
        {/* Mobile Device Frame Stage */}
        <div className="w-72 sm:w-80 h-96 rounded-3xl bg-[#141212] border-4 border-[#EFEAE4]/20 p-6 flex flex-col justify-end text-left shadow-2xl mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0D] via-transparent to-transparent"></div>
          <span className="text-[10px] font-en text-[#E64648] tracking-widest uppercase font-bold z-10 block mb-1">@SHAWRMA.ALARAB</span>
          <h4 className="text-2xl font-bold font-ar text-[#EFEAE4] z-10 leading-tight">
            {lang === 'ar' ? 'الأصالة السعودية. دقة الحرفة. هيبة المذاق.' : 'Saudi Heritage & Pure Craft.'}
          </h4>
        </div>

        <h2 className="text-title-huge text-[#EFEAE4] font-ar leading-none">
          {lang === 'ar' ? 'معرض سينمائي رقمي بدون صخب' : 'Digital Motion & Cinematic Storytelling'}
        </h2>

      </div>

      {/* Bottom Scene Footer */}
      <div className="flex justify-between items-center z-10 w-full border-t border-[#EFEAE4]/10 pt-6 text-xs font-en text-[#EFEAE4]/40 uppercase tracking-widest">
        <span>4:5 ASPECT RATIO FEED • 9:16 REELS</span>
        <span>ZERO STICKER CLUTTER</span>
      </div>

    </section>
  );
};
