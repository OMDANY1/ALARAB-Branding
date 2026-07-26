import React, { useState } from 'react';
import { brandInfo } from '../data/brandData';
import { Package, CheckCircle } from './Icons';

export const PackagingChapter = ({ lang }) => {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <section id="chapter-09" className="chapter-section bg-[#0E0D0D] border-t border-[#EFEAE4]/10">
      <div className="editorial-grid">
        
        {/* Section Header */}
        <div className="col-span-12 mb-10">
          <span className="chapter-number">09</span>
          <h2 className="text-h1 text-[#EFEAE4] font-ar mb-4">
            {lang === 'ar' ? 'التغليف وتجربة التوصيل' : 'Packaging & Delivery'}
          </h2>
          <p className="text-body-lg max-w-3xl font-ar">
            {lang === 'ar' ? 'تصل تجربة العراب الفاخرة إلى منزل العميل من خلال مواد تغليف صديقة للبيئة ملمسها راقٍ وتحفظ حرارة الشاورما والخبز بنسبة 100%.' : 'AL ARAB packaging extends our luxury hospitality into the customer’s home with oil-resistant matte foils, magnetic meal boxes, and sustainable paper bags.'}
          </p>
        </div>

        {/* Packaging Items Selector */}
        <div className="col-span-12 lg:col-span-4 mb-8 flex flex-col gap-3">
          {brandInfo.packagingItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedItem(idx)}
              className={`editorial-card p-5 cursor-pointer transition-all duration-300 ${selectedItem === idx ? 'bg-[#E64648] border-[#E64648] text-[#EFEAE4]' : 'bg-[#1A1615] border-[#EFEAE4]/10 hover:bg-[#1E1A18]'}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-en font-bold opacity-70">PACKAGING 0{idx + 1}</span>
                {selectedItem === idx && <CheckCircle className="w-4 h-4 text-[#EFEAE4]" />}
              </div>
              <h3 className="font-bold text-lg font-ar mt-2">
                {lang === 'ar' ? item.titleAr : item.titleEn}
              </h3>
            </div>
          ))}
        </div>

        {/* Packaging Visual Inspector Stage */}
        <div className="col-span-12 lg:col-span-8 mb-8">
          <div className="editorial-card bg-[#1A1615] border-[#EFEAE4]/10 h-full flex flex-col justify-between p-8 md:p-12 relative overflow-hidden">
            
            {/* Visual Header */}
            <div>
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#EFEAE4]/10">
                <span className="text-xs font-en text-[#E64648] uppercase tracking-widest font-bold">
                  ARTISANAL SPECIFICATIONS
                </span>
                <Package className="w-5 h-5 text-[#C5A059]" />
              </div>

              <h3 className="text-3xl font-bold text-[#EFEAE4] font-ar mb-4">
                {lang === 'ar' ? brandInfo.packagingItems[selectedItem].titleAr : brandInfo.packagingItems[selectedItem].titleEn}
              </h3>

              <p className="text-base text-[#EFEAE4]/80 font-ar mb-8 leading-relaxed">
                {lang === 'ar' ? brandInfo.packagingItems[selectedItem].descAr : brandInfo.packagingItems[selectedItem].descEn}
              </p>
            </div>

            {/* Simulated 3D Mockup Container */}
            <div className="w-full h-64 rounded-xl bg-[#0E0D0D] border border-[#E64648]/30 flex flex-col items-center justify-center relative p-6 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E64648]/10 via-transparent to-transparent"></div>
              
              {/* Product Badge */}
              <div className="w-32 h-32 rounded-full border-2 border-[#E64648] flex items-center justify-center p-4 bg-[#1A1615] shadow-2xl relative z-10 animate-pulse">
                <span className="font-bold text-[#EFEAE4] text-center text-xs font-ar">
                  {lang === 'ar' ? 'شاورما العراب — تغليف حماية الحرارة' : 'AL ARAB THERMAL SEAL'}
                </span>
              </div>

              <span className="text-[10px] font-en text-[#C5A059] tracking-widest uppercase mt-4 z-10">
                100% RECYCLABLE • FOOD-GRADE GREASEPROOF MATTE COATING
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
