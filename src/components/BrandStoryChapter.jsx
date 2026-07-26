import React, { useState } from 'react';
import { brandInfo } from '../data/brandData';
import { Shield, Flame, CheckCircle, XCircle, Sliders } from './Icons';

export const BrandStoryChapter = ({ lang }) => {
  const [activeMetric, setActiveMetric] = useState('craft');

  const metrics = [
    { id: 'craft', val: 100, labelAr: 'إتقان الحرفة', labelEn: 'Craftsmanship Ratio', descAr: 'احترام تام لأصول الطهي والطهي اليدوي بدون اختصارات.', descEn: 'Zero shortcuts in artisanal rotisserie preparation.' },
    { id: 'fire', val: 100, labelAr: 'وهج النار والشواء', labelEn: 'Flame & Ember Heat', descAr: 'استخدام جمر الفحم الطبيعي لمنح الشاورما نكهة مدخنة نادرة.', descEn: 'Pure charcoal embers infusing deep smoky flavor notes.' },
    { id: 'knife', val: 100, labelAr: 'دقة قطع السكين', labelEn: 'Knife Slicing Precision', descAr: 'تقطيع شرائح اللحم بدقة ساطور حاد وسرعة خبير.', descEn: 'Exact macro knife angle for ideal tender slices.' },
    { id: 'heritage', val: 100, labelAr: 'الهيبة السعودية', labelEn: 'Saudi Culinary Prestige', descAr: 'هوية بصرية تعكس الرزانة والكرامة والضيافة الملكية.', descEn: 'Reflecting royal Saudi hospitality and quiet luxury.' }
  ];

  return (
    <section id="chapter-02" className="chapter-section bg-[#141212] border-t border-[#EFEAE4]/10">
      <div className="editorial-grid">
        
        {/* Section Header */}
        <div className="col-span-12 mb-12">
          <span className="chapter-number">02</span>
          <h2 className="text-h1 text-[#EFEAE4] font-ar mb-4">
            {lang === 'ar' ? 'فلسفة العلامة ورسالتها' : 'Brand Philosophy & Story'}
          </h2>
          <p className="text-body-lg max-w-3xl font-ar">
            {lang === 'ar' ? 'نحن لا نبيع وجبات سريعة، بل نقدم تجربة ضيافة سعودية رفيعة المستوى قائمة على احترام المنتج والاحتفاء بالحرفة الأصيلة.' : 'We do not sell fast food. We deliver an elevated Saudi hospitality experience built on absolute product respect and master craftsmanship.'}
          </p>
        </div>

        {/* Brand Statement Quote Card */}
        <div className="col-span-12 lg:col-span-8 editorial-card bg-[#1A1615] border-[#E64648]/30 flex flex-col justify-between mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E64648]/5 rounded-full blur-3xl pointer-events-none"></div>

          <div>
            <span className="text-xs font-en text-[#E64648] uppercase tracking-[0.2em] font-bold block mb-4">
              {lang === 'ar' ? 'بيان العلامة التجارية' : 'THE BRAND MANIFESTO'}
            </span>
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold text-[#EFEAE4] leading-relaxed font-ar mb-6 relative z-10">
              "{lang === 'ar' ? brandInfo.brandStatementAr : brandInfo.brandStatementEn}"
            </blockquote>
          </div>
          
          <div className="flex items-center justify-between pt-6 border-t border-[#EFEAE4]/10 text-xs text-[#EFEAE4]/60 font-en uppercase tracking-wider relative z-10">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#E64648] animate-pulse"></span>
              <span>SAUDI CULINARY HERITAGE • PURE AUTHORITY</span>
            </div>
            <span className="text-[#C5A059] font-bold">EST. KINGDOM OF SAUDI ARABIA</span>
          </div>
        </div>

        {/* Pillars Summary Side Card */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 mb-8">
          
          <div className="editorial-card bg-[#1E1A18] border-[#EFEAE4]/10 hover:border-[#E64648]/40 transition-all">
            <div className="flex items-center gap-3 mb-3 text-[#E64648]">
              <Flame className="w-5 h-5" />
              <h3 className="text-lg font-bold text-[#EFEAE4]">
                {lang === 'ar' ? 'الرسالة' : 'Mission'}
              </h3>
            </div>
            <p className="text-sm text-[#EFEAE4]/70 leading-relaxed font-ar">
              {lang === 'ar' ? 'تقديم أفضل تجربة شاورما في المملكة العربية السعودية بمعايير عالمية تعيد تعريف مفهوم الشاورما الشعبية إلى فخامة فاخرة.' : 'Delivering the finest shawarma experience in Saudi Arabia, redefining street food into culinary luxury.'}
            </p>
          </div>

          <div className="editorial-card bg-[#1E1A18] border-[#EFEAE4]/10 hover:border-[#E64648]/40 transition-all">
            <div className="flex items-center gap-3 mb-3 text-[#C5A059]">
              <Shield className="w-5 h-5" />
              <h3 className="text-lg font-bold text-[#EFEAE4]">
                {lang === 'ar' ? 'الرؤية' : 'Vision'}
              </h3>
            </div>
            <p className="text-sm text-[#EFEAE4]/70 leading-relaxed font-ar">
              {lang === 'ar' ? 'أن نكون العلامة السعودية الرائدة التي تمثل هيبة الطهي السعودي والحرفة الحقيقية في كل تفصيلة.' : 'To stand as the definitive Saudi identity representing culinary authority, precision, and timeless prestige.'}
            </p>
          </div>
        </div>

        {/* Interactive Brand DNA Metrics Spec */}
        <div className="col-span-12 mb-12">
          <div className="editorial-card bg-[#1A1615] border-[#C5A059]/30">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#EFEAE4]/10">
              <div className="flex items-center gap-3 text-[#C5A059]">
                <Sliders className="w-5 h-5" />
                <h3 className="font-bold text-xl text-[#EFEAE4] font-ar">
                  {lang === 'ar' ? 'مؤشرات الحمض النووي للعلامة (Brand DNA Metrics)' : 'Brand DNA Metric Analysis'}
                </h3>
              </div>
              <span className="text-xs font-en text-[#E64648] font-bold">100% CULINARY COMPLIANCE</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {metrics.map((m) => (
                <div 
                  key={m.id}
                  onClick={() => setActiveMetric(m.id)}
                  className={`p-5 rounded-xl border cursor-pointer transition-all duration-300 ${activeMetric === m.id ? 'bg-[#E64648]/15 border-[#E64648]' : 'bg-[#0E0D0D] border-[#EFEAE4]/10 hover:border-[#E64648]/50'}`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-sm text-[#EFEAE4] font-ar">{lang === 'ar' ? m.labelAr : m.labelEn}</span>
                    <span className="font-en font-bold text-xs text-[#E64648]">{m.val}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full h-1.5 bg-[#1A1615] rounded-full overflow-hidden mb-3">
                    <div className="h-full bg-[#E64648] rounded-full" style={{ width: `${m.val}%` }}></div>
                  </div>

                  <p className="text-xs text-[#EFEAE4]/60 font-ar">
                    {lang === 'ar' ? m.descAr : m.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Comparative Positioning Table: IS vs IS NOT */}
        <div className="col-span-12">
          <h3 className="text-h3 text-[#EFEAE4] font-ar mb-6">
            {lang === 'ar' ? 'محددات الهوية: ما هي العراب وما ليست عليه' : 'Brand Identity Boundaries: What AL ARAB Is vs Is Not'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* IS Card */}
            <div className="editorial-card bg-[#1A1615] border-emerald-900/40 hover:border-emerald-500/50 transition-all">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-lg mb-6 pb-4 border-b border-[#EFEAE4]/10">
                <CheckCircle className="w-5 h-5" />
                <span>{lang === 'ar' ? 'العراب تمثل:' : 'AL ARAB IS:'}</span>
              </div>
              <ul className="space-y-4 text-sm text-[#EFEAE4]/90 font-ar">
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0"></span><span>{lang === 'ar' ? 'إتقان الحرفة والجودة السعودية الاصيلة' : 'Saudi Craftsmanship & Authentic Precision'}</span></li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0"></span><span>{lang === 'ar' ? 'الهيبة والرزانة والهدوء التحريري' : 'Quiet Authority & Editorial Confidence'}</span></li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0"></span><span>{lang === 'ar' ? 'احترام الطعام كبطل حقيقي للتجربة' : 'Absolute Respect for Food as the Hero'}</span></li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0"></span><span>{lang === 'ar' ? 'تصميم خالد يمتد عبر الأجيال' : 'Timeless Aesthetic built to last generations'}</span></li>
              </ul>
            </div>

            {/* IS NOT Card */}
            <div className="editorial-card bg-[#1A1615] border-[#E64648]/40 hover:border-[#E64648] transition-all">
              <div className="flex items-center gap-2 text-[#E64648] font-bold text-lg mb-6 pb-4 border-b border-[#EFEAE4]/10">
                <XCircle className="w-5 h-5" />
                <span>{lang === 'ar' ? 'العراب ليست:' : 'AL ARAB IS NOT:'}</span>
              </div>
              <ul className="space-y-4 text-sm text-[#EFEAE4]/90 font-ar">
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-[#E64648] mt-2 shrink-0"></span><span>{lang === 'ar' ? 'مطعم وجبات سريعة رخيص' : 'Cheap fast-food restaurant'}</span></li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-[#E64648] mt-2 shrink-0"></span><span>{lang === 'ar' ? 'تصاميم صاخبة أو مرحة أو هزيلة' : 'Loud, trendy, or playful designs'}</span></li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-[#E64648] mt-2 shrink-0"></span><span>{lang === 'ar' ? 'قوالب جاهزة أو رسوم توضيحية طفولية' : 'Generic templates or childish illustrations'}</span></li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-[#E64648] mt-2 shrink-0"></span><span>{lang === 'ar' ? 'تأثيرات زجاجية أو نيومورفيسم عابرة' : 'Glassmorphism or Neumorphic gimmicks'}</span></li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
