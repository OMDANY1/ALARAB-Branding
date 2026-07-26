import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX, Globe, LayoutGrid } from './Icons';
import { brandInfo } from '../data/brandData';

export const HeaderNav = ({ 
  activeChapter, 
  lang, 
  setLang, 
  audioPlaying, 
  setAudioPlaying,
  gridVisible,
  setGridVisible
}) => {
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
    const element = document.getElementById(`chapter-${id}`);
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
      {/* Top Floating Editorial Bar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0E0D0D]/90 backdrop-blur-md border-b border-[#EFEAE4]/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-[1720px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Brand Mark Title */}
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 rounded-full bg-[#E64648] flex items-center justify-center font-bold text-xs text-[#EFEAE4] shadow-lg shadow-[#E64648]/30">
              ع
            </div>
            <div>
              <span className="font-extrabold tracking-wider text-lg md:text-xl text-[#EFEAE4] block font-ar">
                {lang === 'ar' ? brandInfo.nameAr : brandInfo.nameEn}
              </span>
              <span className="text-[10px] tracking-[0.2em] text-[#EFEAE4]/50 uppercase font-en block">
                Luxury Brand Presentation
              </span>
            </div>
          </div>

          {/* Active Chapter Indicator */}
          <div className="hidden md:flex items-center gap-3 bg-[#1A1615] px-4 py-2 rounded-full border border-[#EFEAE4]/10">
            <span className="text-xs font-en text-[#E64648] font-bold">CHAPTER</span>
            <span className="text-sm font-en font-bold text-[#EFEAE4]">{activeChapter} / 13</span>
            <span className="text-xs text-[#EFEAE4]/60 font-ar border-r dark:border-l border-[#EFEAE4]/20 pr-3 dark:pl-3">
              {brandInfo.chapters.find(c => c.id === activeChapter)?.[lang === 'ar' ? 'titleAr' : 'titleEn']}
            </span>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 md:gap-3">
            
            {/* Grid Debugger Toggle */}
            <button 
              onClick={() => setGridVisible(!gridVisible)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-en transition-all duration-300 ${gridVisible ? 'bg-[#E64648] border-[#E64648] text-[#EFEAE4]' : 'bg-[#1A1615]/80 border-[#EFEAE4]/15 text-[#EFEAE4]/70 hover:text-[#EFEAE4]'}`}
              title="Toggle 12-Column Grid Debugger"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">{gridVisible ? 'GRID: ON' : 'GRID'}</span>
            </button>

            {/* Language Switcher */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#EFEAE4]/15 bg-[#1A1615]/80 hover:bg-[#E64648] hover:border-[#E64648] text-xs font-en text-[#EFEAE4] transition-all duration-300"
              title="Switch Language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'ENGLISH' : 'العربية'}</span>
            </button>

            {/* Audio Toggle */}
            <button 
              onClick={() => setAudioPlaying(!audioPlaying)}
              className={`p-2 rounded-full border transition-all duration-300 ${audioPlaying ? 'bg-[#E64648] border-[#E64648] text-[#EFEAE4]' : 'bg-[#1A1615]/80 border-[#EFEAE4]/15 text-[#EFEAE4]/70 hover:text-[#EFEAE4]'}`}
              title="Toggle Culinary Atmosphere Sound"
            >
              {audioPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Chapter Drawer Toggle */}
            <button 
              onClick={() => setDrawerOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#E64648] text-[#EFEAE4] font-semibold text-xs tracking-wider uppercase hover:bg-[#D03537] transition-all duration-300 shadow-lg shadow-[#E64648]/20"
            >
              <Menu className="w-4 h-4" />
              <span className="hidden sm:inline">{lang === 'ar' ? 'الفصول' : 'INDEX'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Chapter Navigation Drawer Modal */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 bg-[#0E0D0D]/95 backdrop-blur-xl flex flex-col justify-between p-8 md:p-16 animate-fade-in">
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-[#EFEAE4]/10 pb-6">
            <div>
              <span className="text-xs tracking-[0.3em] text-[#E64648] font-en uppercase font-bold block mb-1">
                INDEX & CHAPTERS
              </span>
              <h3 className="text-2xl font-bold text-[#EFEAE4]">
                {lang === 'ar' ? 'جدول محتويات كتاب الهوية' : 'Brand Book Table of Contents'}
              </h3>
            </div>
            <button 
              onClick={() => setDrawerOpen(false)}
              className="p-3 rounded-full border border-[#EFEAE4]/20 hover:bg-[#E64648] hover:border-[#E64648] text-[#EFEAE4] transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Chapter Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 overflow-y-auto max-h-[65vh] pr-2">
            {brandInfo.chapters.map((ch) => (
              <div
                key={ch.id}
                onClick={() => scrollToChapter(ch.id)}
                className={`p-5 rounded-xl border cursor-pointer transition-all duration-300 flex items-start gap-4 ${activeChapter === ch.id ? 'bg-[#E64648]/15 border-[#E64648] text-[#EFEAE4]' : 'bg-[#1A1615] border-[#EFEAE4]/10 hover:border-[#E64648]/50 hover:bg-[#1E1A18]'}`}
              >
                <span className="font-en text-xl font-bold text-[#E64648]">{ch.id}</span>
                <div>
                  <h4 className="font-bold text-base text-[#EFEAE4]">
                    {lang === 'ar' ? ch.titleAr : ch.titleEn}
                  </h4>
                  <p className="text-xs text-[#EFEAE4]/60 mt-1">
                    {lang === 'ar' ? ch.subtitleAr : ch.subtitleEn}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Drawer Footer */}
          <div className="flex items-center justify-between border-t border-[#EFEAE4]/10 pt-6 text-xs text-[#EFEAE4]/50">
            <span>AL ARAB © SHAWRMA ALARAB BRAND GUIDELINES</span>
            <span>MODERN SAUDI CULINARY IDENTITY</span>
          </div>
        </div>
      )}
    </>
  );
};
