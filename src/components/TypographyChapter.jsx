import React, { useState } from 'react';
import { brandInfo } from '../data/brandData';
import { Sliders } from './Icons';

export const TypographyChapter = ({ lang }) => {
  const [sampleTextAr, setSampleTextAr] = useState("شاورما العراب — الأصالة السعودية والأناقة التحريرية الخالدة");
  const [sampleTextEn, setSampleTextEn] = useState("AL ARAB — Saudi Craftsmanship & Pure Culinary Authority");
  const [fontSize, setFontSize] = useState(36);
  const [activeWeightAr, setActiveWeightAr] = useState('700');
  const [activeWeightEn, setActiveWeightEn] = useState('700');

  return (
    <section id="chapter-05" className="chapter-section bg-[#0E0D0D] border-t border-[#EFEAE4]/10">
      <div className="editorial-grid">
        
        {/* Section Header */}
        <div className="col-span-12 mb-10">
          <span className="chapter-number">05</span>
          <h2 className="text-h1 text-[#EFEAE4] font-ar mb-4">
            {lang === 'ar' ? 'النظام الطباعي والخطوط' : 'Typography System'}
          </h2>
          <p className="text-body-lg max-w-3xl font-ar">
            {lang === 'ar' ? 'الخطوط في هوية العراب ليست مجرد نصوص، بل هي عنصر التصميم السائد في كل شبكة تحريرية. تعبر عن الهيبة والثقة بدون صخب.' : 'Typography dominates layouts at AL ARAB. We use sharp geometric typefaces that evoke quiet luxury, confidence, and authority.'}
          </p>
        </div>

        {/* Specimen 1: Arabic Tajawal */}
        <div className="col-span-12 lg:col-span-6 mb-8">
          <div className="editorial-card bg-[#1A1615] border-[#EFEAE4]/10 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#EFEAE4]/10">
                <div>
                  <span className="text-xs font-en text-[#E64648] font-bold uppercase tracking-widest block">PRIMARY ARABIC</span>
                  <h3 className="text-2xl font-bold text-[#EFEAE4] font-ar">Tajawal (تجول)</h3>
                </div>
                <span className="text-xs text-[#EFEAE4]/50 font-en">GOOGLE FONTS</span>
              </div>
              <p className="text-xs text-[#EFEAE4]/70 mb-6 font-ar leading-relaxed">
                {brandInfo.typographySpecs.arabic.descriptionAr}
              </p>

              {/* Weight Specimen Rows */}
              <div className="space-y-3 font-ar">
                <div className="p-3 rounded-lg bg-[#0E0D0D] border border-[#EFEAE4]/5 font-black text-xl text-[#EFEAE4] flex justify-between items-center">
                  <span>شاورما العراب — أصل الحرفة</span>
                  <span className="text-[10px] text-[#E64648] font-en uppercase">BLACK 900</span>
                </div>
                <div className="p-3 rounded-lg bg-[#0E0D0D] border border-[#EFEAE4]/5 font-extrabold text-lg text-[#EFEAE4] flex justify-between items-center">
                  <span>شاورما العراب — هيبة المذاق</span>
                  <span className="text-[10px] text-[#EFEAE4]/40 font-en uppercase">EXTRABOLD 800</span>
                </div>
                <div className="p-3 rounded-lg bg-[#0E0D0D] border border-[#EFEAE4]/5 font-bold text-base text-[#EFEAE4] flex justify-between items-center">
                  <span>شاورما العراب — دقة السكين</span>
                  <span className="text-[10px] text-[#EFEAE4]/40 font-en uppercase">BOLD 700</span>
                </div>
                <div className="p-3 rounded-lg bg-[#0E0D0D] border border-[#EFEAE4]/5 font-medium text-sm text-[#EFEAE4]/80 flex justify-between items-center">
                  <span>شاورما العراب — الخبز الطازج</span>
                  <span className="text-[10px] text-[#EFEAE4]/40 font-en uppercase">MEDIUM 500</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specimen 2: English Inter Tight / Geist */}
        <div className="col-span-12 lg:col-span-6 mb-8">
          <div className="editorial-card bg-[#1A1615] border-[#EFEAE4]/10 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#EFEAE4]/10">
                <div>
                  <span className="text-xs font-en text-[#E64648] font-bold uppercase tracking-widest block">PRIMARY ENGLISH</span>
                  <h3 className="text-2xl font-bold text-[#EFEAE4] font-en">Inter Tight / Geist</h3>
                </div>
                <span className="text-xs text-[#EFEAE4]/50 font-en">GEOMETRIC GROTESK</span>
              </div>
              <p className="text-xs text-[#EFEAE4]/70 mb-6 font-ar leading-relaxed">
                {brandInfo.typographySpecs.english.descriptionEn}
              </p>

              {/* Weight Specimen Rows */}
              <div className="space-y-3 font-en">
                <div className="p-3 rounded-lg bg-[#0E0D0D] border border-[#EFEAE4]/5 font-extrabold text-xl text-[#EFEAE4] flex justify-between items-center">
                  <span>SHAWRMA ALARAB</span>
                  <span className="text-[10px] text-[#E64648] uppercase">EXTRABOLD 800</span>
                </div>
                <div className="p-3 rounded-lg bg-[#0E0D0D] border border-[#EFEAE4]/5 font-bold text-lg text-[#EFEAE4] flex justify-between items-center">
                  <span>SAUDI CULINARY AUTHORITY</span>
                  <span className="text-[10px] text-[#EFEAE4]/40 uppercase">BOLD 700</span>
                </div>
                <div className="p-3 rounded-lg bg-[#0E0D0D] border border-[#EFEAE4]/5 font-semibold text-base text-[#EFEAE4] flex justify-between items-center">
                  <span>PURE CRAFT & FIRE PRECISION</span>
                  <span className="text-[10px] text-[#EFEAE4]/40 uppercase">SEMIBOLD 600</span>
                </div>
                <div className="p-3 rounded-lg bg-[#0E0D0D] border border-[#EFEAE4]/5 font-medium text-sm text-[#EFEAE4]/80 flex justify-between items-center">
                  <span>LUXURY EDITORIAL IDENTITY</span>
                  <span className="text-[10px] text-[#EFEAE4]/40 uppercase">MEDIUM 500</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Specimen Lab */}
        <div className="col-span-12 mt-4">
          <div className="editorial-card bg-[#1A1615] border-[#C5A059]/30">
            
            {/* Control Controls Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-[#EFEAE4]/10">
              <div className="flex items-center gap-2 text-[#C5A059]">
                <Sliders className="w-5 h-5" />
                <h3 className="font-bold text-lg text-[#EFEAE4] font-ar">
                  {lang === 'ar' ? 'اختبار الخطوط التفاعلي المباشر' : 'Live Type Specimen Lab'}
                </h3>
              </div>

              {/* Slider */}
              <div className="flex items-center gap-4">
                <span className="text-xs font-en text-[#EFEAE4]/60">SIZE: {fontSize}PX</span>
                <input 
                  type="range" 
                  min="16" 
                  max="80" 
                  value={fontSize} 
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="accent-[#E64648] w-32 md:w-48 cursor-pointer"
                />
              </div>
            </div>

            {/* Live Text Canvas */}
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-en text-[#E64648] tracking-widest uppercase block mb-2">ARABIC TAJAWAL LIVE TEST</span>
                <div 
                  className="p-6 rounded-xl bg-[#0E0D0D] border border-[#EFEAE4]/10 text-[#EFEAE4] font-ar transition-all duration-300 overflow-x-auto leading-tight"
                  style={{ fontSize: `${fontSize}px`, fontWeight: activeWeightAr }}
                  contentEditable
                  suppressContentEditableWarning
                >
                  {sampleTextAr}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-en text-[#E64648] tracking-widest uppercase block mb-2">ENGLISH INTER TIGHT LIVE TEST</span>
                <div 
                  className="p-6 rounded-xl bg-[#0E0D0D] border border-[#EFEAE4]/10 text-[#EFEAE4] font-en transition-all duration-300 overflow-x-auto leading-tight"
                  style={{ fontSize: `${fontSize}px`, fontWeight: activeWeightEn }}
                  contentEditable
                  suppressContentEditableWarning
                >
                  {sampleTextEn}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
