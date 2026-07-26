import React from 'react';
import { brandInfo } from '../data/brandData';
import { Award } from './Icons';

export const BrandApplicationsChapter = ({ lang }) => {
  return (
    <section id="chapter-12" className="chapter-section bg-[#141212] border-t border-[#EFEAE4]/10">
      <div className="editorial-grid">
        
        {/* Section Header */}
        <div className="col-span-12 mb-10">
          <span className="chapter-number">12</span>
          <h2 className="text-h1 text-[#EFEAE4] font-ar mb-4">
            {lang === 'ar' ? 'تطبيقات العلامة التجارية' : 'Brand Applications'}
          </h2>
          <p className="text-body-lg max-w-3xl font-ar">
            {lang === 'ar' ? 'تمتد هوية العراب إلى كل نقطة تماس مع العميل والشركاء، من بطاقات الأعمال المحفورة بحواف عنابية إلى أسطول السيارات والمآزر القطنية.' : 'AL ARAB brand applications maintain luxury consistency across executive stationery, chef uniforms, delivery fleets, and billboards.'}
          </p>
        </div>

        {/* Applications Grid */}
        <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {brandInfo.applications.map((app, idx) => (
            <div key={idx} className="editorial-card bg-[#1A1615] border-[#EFEAE4]/10 hover:border-[#E64648]/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#EFEAE4]/10 mb-4">
                  <span className="text-xs font-en text-[#E64648] font-bold">APPLICATION 0{idx + 1}</span>
                  <Award className="w-5 h-5 text-[#C5A059]" />
                </div>

                <h3 className="text-2xl font-bold text-[#EFEAE4] font-ar mb-2">
                  {lang === 'ar' ? app.titleAr : app.titleEn}
                </h3>

                <p className="text-sm text-[#EFEAE4]/70 font-ar mb-6">
                  {lang === 'ar' ? app.descAr : app.descEn}
                </p>
              </div>

              {/* Application Visual Preview Frame */}
              <div className="w-full h-44 rounded-lg bg-[#0E0D0D] border border-[#EFEAE4]/10 flex items-center justify-center p-6 text-center">
                <span className="font-bold text-xs text-[#EFEAE4]/50 font-en uppercase tracking-widest">
                  AL ARAB BRAND IDENTITY SPECIFICATION • APPROVED FOR PRODUCTION
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
