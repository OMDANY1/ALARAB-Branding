import React from 'react';

export const RestaurantExperienceChapter = ({ lang }) => {
  return (
    <section id="scene-10" className="scene-stage p-0 bg-[#0E0D0D]">
      <div className="w-full h-full min-h-screen relative flex flex-col justify-between p-8 md:p-16 overflow-hidden">
        
        {/* Full-Bleed Architectural Image Background */}
        <img 
          src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1800&q=90" 
          alt="Spatial Architecture" 
          className="absolute inset-0 w-full h-full object-cover filter brightness-75 contrast-125 saturate-110"
        />
        
        {/* Dark Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0D] via-transparent to-[#0E0D0D]/80 pointer-events-none"></div>

        {/* Top Meta */}
        <div className="flex justify-between items-center z-10 w-full border-b border-white/10 pb-6">
          <span className="text-xs font-en tracking-[0.3em] text-[#E64648] uppercase font-bold">
            SCENE 10 / SPATIAL ARCHITECTURE
          </span>
          <span className="text-xs font-en text-[#EFEAE4]/70 uppercase tracking-widest">
            DARK WALNUT & OPEN FLAME THEATRE
          </span>
        </div>

        {/* Center Display Statement */}
        <div className="my-auto z-10 max-w-4xl">
          <h2 className="text-title-huge text-[#EFEAE4] font-ar leading-none mb-6 drop-shadow-2xl">
            {lang === 'ar' ? 'الرزانة المعمارية والطهي أمام العميل' : 'Spatial Luxury, Dark Walnut & Open Flame Theatre'}
          </h2>
        </div>

        {/* Bottom Specs */}
        <div className="flex justify-between items-center z-10 w-full border-t border-white/10 pt-6 text-xs font-en text-[#EFEAE4]/70 uppercase tracking-widest">
          <span>DARK WALNUT PANELING • SOFT BRASS ACCENTS</span>
          <span>SAUDI ARABIA FLAGSHIP STORE DESIGN</span>
        </div>

      </div>
    </section>
  );
};
