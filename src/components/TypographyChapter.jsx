import React, { useState } from 'react';
import { brandInfo } from '../data/brandData';
import { Type, Sliders, AlignLeft, AlignCenter, AlignRight, Eye } from './Icons';

export const TypographyChapter = ({ lang }) => {
  const [sampleTextAr, setSampleTextAr] = useState("شاورما العراب — الأصالة السعودية والحرفة العالية في كل تفصيلة");
  const [sampleTextEn, setSampleTextEn] = useState("SHAWRMA ALARAB — Saudi Craftsmanship & Pure Culinary Authority");
  const [fontSize, setFontSize] = useState(48);
  const [weightAr, setWeightAr] = useState('700');
  const [weightEn, setWeightEn] = useState('800');
  const [tracking, setTracking] = useState(0);
  const [selectedGlyph, setSelectedGlyph] = useState(null);

  const arabicGlyphs = ['ع', 'ر', 'ا', 'ب', 'ش', 'و', 'م', 'ت', 'ج', 'ل', 'ف', 'ق', 'ك', 'هـ'];
  const englishGlyphs = ['A', 'L', 'R', 'B', 'S', 'H', 'W', 'M', 'C', 'R', 'F', 'T', 'Q', 'U'];

  return (
    <section id="chapter-05" className="viewport-stage bg-[#0E0D0D] border-t border-[#EFEAE4]/10">
      
      {/* Watermark Section Number */}
      <div className="watermark-number">05</div>

      <div className="editorial-grid relative z-10">
        
        {/* Section Header */}
        <div className="col-span-12 mb-12">
          <span className="text-xs font-en tracking-[0.3em] text-[#E64648] uppercase font-bold block mb-2">
            CHAPTER 05 • TYPE ARCHITECTURE & LAB
          </span>
          <h2 className="text-h1 text-[#EFEAE4] font-ar mb-6">
            {lang === 'ar' ? 'المختبر الطباعي والهياكل النصية' : 'Typography System & Type Laboratory'}
          </h2>
          <p className="text-body-lg max-w-4xl font-ar">
            {lang === 'ar' ? 'الخطوط في هوية العراب تسيطر على المساحة وتفرض الهيبة والوقار. نستخدم خطوطاً هندسية تحريرية شديدة الوضوح تتحدث بالثقة والرزانة بدون الحاجة للزخرفة.' : 'Typography dominates layouts at AL ARAB. We employ sharp geometric grotesks that command authority, clarity, and quiet luxury across every viewport.'}
          </p>
        </div>

        {/* Specimen 1: Arabic Tajawal Wall */}
        <div className="col-span-12 lg:col-span-6 mb-8">
          <div className="stage-frame bg-[#141212] border-[#EFEAE4]/15 h-full flex flex-col justify-between p-8">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#EFEAE4]/10">
                <div>
                  <span className="text-xs font-en text-[#E64648] font-bold tracking-widest uppercase block">PRIMARY ARABIC TYPEFACE</span>
                  <h3 className="text-3xl font-bold text-[#EFEAE4] font-ar">Tajawal (تجول)</h3>
                </div>
                <span className="text-xs text-[#C5A059] font-en font-bold border border-[#C5A059]/30 px-3 py-1 rounded-full">GEOMETRIC ARABIC</span>
              </div>
              
              <p className="text-xs text-[#EFEAE4]/70 mb-8 font-ar leading-relaxed">
                {brandInfo.typographySpecs.arabic.descriptionAr}
              </p>

              {/* Weight Waterfall */}
              <div className="space-y-4 font-ar">
                <div className="p-4 rounded-xl bg-[#0E0D0D] border border-[#E64648]/30 font-black text-2xl text-[#EFEAE4] flex justify-between items-center">
                  <span>شاورما العراب — هيبة المذاق</span>
                  <span className="text-[10px] text-[#E64648] font-en uppercase font-bold">BLACK 900</span>
                </div>
                <div className="p-4 rounded-xl bg-[#0E0D0D] border border-[#EFEAE4]/10 font-extrabold text-xl text-[#EFEAE4] flex justify-between items-center">
                  <span>شاورما العراب — أصل الحرفة</span>
                  <span className="text-[10px] text-[#EFEAE4]/40 font-en uppercase font-bold">EXTRABOLD 800</span>
                </div>
                <div className="p-4 rounded-xl bg-[#0E0D0D] border border-[#EFEAE4]/10 font-bold text-lg text-[#EFEAE4] flex justify-between items-center">
                  <span>شاورما العراب — دقة السكين</span>
                  <span className="text-[10px] text-[#EFEAE4]/40 font-en uppercase font-bold">BOLD 700</span>
                </div>
                <div className="p-4 rounded-xl bg-[#0E0D0D] border border-[#EFEAE4]/10 font-medium text-base text-[#EFEAE4]/80 flex justify-between items-center">
                  <span>شاورما العراب — الخبز الطازج</span>
                  <span className="text-[10px] text-[#EFEAE4]/40 font-en uppercase font-bold">MEDIUM 500</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specimen 2: English Inter Tight / Geist Wall */}
        <div className="col-span-12 lg:col-span-6 mb-8">
          <div className="stage-frame bg-[#141212] border-[#EFEAE4]/15 h-full flex flex-col justify-between p-8">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#EFEAE4]/10">
                <div>
                  <span className="text-xs font-en text-[#E64648] font-bold tracking-widest uppercase block">PRIMARY ENGLISH TYPEFACE</span>
                  <h3 className="text-3xl font-bold text-[#EFEAE4] font-en">Inter Tight / Geist</h3>
                </div>
                <span className="text-xs text-[#C5A059] font-en font-bold border border-[#C5A059]/30 px-3 py-1 rounded-full">GEOMETRIC GROTESK</span>
              </div>
              
              <p className="text-xs text-[#EFEAE4]/70 mb-8 font-ar leading-relaxed">
                {brandInfo.typographySpecs.english.descriptionEn}
              </p>

              {/* Weight Waterfall */}
              <div className="space-y-4 font-en">
                <div className="p-4 rounded-xl bg-[#0E0D0D] border border-[#E64648]/30 font-extrabold text-2xl text-[#EFEAE4] flex justify-between items-center">
                  <span>SHAWRMA ALARAB</span>
                  <span className="text-[10px] text-[#E64648] uppercase font-bold">EXTRABOLD 800</span>
                </div>
                <div className="p-4 rounded-xl bg-[#0E0D0D] border border-[#EFEAE4]/10 font-bold text-xl text-[#EFEAE4] flex justify-between items-center">
                  <span>SAUDI CULINARY AUTHORITY</span>
                  <span className="text-[10px] text-[#EFEAE4]/40 uppercase font-bold">BOLD 700</span>
                </div>
                <div className="p-4 rounded-xl bg-[#0E0D0D] border border-[#EFEAE4]/10 font-semibold text-lg text-[#EFEAE4] flex justify-between items-center">
                  <span>PURE CRAFT & FIRE PRECISION</span>
                  <span className="text-[10px] text-[#EFEAE4]/40 uppercase font-bold">SEMIBOLD 600</span>
                </div>
                <div className="p-4 rounded-xl bg-[#0E0D0D] border border-[#EFEAE4]/10 font-medium text-base text-[#EFEAE4]/80 flex justify-between items-center">
                  <span>LUXURY EDITORIAL IDENTITY</span>
                  <span className="text-[10px] text-[#EFEAE4]/40 uppercase font-bold">MEDIUM 500</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fullscreen Interactive Type Laboratory */}
        <div className="col-span-12 mt-4 mb-12">
          <div className="stage-frame bg-[#1A1615] border-[#C5A059]/40 p-8 md:p-12">
            
            {/* Interactive Control Header */}
            <div className="flex flex-wrap items-center justify-between gap-6 mb-8 pb-6 border-b border-[#EFEAE4]/10">
              <div className="flex items-center gap-3 text-[#C5A059]">
                <Sliders className="w-6 h-6" />
                <h3 className="font-bold text-2xl text-[#EFEAE4] font-ar">
                  {lang === 'ar' ? 'مختبر ضبط المعايير الطباعية المباشر' : 'Live Type Laboratory Workbench'}
                </h3>
              </div>

              {/* Sliders Control Bar */}
              <div className="flex flex-wrap items-center gap-6 text-xs font-en text-[#EFEAE4]/80">
                <div className="flex items-center gap-3">
                  <span>FONT SIZE: <strong className="text-[#E64648]">{fontSize}PX</strong></span>
                  <input 
                    type="range" 
                    min="20" 
                    max="100" 
                    value={fontSize} 
                    onChange={(e) => setFontSize(Number(e.target.value))}
                    className="accent-[#E64648] w-32 cursor-pointer"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <span>TRACKING: <strong className="text-[#C5A059]">{tracking}PX</strong></span>
                  <input 
                    type="range" 
                    min="-2" 
                    max="10" 
                    value={tracking} 
                    onChange={(e) => setTracking(Number(e.target.value))}
                    className="accent-[#C5A059] w-28 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Editable Live Specimen Canvas */}
            <div className="space-y-8">
              
              <div>
                <span className="text-[10px] font-en text-[#E64648] tracking-widest uppercase font-bold block mb-3">ARABIC TAJAWAL EDITABLE CANVAS</span>
                <div 
                  className="p-8 rounded-2xl bg-[#0E0D0D] border border-[#E64648]/30 text-[#EFEAE4] font-ar transition-all duration-300 overflow-x-auto leading-tight"
                  style={{ 
                    fontSize: `${fontSize}px`, 
                    fontWeight: weightAr,
                    letterSpacing: `${tracking}px`
                  }}
                  contentEditable
                  suppressContentEditableWarning
                >
                  {sampleTextAr}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-en text-[#C5A059] tracking-widest uppercase font-bold block mb-3">ENGLISH INTER TIGHT EDITABLE CANVAS</span>
                <div 
                  className="p-8 rounded-2xl bg-[#0E0D0D] border border-[#C5A059]/30 text-[#EFEAE4] font-en transition-all duration-300 overflow-x-auto leading-tight"
                  style={{ 
                    fontSize: `${fontSize}px`, 
                    fontWeight: weightEn,
                    letterSpacing: `${tracking}px`
                  }}
                  contentEditable
                  suppressContentEditableWarning
                >
                  {sampleTextEn}
                </div>
              </div>

            </div>

            {/* Character & Glyphs Loupe Inspector */}
            <div className="mt-12 pt-8 border-t border-[#EFEAE4]/10">
              <span className="text-xs font-en text-[#C5A059] font-bold tracking-widest uppercase block mb-4">GLYPH CHARACTER LOUPE</span>
              
              <div className="flex flex-wrap gap-3">
                {[...arabicGlyphs, ...englishGlyphs].map((char, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedGlyph(char)}
                    className={`w-12 h-12 rounded-xl text-xl font-bold flex items-center justify-center transition-all ${selectedGlyph === char ? 'bg-[#E64648] text-[#EFEAE4] scale-125 shadow-lg shadow-[#E64648]/40' : 'bg-[#0E0D0D] border border-[#EFEAE4]/10 text-[#EFEAE4]/70 hover:border-[#E64648]'}`}
                  >
                    {char}
                  </button>
                ))}
              </div>

              {selectedGlyph && (
                <div className="mt-6 p-6 rounded-xl bg-[#0E0D0D] border border-[#E64648] flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <span className="text-6xl font-black text-[#E64648]">{selectedGlyph}</span>
                    <div>
                      <h4 className="font-bold text-lg text-[#EFEAE4] font-en">SELECTED GLYPH: {selectedGlyph}</h4>
                      <p className="text-xs text-[#EFEAE4]/60 font-ar">دقة الحواف الهندسية المتوافقة مع طباعة المونوجراف الفاخرة.</p>
                    </div>
                  </div>
                  <button onClick={() => setSelectedGlyph(null)} className="text-xs text-[#EFEAE4]/40 hover:text-[#EFEAE4] font-en uppercase font-bold">CLOSE</button>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
