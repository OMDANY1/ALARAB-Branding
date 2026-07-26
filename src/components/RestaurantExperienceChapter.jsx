import React, { useState } from 'react';
import { Building2, UtensilsCrossed, Monitor, MapPin, Info } from './Icons';

export const RestaurantExperienceChapter = ({ lang }) => {
  const [activeSpatialPin, setActiveSpatialPin] = useState(1);

  const spatialPins = [
    { id: 1, nameAr: 'مسرح النار والشواء المفتوح', nameEn: 'Open Flame Theatre Kitchen', descAr: 'زجاج شفاف عالي النقاء يتيح للعميل مشاهدة طهي الشاورما على الفحم وتقطيعها بالسكين.', icon: UtensilsCrossed },
    { id: 2, nameAr: 'التصميم الداخلي وخشب الجوز', nameEn: 'Dark Walnut Interior Architecture', descAr: 'جدران مغطاة بألواح خشب الجوز الداكن مع إضاءة عنبرية خافتة تركز على الطعام.', icon: Building2 },
    { id: 3, nameAr: 'الواجهة الحجرية واللافتات', nameEn: 'Matte Facade & Brass Signage', descAr: 'واجهة سوداء مطفية مزودة بشعار السيخ المصنوع من النحاس الناعم والمضاء خلفياً.', icon: MapPin },
    { id: 4, nameAr: 'قائمة الطعام الرقمية التحريرية', nameEn: 'Editorial Digital Menu Monitors', descAr: 'شاشات عرض قائمة الطعام بتصميم تحريري عريض بدقة عالية بدون أي عناصر مزعجة.', icon: Monitor }
  ];

  return (
    <section id="chapter-10" className="viewport-stage bg-[#141212] border-t border-[#EFEAE4]/10">
      
      {/* Watermark Section Number */}
      <div className="watermark-number">10</div>

      <div className="editorial-grid relative z-10">
        
        {/* Section Header */}
        <div className="col-span-12 mb-12">
          <span className="text-xs font-en tracking-[0.3em] text-[#E64648] uppercase font-bold block mb-2">
            CHAPTER 10 • ARCHITECTURAL SPATIAL EXPERIENCE
          </span>
          <h2 className="text-h1 text-[#EFEAE4] font-ar mb-6">
            {lang === 'ar' ? 'التصميم المعماري وتجربة المطعم' : 'Restaurant Experience & Spatial Concept'}
          </h2>
          <p className="text-body-lg max-w-4xl font-ar">
            {lang === 'ar' ? 'التصميم الداخلي لمطاعم العراب يجسد الفخامة الهادئة والرزانة المعمارية. خشب الجوز الداكن، لمسات النحاس، ورؤية مباشرة لصحن الشواء ووهج النار.' : 'Interior architecture at AL ARAB pairs dark walnut paneling with brass accents and open flame theatre kitchens—redefining restaurant design into spatial luxury.'}
          </p>
        </div>

        {/* Spatial Pins Navigation Cards */}
        <div className="col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {spatialPins.map((pin) => {
            const PinIcon = pin.icon;
            return (
              <div
                key={pin.id}
                onClick={() => setActiveSpatialPin(pin.id)}
                className={`stage-frame p-6 cursor-pointer transition-all ${activeSpatialPin === pin.id ? 'bg-[#E64648]/15 border-[#E64648]' : 'bg-[#1A1615] border-[#EFEAE4]/10 hover:border-[#E64648]/40'}`}
              >
                <div className="flex justify-between items-center mb-4">
                  <PinIcon className={`w-6 h-6 ${activeSpatialPin === pin.id ? 'text-[#E64648]' : 'text-[#C5A059]'}`} />
                  <span className="text-xs font-en font-bold text-[#E64648]">PIN 0{pin.id}</span>
                </div>
                <h3 className="font-bold text-lg text-[#EFEAE4] font-ar mb-2">
                  {lang === 'ar' ? pin.nameAr : pin.nameEn}
                </h3>
                <p className="text-xs text-[#EFEAE4]/60 font-ar leading-relaxed">
                  {lang === 'ar' ? pin.descAr : pin.descEn}
                </p>
              </div>
            );
          })}
        </div>

        {/* Fullscreen Menu Specimen Display */}
        <div className="col-span-12">
          <div className="stage-frame bg-[#1A1615] border-[#E64648]/40 p-8 md:p-12">
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-[#EFEAE4]/10 mb-8">
              <div>
                <span className="text-xs font-en text-[#E64648] font-bold tracking-widest uppercase block mb-1">EDITORIAL MENU DISPLAY SPECIMEN</span>
                <h3 className="text-3xl font-bold text-[#EFEAE4] font-ar">
                  {lang === 'ar' ? 'قائمة الطعام الملكية المعروضة على الشاشات' : 'Royal Editorial Menu Display Screen'}
                </h3>
              </div>
              <span className="text-xs font-en text-[#C5A059] border border-[#C5A059]/30 px-4 py-1.5 rounded-full font-bold">
                12-COLUMN GRID ALIGNMENT
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm font-ar">
              <div className="p-8 rounded-2xl bg-[#0E0D0D] border border-[#E64648]/30">
                <div className="flex justify-between items-center pb-4 border-b border-[#EFEAE4]/10 mb-4">
                  <span className="font-bold text-[#EFEAE4] text-xl">{lang === 'ar' ? 'عراب اللحم الكلاسيكي الملكي' : 'Classic Royal Beef Al Arab Wrap'}</span>
                  <span className="font-en text-[#E64648] font-bold text-lg">SR 32</span>
                </div>
                <p className="text-xs text-[#EFEAE4]/70 leading-relaxed">{lang === 'ar' ? 'شرائح لحم بلدي طازج مطهو على جمر الفحم، طحينة العراب السرية، خبز الصاج الساخن.' : 'Charcoal grilled beef slices, signature tahini, fresh artisanal sourdough wrap.'}</p>
              </div>

              <div className="p-8 rounded-2xl bg-[#0E0D0D] border border-[#EFEAE4]/10">
                <div className="flex justify-between items-center pb-4 border-b border-[#EFEAE4]/10 mb-4">
                  <span className="font-bold text-[#EFEAE4] text-xl">{lang === 'ar' ? 'عراب الدجاج بالثوم ودبس الرمان' : 'Pomegranate Garlic Chicken Wrap'}</span>
                  <span className="font-en text-[#E64648] font-bold text-lg">SR 28</span>
                </div>
                <p className="text-xs text-[#EFEAE4]/70 leading-relaxed">{lang === 'ar' ? 'دجاج متبل بأعشاب الحجاز، صوص الثوم الفاخر، قطرات دبس الرمان الأصيل.' : 'Marinated chicken breast, luxury garlic spread, pomegranate reduction.'}</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
