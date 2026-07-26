import React, { useState } from 'react';
import { brandInfo } from '../data/brandData';
import { Package, Shield, CheckCircle, Sparkles, Sliders } from './Icons';

export const PackagingChapter = ({ lang }) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [rotationDegree, setRotationDegree] = useState(0);

  return (
    <section id="chapter-09" className="viewport-stage bg-[#0E0D0D] border-t border-[#EFEAE4]/10">
      
      {/* Watermark Section Number */}
      <div className="watermark-number">09</div>

      <div className="editorial-grid relative z-10">
        
        {/* Section Header */}
        <div className="col-span-12 mb-12">
          <span className="text-xs font-en tracking-[0.3em] text-[#E64648] uppercase font-bold block mb-2">
            CHAPTER 09 • PACKAGING & DELIVERY
          </span>
          <h2 className="text-h1 text-[#EFEAE4] font-ar mb-6">
            {lang === 'ar' ? 'استوديو التغليف وتجربة التوصيل' : 'Packaging & Delivery Studio'}
          </h2>
          <p className="text-body-lg max-w-4xl font-ar">
            {lang === 'ar' ? 'تصل تجربة العراب الفاخرة إلى منزل العميل من خلال مواد تغليف مستدامة ومطفية تضمن حفظ الحرارة بنسبة 100% وتحافظ على قوام الخبز المقرمش.' : 'AL ARAB packaging extends our luxury hospitality into the customer’s home with greaseproof matte foils, magnetic meal boxes, and sustainable kraft carrying bags.'}
          </p>
        </div>

        {/* Packaging Selector Column */}
        <div className="col-span-12 lg:col-span-4 mb-8 flex flex-col gap-4">
          {brandInfo.packagingItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => { setSelectedItem(idx); setRotationDegree(0); }}
              className={`stage-frame p-6 cursor-pointer transition-all duration-300 ${selectedItem === idx ? 'bg-[#E64648]/15 border-[#E64648] text-[#EFEAE4]' : 'bg-[#1A1615] border-[#EFEAE4]/10 hover:bg-[#1E1A18]'}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-en font-bold text-[#E64648]">PACKAGING 0{idx + 1}</span>
                {selectedItem === idx && <CheckCircle className="w-5 h-5 text-[#E64648]" />}
              </div>
              <h3 className="font-bold text-xl font-ar mt-3">
                {lang === 'ar' ? item.titleAr : item.titleEn}
              </h3>
            </div>
          ))}
        </div>

        {/* 3D Product Stage */}
        <div className="col-span-12 lg:col-span-8 mb-8">
          <div className="stage-frame bg-[#1A1615] border-[#EFEAE4]/15 min-h-[500px] flex flex-col justify-between p-8 md:p-12 relative overflow-hidden">
            
            {/* Top Stage Specs Header */}
            <div className="flex items-center justify-between pb-6 border-b border-[#EFEAE4]/10 relative z-20">
              <span className="text-xs font-en text-[#C5A059] font-bold tracking-widest uppercase">
                3D PRODUCT INTERACTION STAGE
              </span>
              <Package className="w-6 h-6 text-[#E64648]" />
            </div>

            {/* Central Simulated 3D Rotating Product Display */}
            <div className="relative py-16 flex flex-col items-center justify-center min-h-[340px]">
              
              {/* Product Card Container with Dynamic Rotation */}
              <div 
                className="w-72 sm:w-96 h-64 rounded-2xl bg-[#0E0D0D] border-2 border-[#E64648]/40 p-8 flex flex-col items-center justify-center text-center shadow-2xl relative transition-transform duration-300"
                style={{ transform: `rotateY(${rotationDegree}deg) rotateX(5deg)` }}
              >
                <div className="w-20 h-20 rounded-full bg-[#E64648] text-[#EFEAE4] flex items-center justify-center font-bold text-2xl font-ar mb-4 shadow-lg shadow-[#E64648]/40 animate-pulse">
                  ع
                </div>
                
                <h4 className="font-bold text-xl text-[#EFEAE4] font-ar mb-2">
                  {lang === 'ar' ? brandInfo.packagingItems[selectedItem].titleAr : brandInfo.packagingItems[selectedItem].titleEn}
                </h4>

                <span className="text-[10px] font-en text-[#C5A059] tracking-widest uppercase font-bold">
                  FOOD-GRADE GREASEPROOF MATTE SEAL
                </span>
              </div>

            </div>

            {/* Bottom 3D Rotation Slider Controls */}
            <div className="pt-6 border-t border-[#EFEAE4]/10 flex flex-wrap items-center justify-between gap-4 text-xs font-en text-[#EFEAE4]/70 relative z-20">
              
              <div className="flex items-center gap-4">
                <Sliders className="w-4 h-4 text-[#E64648]" />
                <span>ROTATE PRODUCT VIEW (360°):</span>
                <input 
                  type="range" 
                  min="-60" 
                  max="60" 
                  value={rotationDegree} 
                  onChange={(e) => setRotationDegree(Number(e.target.value))}
                  className="accent-[#E64648] w-44 cursor-pointer"
                />
                <span className="font-bold text-[#E64648]">{rotationDegree}°</span>
              </div>

              <span className="text-[#C5A059] font-bold">100% RECYCLABLE KRAFT & FOIL</span>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
