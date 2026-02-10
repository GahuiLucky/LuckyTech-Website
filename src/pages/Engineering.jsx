import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import HeroBackground from '../components/home/HeroBackground';

export default function Engineering() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="bg-[#0A0A0A] text-[#F5F2EB] overflow-x-hidden relative">

      {/* Animated electrotechnical canvas — full page background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <HeroBackground />
      </div>

      <div className="relative z-10">

      {/* ─── BLOCK 1: HERO — brutalist style like Handwerk ─── */}
      <section ref={heroRef} className="h-screen relative overflow-hidden flex flex-col justify-between">
        <motion.div
          className="flex-1 flex flex-col justify-between px-6 md:px-16 pt-32 pb-12"
          style={{ opacity: heroOpacity, y: heroY }}
        >
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              className="text-xs tracking-[0.5em] text-[#3B5BDB]/70 uppercase mb-8 font-mono"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Prototypen & Produktentwicklung
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
                ENGI
              </span>
              <span className="block text-[3.5rem] md:text-[7rem] lg:text-[10rem] text-[#F5F2EB]">
                NEERING
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
              Von der Idee zum Prototyp — kreative Lösungen 
              für komplexe technische Herausforderungen.
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

      {/* ─── BLOCK 2: STATEMENT — large text + 4 column details ─── */}
      <section className="bg-[#F0EDE6] text-[#0A0A0A]">
        <div className="px-6 md:px-12 lg:px-16 pt-24 md:pt-40 pb-16 md:pb-24">
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#0A0A0A]/30 font-mono">LUCKYTECH ENGINEERING</span>
          </motion.div>
          <motion.h2
            className="text-[1.8rem] md:text-[3.5rem] lg:text-[4.5rem] font-light leading-[1.1] tracking-[-0.02em] max-w-6xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Wir entwickeln <em className="italic text-[#0A0A0A]/50">Produkte</em> von Grund auf — vom Konzept über funktionsfähige Prototypen bis zur Serienreife.
          </motion.h2>
        </div>

        {/* 4-column text grid */}
        <div className="px-6 md:px-12 lg:px-16 pb-24 md:pb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Von der ersten Idee bis zum fertigen Prototyp — unser Ansatz verbindet interdisziplinäres Denken mit modernster Fertigungstechnologie.',
              'Wir nutzen agile Methoden und Rapid Prototyping, um Ideen schneller Realität werden zu lassen. Keine starren Prozesse.',
              'Hardware-Design und Software-Integration unter einem Dach. So entstehen Lösungen, die Effizienz und Performance maximieren.',
              'Transparenz und Qualität in jedem Schritt. Wir arbeiten eng mit unseren Kunden zusammen — vom Konzept über Testing bis zur Serienreife.',
            ].map((text, i) => (
              <motion.p
                key={i}
                className="text-sm text-[#0A0A0A]/50 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BLOCK 3: SOLUTION TILE — Prototypenbau (full width, 50/50 split) ─── */}
      <section className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Left: image */}
        <div className="relative overflow-hidden min-h-[50vh] lg:min-h-0 bg-black">
          <motion.img
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80&auto=format"
            alt="Prototypenbau"
            className="w-full h-full object-cover"
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        {/* Right: text on dark */}
        <div className="bg-[#0A0A0A] flex items-center px-8 md:px-14 lg:px-16 py-16 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-lg"
          >
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#3B5BDB]/60 block mb-6">Prototypenbau</span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.02em] leading-[1.1] text-white mb-6">
              Von der Skizze zum <em className="italic text-white/50">funktionsfähigen</em> Prototyp.
            </h3>
            <p className="text-white/30 text-sm md:text-base leading-relaxed mb-8">
              Rapid Prototyping, 3D-Druck, CNC-Fertigung und Elektronik-Integration. Schnelle Iteration, echtes Feedback — alles unter einem Dach.
            </p>
            <Link
              to={createPageUrl('Kontakt')}
              className="text-xs tracking-[0.25em] uppercase text-white/40 hover:text-white transition-colors inline-flex items-center gap-2 group"
            >
              PROJEKT STARTEN <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── BLOCK 4: SOLUTION TILE — Produktentwicklung (reversed, 50/50) ─── */}
      <section className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Left: text on light */}
        <div className="bg-[#F0EDE6] text-[#0A0A0A] flex items-center px-8 md:px-14 lg:px-16 py-16 lg:py-0 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-lg"
          >
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#3B5BDB] block mb-6">Produktentwicklung</span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.02em] leading-[1.1] text-[#0A0A0A] mb-6">
              Komplette <em className="italic text-[#0A0A0A]/50">Entwicklung</em> aus einer Hand.
            </h3>
            <p className="text-[#0A0A0A]/40 text-sm md:text-base leading-relaxed mb-8">
              Hardware, Software, Mechanik, Design — wir begleiten Ihr Produkt durch den gesamten Entwicklungszyklus. Von der Machbarkeitsstudie bis zur Serienproduktion.
            </p>
            <Link
              to={createPageUrl('Kontakt')}
              className="text-xs tracking-[0.25em] uppercase text-[#0A0A0A]/40 hover:text-[#0A0A0A] transition-colors inline-flex items-center gap-2 group"
            >
              MEHR ERFAHREN <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
        {/* Right: image */}
        <div className="relative overflow-hidden min-h-[50vh] lg:min-h-0 bg-black order-1 lg:order-2">
          <motion.img
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80&auto=format"
            alt="Produktentwicklung"
            className="w-full h-full object-cover"
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </section>

      {/* ─── BLOCK 5: TWO PRODUCT TILES side-by-side (like Normal "EDA" / "ASICs") ─── */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2">
        {/* Tile 1 */}
        <div className="bg-[#0A0A0A] border-r border-white/[0.06] px-8 md:px-12 lg:px-14 py-16 md:py-24 flex flex-col justify-between min-h-[60vh]">
          <div>
            <span className="text-[11px] tracking-[0.3em] uppercase text-white/20 block mb-8">Creative Thinking</span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-[-0.02em] leading-[1.15] text-white mb-6">
              Innovative Lösungsansätze. Workshops, Methoden, <em className="italic text-white/40">Ergebnisse</em>.
            </h3>
            <p className="text-sm text-white/25 leading-relaxed max-w-md">
              Design Thinking Workshops, Innovations-Beratung, Machbarkeitsstudien und strukturierte Problemlösungs-Strategien.
            </p>
          </div>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              to={createPageUrl('Kontakt')}
              className="text-xs tracking-[0.25em] uppercase text-white/30 hover:text-white transition-colors inline-flex items-center gap-2 group"
            >
              KONTAKT <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Tile 2 */}
        <div className="bg-[#111111] px-8 md:px-12 lg:px-14 py-16 md:py-24 flex flex-col justify-between min-h-[60vh]">
          <div>
            <span className="text-[11px] tracking-[0.3em] uppercase text-white/20 block mb-8">Beratung & Konzeption</span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-[-0.02em] leading-[1.15] text-white mb-6">
              Strategische Beratung für <em className="italic text-white/40">technische</em> Projekte.
            </h3>
            <p className="text-sm text-white/25 leading-relaxed max-w-md">
              Technologie-Beratung, Konzeptentwicklung, Feasibility Studies und Projektplanung — vom ersten Gespräch bis zum Go.
            </p>
          </div>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              to={createPageUrl('Kontakt')}
              className="text-xs tracking-[0.25em] uppercase text-white/30 hover:text-white transition-colors inline-flex items-center gap-2 group"
            >
              KONTAKT <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── BLOCK 6: FULL-WIDTH VIDEO + overlaid statement ─── */}
      <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/45" />
        <div className="absolute inset-0 flex items-end px-6 md:px-12 lg:px-16 pb-12 md:pb-20">
          <motion.h2
            className="text-3xl md:text-5xl lg:text-7xl font-light tracking-[-0.03em] leading-[1] text-white max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            Schnellere Entwicklungszyklen. <em className="italic text-white/50">Messbare</em> Ergebnisse.
          </motion.h2>
        </div>
      </section>

      {/* ─── BLOCK 7: CTA — dark, massive text ─── */}
      <section className="bg-[#0A0A0A] px-6 md:px-12 lg:px-16 py-32 md:py-48">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-[7rem] font-light tracking-[-0.03em] leading-[0.95] text-white mb-10 max-w-5xl">
            Bereit für Ihr nächstes <em className="italic text-white/40">Projekt</em>?
          </h2>
          <Link
            to={createPageUrl('Kontakt')}
            className="inline-flex items-center gap-3 text-white/40 text-sm tracking-[0.2em] uppercase hover:text-white transition-colors group border-b border-white/15 pb-3 hover:border-white/50"
          >
            LET'S TALK
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </section>

        </div>
      </div>
    );
}