import React from 'react';

export const BrandApplicationsChapter = ({ lang }) => {
  return (
    <section id="scene-12" className="scene-stage-editorial bg-[#141212]">
      
      {/* Top Meta */}
      <div className="flex justify-between items-center z-10 w-full hairline-border-b pb-6">
        <span className="text-meta-label text-[#E64648]">
          SCENE 12 / PHYSICAL MONOGRAPH
        </span>
        <span className="text-meta-label text-[#EFEAE4]/40">
          STATIONERY & FLEET
        </span>
      </div>

      {/* Center Monograph Grid */}
      <div className="my-auto z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-12">
        
        <div className="hairline-border-b md:hairline-border-b-0 md:border-r border-[#EFEAE4]/10 pb-8 md:pb-0 md:pr-16 flex flex-col justify-between h-72">
          <span className="text-meta-label text-[#E64648]">01 / EXECUTIVE STATIONERY</span>
          <div>
            <h3 className="text-4xl font-bold text-[#EFEAE4] font-ar mb-3">بطاقات الأعمال المحفورة</h3>
            <p className="text-meta-label text-[#EFEAE4]/60">EMBOSSED COTTON PAPER • BURGUNDY FOIL EDGES</p>
          </div>
        </div>

        <div className="flex flex-col justify-between h-72">
          <span className="text-meta-label text-[#C5A059]">02 / DELIVERY FLEET & UNIFORMS</span>
          <div>
            <h3 className="text-4xl font-bold text-[#EFEAE4] font-ar mb-3">أسطول السيارات والمآزر القطنية</h3>
            <p className="text-meta-label text-[#EFEAE4]/60">MATTE BLACK FLEET • EMBROIDERED CHEF APRONS</p>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="flex justify-between items-center z-10 w-full hairline-border-t pt-6 text-meta-label text-[#EFEAE4]/40">
        <span>LUXURY BRAND CONSISTENCY</span>
        <span>KINGDOM OF SAUDI ARABIA</span>
      </div>

    </section>
  );
};
