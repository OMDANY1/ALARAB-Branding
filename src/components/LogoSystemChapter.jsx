import React, { useState } from 'react';
import { SvgLogo } from './SvgLogo';
import { brandInfo } from '../data/brandData';
import { ShieldAlert, Check, Eye, AlertTriangle } from './Icons';

export const LogoSystemChapter = ({ lang }) => {
  const [activeVariant, setActiveVariant] = useState('arabic-red');
  const [showClearSpace, setShowClearSpace] = useState(true);

  const logoVariants = [
    { id: 'arabic-red', labelAr: 'العربي (أحمر)', labelEn: 'Arabic (Red)' },
    { id: 'arabic-white', labelAr: 'العربي (أبيض)', labelEn: 'Arabic (White)' },
    { id: 'english-red', labelAr: 'الإنجليزي (أحمر)', labelEn: 'English (Red)' },
    { id: 'english-white', labelAr: 'الإنجليزي (أبيض)', labelEn: 'English (White)' },
    { id: 'arabic-name', labelAr: 'شعار مع اسم عربي', labelEn: 'Arabic Mark + Name' },
    { id: 'english-name', labelAr: 'شعار مع اسم إنجليزي', labelEn: 'English Mark + Name' }
  ];

  return (
    <section id="chapter-03" className="chapter-section bg-[#0E0D0D] border-t border-[#EFEAE4]/10">
      <div className="editorial-grid">
        
        {/* Section Title */}
        <div className="col-span-12 mb-10">
          <span className="chapter-number">03</span>
          <h2 className="text-h1 text-[#EFEAE4] font-ar mb-4">
            {lang === 'ar' ? 'نظام الشعار الرسمي' : 'Official Logo System'}
          </h2>
          <p className="text-body-lg max-w-3xl font-ar">
            {lang === 'ar' ? 'الشعار هو الهوية المقدسة لعلامة العراب. يُمنع منعاً باتاً تعديل الشعار أو إعادة رسمه أو تغيير نسبه البصرية بأي شكل من الأشكال.' : 'The logo is the sacred visual signature of AL ARAB. Redrawing, rotating, or altering its vector proportions is strictly forbidden.'}
          </p>
        </div>

        {/* Interactive Logo Stage */}
        <div className="col-span-12 lg:col-span-8 mb-8">
          
          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-[#1A1615] rounded-t-xl border border-[#EFEAE4]/10">
            <div className="flex flex-wrap gap-2">
              {logoVariants.map((varItem) => (
                <button
                  key={varItem.id}
                  onClick={() => setActiveVariant(varItem.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${activeVariant === varItem.id ? 'bg-[#E64648] text-[#EFEAE4]' : 'bg-[#0E0D0D] text-[#EFEAE4]/70 hover:text-[#EFEAE4] border border-[#EFEAE4]/10'}`}
                >
                  {lang === 'ar' ? varItem.labelAr : varItem.labelEn}
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowClearSpace(!showClearSpace)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-en transition-all border ${showClearSpace ? 'bg-[#C5A059]/20 border-[#C5A059] text-[#C5A059]' : 'bg-[#0E0D0D] border-[#EFEAE4]/10 text-[#EFEAE4]/60'}`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{showClearSpace ? 'CLEAR SPACE: ON' : 'CLEAR SPACE: OFF'}</span>
            </button>
          </div>

          {/* Logo Viewport Canvas */}
          <div className={`relative p-12 md:p-24 rounded-b-xl border border-t-0 border-[#EFEAE4]/10 flex items-center justify-center transition-colors duration-500 min-h-[420px] ${activeVariant.includes('white') ? 'bg-[#1A1615]' : 'bg-[#0E0D0D]'}`}>
            
            {/* Clear Space Guide Lines Overlay */}
            {showClearSpace && (
              <div className="absolute inset-8 border border-dashed border-[#C5A059]/40 pointer-events-none flex items-center justify-center">
                <span className="absolute top-2 left-2 text-[10px] font-en text-[#C5A059]">CLEAR SPACE (X-HEIGHT)</span>
                <span className="absolute bottom-2 right-2 text-[10px] font-en text-[#C5A059]">SAFETY MARGIN X</span>
              </div>
            )}

            <div className="w-48 sm:w-64 md:w-80 h-auto">
              <SvgLogo variant={activeVariant} />
            </div>
          </div>
        </div>

        {/* Logo Specifications Side Card */}
        <div className="col-span-12 lg:col-span-4 mb-8 flex flex-col gap-4">
          
          <div className="editorial-card bg-[#1A1615] border-[#EFEAE4]/10">
            <span className="text-xs font-en text-[#E64648] uppercase tracking-widest font-bold block mb-2">
              RULES & GUIDELINES
            </span>
            <h3 className="text-xl font-bold text-[#EFEAE4] mb-3 font-ar">
              {lang === 'ar' ? 'قواعد استخدام الشعار' : 'Logo Rules'}
            </h3>
            <ul className="text-xs text-[#EFEAE4]/70 space-y-3 font-ar">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#E64648] shrink-0 mt-0.5" />
                <span>{lang === 'ar' ? 'الشعار العربي هو الشعار الرئيسي للعلامة التجارية.' : 'Arabic logo is the primary brand signature.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#E64648] shrink-0 mt-0.5" />
                <span>{lang === 'ar' ? 'يجب دائماً ترك مسافة أمان تعادل ارتفاع رمز السيخ.' : 'Always maintain clear space equal to skewer height.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#E64648] shrink-0 mt-0.5" />
                <span>{lang === 'ar' ? 'الحد الأدنى للطباعة هو 15 مم وللشاشات الرقمية 40 بكسل.' : 'Minimum size: 15mm print / 40px digital.'}</span>
              </li>
            </ul>
          </div>

          <div className="editorial-card bg-[#1A1615] border-[#E64648]/30">
            <span className="text-xs font-en text-[#C5A059] uppercase tracking-widest font-bold block mb-1">
              OFFICIAL ASSET SOURCE
            </span>
            <h4 className="text-sm font-bold text-[#EFEAE4] font-ar mb-2">
              {lang === 'ar' ? 'الملفات المعتمدة متوفرة بصيغة SVG عالية الدقة.' : 'Official SVG vectors sourced directly from brand guidelines.'}
            </h4>
            <p className="text-xs text-[#EFEAE4]/50 font-en">
              ARABIC RED.svg • ARABIC WHITE.svg • ENGLISH RED.svg • ENGLISH WHITE.svg
            </p>
          </div>

        </div>

        {/* Incorrect Usage Grid */}
        <div className="col-span-12 mt-12">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-[#E64648]" />
            <h3 className="text-h2 text-[#EFEAE4] font-ar">
              {lang === 'ar' ? 'الاستخدامات الخاطئة للشعار' : 'Incorrect Logo Usages'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandInfo.incorrectUsages.map((item, idx) => (
              <div key={idx} className="editorial-card bg-[#1A1615] border-[#E64648]/30 hover:border-[#E64648] transition-all duration-300">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#EFEAE4]/10">
                  <span className="text-xs font-en text-[#E64648] font-bold">STRICT PROHIBITION 0{idx + 1}</span>
                  <ShieldAlert className="w-4 h-4 text-[#E64648]" />
                </div>
                <h4 className="font-bold text-base text-[#EFEAE4] mb-2 font-ar">
                  {lang === 'ar' ? item.titleAr : item.titleEn}
                </h4>
                <p className="text-xs text-[#EFEAE4]/60 font-ar">
                  {lang === 'ar' ? item.descAr : item.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
