import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import HeroBackground from '../components/home/HeroBackground';
import ServiceTilesWithDialog from '../components/handwerk/ServiceTilesWithDialog';
import ScrollProcessSection from '../components/handwerk/ScrollProcessSection';

export default function Handwerk() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroOpacity = useTransform(heroProgress, [0, 0.6], [1, 0]);
  const textY = useTransform(heroProgress, [0, 1], [0, 150]);

  return (
    <div className="bg-[#0A0A0A] text-[#F5F2EB] overflow-x-hidden relative">

      {/* Animated electrotechnical canvas — full page background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <HeroBackground />
      </div>

      <div className="relative z-10">

        {/* ===== HERO ===== */}
        <section ref={heroRef} className="h-screen relative overflow-hidden flex flex-col justify-between">
          <motion.div
            className="flex-1 flex flex-col justify-between px-6 md:px-16 pt-32 pb-12"
            style={{ opacity: heroOpacity, y: textY }}
          >
            <div className="max-w-7xl mx-auto w-full">
              <motion.div
                className="text-xs tracking-[0.5em] text-[#C8A850]/70 uppercase mb-8 font-mono"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                Meisterbetrieb für Elektrotechnik
              </motion.div>
              <motion.h1
                className="font-bold tracking-tighter leading-[0.85] mb-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 1, type: "spring", stiffness: 40 }}
              >
                <span
                  className="block text-[3.5rem] md:text-[7rem] lg:text-[10rem] text-transparent"
                  style={{ WebkitTextStroke: '2px rgba(245,242,235,0.9)' }}
                >
                  HAND
                </span>
                <span className="block text-[3.5rem] md:text-[7rem] lg:text-[10rem] text-[#F5F2EB]">
                  WERK
                </span>
              </motion.h1>
            </div>

            <div className="max-w-7xl mx-auto w-full flex items-end justify-between">
              <motion.p
                className="text-[#F5F2EB]/40 max-w-md text-base md:text-lg leading-relaxed hidden md:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Wir verbinden traditionelle Handwerkskunst mit modernster Technologie.
                Jedes Projekt erzählt eine Geschichte von Präzision.
              </motion.p>
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
        <section className="py-24 md:py-36 px-6 md:px-16">
          <div className="max-w-4xl mx-auto">
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

        {/* ===== SERVICE TILES ===== */}
        <section className="px-6 md:px-16 pb-24 md:pb-36">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                className="text-sm font-bold tracking-[0.4em] text-white/30 font-mono"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                / LEISTUNGEN
              </motion.div>
              <motion.div
                className="h-px flex-1 bg-white/[0.06]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ transformOrigin: 'left' }}
              />
            </div>
            <motion.h2
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Was wir<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1.5px rgba(245,242,235,0.5)' }}>
                können
              </span>
              <span className="text-[#C8A850]">.</span>
            </motion.h2>
            <ServiceTilesWithDialog />
          </div>
        </section>

        {/* ===== PROCESS — Scroll-reveal timeline ===== */}
        <ScrollProcessSection />

        {/* ===== CTA ===== */}
        <section className="py-28 md:py-44 px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter leading-[0.95] text-white mb-8">
                Bereit für Ihr<br />nächstes Projekt?
              </h2>
              <Link
                to={createPageUrl('Kontakt')}
                className="inline-flex items-center gap-3 text-lg font-medium text-[#C8A850] border-b-2 border-[#C8A850] pb-2 hover:text-white hover:border-white transition-all group"
              >
                Kontakt aufnehmen
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}