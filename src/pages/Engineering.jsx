// src/pages/Engineering.jsx
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import HeroBackground from '../components/home/HeroBackground';
import SectionTransition from '../components/home/SectionTransition';

export default function Engineering() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <div className="overflow-x-hidden relative text-[#F5F2EB]">
      {/* HeroBackground fixed behind everything (very low z so it is visible through transparent sections) */}
      <div className="fixed inset-0 -z-30 pointer-events-none">
        <HeroBackground />
      </div>

      <div className="relative z-10">
        {/* ===== HERO (gestapelte Überschrift: INGENIEURS über KUNST) ===== */}
        <section
          ref={heroRef}
          className="h-[70vh] md:h-[75vh] relative overflow-hidden flex flex-col justify-between"
        >
          <motion.div
            className="flex-1 flex flex-col justify-between px-4 md:px-8 pt-20 pb-10"
            style={{ opacity: heroOpacity, y: heroY }}
          >
            <div className="max-w-screen-xl mx-auto w-full">
              <motion.div
                className="text-xs tracking-[0.5em] text-[#3B5BDB]/70 uppercase mb-4 font-mono"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                Prototypen & Produktentwicklung
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
                  INGENIEURS
                </span>

                {/* zweite Zeile (Filled) */}
                <span className="block text-[3.5rem] md:text-[6.5rem] lg:text-[9.5rem] font-extrabold text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)]">
                  KUNST
                </span>
              </motion.h1>

              <motion.p
                className="text-[#F5F2EB]/40 max-w-2xl text-base md:text-lg leading-relaxed mt-6 md:mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                Von der Idee zum Prototyp — kreative Lösungen für komplexe technische Herausforderungen.
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

        {/* Hero -> Statement transition (wave, transparent start so canvas shows through) */}
        <SectionTransition fromColor="transparent" toColor="rgba(240,237,230,0.95)" variant="wave" />

        {/* ===== STATEMENT (leicht opak, lässt Hintergrund durchscheinen) ===== */}
        <section className="bg-[rgba(240,237,230,0.95)] text-[#0A0A0A]">
          <div className="px-4 md:px-12 lg:px-16 pt-20 md:pt-32 pb-12 md:pb-20">
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#0A0A0A]/30 font-mono">LUCKYTECH ENGINEERING</span>
            </motion.div>

            <motion.h2
              className="text-[1.6rem] md:text-[3rem] lg:text-[4rem] font-light leading-[1.1] tracking-[-0.02em] max-w-6xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              Wir entwickeln <em className="italic text-[#0A0A0A]/60">Produkte</em> von Grund auf — vom Konzept über funktionsfähige Prototypen bis zur Serienreife.
            </motion.h2>
          </div>

          <div className="px-4 md:px-12 lg:px-16 pb-20 md:pb-32">
            <div className="max-w-screen-xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  'Von der ersten Idee bis zum fertigen Prototyp — unser Ansatz verbindet interdisziplinäres Denken mit modernster Fertigungstechnologie.',
                  'Wir nutzen agile Methoden und Rapid Prototyping, um Ideen schneller Realität werden zu lassen. Keine starren Prozesse.',
                  'Hardware-Design und Software-Integration unter einem Dach. So entstehen Lösungen, die Effizienz und Performance maximieren.',
                  'Transparenz und Qualität in jedem Schritt. Wir arbeiten eng mit unseren Kunden zusammen — vom Konzept über Testing bis zur Serienreife.',
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    className="text-sm text-[#0A0A0A]/60 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.5 }}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Statement -> Tiles transition (diagonal, subtle) */}
        <SectionTransition fromColor="rgba(240,237,230,0.95)" toColor="transparent" variant="diagonal" />

        {/* ===== SOLUTION TILE 1 (50/50 split) ===== */}
        <section className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
          <div className="relative overflow-hidden min-h-[50vh] lg:min-h-0">
            <motion.img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&q=80&auto=format"
              alt="Prototypenbau"
              className="w-full h-full object-cover"
              initial={{ scale: 1.06 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </div>

          <div className="bg-[rgba(10,10,10,0.72)] flex items-center px-8 md:px-16 py-16 lg:py-0">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
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

        {/* Tiles -> Product (shards) transition */}
        <SectionTransition fromColor="transparent" toColor="rgba(240,237,230,0.95)" variant="shards" />

        {/* ===== SOLUTION TILE 2 (reversed) ===== */}
        <section className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
          <div className="bg-[rgba(240,237,230,0.95)] text-[#0A0A0A] flex items-center px-8 md:px-16 py-16 lg:py-0 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#3B5BDB] block mb-6">Produktentwicklung</span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.02em] leading-[1.1] text-[#0A0A0A] mb-6">
                Komplette <em className="italic text-[#0A0A0A]/60">Entwicklung</em> aus einer Hand.
              </h3>
              <p className="text-[#0A0A0A]/60 text-sm md:text-base leading-relaxed mb-8">
                Hardware, Software, Mechanik, Design — wir begleiten Ihr Produkt durch den gesamten Entwicklungszyklus. Von der Machbarkeitsstudie bis zur Serienproduktion.
              </p>
              <Link
                to={createPageUrl('Kontakt')}
                className="text-xs tracking-[0.25em] uppercase text-[#0A0A0A]/50 hover:text-[#0A0A0A] transition-colors inline-flex items-center gap-2 group"
              >
                MEHR ERFAHREN <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="relative overflow-hidden min-h-[50vh] lg:min-h-0 order-1 lg:order-2">
            <motion.img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1600&q=80&auto=format"
              alt="Produktentwicklung"
              className="w-full h-full object-cover"
              initial={{ scale: 1.06 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </div>
        </section>

        {/* Product -> Video transition (diagonal, subtle) */}
        <SectionTransition fromColor="rgba(240,237,230,0.95)" toColor="transparent" variant="diagonal" />

        {/* ===== VIDEO STATEMENT (make HeroBackground visible through video) ===== */}
        <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply"
            src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
          />
          {/* transparent overlay so HeroBackground can be seen */}
          <div className="absolute inset-0 bg-transparent pointer-events-none" />
          <div className="absolute inset-0 flex items-end px-4 md:px-12 lg:px-16 pb-12 md:pb-20">
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
