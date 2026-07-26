import React, { useState, useEffect } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { HeroChapter } from './components/HeroChapter';
import { BrandStoryChapter } from './components/BrandStoryChapter';
import { LogoSystemChapter } from './components/LogoSystemChapter';
import { BrandSymbolChapter } from './components/BrandSymbolChapter';
import { TypographyChapter } from './components/TypographyChapter';
import { ColorSystemChapter } from './components/ColorSystemChapter';
import { PhotographyChapter } from './components/PhotographyChapter';
import { GraphicLanguageChapter } from './components/GraphicLanguageChapter';
import { PackagingChapter } from './components/PackagingChapter';
import { RestaurantExperienceChapter } from './components/RestaurantExperienceChapter';
import { SocialMediaChapter } from './components/SocialMediaChapter';
import { BrandApplicationsChapter } from './components/BrandApplicationsChapter';
import { ClosingChapter } from './components/ClosingChapter';
import { GridOverlay } from './components/GridOverlay';

export function App() {
  const [lang, setLang] = useState('ar');
  const [activeChapter, setActiveChapter] = useState(1);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [showGrid, setShowGrid] = useState(false);

  // Track active scene on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sceneElements = Array.from({ length: 13 }, (_, i) => {
        const id = String(i + 1).padStart(2, '0');
        return document.getElementById(`scene-${id}`);
      });

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sceneElements.length - 1; i >= 0; i--) {
        const el = sceneElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveChapter(i + 1);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0E0D0D] text-[#EFEAE4] relative selection:bg-[#E64648] selection:text-[#EFEAE4]">
      
      {/* 12-Column Architectural Grid Debugger */}
      <GridOverlay visible={showGrid} />

      {/* Header Navigation */}
      <HeaderNav 
        activeChapter={activeChapter} 
        lang={lang} 
        setLang={setLang} 
        audioPlaying={audioPlaying} 
        setAudioPlaying={setAudioPlaying}
      />

      {/* 13 Immersive Editorial Scenes */}
      <main className="relative">
        <HeroChapter lang={lang} />
        <BrandStoryChapter lang={lang} />
        <LogoSystemChapter lang={lang} />
        <BrandSymbolChapter lang={lang} />
        <TypographyChapter lang={lang} />
        <ColorSystemChapter lang={lang} />
        <PhotographyChapter lang={lang} />
        <GraphicLanguageChapter lang={lang} />
        <PackagingChapter lang={lang} />
        <RestaurantExperienceChapter lang={lang} />
        <SocialMediaChapter lang={lang} />
        <BrandApplicationsChapter lang={lang} />
        <ClosingChapter lang={lang} />
      </main>

    </div>
  );
}

export default App;
