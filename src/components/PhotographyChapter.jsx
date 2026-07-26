import React from 'react';
import { brandInfo } from '../data/brandData';
import { Camera } from './Icons';

export const PhotographyChapter = ({ lang }) => {
  return (
    <section id="chapter-07" className="chapter-section bg-[#0E0D0D] border-t border-[#EFEAE4]/10">
      <div className="editorial-grid">
        
        {/* Section Header */}
        <div className="col-span-12 mb-10">
          <span className="chapter-number">07</span>
          <h2 className="text-h1 text-[#EFEAE4] font-ar mb-4">
            {lang === 'ar' ? 'التوجيه التصويري والفوتوغرافي' : 'Photography Direction'}
          </h2>
          <p className="text-body-lg max-w-3xl font-ar">
            {lang === 'ar' ? 'الطعام هو البطل الحقيقي دائماً. تصوير العراب يعتمد على الضوء الدافئ والظلال العميقة وإبراز الدخان ووهج النار وقوام الخبز الساخن والسكاكين الحادة.' : 'Food is always the hero. Our photography captures fire embers, steam rising, macro meat texture, and master chef hands—never bright artificial studio lights.'}
          </p>
        </div>

        {/* Photography Pillars Grid */}
        <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {brandInfo.photographyMoods.map((mood, idx) => (
            <div key={idx} className="editorial-card bg-[#1A1615] border-[#EFEAE4]/10 p-0 overflow-hidden group">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={mood.img} 
                  alt={mood.titleEn} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1615] via-transparent to-transparent"></div>
                <span className="absolute top-3 left-3 bg-[#E64648] text-[#EFEAE4] text-[10px] font-en font-bold px-2.5 py-1 rounded-full uppercase">
                  MOOD 0{idx + 1}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-[#EFEAE4] font-ar mb-2">
                  {lang === 'ar' ? mood.titleAr : mood.titleEn}
                </h3>
                <p className="text-xs text-[#EFEAE4]/60 font-ar">
                  {lang === 'ar' ? mood.descAr : mood.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Strict Photography Rules List */}
        <div className="col-span-12 editorial-card bg-[#1A1615] border-[#E64648]/30">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#EFEAE4]/10">
            <Camera className="w-6 h-6 text-[#E64648]" />
            <h3 className="text-xl font-bold text-[#EFEAE4] font-ar">
              {lang === 'ar' ? 'قواعد إخراج الصور الفوتوغرافية' : 'Photography Art Direction Rules'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#EFEAE4]/80 font-ar">
            <div className="p-4 rounded-lg bg-[#0E0D0D] border border-[#EFEAE4]/5">
              <span className="text-[#E64648] font-bold block mb-1">1. الإضاءة والظلال</span>
              {lang === 'ar' ? 'استخدام الإضاءة الدرامية الدافئة مع ظلال عميقة تعكس جو المطعم الفاخر.' : 'Dramatic warm key light with deep shadows.'}
            </div>

            <div className="p-4 rounded-lg bg-[#0E0D0D] border border-[#EFEAE4]/5">
              <span className="text-[#E64648] font-bold block mb-1">2. العناصر والمكملات</span>
              {lang === 'ar' ? 'يُمنع استخدام أي عناصر ملونة مصطنعة؛ التركيز فقط على السكين، الخشب، والحديد.' : 'Only natural wood, metal knives & stone props.'}
            </div>

            <div className="p-4 rounded-lg bg-[#0E0D0D] border border-[#EFEAE4]/5">
              <span className="text-[#E64648] font-bold block mb-1">3. التركيز البصري Macro</span>
              {lang === 'ar' ? 'التقاط تفاصيل ملمس اللحم المطهو بدقة وقطرات العصارة والخبز الساخن.' : 'Extreme macro closeups of meat juice & crisp bread texture.'}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
