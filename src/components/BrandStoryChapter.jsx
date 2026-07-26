import React from 'react';
import { brandInfo } from '../data/brandData';
import { Shield, Flame, CheckCircle, XCircle } from './Icons';

export const BrandStoryChapter = ({ lang }) => {
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
            {lang === 'ar' ? 'نحن لا نبيع وجبات سريعة، بل نقدم تجربة ضيافة سعودية رفيعة المستوى قائمة على احترام المنتج والاحتفاء بالحرفة الأصيلة.' : 'We do not sell fast food. We deliver a elevated Saudi hospitality experience built on absolute product respect and master craftsmanship.'}
          </p>
        </div>

        {/* Brand Statement Quote Card */}
        <div className="col-span-12 lg:col-span-8 editorial-card bg-[#1A1615] border-[#E64648]/30 flex flex-col justify-between mb-8">
          <div>
            <span className="text-xs font-en text-[#E64648] uppercase tracking-[0.2em] font-bold block mb-4">
              {lang === 'ar' ? 'بيان العلامة التجارية' : 'THE BRAND MANIFESTO'}
            </span>
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold text-[#EFEAE4] leading-relaxed font-ar mb-6">
              "{lang === 'ar' ? brandInfo.brandStatementAr : brandInfo.brandStatementEn}"
            </blockquote>
          </div>
          <div className="flex items-center gap-4 pt-6 border-t border-[#EFEAE4]/10 text-xs text-[#EFEAE4]/60 font-en uppercase tracking-wider">
            <span className="w-3 h-3 rounded-full bg-[#E64648]"></span>
            <span>SAUDI CULINARY HERITAGE • PURE AUTHORITY</span>
          </div>
        </div>

        {/* Pillars Summary Side Card */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 mb-8">
          
          <div className="editorial-card bg-[#1E1A18] border-[#EFEAE4]/10">
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

          <div className="editorial-card bg-[#1E1A18] border-[#EFEAE4]/10">
            <div className="flex items-center gap-3 mb-3 text-[#E64648]">
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

        {/* Comparative Positioning Table: IS vs IS NOT */}
        <div className="col-span-12 mt-8">
          <h3 className="text-h3 text-[#EFEAE4] font-ar mb-6">
            {lang === 'ar' ? 'محددات الهوية: ما هي العراب وما ليست عليه' : 'Brand Identity Boundaries: What AL ARAB Is vs Is Not'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* IS Card */}
            <div className="editorial-card bg-[#1A1615] border-emerald-900/40">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-lg mb-6 pb-4 border-b border-[#EFEAE4]/10">
                <CheckCircle className="w-5 h-5" />
                <span>{lang === 'ar' ? 'العراب تمثل:' : 'AL ARAB IS:'}</span>
              </div>
              <ul className="space-y-4 text-sm text-[#EFEAE4]/90 font-ar">
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-emerald-400"></span>{lang === 'ar' ? 'إتقان الحرفة والجودة السعودية الاصيلة' : 'Saudi Craftsmanship & Authentic Precision'}</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-emerald-400"></span>{lang === 'ar' ? 'الهيبة والرزانة والهدوء التحريري' : 'Quiet Authority & Editorial Confidence'}</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-emerald-400"></span>{lang === 'ar' ? 'احترام الطعام كبطل حقيقي للتجربة' : 'Absolute Respect for Food as the Hero'}</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-emerald-400"></span>{lang === 'ar' ? 'تصميم خالد يمتد عبر الأجيال' : 'Timeless Aesthetic built to last generations'}</li>
              </ul>
            </div>

            {/* IS NOT Card */}
            <div className="editorial-card bg-[#1A1615] border-[#E64648]/40">
              <div className="flex items-center gap-2 text-[#E64648] font-bold text-lg mb-6 pb-4 border-b border-[#EFEAE4]/10">
                <XCircle className="w-5 h-5" />
                <span>{lang === 'ar' ? 'العراب ليست:' : 'AL ARAB IS NOT:'}</span>
              </div>
              <ul className="space-y-4 text-sm text-[#EFEAE4]/90 font-ar">
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#E64648]"></span>{lang === 'ar' ? 'مطعم وجبات سريعة رخيص' : 'Cheap fast-food restaurant'}</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#E64648]"></span>{lang === 'ar' ? 'تصاميم صاخبة أو مرحة أو هزيلة' : 'Loud, trendy, or playful designs'}</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#E64648]"></span>{lang === 'ar' ? 'قوالب جاهزة أو رسوم توضيحية طفولية' : 'Generic templates or childish illustrations'}</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#E64648]"></span>{lang === 'ar' ? 'تأثيرات زجاجية أو نيومورفيسم عابرة' : 'Glassmorphism or Neumorphic gimmicks'}</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
