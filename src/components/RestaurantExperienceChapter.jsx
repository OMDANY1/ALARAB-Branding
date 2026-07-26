import React from 'react';
import { Building2, UtensilsCrossed, Monitor, MapPin } from './Icons';

export const RestaurantExperienceChapter = ({ lang }) => {
  return (
    <section id="chapter-10" className="chapter-section bg-[#141212] border-t border-[#EFEAE4]/10">
      <div className="editorial-grid">
        
        {/* Section Header */}
        <div className="col-span-12 mb-10">
          <span className="chapter-number">10</span>
          <h2 className="text-h1 text-[#EFEAE4] font-ar mb-4">
            {lang === 'ar' ? 'تجربة المطعم والتصميم المعماري' : 'Restaurant Experience'}
          </h2>
          <p className="text-body-lg max-w-3xl font-ar">
            {lang === 'ar' ? 'التصميم الداخلي لمطاعم العراب يجسد الفخامة الهادئة. خشب الجوز الداكن، لمسات النحاس، ورؤية مباشرة لصحن الشواء ووهج النار.' : 'Interior architecture at AL ARAB pairs dark walnut paneling with brass accents and open flame theatre kitchens.'}
          </p>
        </div>

        {/* Architectural Pillars Grid */}
        <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          <div className="editorial-card bg-[#1A1615] border-[#EFEAE4]/10">
            <Building2 className="w-6 h-6 text-[#E64648] mb-4" />
            <h3 className="font-bold text-lg text-[#EFEAE4] font-ar mb-2">
              {lang === 'ar' ? '1. التصميم الداخلي' : '1. Interior Architecture'}
            </h3>
            <p className="text-xs text-[#EFEAE4]/60 font-ar">
              {lang === 'ar' ? 'جدران من خشب الجوز الداكن وإضاءة خافتة مركزة على منطقة تحضير الطعام.' : 'Dark walnut paneling, dim amber spotlights focusing on open grills.'}
            </p>
          </div>

          <div className="editorial-card bg-[#1A1615] border-[#EFEAE4]/10">
            <MapPin className="w-6 h-6 text-[#C5A059] mb-4" />
            <h3 className="font-bold text-lg text-[#EFEAE4] font-ar mb-2">
              {lang === 'ar' ? '2. الواجهة واللافتات' : '2. Exterior Signage'}
            </h3>
            <p className="text-xs text-[#EFEAE4]/60 font-ar">
              {lang === 'ar' ? 'واجهة حجرية سوداء مطفية مع شعار السيخ المضاء بنحاس ناعم خافت.' : 'Matte black stone facade with backlit soft brass skewer emblem.'}
            </p>
          </div>

          <div className="editorial-card bg-[#1A1615] border-[#EFEAE4]/10">
            <Monitor className="w-6 h-6 text-[#E64648] mb-4" />
            <h3 className="font-bold text-lg text-[#EFEAE4] font-ar mb-2">
              {lang === 'ar' ? '3. الشاشات الرقمية' : '3. Digital Menu Screens'}
            </h3>
            <p className="text-xs text-[#EFEAE4]/60 font-ar">
              {lang === 'ar' ? 'شاشات قائمة الطعام تعتمد الخطوط العريضة والصور الفتوغرافية عالية الدقة بدون فوضى.' : 'Minimalist digital displays with bold editorial typography.'}
            </p>
          </div>

          <div className="editorial-card bg-[#1A1615] border-[#EFEAE4]/10">
            <UtensilsCrossed className="w-6 h-6 text-[#C5A059] mb-4" />
            <h3 className="font-bold text-lg text-[#EFEAE4] font-ar mb-2">
              {lang === 'ar' ? '4. المسرح المفتوح للنار' : '4. Open Flame Theatre'}
            </h3>
            <p className="text-xs text-[#EFEAE4]/60 font-ar">
              {lang === 'ar' ? 'زجاج شفاف عالي النقاء يظهر عملية الشواء والتقطيع أمام العميل مباشرة.' : 'Crystal clear glass showcasing open flame rotisserie & live slicing.'}
            </p>
          </div>

        </div>

        {/* Menu Specimen Card */}
        <div className="col-span-12 editorial-card bg-[#1A1615] border-[#E64648]/30">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-[#EFEAE4]/10 mb-6">
            <div>
              <span className="text-xs font-en text-[#E64648] font-bold tracking-widest uppercase block mb-1">EDITORIAL MENU DISPLAY</span>
              <h3 className="text-2xl font-bold text-[#EFEAE4] font-ar">
                {lang === 'ar' ? 'نموذج تصميم قائمة الطعام الملكية' : 'Royal Menu Layout Sample'}
              </h3>
            </div>
            <span className="text-xs font-en text-[#C5A059] border border-[#C5A059]/30 px-3 py-1 rounded-full">
              EDITORIAL 12-COL GRID
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm font-ar">
            <div className="p-6 rounded-xl bg-[#0E0D0D] border border-[#EFEAE4]/10">
              <div className="flex justify-between items-center pb-3 border-b border-[#EFEAE4]/10 mb-3">
                <span className="font-bold text-[#EFEAE4] text-base">{lang === 'ar' ? 'عراب اللحم الكلاسيكي' : 'Classic Beef Al Arab Wrap'}</span>
                <span className="font-en text-[#E64648] font-bold">SR 32</span>
              </div>
              <p className="text-xs text-[#EFEAE4]/60">{lang === 'ar' ? 'شرائح لحم بلدي مشوي على الجمر، طحينة العراب الخاصة، خبز الصاج الطازج.' : 'Charcoal grilled beef slices, signature tahini, fresh artisanal bread.'}</p>
            </div>

            <div className="p-6 rounded-xl bg-[#0E0D0D] border border-[#EFEAE4]/10">
              <div className="flex justify-between items-center pb-3 border-b border-[#EFEAE4]/10 mb-3">
                <span className="font-bold text-[#EFEAE4] text-base">{lang === 'ar' ? 'عراب الدجاج بالثوم والرمان' : 'Pomegranate Garlic Chicken Wrap'}</span>
                <span className="font-en text-[#E64648] font-bold">SR 28</span>
              </div>
              <p className="text-xs text-[#EFEAE4]/60">{lang === 'ar' ? 'دجاج متبل بأعشاب الحجاز، صوص الثوم الفاخر، قطرات دبس الرمان.' : 'Marinated chicken breast, luxury garlic spread, pomegranate reduction.'}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
