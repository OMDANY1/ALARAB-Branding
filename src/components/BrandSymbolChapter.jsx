import React, { useState } from 'react';
import { SvgLogo } from './SvgLogo';
import { Flame, Compass, Layers } from './Icons';

export const BrandSymbolChapter = ({ lang }) => {
  const [showGrid, setShowGrid] = useState(true);

  return (
    <section id="chapter-04" className="chapter-section bg-[#141212] border-t border-[#EFEAE4]/10">
      <div className="editorial-grid">
        
        {/* Section Header */}
        <div className="col-span-12 mb-10">
          <span className="chapter-number">04</span>
          <h2 className="text-h1 text-[#EFEAE4] font-ar mb-4">
            {lang === 'ar' ? 'رمز السيخ — قلب الهوية' : 'The Skewer Symbol — Brand Heart'}
          </h2>
          <p className="text-body-lg max-w-3xl font-ar">
            {lang === 'ar' ? 'رمز السيخ هو العنصر البصري الأهم في الهوية الحصرية لشاورما العراب. يرمز إلى الشواء الأصيل وحرفية التقطيع وهيبة النار.' : 'The skewer mark is the sacred heartbeat of AL ARAB identity. It encapsulates rotisserie craftsmanship, knife precision, and charcoal authority.'}
          </p>
        </div>

        {/* Interactive Symbol Construction Stage */}
        <div className="col-span-12 lg:col-span-7 mb-8">
          <div className="relative p-12 md:p-20 bg-[#1A1615] rounded-xl border border-[#EFEAE4]/10 flex flex-col items-center justify-center overflow-hidden min-h-[460px]">
            
            {/* Grid Overlay Toggle */}
            <div className="absolute top-4 right-4 z-20">
              <button
                onClick={() => setShowGrid(!showGrid)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-en transition-all border ${showGrid ? 'bg-[#E64648] border-[#E64648] text-[#EFEAE4]' : 'bg-[#0E0D0D] border-[#EFEAE4]/10 text-[#EFEAE4]/60'}`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>{showGrid ? 'GEOMETRY GRID: ACTIVE' : 'GEOMETRY GRID: OFF'}</span>
              </button>
            </div>

            {/* Architectural Geometry Grid Background */}
            {showGrid && (
              <div className="absolute inset-0 pointer-events-none opacity-25">
                <div className="w-full h-full border border-[#E64648]/40 rounded-full scale-[0.85] absolute inset-0 m-auto"></div>
                <div className="w-full h-full border border-[#C5A059]/30 rounded-full scale-[0.6] absolute inset-0 m-auto"></div>
                <div className="w-[1px] h-full bg-[#E64648]/40 absolute left-1/2 -translate-x-1/2"></div>
                <div className="w-full h-[1px] bg-[#E64648]/40 absolute top-1/2 -translate-y-1/2"></div>
                <div className="w-full h-full bg-[linear-gradient(45deg,transparent_49%,rgba(230,70,72,0.2)_50%,transparent_51%)] absolute"></div>
              </div>
            )}

            {/* Central Icon */}
            <div className="w-44 md:w-60 h-auto z-10 filter drop-shadow-[0_20px_50px_rgba(230,70,72,0.3)] transition-transform duration-500 hover:scale-105">
              <SvgLogo variant="arabic-red" />
            </div>

            <div className="mt-8 z-10 text-center">
              <span className="text-xs font-en text-[#C5A059] tracking-[0.2em] uppercase font-bold">
                PROPORTIONAL RATIO: GOLDEN RATIO VECTOR HARMONY
              </span>
            </div>
          </div>
        </div>

        {/* Symbol Breakdown Specifications */}
        <div className="col-span-12 lg:col-span-5 mb-8 flex flex-col gap-4">
          
          {/* Component 1: The Skewer Axis */}
          <div className="editorial-card bg-[#1A1615] border-[#EFEAE4]/10 hover:border-[#E64648]/40">
            <div className="flex items-center gap-3 mb-2 text-[#E64648]">
              <Flame className="w-5 h-5" />
              <h3 className="text-lg font-bold text-[#EFEAE4] font-ar">
                {lang === 'ar' ? '1. محور السيخ العمودي' : '1. Vertical Skewer Axis'}
              </h3>
            </div>
            <p className="text-xs text-[#EFEAE4]/70 leading-relaxed font-ar">
              {lang === 'ar' ? 'يمثل الاستقامة والهيبة والثبات في تقديم أجود أنواع اللحوم الطازجة على صاج الشواء.' : 'Represents vertical rotisserie balance, authority, and culinary stability.'}
            </p>
          </div>

          {/* Component 2: The Knife Cut Angle */}
          <div className="editorial-card bg-[#1A1615] border-[#EFEAE4]/10 hover:border-[#E64648]/40">
            <div className="flex items-center gap-3 mb-2 text-[#C5A059]">
              <Compass className="w-5 h-5" />
              <h3 className="text-lg font-bold text-[#EFEAE4] font-ar">
                {lang === 'ar' ? '2. زاوية قطع السكين' : '2. Sharp Knife Cut Angle'}
              </h3>
            </div>
            <p className="text-xs text-[#EFEAE4]/70 leading-relaxed font-ar">
              {lang === 'ar' ? 'تعكس دقة حركات الطاهي في التتقطيع وشحذ السكاكين الرفيعة لإعداد الوجبة المثالية.' : 'Reflects precision slicing knife angles and master chef craftsmanship.'}
            </p>
          </div>

          {/* Component 3: The Ember Flame Curve */}
          <div className="editorial-card bg-[#1A1615] border-[#EFEAE4]/10 hover:border-[#E64648]/40">
            <div className="flex items-center gap-3 mb-2 text-[#E64648]">
              <Layers className="w-5 h-5" />
              <h3 className="text-lg font-bold text-[#EFEAE4] font-ar">
                {lang === 'ar' ? '3. انحناءات النار والدخان' : '3. Flame & Ember Curves'}
              </h3>
            </div>
            <p className="text-xs text-[#EFEAE4]/70 leading-relaxed font-ar">
              {lang === 'ar' ? 'تجسد الدخان المتصاعد ووهج جمر الشواء الأصيل الذي يمنح الشاورما طعمها النادر.' : 'Embodying charcoal smoke, heat waves, and intense flavor infusion.'}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
