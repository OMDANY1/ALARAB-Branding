import React, { useState } from 'react';
import { brandInfo } from '../data/brandData';
import { Camera, Eye, Flame, Maximize, X } from './Icons';

export const PhotographyChapter = ({ lang }) => {
  const [activeMoodFilter, setActiveMoodFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [nightMode, setNightMode] = useState(true);

  return (
    <section id="chapter-07" className="viewport-stage bg-[#0E0D0D] border-t border-[#EFEAE4]/10">
      
      {/* Watermark Section Number */}
      <div className="watermark-number">07</div>

      <div className="editorial-grid relative z-10">
        
        {/* Section Header */}
        <div className="col-span-12 mb-12">
          <span className="text-xs font-en tracking-[0.3em] text-[#E64648] uppercase font-bold block mb-2">
            CHAPTER 07 • CINEMATIC ART DIRECTION
          </span>
          <h2 className="text-h1 text-[#EFEAE4] font-ar mb-6">
            {lang === 'ar' ? 'التوجيه التصويري ومعرض الضوء' : 'Photography Direction & Gallery'}
          </h2>
          <p className="text-body-lg max-w-4xl font-ar">
            {lang === 'ar' ? 'الطعام هو البطل الحقيقي دائماً. تصوير العراب يعتمد على الإضاءة الدرامية الدافئة وإبراز قوام اللحم المطهو، تصاعد الدخان، ووهج جمر الشواء.' : 'Food is always the hero. Our photography captures embers, rising steam, macro meat textures, and master chef craft—never artificial studio lights.'}
          </p>
        </div>

        {/* Photography Moodboard Cards */}
        <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {brandInfo.photographyMoods.map((mood, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedImage(mood)}
              className="stage-frame p-0 bg-[#1A1615] border-[#EFEAE4]/10 hover:border-[#E64648] group cursor-pointer transition-all overflow-hidden"
            >
              <div className="h-80 overflow-hidden relative">
                <img 
                  src={mood.img} 
                  alt={mood.titleEn} 
                  className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${nightMode ? 'brightness-90 contrast-125 saturate-110' : 'brightness-105'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1615] via-transparent to-transparent opacity-80"></div>
                
                <span className="absolute top-4 left-4 bg-[#E64648] text-[#EFEAE4] text-[10px] font-en font-bold px-3 py-1 rounded-full uppercase shadow-lg">
                  MOOD 0{idx + 1}
                </span>

                <button className="absolute bottom-4 right-4 p-3 rounded-full bg-black/60 text-[#EFEAE4] backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl text-[#EFEAE4] font-ar mb-2">
                  {lang === 'ar' ? mood.titleAr : mood.titleEn}
                </h3>
                <p className="text-xs text-[#EFEAE4]/70 font-ar leading-relaxed">
                  {lang === 'ar' ? mood.descAr : mood.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Strict Photography Art Direction Rules */}
        <div className="col-span-12">
          <div className="stage-frame bg-[#1A1615] border-[#E64648]/40 p-8 md:p-12">
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#EFEAE4]/10">
              <div className="flex items-center gap-3 text-[#E64648]">
                <Camera className="w-6 h-6" />
                <h3 className="font-bold text-2xl text-[#EFEAE4] font-ar">
                  {lang === 'ar' ? 'دستور الإخراج الفوتوغرافي الصارم' : 'Strict Art Direction Canon'}
                </h3>
              </div>
              <span className="text-xs font-en text-[#C5A059] font-bold">ZERO ARTIFICIAL PROPS</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm font-ar">
              <div className="p-6 rounded-xl bg-[#0E0D0D] border border-[#EFEAE4]/10">
                <span className="text-[#E64648] font-bold block text-base mb-2">1. الإضاءة والظلال</span>
                <p className="text-xs text-[#EFEAE4]/70 leading-relaxed">
                  {lang === 'ar' ? 'استخدام الإضاءة الدافئة الخافتة مع ظلال عميقة تبرز تفاصيل قوام الشاورما ووهج النار.' : 'Dramatic warm key lights paired with deep editorial shadows.'}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#0E0D0D] border border-[#EFEAE4]/10">
                <span className="text-[#C5A059] font-bold block text-base mb-2">2. الخامات الطبيعية</span>
                <p className="text-xs text-[#EFEAE4]/70 leading-relaxed">
                  {lang === 'ar' ? 'يمنع استخدام المكملات الملونة أو البلاستيكية؛ فقط خشب الجوز، الحديد، والحجر الأسود.' : 'Natural dark walnut, forged iron, and black stone props only.'}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#0E0D0D] border border-[#EFEAE4]/10">
                <span className="text-[#E64648] font-bold block text-base mb-2">3. لقطات الماكرو (Macro Closeup)</span>
                <p className="text-xs text-[#EFEAE4]/70 leading-relaxed">
                  {lang === 'ar' ? 'التركيز البصري القريب جداً على قطرات العصارة المقرمشة وحواف الخبز المطهو على الصاج.' : 'Extreme closeups of crisp meat edges & artisanal bread textures.'}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Fullscreen Image Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-6 md:p-12 animate-fade-in">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full border border-white/20 text-white hover:bg-[#E64648] hover:border-[#E64648] transition-all"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full flex flex-col items-center">
            <img 
              src={selectedImage.img} 
              alt={selectedImage.titleEn} 
              className="max-h-[70vh] w-auto object-contain rounded-2xl shadow-2xl border border-white/10 mb-6"
            />
            <h3 className="text-3xl font-bold font-ar text-[#EFEAE4] mb-2">
              {lang === 'ar' ? selectedImage.titleAr : selectedImage.titleEn}
            </h3>
            <p className="text-sm text-[#EFEAE4]/70 font-ar max-w-xl text-center">
              {lang === 'ar' ? selectedImage.descAr : selectedImage.descEn}
            </p>
          </div>
        </div>
      )}

    </section>
  );
};
