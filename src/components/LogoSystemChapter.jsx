import React, { useState } from 'react';
import { SvgLogo } from './SvgLogo';
import { brandInfo } from '../data/brandData';
import { ShieldAlert, Check, Eye, Compass, AlertTriangle, Layers, Sliders } from './Icons';

export const LogoSystemChapter = ({ lang }) => {
  const [activeVariant, setActiveVariant] = useState('arabic-red');
  const [bgColor, setBgColor] = useState('#0E0D0D');
  const [showClearSpace, setShowClearSpace] = useState(true);
  const [xHeightMultiplier, setXHeightMultiplier] = useState(1.5);
  const [showAnchorGrid, setShowAnchorGrid] = useState(false);
  const [distortedState, setDistortedState] = useState(null); // null | 'rotate' | 'stretch' | 'shadow' | 'color'

  const logoVariants = [
    { id: 'arabic-red', labelAr: 'العربي (أحمر)', labelEn: 'Arabic (Red)' },
    { id: 'arabic-white', labelAr: 'العربي (أبيض)', labelEn: 'Arabic (White)' },
    { id: 'english-red', labelAr: 'الإنجليزي (أحمر)', labelEn: 'English (Red)' },
    { id: 'english-white', labelAr: 'الإنجليزي (أبيض)', labelEn: 'English (White)' },
    { id: 'arabic-name', labelAr: 'شعار مع اسم عربي', labelEn: 'Arabic Mark + Name' },
    { id: 'english-name', labelAr: 'شعار مع اسم إنجليزي', labelEn: 'English Mark + Name' }
  ];

  const backgroundOptions = [
    { name: 'Charcoal', hex: '#0E0D0D' },
    { name: 'Walnut', hex: '#1A1615' },
    { name: 'Cream', hex: '#EFEAE4' },
    { name: 'Burgundy', hex: '#E64648' }
  ];

  return (
    <section id="chapter-03" className="viewport-stage bg-[#0E0D0D] border-t border-[#EFEAE4]/10">
      
      {/* Watermark Section Number */}
      <div className="watermark-number">03</div>

      <div className="editorial-grid relative z-10">
        
        {/* Section Title Header */}
        <div className="col-span-12 mb-12">
          <span className="text-xs font-en tracking-[0.3em] text-[#E64648] uppercase font-bold block mb-2">
            CHAPTER 03 • VISUAL IDENTITY STUDIO
          </span>
          <h2 className="text-h1 text-[#EFEAE4] font-ar mb-6">
            {lang === 'ar' ? 'نظام الشعار الرسمي واستوديو المعاينة' : 'Official Logo System & Inspection Studio'}
          </h2>
          <p className="text-body-lg max-w-4xl font-ar">
            {lang === 'ar' ? 'الشعار هو التوقيع البصري المقدس لعلامة العراب. هذا الاستوديو يتيح فحص المتجهات، مساحات الأمان، وتفاعل الشعار مع مختلف الخلفيات والأسطح المعمارية.' : 'The logo is the inviolable visual signature of AL ARAB. This interactive studio allows live inspection of vector geometry, clear space tolerances, and context contrast.'}
          </p>
        </div>

        {/* Fullscreen Interactive Studio Stage */}
        <div className="col-span-12 mb-12">
          <div className="stage-frame bg-[#141212] p-0 border-[#EFEAE4]/15">
            
            {/* Top Interactive Studio Control Bar */}
            <div className="p-6 bg-[#1A1615] border-b border-[#EFEAE4]/10 flex flex-wrap items-center justify-between gap-6">
              
              {/* Logo Variant Buttons */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-en text-[#E64648] font-bold tracking-widest uppercase block mr-2">VARIANT:</span>
                {logoVariants.map((varItem) => (
                  <button
                    key={varItem.id}
                    onClick={() => { setActiveVariant(varItem.id); setDistortedState(null); }}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${activeVariant === varItem.id ? 'bg-[#E64648] text-[#EFEAE4] shadow-md shadow-[#E64648]/20' : 'bg-[#0E0D0D] text-[#EFEAE4]/70 hover:text-[#EFEAE4] border border-[#EFEAE4]/10'}`}
                  >
                    {lang === 'ar' ? varItem.labelAr : varItem.labelEn}
                  </button>
                ))}
              </div>

              {/* Background Canvas Selector */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-en text-[#C5A059] font-bold tracking-widest uppercase block mr-2">CONTEXT CANVAS:</span>
                {backgroundOptions.map((bg) => (
                  <button
                    key={bg.hex}
                    onClick={() => setBgColor(bg.hex)}
                    className={`w-7 h-7 rounded-full border-2 transition-all ${bgColor === bg.hex ? 'border-[#E64648] scale-110' : 'border-white/20'}`}
                    style={{ backgroundColor: bg.hex }}
                    title={bg.name}
                  />
                ))}
              </div>

              {/* Clear Space & Anchor Guides Toggle */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowClearSpace(!showClearSpace)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-en border transition-all ${showClearSpace ? 'bg-[#C5A059]/20 border-[#C5A059] text-[#C5A059]' : 'bg-[#0E0D0D] border-[#EFEAE4]/10 text-[#EFEAE4]/50'}`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{showClearSpace ? 'CLEAR SPACE: ON' : 'CLEAR SPACE: OFF'}</span>
                </button>

                <button
                  onClick={() => setShowAnchorGrid(!showAnchorGrid)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-en border transition-all ${showAnchorGrid ? 'bg-[#E64648]/20 border-[#E64648] text-[#E64648]' : 'bg-[#0E0D0D] border-[#EFEAE4]/10 text-[#EFEAE4]/50'}`}
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>{showAnchorGrid ? 'VECTOR ANCHORS: ON' : 'VECTOR ANCHORS: OFF'}</span>
                </button>
              </div>

            </div>

            {/* Interactive Viewport Canvas */}
            <div 
              className="relative p-16 md:p-32 min-h-[550px] flex items-center justify-center transition-colors duration-500 overflow-hidden"
              style={{ backgroundColor: bgColor }}
            >
              
              {/* Dynamic Clear Space Ruler Margin */}
              {showClearSpace && (
                <div 
                  className="absolute border-2 border-dashed border-[#C5A059]/60 pointer-events-none transition-all duration-300 flex items-start justify-between p-3"
                  style={{
                    inset: `${Math.max(20, 80 - (xHeightMultiplier * 20))}px`
                  }}
                >
                  <span className="text-[10px] font-en text-[#C5A059] font-bold bg-black/60 px-2 py-0.5 rounded">
                    SAFETY MARGIN: {xHeightMultiplier}X SKEWER HEIGHT
                  </span>
                  <span className="text-[10px] font-en text-[#C5A059] font-bold bg-black/60 px-2 py-0.5 rounded">
                    DO NOT INCRUDE GRAPHICS HERE
                  </span>
                </div>
              )}

              {/* Vector Anchor Grid Overlay */}
              {showAnchorGrid && (
                <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(#E64648_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>
              )}

              {/* Logo SVG Container with Dynamic Distortion Simulation */}
              <div 
                className={`w-56 sm:w-80 md:w-[26rem] h-auto z-10 transition-all duration-500 ${distortedState === 'rotate' ? 'rotate-12' : ''} ${distortedState === 'stretch' ? 'scale-x-150' : ''} ${distortedState === 'shadow' ? 'filter drop-shadow-[0_30px_20px_rgba(255,0,0,0.8)]' : 'filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]'}`}
              >
                <SvgLogo variant={bgColor === '#EFEAE4' && !activeVariant.includes('white') ? 'arabic-red' : activeVariant} />
              </div>

              {/* Violation Warning Tag if Distorted */}
              {distortedState && (
                <div className="absolute bottom-6 bg-[#E64648] text-[#EFEAE4] px-6 py-2 rounded-full font-en font-bold text-xs tracking-widest uppercase flex items-center gap-2 animate-bounce z-20 shadow-2xl">
                  <AlertTriangle className="w-4 h-4" />
                  <span>VIOLATION DETECTED: UNAPPROVED LOGO DISTORTION</span>
                </div>
              )}

            </div>

            {/* Bottom Interactive Spec Bar */}
            <div className="p-6 bg-[#1A1615] border-t border-[#EFEAE4]/10 flex flex-wrap items-center justify-between gap-4 text-xs font-en text-[#EFEAE4]/70">
              
              <div className="flex items-center gap-4">
                <Sliders className="w-4 h-4 text-[#C5A059]" />
                <span>ADJUST CLEAR SPACE MARGIN:</span>
                <input 
                  type="range" 
                  min="0.5" 
                  max="2.5" 
                  step="0.1"
                  value={xHeightMultiplier} 
                  onChange={(e) => setXHeightMultiplier(Number(e.target.value))}
                  className="accent-[#C5A059] w-36 cursor-pointer"
                />
                <span className="font-bold text-[#C5A059]">{xHeightMultiplier}x</span>
              </div>

              <div className="flex items-center gap-6">
                <span>DIGITAL MIN SIZE: <strong className="text-[#E64648]">40PX</strong></span>
                <span>PRINT MIN SIZE: <strong className="text-[#E64648]">15MM</strong></span>
              </div>

            </div>

          </div>
        </div>

        {/* Interactive Logo Violation Simulator */}
        <div className="col-span-12 mt-6">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-[#E64648]" />
            <h3 className="text-h2 text-[#EFEAE4] font-ar">
              {lang === 'ar' ? 'اختبار الانتهاكات البصرية الممنوعة' : 'Strict Logo Violation Simulator'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              onClick={() => setDistortedState(distortedState === 'rotate' ? null : 'rotate')}
              className={`stage-frame p-6 cursor-pointer transition-all ${distortedState === 'rotate' ? 'border-[#E64648] bg-[#E64648]/10' : 'bg-[#1A1615] border-[#EFEAE4]/10'}`}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-en text-[#E64648] font-bold">VIOLATION 01</span>
                <ShieldAlert className="w-4 h-4 text-[#E64648]" />
              </div>
              <h4 className="font-bold text-base text-[#EFEAE4] font-ar mb-1">تدوير الشعار (Rotation)</h4>
              <p className="text-xs text-[#EFEAE4]/60 font-ar mb-3">انقر لاختبار التدوير الممنوع الشعار يوضع أفقياً دائماً.</p>
              <span className="text-[10px] font-en text-[#E64648] font-bold uppercase">{distortedState === 'rotate' ? 'SIMULATING... (CLICK TO RESET)' : 'CLICK TO SIMULATE'}</span>
            </div>

            <div 
              onClick={() => setDistortedState(distortedState === 'stretch' ? null : 'stretch')}
              className={`stage-frame p-6 cursor-pointer transition-all ${distortedState === 'stretch' ? 'border-[#E64648] bg-[#E64648]/10' : 'bg-[#1A1615] border-[#EFEAE4]/10'}`}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-en text-[#E64648] font-bold">VIOLATION 02</span>
                <ShieldAlert className="w-4 h-4 text-[#E64648]" />
              </div>
              <h4 className="font-bold text-base text-[#EFEAE4] font-ar mb-1">تمطيط النسب (Stretching)</h4>
              <p className="text-xs text-[#EFEAE4]/60 font-ar mb-3">انقر لاختبار تغيير النسبة بين الطول والعرض.</p>
              <span className="text-[10px] font-en text-[#E64648] font-bold uppercase">{distortedState === 'stretch' ? 'SIMULATING... (CLICK TO RESET)' : 'CLICK TO SIMULATE'}</span>
            </div>

            <div 
              onClick={() => setDistortedState(distortedState === 'shadow' ? null : 'shadow')}
              className={`stage-frame p-6 cursor-pointer transition-all ${distortedState === 'shadow' ? 'border-[#E64648] bg-[#E64648]/10' : 'bg-[#1A1615] border-[#EFEAE4]/10'}`}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-en text-[#E64648] font-bold">VIOLATION 03</span>
                <ShieldAlert className="w-4 h-4 text-[#E64648]" />
              </div>
              <h4 className="font-bold text-base text-[#EFEAE4] font-ar mb-1">إضافة ظلال ملونة (Drop Shadows)</h4>
              <p className="text-xs text-[#EFEAE4]/60 font-ar mb-3">انقر لاختبار إضافة ظلال رخيصة ثلاثية الأبعاد.</p>
              <span className="text-[10px] font-en text-[#E64648] font-bold uppercase">{distortedState === 'shadow' ? 'SIMULATING... (CLICK TO RESET)' : 'CLICK TO SIMULATE'}</span>
            </div>

            <div 
              onClick={() => setDistortedState(null)}
              className="stage-frame p-6 cursor-pointer bg-[#1E1A18] border-emerald-500/40 hover:border-emerald-500 transition-all flex flex-col justify-between"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-en text-emerald-400 font-bold">APPROVED STATE</span>
                <Check className="w-4 h-4 text-emerald-400" />
              </div>
              <h4 className="font-bold text-base text-[#EFEAE4] font-ar mb-1">إعادة ضبط النقاء (Reset Clean)</h4>
              <p className="text-xs text-[#EFEAE4]/60 font-ar mb-3">استعادة الشعار الرسمي بدقته ونقائه التام.</p>
              <span className="text-[10px] font-en text-emerald-400 font-bold uppercase">RESET ALL DISTORTIONS</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
