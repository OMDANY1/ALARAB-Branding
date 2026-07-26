import React, { useState } from 'react';
import { brandInfo } from '../data/brandData';
import { Copy, Check } from './Icons';

export const ColorSystemChapter = ({ lang }) => {
  const [copiedHex, setCopiedHex] = useState(null);

  const handleCopy = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <section id="chapter-06" className="chapter-section bg-[#141212] border-t border-[#EFEAE4]/10">
      <div className="editorial-grid">
        
        {/* Section Header */}
        <div className="col-span-12 mb-10">
          <span className="chapter-number">06</span>
          <h2 className="text-h1 text-[#EFEAE4] font-ar mb-4">
            {lang === 'ar' ? 'نظام لوحة الألوان' : 'Color System'}
          </h2>
          <p className="text-body-lg max-w-3xl font-ar">
            {lang === 'ar' ? 'تستند لوحة ألوان العراب على التباين العميق بين الأحمر العنابي الساطع والعاجي الدافئ والفحم الداكن، مستوحاة من حرارة جمر الشواء وهيبة الضيافة.' : 'Our color system thrives on deep editorial contrast between Primary Burgundy (#E64648), Warm Cream (#EFEAE4), and Deep Charcoal.'}
          </p>
        </div>

        {/* Color Swatches Grid */}
        <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {brandInfo.colors.map((color, idx) => (
            <div 
              key={idx} 
              className="editorial-card bg-[#1A1615] border-[#EFEAE4]/10 hover:border-[#E64648]/40 flex flex-col justify-between"
            >
              {/* Color Visual Block */}
              <div 
                className="w-full h-44 rounded-xl mb-6 flex items-end justify-between p-4 shadow-inner relative overflow-hidden transition-transform duration-500 hover:scale-[1.02]"
                style={{ backgroundColor: color.hex }}
              >
                <span className={`text-xs font-bold font-en px-3 py-1 rounded-full ${color.hex === '#EFEAE4' || color.hex === '#C5A059' ? 'bg-black/80 text-[#EFEAE4]' : 'bg-white/80 text-black'}`}>
                  {color.hex}
                </span>

                <button
                  onClick={() => handleCopy(color.hex)}
                  className="p-2 rounded-full bg-black/60 text-[#EFEAE4] hover:bg-black transition-all"
                  title="Copy Hex Code"
                >
                  {copiedHex === color.hex ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Color Details */}
              <div>
                <h3 className="text-xl font-bold text-[#EFEAE4] font-ar mb-1">
                  {lang === 'ar' ? color.nameAr : color.nameEn}
                </h3>
                <p className="text-xs text-[#EFEAE4]/60 font-ar mb-4">
                  {lang === 'ar' ? color.roleAr : color.roleEn}
                </p>

                {/* Technical Specs Table */}
                <div className="grid grid-cols-2 gap-2 text-[11px] font-en pt-3 border-t border-[#EFEAE4]/10 text-[#EFEAE4]/50">
                  <div><span className="text-[#E64648]">RGB:</span> {color.rgb}</div>
                  <div><span className="text-[#E64648]">CMYK:</span> {color.cmyk}</div>
                  <div><span className="text-[#E64648]">PANTONE:</span> {color.pantone}</div>
                  <div><span className="text-[#E64648]">HEX:</span> {color.hex}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Color Pairing Harmony Showcase */}
        <div className="col-span-12 mt-4">
          <h3 className="text-h3 text-[#EFEAE4] font-ar mb-6">
            {lang === 'ar' ? 'التوافق والتباين البصري للألوان' : 'Color Combinations & Contrast Harmony'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-8 rounded-xl bg-[#0E0D0D] border border-[#E64648]/40 text-[#EFEAE4]">
              <span className="text-[10px] font-en text-[#E64648] uppercase tracking-widest block mb-2">PRIMARY BURGUNDY ON CHARCOAL</span>
              <h4 className="text-3xl font-black font-ar text-[#E64648] mb-2">شاورما العراب</h4>
              <p className="text-xs text-[#EFEAE4]/70">Highest visual priority for logo marks & hero calls to action.</p>
            </div>

            <div className="p-8 rounded-xl bg-[#0E0D0D] border border-[#EFEAE4]/20 text-[#EFEAE4]">
              <span className="text-[10px] font-en text-[#C5A059] uppercase tracking-widest block mb-2">WARM CREAM ON CHARCOAL</span>
              <h4 className="text-3xl font-bold font-ar text-[#EFEAE4] mb-2">شاورما العراب</h4>
              <p className="text-xs text-[#EFEAE4]/70">Primary editorial text hierarchy ensuring supreme legibility.</p>
            </div>

            <div className="p-8 rounded-xl bg-[#E64648] text-[#EFEAE4]">
              <span className="text-[10px] font-en text-black/70 uppercase tracking-widest block mb-2">WARM CREAM ON BURGUNDY</span>
              <h4 className="text-3xl font-black font-ar text-[#EFEAE4] mb-2">شاورما العراب</h4>
              <p className="text-xs text-[#EFEAE4]/90">High-impact brand packaging & promotional billboards.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
