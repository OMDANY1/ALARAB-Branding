import React, { useState } from 'react';
import { SvgLogo } from './SvgLogo';
import { Flame, Compass, Layers, Check, Info } from './Icons';

export const BrandSymbolChapter = ({ lang }) => {
  const [activeLayer, setActiveLayer] = useState('all'); // 'all' | 'axis' | 'knife' | 'flames'
  const [selectedHotspot, setSelectedHotspot] = useState(null);

  const hotspots = [
    { id: 1, top: '25%', left: '48%', titleAr: 'محور السيخ العمودي (Rotisserie Axis)', titleEn: 'Vertical Skewer Axis', descAr: 'يمثل الاتزان والوقار والاستقامة في الطهي على الصاج.', descEn: 'Maintains vertical balance, rotisserie stability, and culinary dignity.' },
    { id: 2, top: '48%', left: '62%', titleAr: 'حد زاوية التقطيع (Knife Cut Angle)', titleEn: 'Slicing Knife Arc', descAr: 'زاوية التقطيع الحادة التي تعكس احترافية الطهاة وشحذ السكاكين.', descEn: 'Sharp slicing angle reflecting master chef knife skills.' },
    { id: 3, top: '72%', left: '42%', titleAr: 'وهج الجمر والدخان (Ember Smoke Swirls)', titleEn: 'Ember Smoke Dynamics', descAr: 'انحناءات الدخان المتصاعد ودفء حرارة الشواء الأصيل.', descEn: 'Rising smoke swirls & charcoal heat infusion curves.' }
  ];

  return (
    <section id="chapter-04" className="viewport-stage bg-[#141212] border-t border-[#EFEAE4]/10">
      
      {/* Watermark Section Number */}
      <div className="watermark-number">04</div>

      <div className="editorial-grid relative z-10">
        
        {/* Section Header */}
        <div className="col-span-12 mb-12">
          <span className="text-xs font-en tracking-[0.3em] text-[#E64648] uppercase font-bold block mb-2">
            CHAPTER 04 • SACRED ANATOMY
          </span>
          <h2 className="text-h1 text-[#EFEAE4] font-ar mb-6">
            {lang === 'ar' ? 'رمز السيخ — المسرح الهندسي وتفكيك المتجهات' : 'The Skewer Symbol — Deconstruction Theatre'}
          </h2>
          <p className="text-body-lg max-w-4xl font-ar">
            {lang === 'ar' ? 'رمز السيخ هو الرمز الأيقوني الحصري لشاورما العراب. تفكيك الشعار يظهر دقة النسب الهندسية والنسبة الذهبية المستوحاة من حركات النار والسكين.' : 'The skewer symbol is the sacred mark of AL ARAB identity. Deconstructing its geometry reveals golden ratio vector paths inspired by fire, smoke, and razor knives.'}
          </p>
        </div>

        {/* Fullscreen Deconstruction Viewport */}
        <div className="col-span-12 lg:col-span-8 mb-8">
          <div className="stage-frame bg-[#1A1615] border-[#EFEAE4]/15 min-h-[520px] flex flex-col justify-between p-8 md:p-12 relative overflow-hidden">
            
            {/* Top Layer Control Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#EFEAE4]/10 relative z-20">
              <span className="text-xs font-en text-[#C5A059] font-bold tracking-widest uppercase">
                DECONSTRUCTED VECTOR LAYERS
              </span>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveLayer('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-en transition-all ${activeLayer === 'all' ? 'bg-[#E64648] text-[#EFEAE4]' : 'bg-[#0E0D0D] border border-[#EFEAE4]/10 text-[#EFEAE4]/60'}`}
                >
                  FULL SYMBOL
                </button>
                <button
                  onClick={() => setActiveLayer('axis')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-en transition-all ${activeLayer === 'axis' ? 'bg-[#C5A059] text-black font-bold' : 'bg-[#0E0D0D] border border-[#EFEAE4]/10 text-[#EFEAE4]/60'}`}
                >
                  1. SKEWER AXIS
                </button>
                <button
                  onClick={() => setActiveLayer('knife')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-en transition-all ${activeLayer === 'knife' ? 'bg-[#E64648] text-[#EFEAE4]' : 'bg-[#0E0D0D] border border-[#EFEAE4]/10 text-[#EFEAE4]/60'}`}
                >
                  2. KNIFE ARC
                </button>
                <button
                  onClick={() => setActiveLayer('flames')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-en transition-all ${activeLayer === 'flames' ? 'bg-[#8C3B30] text-[#EFEAE4]' : 'bg-[#0E0D0D] border border-[#EFEAE4]/10 text-[#EFEAE4]/60'}`}
                >
                  3. EMBER SWIRLS
                </button>
              </div>
            </div>

            {/* Central Symbol Viewport with Architectural Grid */}
            <div className="relative py-16 flex items-center justify-center min-h-[380px]">
              
              {/* Golden Ratio Blueprint Circle Overlays */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-25">
                <div className="w-80 h-80 rounded-full border border-[#E64648]/40 absolute"></div>
                <div className="w-56 h-56 rounded-full border border-[#C5A059]/40 absolute"></div>
                <div className="w-full h-[1px] bg-[#E64648]/30 absolute"></div>
                <div className="h-full w-[1px] bg-[#E64648]/30 absolute"></div>
              </div>

              {/* Vector Hotspot Nodes */}
              {hotspots.map((hs) => (
                <button
                  key={hs.id}
                  onClick={() => setSelectedHotspot(selectedHotspot === hs.id ? null : hs.id)}
                  style={{ top: hs.top, left: hs.left }}
                  className={`absolute z-30 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-en transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 ${selectedHotspot === hs.id ? 'bg-[#E64648] text-[#EFEAE4] scale-125 shadow-lg shadow-[#E64648]/50 ring-4 ring-[#E64648]/30' : 'bg-[#C5A059] text-black hover:scale-110'}`}
                  title="Click to Inspect Anatomy"
                >
                  0{hs.id}
                </button>
              ))}

              {/* Central Vector Symbol Stage */}
              <div className={`w-48 sm:w-64 h-auto relative z-10 transition-all duration-700 ${activeLayer === 'axis' ? 'filter drop-shadow-[0_0_25px_#C5A059]' : activeLayer === 'knife' ? 'filter drop-shadow-[0_0_25px_#E64648]' : 'filter drop-shadow-[0_20px_40px_rgba(230,70,72,0.3)]'}`}>
                <SvgLogo variant="arabic-red" />
              </div>

            </div>

            {/* Hotspot Info Drawer if Selected */}
            {selectedHotspot && (
              <div className="p-4 rounded-xl bg-[#0E0D0D] border border-[#E64648]/40 relative z-20 animate-fade-in flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#E64648] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-[#EFEAE4] font-ar">
                      {lang === 'ar' ? hotspots.find(h => h.id === selectedHotspot)?.titleAr : hotspots.find(h => h.id === selectedHotspot)?.titleEn}
                    </h4>
                    <p className="text-xs text-[#EFEAE4]/70 font-ar mt-1">
                      {lang === 'ar' ? hotspots.find(h => h.id === selectedHotspot)?.descAr : hotspots.find(h => h.id === selectedHotspot)?.descEn}
                    </p>
                  </div>
                </div>
                <button onClick={() => setSelectedHotspot(null)} className="text-xs text-[#EFEAE4]/40 hover:text-[#EFEAE4] font-en uppercase font-bold">CLOSE</button>
              </div>
            )}

          </div>
        </div>

        {/* Deconstruction Breakdown Sidebar Cards */}
        <div className="col-span-12 lg:col-span-4 mb-8 flex flex-col gap-4">
          
          <div className={`stage-frame p-6 transition-all ${activeLayer === 'axis' ? 'bg-[#E64648]/10 border-[#E64648]' : 'bg-[#1A1615] border-[#EFEAE4]/10'}`}>
            <div className="flex items-center gap-3 mb-2 text-[#C5A059]">
              <Flame className="w-5 h-5" />
              <h3 className="font-bold text-lg text-[#EFEAE4] font-ar">1. المحور التوازني</h3>
            </div>
            <p className="text-xs text-[#EFEAE4]/70 font-ar leading-relaxed">
              يمثل استقامة سيخ الشاورما التحريري والوقار والاتزان الذي يضمن طهياً متساوياً على صاج الشواء.
            </p>
          </div>

          <div className={`stage-frame p-6 transition-all ${activeLayer === 'knife' ? 'bg-[#E64648]/10 border-[#E64648]' : 'bg-[#1A1615] border-[#EFEAE4]/10'}`}>
            <div className="flex items-center gap-3 mb-2 text-[#E64648]">
              <Compass className="w-5 h-5" />
              <h3 className="font-bold text-lg text-[#EFEAE4] font-ar">2. حد قاطع السكين</h3>
            </div>
            <p className="text-xs text-[#EFEAE4]/70 font-ar leading-relaxed">
              تعكس انحناءات الساطور حركات الطاهي السريعة والدقيقة لشحذ قطع اللحم الطازجة.
            </p>
          </div>

          <div className={`stage-frame p-6 transition-all ${activeLayer === 'flames' ? 'bg-[#E64648]/10 border-[#E64648]' : 'bg-[#1A1615] border-[#EFEAE4]/10'}`}>
            <div className="flex items-center gap-3 mb-2 text-[#8C3B30]">
              <Layers className="w-5 h-5" />
              <h3 className="font-bold text-lg text-[#EFEAE4] font-ar">3. تصاعد الدخان والجمر</h3>
            </div>
            <p className="text-xs text-[#EFEAE4]/70 font-ar leading-relaxed">
              منحنيات دافئة تجسد الدخان الطبيعي المتصاعد من جمر الفحم ورائحة الشواء النادرة.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
