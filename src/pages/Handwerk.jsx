import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import HeroBackground from '../components/home/HeroBackground';
import ServiceTilesWithDialog from '../components/handwerk/ServiceTilesWithDialog';
import ScrollProcessSection from '../components/handwerk/ScrollProcessSection';
import ImageShowcase from '../components/handwerk/ImageShowcase';
import FullWidthImage from '../components/handwerk/FullWidthImage';
import SectionTransition from '../components/home/SectionTransition';

export default function Handwerk() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(heroProgress, [0, 0.6], [1, 0]);
  const textY = useTransform(heroProgress, [0, 1], [0, 80]);

  return (
    <div className="bg-[#0A0A0A] text-[#F5F2EB] overflow-x-hidden relative">
      {/* Animated electrotechnical canvas — full page background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <HeroBackground />
      </div>

      <div className="relative z-10">
        {/* ===== HERO (breiter, höher, mehr Abstand) ===== */}
        <section
          ref={heroRef}
          className="h-[75vh] md:h-[80vh] relative overflow-hidden flex flex-col justify-between"
        >
          <motion.div
            className="flex-1 flex flex-col justify-between px-4 md:px-8 pt-20 pb-12" // weniger seitliche Einrückung, mehr Breite
            style={{ opacity: heroOpacity, y: textY }}
          >
            <div className="max-w-screen-xl mx-auto w-full"> {/* breitere Max-Width */}
              <motion.div
                className="text-xs tracking-[0.5em] text-[#C8A850]/70 uppercase mb-4 font-mono"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                Meisterbetrieb für Elektrotechnik
              </motion.div>

              <motion.h1
                className="font-bold tracking-tighter leading-[1.0] mb-8 md:mb-12"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15, duration: 0.9, type: 'spring', stiffness: 40 }}
              >
                {/* erste Zeile (Outline / Stroke) */}
                <span
                  className="block text-[3.5rem] md:text-[6.5rem] lg:text-[9.5rem] font-extrabold text-transparent"
                  style={{ WebkitTextStroke: '2px rgba(59,91,219,0.18)' }}
                  aria-hidden="true"
                >
                  HAND
                </span>

                {/* zweite Zeile (Filled) */}
                <span className="block text-[3.5rem] md:text-[6.5rem] lg:text-[9.5rem] font-extrabold text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)]">
                  WERK
                </span>
              </motion.h1>

              <motion.p
                className="text-[#F5F2EB]/40 max-w-2xl text-base md:text-lg leading-relaxed mt-6 md:mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                Wir verbinden traditionelle Handwerkskunst mit modernster Technologie.
                Jedes Projekt erzählt eine Geschichte von Präzision.
              </motion.p>
            </div>

            <div className="max-w-screen-xl mx-auto w-full flex items-end justify-between">
              <motion.div
                className="flex items-center gap-3 text-white/40"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-xs tracking-widest uppercase hidden md:block">Scrollen</span>
                <ArrowDown className="w-4 h-4" />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ===== INTRO ===== */}
        <section className="py-20 md:py-32 px-4 md:px-8">
          <div className="max-w-screen-xl mx-auto">
            <motion.p
              className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-[1.1] text-[#F5F2EB]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              Wir sehen jede Installation
              als <span className="text-[#C8A850]">Designprojekt</span> —
              durchdacht, funktional,{' '}
              <span className="text-[#F5F2EB]/20">zukunftssicher.</span>
            </motion.p>
          </div>
        </section>

        {/* ===== SERVICE TILES — breitere Layouts ===== */}
        <section className="px-4 md:px-8 pb-20 md:pb-32 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.015]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(191,255,0,0.3) 2px, rgba(191,255,0,0.3) 4px)',
            }}
          />

          <div className="max-w-screen-2xl mx-auto relative z-10"> {/* noch breitere Max-Width für Tiles */}
            <motion.div
              className="mb-12 md:mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-mono text-[#BFFF00]/40">
                  / LEISTUNGEN
                </span>
                <div className="h-px flex-1 bg-[#BFFF00]/10" />
              </div>

              <div className="relative">
                <motion.h2
                  className="text-5xl md:text-7xl lg:text-[8rem] font-black tracking-[-0.05em] uppercase leading-[0.85] text-[#F5F2EB]"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  WAS WIR
                  <br />
                  KÖNNEN<span className="text-[#BFFF00]">.</span>
                </motion.h2>
                <motion.h2
                  className="absolute top-0 left-0 text-5xl md:text-7xl lg:text-[8rem] font-black tracking-[-0.05em] uppercase leading-[0.85] pointer-events-none select-none"
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '1px rgba(191,255,0,0.12)',
                  }}
                  initial={{ opacity: 0, x: 6, y: -4 }}
                  whileInView={{ opacity: 1, x: 6, y: -4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                >
                  WAS WIR
                  <br />
                  KÖNNEN.
                </motion.h2>
              </div>
            </motion.div>

            <ServiceTilesWithDialog />
          </div>
        </section>

        {/* ===== IMAGE SHOWCASE ===== */}
        <ImageShowcase />

        {/* ===== PROCESS — Scroll-reveal timeline ===== */}
        <ScrollProcessSection />

        {/* ===== FULL WIDTH IMAGE ===== */}
        <FullWidthImage />

        {/* Video -> CTA transition (wave) */}
        <SectionTransition fromColor="transparent" toColor="rgba(10,10,10,0.85)" variant="wave" />

        {/* ===== CTA (semi-transparent so background peeks through) ===== */}
        <section className="px-4 md:px-12 lg:px-16 py-24 md:py-40 bg-[rgba(10,10,10,0.85)]">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
            <h2 className="text-4xl md:text-6xl lg:text-[6.5rem] font-light tracking-[-0.03em] leading-[0.95] text-white mb-8 max-w-5xl">
              Bereit für Ihr nächstes <em className="italic text-white/40">Projekt</em>?
            </h2>
            <Link to={createPageUrl('Kontakt')} className="inline-flex items-center gap-3 text-white/40 text-sm tracking-[0.2em] uppercase hover:text-white transition-colors group border-b border-white/15 pb-3 hover:border-white/50">
              LET'S TALK
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </section>
      </div>
    </div>
  );
}