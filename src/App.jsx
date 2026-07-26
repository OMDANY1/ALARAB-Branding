import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { HeaderNav } from './components/HeaderNav';
import { GridOverlay } from './components/GridOverlay';
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
import { brandInfo } from './data/brandData';

export default function App() {
  const [activeChapter, setActiveChapter] = useState('01');
  const [lang, setLang] = useState('ar');
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [gridVisible, setGridVisible] = useState(false);
  const audioContextRef = useRef(null);
  const noiseNodeRef = useRef(null);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // Intersection Observer for Active Chapter Tracking
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const chapterId = entry.target.id.replace('chapter-', '');
          if (chapterId) {
            setActiveChapter(chapterId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    brandInfo.chapters.forEach((ch) => {
      const el = document.getElementById(`chapter-${ch.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Web Audio Sizzle/Ember Sound Synthesizer Simulation
  useEffect(() => {
    if (audioPlaying) {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!audioContextRef.current) {
          audioContextRef.current = new AudioCtx();
        }
        const ctx = audioContextRef.current;
        if (ctx.state === 'suspended') {
          ctx.resume();
        }

        // Generate gentle warm noise (emulating crackling grill embers)
        const bufferSize = ctx.sampleRate * 2;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * 0.015;
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        noise.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, ctx.currentTime);

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.08, ctx.currentTime);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        noise.start();
        noiseNodeRef.current = noise;
      } catch (err) {
        console.warn('Audio Context init:', err);
      }
    } else {
      if (noiseNodeRef.current) {
        try {
          noiseNodeRef.current.stop();
          noiseNodeRef.current.disconnect();
        } catch (e) {}
        noiseNodeRef.current = null;
      }
    }

    return () => {
      if (noiseNodeRef.current) {
        try { noiseNodeRef.current.stop(); } catch (e) {}
      }
    };
  }, [audioPlaying]);

  return (
    <div className="min-h-screen bg-[#0E0D0D] text-[#EFEAE4] font-ar selection:bg-[#E64648] selection:text-[#EFEAE4]">
      
      {/* 12-Column Architectural Grid Debugger Overlay */}
      <GridOverlay visible={gridVisible} />

      {/* Header & Drawer Navigation */}
      <HeaderNav 
        activeChapter={activeChapter}
        lang={lang}
        setLang={setLang}
        audioPlaying={audioPlaying}
        setAudioPlaying={setAudioPlaying}
        gridVisible={gridVisible}
        setGridVisible={setGridVisible}
      />

      {/* Main 13 Chapters Sequence */}
      <main className="w-full">
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
