import React from 'react';
import { LayoutGrid, Maximize, Columns, Divide } from './Icons';

export const GraphicLanguageChapter = ({ lang }) => {
  return (
    <section id="chapter-08" className="chapter-section bg-[#141212] border-t border-[#EFEAE4]/10">
      <div className="editorial-grid">
        
        {/* Section Header */}
        <div className="col-span-12 mb-10">
          <span className="chapter-number">08</span>
          <h2 className="text-h1 text-[#EFEAE4] font-ar mb-4">
            {lang === 'ar' ? 'اللغة الجرافيكية والشبكة' : 'Graphic Language & Grid'}
          </h2>
          <p className="text-body-lg max-w-3xl font-ar">
            {lang === 'ar' ? 'التصميم في العراب يعتمد على الهوامش الكبيرة والشبكة التحريرية ذات الـ 12 عموداً. المساحة الفارغة ليست فراغاً، بل هي تنفس بصير يمنح العلامة فخامتها.' : 'Our graphic language employs 12-column editorial grids with immense negative space—allowing every asset to radiate quiet luxury.'}
          </p>
        </div>

        {/* Interactive 12-Column Visualizer Card */}
        <div className="col-span-12 editorial-card bg-[#1A1615] border-[#EFEAE4]/10 mb-8 p-8">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-en text-[#E64648] font-bold tracking-widest uppercase">
              EDITORIAL 12-COLUMN STRUCTURAL GRID
            </span>
            <LayoutGrid className="w-5 h-5 text-[#C5A059]" />
          </div>

          {/* Grid Simulation Visual */}
          <div className="grid grid-cols-12 gap-3 h-32 w-full my-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="bg-[#0E0D0D] border border-[#E64648]/30 rounded-lg flex flex-col items-center justify-center text-[10px] font-en text-[#E64648]">
                <span>COL</span>
                <span className="font-bold">{i + 1}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#EFEAE4]/60 font-ar text-center mt-4">
            {lang === 'ar' ? 'شبكة متوازنة تضمن الهارموني بين النصوص العريضة والصور التحريرية الحجم' : 'Balanced grid structure ensuring seamless harmony between editorial typography & full-bleed visuals'}
          </p>
        </div>

        {/* Graphic Language Rules */}
        <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="editorial-card bg-[#1A1615] border-[#EFEAE4]/10">
            <Maximize className="w-6 h-6 text-[#E64648] mb-4" />
            <h3 className="font-bold text-lg text-[#EFEAE4] font-ar mb-2">
              {lang === 'ar' ? '1. الهوامش العريضة' : '1. Generous Margins'}
            </h3>
            <p className="text-xs text-[#EFEAE4]/60 font-ar">
              {lang === 'ar' ? 'ترك مسافات واسعة بين الأقسام تمنح العين راحة وتأكيداً على أهمية كل عنصر.' : 'Expansive whitespace preventing crowded layouts.'}
            </p>
          </div>

          <div className="editorial-card bg-[#1A1615] border-[#EFEAE4]/10">
            <Columns className="w-6 h-6 text-[#C5A059] mb-4" />
            <h3 className="font-bold text-lg text-[#EFEAE4] font-ar mb-2">
              {lang === 'ar' ? '2. التباين اللا متماثل' : '2. Asymmetric Balance'}
            </h3>
            <p className="text-xs text-[#EFEAE4]/60 font-ar">
              {lang === 'ar' ? 'دمج النصوص الضخمة مع المساحات الداكنة لتشغيل الحس الإخراجي التحريري.' : 'Juxtaposing large display headlines with dark space.'}
            </p>
          </div>

          <div className="editorial-card bg-[#1A1615] border-[#EFEAE4]/10">
            <Divide className="w-6 h-6 text-[#E64648] mb-4" />
            <h3 className="font-bold text-lg text-[#EFEAE4] font-ar mb-2">
              {lang === 'ar' ? '3. الخطوط الفاصلة الدقيقة' : '3. Hairline Dividers'}
            </h3>
            <p className="text-xs text-[#EFEAE4]/60 font-ar">
              {lang === 'ar' ? 'استخدام خطوط حدية شفافة (1px) لتنظيم المعلومات بدقة هندسية عالية.' : 'Ultra-fine 1px border lines defining structural boundaries.'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
