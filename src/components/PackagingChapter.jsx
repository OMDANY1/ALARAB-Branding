import React from 'react';

export const PackagingChapter = ({ lang }) => {
  return (
    <section id="scene-09" className="scene-stage bg-[#1A1615]">
      
      {/* Top Scene Meta */}
      <div className="flex justify-between items-center z-10 w-full border-b border-[#EFEAE4]/10 pb-6">
        <span className="text-xs font-en tracking-[0.3em] text-[#E64648] uppercase font-bold">
          SCENE 09 / THE UNBOXING
        </span>
        <span className="text-xs font-en text-[#EFEAE4]/40 uppercase tracking-widest">
          SUSTAINABLE THERMAL PACKAGING
        </span>
      </div>

      {/* Center Product Visual Monograph */}
      <div className="my-auto z-10 w-full flex flex-col items-center text-center max-w-5xl mx-auto py-12">
        
        {/* Large Product Foil Mockup Visual */}
        <div className="w-80 sm:w-96 md:w-[32rem] h-72 rounded-3xl bg-[#0E0D0D] border border-[#E64648]/40 p-12 flex flex-col items-center justify-center shadow-2xl mb-12 hover:border-[#E64648] transition-all duration-700">
          <div className="w-24 h-24 rounded-full bg-[#E64648] text-[#EFEAE4] flex items-center justify-center font-bold text-4xl font-ar shadow-2xl mb-4">
            ع
          </div>
          <span className="text-xs font-en text-[#C5A059] font-bold tracking-widest uppercase">
            THERMAL GREASEPROOF FOIL & KRAFT BAGS
          </span>
        </div>

        <h2 className="text-title-huge text-[#EFEAE4] font-ar leading-none mb-4">
          {lang === 'ar' ? 'تغليف فاخر يحفظ الحرارة والقوام' : 'Artisanal Thermal Packaging Experience'}
        </h2>

      </div>

      {/* Bottom Scene Footer */}
      <div className="flex justify-between items-center z-10 w-full border-t border-[#EFEAE4]/10 pt-6 text-xs font-en text-[#EFEAE4]/40 uppercase tracking-widest">
        <span>100% SUSTAINABLE & RECYCLABLE</span>
        <span>SAUDI ARABIA DELIVERY STANDARDS</span>
      </div>

    </section>
  );
};
