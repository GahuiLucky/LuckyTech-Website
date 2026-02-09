import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import ServiceTilesWithDialog from '../components/handwerk/ServiceTilesWithDialog';
import ProcessSteps from '../components/handwerk/ProcessSteps';

export default function Handwerk() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroOpacity = useTransform(heroProgress, [0, 0.6], [1, 0]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(heroProgress, [0, 1], [0, 150]);

  return (
    <div className="bg-[#F5F2EB] text-[#0A0A0A]">

      {/* ===== HERO — Clean, light, editorial ===== */}
      <section ref={heroRef} className="h-screen relative overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          <img
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&q=80"
            alt="Elektrotechnik"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0A0A0A]/40" />
        </motion.div>

        <motion.div
          className="relative z-10 h-full flex flex-col justify-between px-6 md:px-16 pt-32 pb-12"
          style={{ opacity: heroOpacity, y: textY }}
        >
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              className="text-xs tracking-[0.5em] text-white/50 uppercase mb-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Meisterbetrieb für Elektrotechnik
            </motion.div>
            <motion.h1
              className="text-[3.5rem] md:text-[7rem] lg:text-[10rem] font-black tracking-[-0.06em] leading-[0.82] text-white"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, type: "spring", stiffness: 25 }}
            >
              HAND<span className="text-[#C8A850]">—</span><br />
              WERK
            </motion.h1>
          </div>

          <div className="max-w-7xl mx-auto w-full flex items-end justify-between">
            <motion.p
              className="text-white/50 max-w-md text-base md:text-lg leading-relaxed hidden md:block"
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
      <section className="py-24 md:py-36 px-6 md:px-16 bg-[#F5F2EB]">
        <div className="max-w-4xl mx-auto">
          <motion.p
            className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-[1.1] text-[#0A0A0A]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            Wir sehen jede Installation
            als <span className="text-[#C8A850]">Designprojekt</span> —
            durchdacht, funktional,{' '}
            <span className="text-[#0A0A0A]/20">zukunftssicher.</span>
          </motion.p>
        </div>
      </section>

      {/* ===== SERVICE TILES ===== */}
      <section className="px-6 md:px-16 pb-24 md:pb-36 bg-[#F5F2EB]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-bold tracking-tighter mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Leistungen<span className="text-[#C8A850]">.</span>
          </motion.h2>
          <ServiceTilesWithDialog />
        </div>
      </section>

      {/* ===== PROCESS — Immersive dark section ===== */}
      <section className="relative py-28 md:py-40 px-6 md:px-16 bg-[#0A0A0A] overflow-hidden">
        {/* Decorative grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#F5F2EB 1px, transparent 1px), linear-gradient(90deg, #F5F2EB 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Accent glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C8A850]/[0.04] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs tracking-[0.4em] text-[#C8A850]/60 uppercase mb-4 block">Prozess</span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[0.9]">
                So arbeiten<br />wir<span className="text-[#C8A850]">.</span>
              </h2>
            </motion.div>
            <motion.p
              className="text-white/30 max-w-sm text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Vier Schritte von der Idee zur fertigen Installation — transparent, termingerecht, auf den Punkt.
            </motion.p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-28 md:py-44 px-6 md:px-16 bg-[#0A0A0A]">
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
  );
}