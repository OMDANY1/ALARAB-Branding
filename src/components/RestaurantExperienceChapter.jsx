import React from 'react';

export const RestaurantExperienceChapter = ({ lang }) => {
  return (
    <section id="scene-10" className="scene-stage-editorial p-0 bg-[#0E0D0D]">
      <div className="w-full h-full min-h-screen relative flex flex-col justify-between p-8 md:p-16 overflow-hidden">
        
        {/* Full-Bleed Architectural Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1800&q=90" 
          alt="Spatial Sanctuary" 
          className="absolute inset-0 w-full h-full object-cover img-editorial"
        />
        
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0D] via-transparent to-[#0E0D0D]/80 pointer-events-none"></div>

        {/* Top Meta */}
        <div className="flex justify-between items-center z-10 w-full hairline-border-b pb-6">
          <span className="text-meta-label text-[#E64648]">
            SCENE 10 / SPATIAL SANCTUARY
          </span>
          <span className="text-meta-label text-[#EFEAE4]/70">
            DARK WALNUT & OPEN FLAME THEATRE
          </span>
        </div>

        {/* Center Display Headline */}
        <div className="my-auto z-10 max-w-5xl">
          <span className="text-meta-label text-[#C5A059] block mb-4">INTERIOR ARCHITECTURE</span>
          <h2 className="text-title-monograph text-[#EFEAE4] font-ar leading-none drop-shadow-2xl">
            {lang === 'ar' ? 'الرزانة المعمارية والطهي المباشر أمام الضيوف' : 'Spatial Dignity, Dark Walnut & Open Charcoal Theatre'}
          </h2>
        </div>

        {/* Bottom Meta */}
        <div className="flex justify-between items-center z-10 w-full hairline-border-t pt-6 text-meta-label text-[#EFEAE4]/70">
          <span>DARK WALNUT PANELING • SOFT BRASS TOUCHES</span>
          <span>FLAGSHIP ARCHITECTURE</span>
        </div>

      </div>
    </section>
  );
};
