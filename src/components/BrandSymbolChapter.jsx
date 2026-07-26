import React from 'react';
import { SvgLogo } from './SvgLogo';

export const BrandSymbolChapter = ({ lang }) => {
  return (
    <section id="scene-04" className="scene-stage-editorial bg-[#141212] overflow-hidden">
      
      {/* Top Scene Meta */}
      <div className="flex justify-between items-center z-10 w-full hairline-border-b pb-6">
        <span className="text-meta-label text-[#E64648]">
          SCENE 04 / SACRED SYMBOL ANATOMY
        </span>
        <span className="text-meta-label text-[#EFEAE4]/40">
          SKEWER MARK GEOMETRY
        </span>
      </div>

      {/* Asymmetric Monograph: Giant Vector Spilling Off-Screen */}
      <div className="my-auto z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12 relative">
        
        {/* Left: Oversized Typography Column */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-12 pr-4 z-10">
          
          <div>
            <span className="text-meta-label text-[#C5A059] block mb-4">THE GOLDEN RATIO EMBLEM</span>
            <h2 className="text-title-monograph text-[#EFEAE4] font-ar leading-tight mb-8">
              {lang === 'ar' ? 'تفكيك الدلالات البصرية لرمز السيخ' : 'Visual Anatomy of the Skewer Symbol'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 hairline-border-t pt-8">
            <div>
              <span className="text-display-monolith text-5xl text-[#E64648] font-en block mb-2">01</span>
              <h4 className="font-bold text-lg text-[#EFEAE4] font-ar">
                {lang === 'ar' ? 'محور الاستقامة' : 'Rotisserie Axis'}
              </h4>
              <p className="text-xs text-[#EFEAE4]/60 font-ar mt-2">
                {lang === 'ar' ? 'الاتزان والوقار في الطهي' : 'Rotisserie stability & culinary dignity'}
              </p>
            </div>

            <div>
              <span className="text-display-monolith text-5xl text-[#C5A059] font-en block mb-2">02</span>
              <h4 className="font-bold text-lg text-[#EFEAE4] font-ar">
                {lang === 'ar' ? 'قاطع السكين' : 'Razor Cut Arc'}
              </h4>
              <p className="text-xs text-[#EFEAE4]/60 font-ar mt-2">
                {lang === 'ar' ? 'دقة الساطور وشحذ اللحم' : 'Master chef knife slicing precision'}
              </p>
            </div>

            <div>
              <span className="text-display-monolith text-5xl text-[#8C3B30] font-en block mb-2">03</span>
              <h4 className="font-bold text-lg text-[#EFEAE4] font-ar">
                {lang === 'ar' ? 'وهج الدخان' : 'Ember Swirls'}
              </h4>
              <p className="text-xs text-[#EFEAE4]/60 font-ar mt-2">
                {lang === 'ar' ? 'حرارة الفحم ورائحة الشواء' : 'Rising smoke & charcoal heat'}
              </p>
            </div>
          </div>

        </div>

        {/* Right: Giant Vector Spilling Off-Screen Edge */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center opacity-90 lg:opacity-100">
          <div className="w-[120%] lg:w-[150%] h-auto filter drop-shadow-[0_40px_80px_rgba(230,70,72,0.4)] transform lg:translate-x-1/4">
            <SvgLogo variant="arabic-red" />
          </div>
        </div>

      </div>

      {/* Bottom Scene Footer */}
      <div className="flex justify-between items-center z-10 w-full hairline-border-t pt-6 text-meta-label text-[#EFEAE4]/40">
        <span>GOLDEN RATIO GEOMETRY</span>
        <span>KINGDOM OF SAUDI ARABIA</span>
      </div>

    </section>
  );
};
