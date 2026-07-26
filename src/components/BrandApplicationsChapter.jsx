import React from 'react';
import { brandInfo } from '../data/brandData';
import { Award } from './Icons';

export const BrandApplicationsChapter = ({ lang }) => {
  return (
    <section id="chapter-12" className="viewport-stage bg-[#141212] border-t border-[#EFEAE4]/10">
      
      {/* Watermark Section Number */}
      <div className="watermark-number">12</div>

      <div className="editorial-grid relative z-10">
        
        {/* Section Header */}
        <div className="col-span-12 mb-12">
          <span className="text-xs font-en tracking-[0.3em] text-[#E64648] uppercase font-bold block mb-2">
            CHAPTER 12 • PHYSICAL BRAND APPLICATIONS
          </span>
          <h2 className="text-h1 text-[#EFEAE4] font-ar mb-6">
            {lang === 'ar' ? 'تطبيقات العلامة ومستلزمات الإنتاج' : 'Physical Brand Applications & Stationeries'}
          </h2>
          <p className="text-body-lg max-w-4xl font-ar">
            {lang === 'ar' ? 'تمتد هوية العراب إلى كل نقطة تماس مع العميل والشركاء، من بطاقات الأعمال المحفورة بحواف عنابية إلى أسطول السيارات والمآزر القطنية.' : 'AL ARAB brand applications maintain luxury consistency across executive stationery, chef uniforms, delivery fleets, and highway billboards.'}
          </p>
        </div>

        {/* Applications Stage Cards */}
        <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {brandInfo.applications.map((app, idx) => (
            <div key={idx} className="stage-frame bg-[#1A1615] border-[#EFEAE4]/10 hover:border-[#E64648]/40 flex flex-col justify-between p-8 md:p-12">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#EFEAE4]/10 mb-6">
                  <span className="text-xs font-en text-[#E64648] font-bold">APPLICATION 0{idx + 1}</span>
                  <Award className="w-5 h-5 text-[#C5A059]" />
                </div>

                <h3 className="text-3xl font-bold text-[#EFEAE4] font-ar mb-3">
                  {lang === 'ar' ? app.titleAr : app.titleEn}
                </h3>

                <p className="text-base text-[#EFEAE4]/70 font-ar mb-8 leading-relaxed">
                  {lang === 'ar' ? app.descAr : app.descEn}
                </p>
              </div>

              {/* Application Visual Preview Frame */}
              <div className="w-full h-48 rounded-xl bg-[#0E0D0D] border border-[#E64648]/30 flex flex-col items-center justify-center p-6 text-center">
                <span className="font-bold text-xs text-[#EFEAE4]/50 font-en uppercase tracking-widest block mb-2">
                  PRODUCTION SPECIFICATION APPROVED
                </span>
                <span className="text-[10px] font-en text-[#C5A059] font-bold">AL ARAB BRAND IDENTITY MONOGRAPH</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
