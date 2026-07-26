import React from 'react';
import { SvgLogo } from './SvgLogo';

export const BrandSymbolChapter = ({ lang }) => {
  return (
    <section id="scene-04" className="scene-stage bg-[#141212]">
      
      {/* Top Scene Meta */}
      <div className="flex justify-between items-center z-10 w-full border-b border-[#EFEAE4]/10 pb-6">
        <span className="text-xs font-en tracking-[0.3em] text-[#E64648] uppercase font-bold">
          SCENE 04 / THE ANATOMY OF CRAFT
        </span>
        <span className="text-xs font-en text-[#EFEAE4]/40 uppercase tracking-widest">
          SKEWER MARK GEOMETRY
        </span>
      </div>

      {/* Asymmetric Monograph Grid */}
      <div className="my-auto z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
        
        {/* Left: Giant Skewer Symbol Vector */}
        <div className="lg:col-span-6 flex justify-center items-center">
          <div className="w-64 sm:w-80 md:w-[28rem] h-auto filter drop-shadow-[0_25px_50px_rgba(230,70,72,0.3)]">
            <SvgLogo variant="arabic-red" />
          </div>
        </div>

        {/* Right: Three Editorial Architectural Lines */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-12 pr-4">
          
          <div className="border-b border-[#EFEAE4]/10 pb-6">
            <span className="text-xs font-en text-[#E64648] font-bold tracking-widest uppercase block mb-2">01 / AXIS OF ROTISSERIE BALANCE</span>
            <h3 className="text-3xl md:text-5xl font-bold font-ar text-[#EFEAE4]">
              {lang === 'ar' ? 'محور السيخ العمودي — الوقار والاستقامة' : 'Vertical Skewer Axis — Balance & Dignity'}
            </h3>
          </div>

          <div className="border-b border-[#EFEAE4]/10 pb-6">
            <span className="text-xs font-en text-[#C5A059] font-bold tracking-widest uppercase block mb-2">02 / THE KNIFE BLADE ARC</span>
            <h3 className="text-3xl md:text-5xl font-bold font-ar text-[#EFEAE4]">
              {lang === 'ar' ? 'زاوية قطع السكين — دقة الحرفة' : 'Razor Slicing Arc — Precision Slicing'}
            </h3>
          </div>

          <div className="pb-6">
            <span className="text-xs font-en text-[#8C3B30] font-bold tracking-widest uppercase block mb-2">03 / EMBER & SMOKE DYNAMICS</span>
            <h3 className="text-3xl md:text-5xl font-bold font-ar text-[#EFEAE4]">
              {lang === 'ar' ? 'انحناءات النار والدخان — حرارة الشواء' : 'Smoke Swirls — Ember Heat Infusion'}
            </h3>
          </div>

        </div>

      </div>

      {/* Bottom Scene Footer */}
      <div className="flex justify-between items-center z-10 w-full border-t border-[#EFEAE4]/10 pt-6 text-xs font-en text-[#EFEAE4]/40 uppercase tracking-widest">
        <span>GOLDEN RATIO GEOMETRIC BALANCE</span>
        <span>SAUDI CULINARY ARTISTRY</span>
      </div>

    </section>
  );
};
