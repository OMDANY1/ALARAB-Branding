import React from 'react';

export const PackagingChapter = ({ lang }) => {
  return (
    <section id="scene-09" className="scene-stage-editorial bg-[#141212] overflow-hidden">
      
      {/* Top Scene Meta */}
      <div className="flex justify-between items-center z-10 w-full hairline-border-b pb-6">
        <span className="text-meta-label text-[#E64648]">
          SCENE 09 / THE UNBOXING
        </span>
        <span className="text-meta-label text-[#EFEAE4]/40">
          SUSTAINABLE THERMAL PACKAGING
        </span>
      </div>

      {/* Center Monograph: Floating Local Assets */}
      <div className="my-auto z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
        
        {/* Left: Floating Brand Packaging Asset */}
        <div className="lg:col-span-6 flex justify-center items-center relative">
          <div className="w-80 sm:w-[28rem] h-auto relative z-10 transition-transform duration-1000 hover:scale-105">
            <img 
              src="/images/Bag.png" 
              alt="AL ARAB Carrying Bag" 
              className="w-full h-auto object-contain filter drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
            />
          </div>

          <div className="w-64 sm:w-80 h-auto absolute bottom-0 right-0 z-20 transform translate-x-8 translate-y-8 transition-transform duration-1000 hover:scale-105">
            <img 
              src="/images/wrap.png" 
              alt="AL ARAB Thermal Wrap" 
              className="w-full h-auto object-contain filter drop-shadow-[0_30px_60px_rgba(230,70,72,0.4)]"
            />
          </div>
        </div>

        {/* Right: Oversized Editorial Statement */}
        <div className="lg:col-span-6 flex flex-col justify-center pr-4">
          <span className="text-meta-label text-[#C5A059] block mb-4">ARTISANAL DELIVERY EXPERIENCE</span>
          
          <h2 className="text-title-monograph text-[#EFEAE4] font-ar leading-tight mb-8">
            {lang === 'ar' ? 'تغليف يحفظ الحرارة والقوام' : 'Thermal Preservation & Artisanal Unboxing'}
          </h2>

          <p className="text-editorial-quote text-[#EFEAE4]/70 font-ar font-normal leading-relaxed">
            {lang === 'ar' ? 'مواد تغليف مستدامة ومطفية تضمن حفظ الحرارة بنسبة 100% وتحافظ على قوام الخبز المقرمش.' : 'Greaseproof matte foils and kraft carrying bags engineered for heat retention and crisp bread texture.'}
          </p>
        </div>

      </div>

      {/* Bottom Scene Footer */}
      <div className="flex justify-between items-center z-10 w-full hairline-border-t pt-6 text-meta-label text-[#EFEAE4]/40">
        <span>100% RECYCLABLE KRAFT & FOILS</span>
        <span>KINGDOM OF SAUDI ARABIA</span>
      </div>

    </section>
  );
};
