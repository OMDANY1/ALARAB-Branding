import React from 'react';
import { Instagram, Smartphone, Video } from './Icons';

export const SocialMediaChapter = ({ lang }) => {
  return (
    <section id="chapter-11" className="chapter-section bg-[#0E0D0D] border-t border-[#EFEAE4]/10">
      <div className="editorial-grid">
        
        {/* Section Header */}
        <div className="col-span-12 mb-10">
          <span className="chapter-number">11</span>
          <h2 className="text-h1 text-[#EFEAE4] font-ar mb-4">
            {lang === 'ar' ? 'التوجيه الرقمي والتواصل الاجتماعي' : 'Social Media Direction'}
          </h2>
          <p className="text-body-lg max-w-3xl font-ar">
            {lang === 'ar' ? 'تظهر منصات التواصل الاجتماعي لعلامة العراب كمعرض فني سينمائي. نستخدم مقاطع فيديو بطيئة (120fps) تبرز الدخان والطهي بدون صخب.' : 'Our social channels act as a luxury digital gallery—utilizing 120fps slow-motion smoke clips, editorial copy, and zero noisy sticker overlays.'}
          </p>
        </div>

        {/* Mockups Grid: Posts & Stories */}
        <div className="col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          
          {/* Post Mockup 1 */}
          <div className="editorial-card bg-[#1A1615] border-[#EFEAE4]/10 p-4 rounded-xl">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#EFEAE4]/10 text-xs">
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#E64648]" />
                <span className="font-bold font-en text-[#EFEAE4]">@SHAWRMA.ALARAB</span>
              </div>
              <span className="text-[10px] font-en text-[#EFEAE4]/40">INSTAGRAM 4:5 POST</span>
            </div>

            <div className="h-72 bg-[#0E0D0D] rounded-lg relative overflow-hidden flex flex-col justify-end p-6 border border-[#E64648]/20">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0D] via-transparent to-transparent"></div>
              <span className="text-xs font-en text-[#E64648] tracking-widest uppercase mb-1 font-bold z-10">CHAPTER 01 • FIRE & SMOKE</span>
              <h4 className="text-2xl font-bold font-ar text-[#EFEAE4] z-10">الأصالة السعودية. دقة الحرفة.</h4>
            </div>
          </div>

          {/* Post Mockup 2 */}
          <div className="editorial-card bg-[#1A1615] border-[#EFEAE4]/10 p-4 rounded-xl">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#EFEAE4]/10 text-xs">
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#E64648]" />
                <span className="font-bold font-en text-[#EFEAE4]">@SHAWRMA.ALARAB</span>
              </div>
              <span className="text-[10px] font-en text-[#EFEAE4]/40">INSTAGRAM STORY 9:16</span>
            </div>

            <div className="h-72 bg-[#0E0D0D] rounded-lg relative overflow-hidden flex flex-col justify-end p-6 border border-[#C5A059]/20">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0D] via-transparent to-transparent"></div>
              <span className="text-xs font-en text-[#C5A059] tracking-widest uppercase mb-1 font-bold z-10">THE CRAFT OF CUTTING</span>
              <h4 className="text-2xl font-bold font-ar text-[#EFEAE4] z-10">هيبة السكين ووهج النار.</h4>
            </div>
          </div>

        </div>

        {/* Social Guidelines Rules */}
        <div className="col-span-12 lg:col-span-4 mb-8 flex flex-col gap-4">
          <div className="editorial-card bg-[#1A1615] border-[#E64648]/30">
            <Video className="w-6 h-6 text-[#E64648] mb-3" />
            <h3 className="font-bold text-lg text-[#EFEAE4] font-ar mb-2">
              {lang === 'ar' ? 'توجيه الحركة والفيديو' : 'Video Motion Rules'}
            </h3>
            <ul className="text-xs text-[#EFEAE4]/70 space-y-2 font-ar">
              <li>• التصوير دائماً بسرعة 120 إطار في الثانية (Slow Motion).</li>
              <li>• يُمنع الانتقالات السريعة الصارخة أو الموسيقى الشعبية الصاخبة.</li>
              <li>• الصوت المصاحب هو صوت حقيقي لجمر الشواء وتقطيع الخبز.</li>
            </ul>
          </div>

          <div className="editorial-card bg-[#1A1615] border-[#C5A059]/30">
            <Smartphone className="w-6 h-6 text-[#C5A059] mb-3" />
            <h3 className="font-bold text-lg text-[#EFEAE4] font-ar mb-2">
              {lang === 'ar' ? 'أسلوب النصوص والتعليقات' : 'Copywriting Style'}
            </h3>
            <p className="text-xs text-[#EFEAE4]/70 font-ar">
              {lang === 'ar' ? 'النصوص قصيرة ومباشرة وتهمس بالهيبة والثقة. لا نستخدم الإيموجيز الكثيرة أو العروض الهزيلة.' : 'Concise editorial captions highlighting pride & craft. Zero emoji clutter.'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
