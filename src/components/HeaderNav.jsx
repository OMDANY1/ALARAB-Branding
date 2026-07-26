import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX, Globe } from './Icons';
import { brandInfo } from '../data/brandData';

export const HeaderNav = ({ activeChapter, lang, setLang, audioPlaying, setAudioPlaying }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToChapter = (id) => {
    setDrawerOpen(false);
    const element = document.getElementById(`scene-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    const newLang = lang === 'ar' ? 'en' : 'ar';
    setLang(newLang);
    document.documentElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', newLang);
  };

  return (
    <>
      {/* Floating Editorial Top Bar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'bg-[#0E0D0D]/85 backdrop-blur-lg py-5 border-b border-[#EFEAE4]/10' : 'bg-transparent py-8'}`}>
        <div className="w-full px-8 md:px-16 flex items-center justify-between">
          
          {/* Brand Mark Title */}
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="w-2.5 h-2.5 rounded-full bg-[#E64648] animate-pulse"></span>
            <span className="font-bold tracking-widest text-lg md:text-xl text-[#EFEAE4] font-ar uppercase">
              {lang === 'ar' ? brandInfo.nameAr : brandInfo.nameEn}
            </span>
          </div>

          {/* Active Scene Indicator */}
          <div className="hidden md:flex items-center gap-4 text-xs font-en text-[#EFEAE4]/60 tracking-widest">
            <span className="text-[#E64648] font-bold">SCENE</span>
            <span className="text-[#EFEAE4] font-bold">{activeChapter} / 13</span>
            <span className="border-r dark:border-l border-[#EFEAE4]/20 pr-4 dark:pl-4 font-ar text-[#EFEAE4]/80">
              {brandInfo.chapters.find(c => c.id === activeChapter)?.[lang === 'ar' ? 'titleAr' : 'titleEn']}
            </span>
          </div>

          {/* Minimal Controls */}
          <div className="flex items-center gap-4">
            
            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="text-xs font-en tracking-widest text-[#EFEAE4]/80 hover:text-[#E64648] transition-colors"
            >
              {lang === 'ar' ? 'EN' : 'AR'}
            </button>

            {/* Audio Toggle */}
            <button 
              onClick={() => setAudioPlaying(!audioPlaying)}
              className="text-[#EFEAE4]/80 hover:text-[#E64648] transition-colors"
              title="Culinary Soundscape"
            >
              {audioPlaying ? <Volume2 className="w-4 h-4 text-[#E64648]" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Index Drawer Button */}
            <button 
              onClick={() => setDrawerOpen(true)}
              className="text-xs font-en tracking-[0.2em] uppercase font-bold text-[#EFEAE4] hover:text-[#E64648] transition-colors flex items-center gap-2"
            >
              <Menu className="w-4 h-4 text-[#E64648]" />
              <span className="hidden sm:inline">INDEX</span>
            </button>
          </div>

        </div>
      </header>

      {/* Chapter Drawer Modal */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 bg-[#0E0D0D]/95 backdrop-blur-2xl flex flex-col justify-between p-8 md:p-20 animate-fade-in">
          <div className="flex items-center justify-between border-b border-[#EFEAE4]/10 pb-6">
            <div>
              <span className="text-xs font-en tracking-[0.3em] text-[#E64648] font-bold uppercase block mb-1">
                BRAND MONOGRAPH INDEX
              </span>
              <h3 className="text-3xl font-bold text-[#EFEAE4] font-ar">
                {lang === 'ar' ? 'محتويات كتاب الهوية' : 'Table of Contents'}
              </h3>
            </div>
            <button onClick={() => setDrawerOpen(false)} className="p-3 rounded-full text-[#EFEAE4] hover:text-[#E64648] transition-colors">
              <X className="w-8 h-8" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 overflow-y-auto max-h-[60vh] pr-4">
            {brandInfo.chapters.map((ch) => (
              <div
                key={ch.id}
                onClick={() => scrollToChapter(ch.id)}
                className={`p-6 border cursor-pointer transition-all duration-300 flex items-start gap-4 ${activeChapter === ch.id ? 'bg-[#E64648]/15 border-[#E64648] text-[#EFEAE4]' : 'border-[#EFEAE4]/10 hover:border-[#E64648]/60'}`}
              >
                <span className="font-en text-2xl font-bold text-[#E64648]">{ch.id}</span>
                <div>
                  <h4 className="font-bold text-lg text-[#EFEAE4] font-ar">
                    {lang === 'ar' ? ch.titleAr : ch.titleEn}
                  </h4>
                  <p className="text-xs text-[#EFEAE4]/60 font-ar mt-1">
                    {lang === 'ar' ? ch.subtitleAr : ch.subtitleEn}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center border-t border-[#EFEAE4]/10 pt-6 text-xs text-[#EFEAE4]/40 font-en uppercase tracking-widest">
            <span>AL ARAB • OFFICIAL BRAND IDENTITY</span>
            <span>SAUDI ARABIA</span>
          </div>
        </div>
      )}
    </>
  );
};
