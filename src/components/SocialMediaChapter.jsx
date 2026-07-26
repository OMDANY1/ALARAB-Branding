import React, { useState } from 'react';
import { Instagram, Smartphone, Video } from './Icons';

export const SocialMediaChapter = ({ lang }) => {
  const [activeTab, setActiveTab] = useState('post'); // 'post' | 'story' | 'motion'

  return (
    <section id="chapter-11" className="viewport-stage bg-[#0E0D0D] border-t border-[#EFEAE4]/10">
      
      {/* Watermark Section Number */}
      <div className="watermark-number">11</div>

      <div className="editorial-grid relative z-10">
        
        {/* Section Header */}
        <div className="col-span-12 mb-12">
          <span className="text-xs font-en tracking-[0.3em] text-[#E64648] uppercase font-bold block mb-2">
            CHAPTER 11 • DIGITAL SOCIAL MEDIA STUDIO
          </span>
          <h2 className="text-h1 text-[#EFEAE4] font-ar mb-6">
            {lang === 'ar' ? 'التوجيه الرقمي واستوديو التواصل' : 'Social Media & Digital Motion Studio'}
          </h2>
          <p className="text-body-lg max-w-4xl font-ar">
            {lang === 'ar' ? 'تظهر منصات التواصل الاجتماعي لعلامة العراب كمعرض فني سينمائي. نستخدم مقاطع فيديو بطيئة (120fps) تبرز الدخان والطهي بدون أي ملصقات أو نصوص صارخة.' : 'Our social channels act as a luxury digital gallery—utilizing 120fps slow-motion smoke clips, editorial copy, and zero noisy sticker overlays.'}
          </p>
        </div>

        {/* Device Feed Preview Simulator */}
        <div className="col-span-12 lg:col-span-8 mb-8">
          <div className="stage-frame bg-[#1A1615] border-[#EFEAE4]/15 min-h-[500px] p-8 md:p-12 flex flex-col justify-between">
            
            {/* Simulator Header & Tab Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#EFEAE4]/10">
              <div className="flex items-center gap-2 text-[#E64648]">
                <Instagram className="w-5 h-5" />
                <span className="font-bold text-sm font-en">@SHAWRMA.ALARAB</span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab('post')}
                  className={`px-4 py-1.5 rounded-lg text-xs font-en transition-all ${activeTab === 'post' ? 'bg-[#E64648] text-[#EFEAE4]' : 'bg-[#0E0D0D] text-[#EFEAE4]/60'}`}
                >
                  4:5 FEED POST
                </button>
                <button
                  onClick={() => setActiveTab('story')}
                  className={`px-4 py-1.5 rounded-lg text-xs font-en transition-all ${activeTab === 'story' ? 'bg-[#C5A059] text-black font-bold' : 'bg-[#0E0D0D] text-[#EFEAE4]/60'}`}
                >
                  9:16 STORY REEL
                </button>
              </div>
            </div>

            {/* Device Screen Frame */}
            <div className="my-8 flex items-center justify-center">
              <div className="w-80 sm:w-96 rounded-3xl bg-[#0E0D0D] border-4 border-[#EFEAE4]/20 p-4 shadow-2xl overflow-hidden relative">
                
                {/* Simulated Screen Content */}
                <div className={`rounded-2xl bg-[#141212] border border-[#E64648]/30 overflow-hidden flex flex-col justify-end p-6 relative ${activeTab === 'story' ? 'h-96' : 'h-80'}`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0D] via-transparent to-transparent"></div>
                  
                  <span className="text-[10px] font-en text-[#E64648] tracking-widest uppercase font-bold mb-1 z-10">
                    {activeTab === 'story' ? 'INSTAGRAM STORY • CULINARY MOTION' : 'INSTAGRAM POST • EDITORIAL 4:5'}
                  </span>
                  
                  <h4 className="text-2xl font-bold font-ar text-[#EFEAE4] z-10 leading-tight">
                    {lang === 'ar' ? 'الأصالة السعودية. دقة الحرفة. هيبة المذاق.' : 'Saudi Heritage. Pure Culinary Authority.'}
                  </h4>
                </div>

              </div>
            </div>

            {/* Simulator Footer Specs */}
            <div className="pt-4 border-t border-[#EFEAE4]/10 text-xs font-en text-[#EFEAE4]/50 text-center">
              EDITORIAL PROPORTIONS: 4:5 ASPECT RATIO (1080x1350PX) & 9:16 (1080x1920PX)
            </div>

          </div>
        </div>

        {/* Video Motion Rules Sidebar */}
        <div className="col-span-12 lg:col-span-4 mb-8 flex flex-col gap-4">
          <div className="stage-frame bg-[#1A1615] border-[#E64648]/40 p-6">
            <Video className="w-6 h-6 text-[#E64648] mb-3" />
            <h3 className="font-bold text-lg text-[#EFEAE4] font-ar mb-2">
              {lang === 'ar' ? 'دستور الفيديو والحركة' : 'Video Motion Rules'}
            </h3>
            <ul className="text-xs text-[#EFEAE4]/70 space-y-3 font-ar leading-relaxed">
              <li>• التصوير دائماً بسرعة 120 إطار في الثانية (Slow Motion).</li>
              <li>• يُمنع الانتقالات السريعة الصارخة أو الموسيقى الشعبية الصاخبة.</li>
              <li>• الصوت المصاحب هو صوت حقيقي لجمر الشواء وتقطيع الخبز.</li>
            </ul>
          </div>

          <div className="stage-frame bg-[#1A1615] border-[#C5A059]/40 p-6">
            <Smartphone className="w-6 h-6 text-[#C5A059] mb-3" />
            <h3 className="font-bold text-lg text-[#EFEAE4] font-ar mb-2">
              {lang === 'ar' ? 'أسلوب النصوص والتعليقات' : 'Copywriting Style'}
            </h3>
            <p className="text-xs text-[#EFEAE4]/70 font-ar leading-relaxed">
              {lang === 'ar' ? 'النصوص قصيرة ومباشرة وتهمس بالهيبة والثقة. لا نستخدم الإيموجيز الكثيرة أو العروض الهزيلة.' : 'Concise editorial captions highlighting pride & craft. Zero emoji clutter.'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
