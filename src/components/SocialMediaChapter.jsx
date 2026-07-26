import React from 'react';

export const SocialMediaChapter = ({ lang }) => {
  return (
    <section id="scene-11" className="scene-stage-editorial bg-[#0E0D0D]">
      
      {/* Top Meta */}
      <div className="flex justify-between items-center z-10 w-full hairline-border-b pb-6">
        <span className="text-meta-label text-[#E64648]">
          SCENE 11 / DIGITAL MOTION
        </span>
        <span className="text-meta-label text-[#EFEAE4]/40">
          120FPS SLOW MOTION
        </span>
      </div>

      {/* Center Device Visual Monograph */}
      <div className="my-auto z-10 w-full flex flex-col items-center text-center max-w-5xl mx-auto py-12">
        
        {/* Mobile Viewport Aspect Ratio Monolith */}
        <div className="w-72 sm:w-80 h-[28rem] rounded-3xl bg-[#141212] border border-[#EFEAE4]/20 p-8 flex flex-col justify-end text-left shadow-2xl mb-8 relative overflow-hidden transition-all duration-700 hover:border-[#E64648]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0D] via-transparent to-transparent"></div>
          <span className="text-meta-label text-[#E64648] z-10 block mb-2">@SHAWRMA.ALARAB</span>
          <h4 className="text-3xl font-bold font-ar text-[#EFEAE4] z-10 leading-tight">
            {lang === 'ar' ? 'الأصالة السعودية. دقة الحرفة. هيبة المذاق.' : 'Saudi Culinary Heritage.'}
          </h4>
        </div>

        <h2 className="text-title-monograph text-[#EFEAE4] font-ar leading-none">
          {lang === 'ar' ? 'معرض سينمائي رقمي هادئ' : 'Digital Motion & Cinematic Monograph'}
        </h2>

      </div>

      {/* Bottom Footer */}
      <div className="flex justify-between items-center z-10 w-full hairline-border-t pt-6 text-meta-label text-[#EFEAE4]/40">
        <span>4:5 EDITORIAL POSTS • 9:16 REELS</span>
        <span>ZERO STICKER CLUTTER</span>
      </div>

    </section>
  );
};
