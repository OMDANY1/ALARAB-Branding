import React from 'react';
import { brandInfo } from '../data/brandData';

export const BrandStoryChapter = ({ lang }) => {
  return (
    <section id="scene-02" className="scene-stage bg-[#141212] p-0">
      <div className="w-full h-full min-h-screen grid grid-cols-1 lg:grid-cols-12 relative">
        
        {/* Left Column: Full-Bleed High-Contrast Image Monograph */}
        <div className="lg:col-span-6 relative h-[50vh] lg:h-auto overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1400&q=85" 
            alt="Embers & Smoke" 
            className="w-full h-full object-cover filter brightness-75 contrast-125 saturate-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#141212] via-transparent to-transparent"></div>
          
          <span className="absolute top-8 left-8 text-xs font-en tracking-[0.3em] text-[#E64648] uppercase font-bold z-10">
            SCENE 02 / THE MANIFESTO
          </span>
        </div>

        {/* Right Column: Giant Editorial Manifesto Quote */}
        <div className="lg:col-span-6 p-8 md:p-16 lg:p-24 flex flex-col justify-between my-auto relative z-10">
          <div>
            <span className="text-xs font-en text-[#C5A059] tracking-[0.3em] uppercase font-bold block mb-8">
              PHILOSOPHY OF AUTHORITY
            </span>

            <blockquote className="text-editorial-quote text-[#EFEAE4] font-ar leading-tight mb-12">
              "{lang === 'ar' ? brandInfo.brandStatementAr : brandInfo.brandStatementEn}"
            </blockquote>
          </div>

          <div className="flex items-center justify-between border-t border-[#EFEAE4]/10 pt-8 text-xs font-en text-[#EFEAE4]/50 tracking-widest uppercase">
            <span>SAUDI CULINARY HERITAGE</span>
            <span>EST. KINGDOM OF SAUDI ARABIA</span>
          </div>
        </div>

      </div>
    </section>
  );
};
