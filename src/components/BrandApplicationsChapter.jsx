import React from 'react';

export const BrandApplicationsChapter = ({ lang }) => {
  return (
    <section id="scene-12" className="scene-stage bg-[#141212]">
      
      {/* Top Scene Meta */}
      <div className="flex justify-between items-center z-10 w-full border-b border-[#EFEAE4]/10 pb-6">
        <span className="text-xs font-en tracking-[0.3em] text-[#E64648] uppercase font-bold">
          SCENE 12 / PHYSICAL APPLICATIONS
        </span>
        <span className="text-xs font-en text-[#EFEAE4]/40 uppercase tracking-widest">
          EXECUTIVE STATIONERY & FLEET
        </span>
      </div>

      {/* Center Monograph Grid */}
      <div className="my-auto z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12">
        
        <div className="p-12 rounded-3xl bg-[#0E0D0D] border border-[#E64648]/40 h-80 flex flex-col justify-between">
          <span className="text-xs font-en text-[#E64648] font-bold tracking-widest uppercase">01 / EXECUTIVE STATIONERY</span>
          <div>
            <h3 className="text-3xl font-bold text-[#EFEAE4] font-ar mb-2">بطاقات الأعمال المحفورة</h3>
            <p className="text-xs font-en text-[#EFEAE4]/60 uppercase tracking-widest">EMBOSSED COTTON PAPER • BURGUNDY EDGES</p>
          </div>
        </div>

        <div className="p-12 rounded-3xl bg-[#0E0D0D] border border-[#C5A059]/40 h-80 flex flex-col justify-between">
          <span className="text-xs font-en text-[#C5A059] font-bold tracking-widest uppercase">02 / DELIVERY FLEET & UNIFORMS</span>
          <div>
            <h3 className="text-3xl font-bold text-[#EFEAE4] font-ar mb-2">أسطول السيارات والمآزر القطنية</h3>
            <p className="text-xs font-en text-[#EFEAE4]/60 uppercase tracking-widest">MATTE BLACK FLEET • EMBROIDERED CHEF APRONS</p>
          </div>
        </div>

      </div>

      {/* Bottom Scene Footer */}
      <div className="flex justify-between items-center z-10 w-full border-t border-[#EFEAE4]/10 pt-6 text-xs font-en text-[#EFEAE4]/40 uppercase tracking-widest">
        <span>BRAND CONSISTENCY ACROSS ALL TOUCHPOINTS</span>
        <span>KINGDOM OF SAUDI ARABIA</span>
      </div>

    </section>
  );
};
