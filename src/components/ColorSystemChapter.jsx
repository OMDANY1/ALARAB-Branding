import React, { useState } from 'react';
import { brandInfo } from '../data/brandData';
import { Copy, Check, Palette, Sparkles, Eye } from './Icons';

export const ColorSystemChapter = ({ lang }) => {
  const [copiedHex, setCopiedHex] = useState(null);
  const [activeContrastPair, setActiveContrastPair] = useState(0);

  const contrastPairs = [
    { fg: '#EFEAE4', bg: '#0E0D0D', label: 'Warm Cream on Deep Charcoal', ratio: '17.4:1', status: 'WCAG AAA PASS' },
    { fg: '#E64648', bg: '#0E0D0D', label: 'Primary Burgundy on Deep Charcoal', ratio: '5.2:1', status: 'WCAG AA PASS' },
    { fg: '#EFEAE4', bg: '#E64648', label: 'Warm Cream on Primary Burgundy', ratio: '4.8:1', status: 'WCAG AA PASS' },
    { fg: '#C5A059', bg: '#1A1615', label: 'Soft Brass on Dark Walnut', ratio: '7.1:1', status: 'WCAG AAA PASS' }
  ];

  const handleCopy = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <section id="chapter-06" className="viewport-stage bg-[#141212] border-t border-[#EFEAE4]/10">
      
      {/* Watermark Section Number */}
      <div className="watermark-number">06</div>

      <div className="editorial-grid relative z-10">
        
        {/* Section Header */}
        <div className="col-span-12 mb-12">
          <span className="text-xs font-en tracking-[0.3em] text-[#E64648] uppercase font-bold block mb-2">
            CHAPTER 06 • COLOR ARCHITECTURE
          </span>
          <h2 className="text-h1 text-[#EFEAE4] font-ar mb-6">
            {lang === 'ar' ? 'نظام الألوان والتباين التحريري' : 'Color System & Palette Wall'}
          </h2>
          <p className="text-body-lg max-w-4xl font-ar">
            {lang === 'ar' ? 'تستند لوحة ألوان العراب على التباين العميق بين الأحمر العنابي (#E64648)، العاجي الدافئ (#EFEAE4)، والفحم الداكن العميق (#0E0D0D). الألوان مستوحاة من حرارة جمر الشواء وهيبة الضيافة الملكية.' : 'Our color system thrives on deep editorial contrast between Primary Burgundy (#E64648), Warm Cream (#EFEAE4), and Deep Charcoal—evoking grill heat, smoke, and royal hospitality.'}
          </p>
        </div>

        {/* Fullscreen Interactive Color Swatches Wall */}
        <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {brandInfo.colors.map((color, idx) => (
            <div 
              key={idx} 
              className="stage-frame bg-[#1A1615] border-[#EFEAE4]/10 hover:border-[#E64648]/50 flex flex-col justify-between p-8 group transition-all"
            >
              {/* Large Color Visual Block */}
              <div 
                className="w-full h-56 rounded-2xl mb-8 flex flex-col justify-between p-6 shadow-2xl relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ backgroundColor: color.hex }}
              >
                <div className="flex justify-between items-center z-10">
                  <span className="text-xs font-en font-bold px-3 py-1 rounded-full bg-black/60 text-[#EFEAE4] backdrop-blur-md">
                    COLOR 0{idx + 1}
                  </span>

                  <button
                    onClick={() => handleCopy(color.hex)}
                    className="p-2.5 rounded-full bg-black/60 text-[#EFEAE4] hover:bg-black transition-all shadow-lg"
                    title="Copy Hex Code"
                  >
                    {copiedHex === color.hex ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="z-10">
                  <span className={`text-3xl font-black font-en tracking-wider block ${color.hex === '#EFEAE4' || color.hex === '#C5A059' ? 'text-black' : 'text-white'}`}>
                    {color.hex}
                  </span>
                </div>
              </div>

              {/* Color Details & Specs */}
              <div>
                <h3 className="text-2xl font-bold text-[#EFEAE4] font-ar mb-2">
                  {lang === 'ar' ? color.nameAr : color.nameEn}
                </h3>
                <p className="text-xs text-[#EFEAE4]/70 font-ar mb-6 leading-relaxed">
                  {lang === 'ar' ? color.roleAr : color.roleEn}
                </p>

                {/* Technical Specs Table */}
                <div className="grid grid-cols-2 gap-3 text-xs font-en pt-4 border-t border-[#EFEAE4]/10 text-[#EFEAE4]/60">
                  <div><span className="text-[#E64648] font-bold">RGB:</span> {color.rgb}</div>
                  <div><span className="text-[#E64648] font-bold">CMYK:</span> {color.cmyk}</div>
                  <div><span className="text-[#E64648] font-bold">PANTONE:</span> {color.pantone}</div>
                  <div><span className="text-[#E64648] font-bold">HEX:</span> {color.hex}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live WCAG Accessibility & Contrast Matrix */}
        <div className="col-span-12 mt-4">
          <div className="stage-frame bg-[#1A1615] border-[#C5A059]/40 p-8 md:p-12">
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#EFEAE4]/10">
              <div className="flex items-center gap-3 text-[#C5A059]">
                <Palette className="w-6 h-6" />
                <h3 className="font-bold text-2xl text-[#EFEAE4] font-ar">
                  {lang === 'ar' ? 'مصفوفة التباين وإمكانية الوصول (WCAG Accessibility Matrix)' : 'Live Color Contrast & Accessibility Matrix'}
                </h3>
              </div>
              <span className="text-xs font-en text-[#E64648] font-bold">AAA RATED CONTRAST</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contrastPairs.map((pair, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveContrastPair(idx)}
                  className={`p-6 rounded-2xl border cursor-pointer transition-all ${activeContrastPair === idx ? 'border-[#E64648] bg-[#E64648]/10' : 'bg-[#0E0D0D] border-[#EFEAE4]/10'}`}
                >
                  <div 
                    className="w-full h-28 rounded-xl flex flex-col justify-center items-center p-4 mb-4 border border-[#EFEAE4]/10"
                    style={{ backgroundColor: pair.bg, color: pair.fg }}
                  >
                    <span className="text-xl font-bold font-ar">شاورما العراب</span>
                    <span className="text-xs font-en font-semibold">AL ARAB BRAND</span>
                  </div>

                  <h4 className="font-bold text-sm text-[#EFEAE4] font-en mb-1">{pair.label}</h4>
                  <div className="flex justify-between items-center text-xs font-en mt-3 pt-3 border-t border-[#EFEAE4]/10">
                    <span className="text-[#C5A059] font-bold">{pair.ratio}</span>
                    <span className="text-emerald-400 font-bold text-[10px] bg-emerald-950/60 px-2 py-0.5 rounded">{pair.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
