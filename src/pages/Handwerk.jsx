import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import MarqueeStrip from '../components/handwerk/MarqueeStrip';
import ServiceCards from '../components/handwerk/ServiceCards';
import ProcessSteps from '../components/handwerk/ProcessSteps';

export default function Handwerk() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(heroProgress, [0, 1], [0, 300]);
  const heroOpacity = useTransform(heroProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.08]);

  return (
    <div className="bg-[#0A0A0A] text-[#F5F2EB]">

      {/* ============ HERO — Dark, immersive, split type ============ */}
      <section ref={heroRef} className="h-screen relative overflow-hidden flex items-end">
        <motion.div className="absolute inset-0" style={{ y: heroY, scale: heroScale }}>
          <img
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&q=80"
            alt="Elektrotechnik"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0A0A0A]/60" />
        </motion.div>

        <motion.div
          className="relative z-10 w-full px-6 md:px-16 pb-16 md:pb-24"
          style={{ opacity: heroOpacity }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-xs tracking-[0.4em] text-[#C8A850] uppercase mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Meisterbetrieb für Elektrotechnik
            </motion.div>
            <motion.h1
              className="text-[3rem] md:text-[6rem] lg:text-[9rem] font-black tracking-tighter leading-[0.85]"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, type: "spring", stiffness: 30 }}
            >
              HAND—<br/>
              <span className="text-transparent" style={{ WebkitTextStroke: '2px rgba(245,242,235,0.5)' }}>
                WERK
              </span>
            </motion.h1>
            <motion.div
              className="flex gap-8 mt-8 items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <Link
                to={createPageUrl('Kontakt')}
                className="text-sm text-[#C8A850] border border-[#C8A850]/40 px-6 py-3 hover:bg-[#C8A850] hover:text-[#0A0A0A] transition-all uppercase tracking-widest"
              >
                Projekt starten
              </Link>
              <span className="text-sm text-white/25 uppercase tracking-widest hidden md:block">
                Smarthome · Wallbox · Installation · Service
              </span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ============ MARQUEE STRIP ============ */}
      <MarqueeStrip />

      {/* ============ INTRO — Asymmetric editorial ============ */}
      <section className="py-28 md:py-44 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] mb-8">
              Architektur<br/>
              <span className="text-[#C8A850]">der</span> Elektrik
            </h2>
            <div className="w-16 h-px bg-[#C8A850]/40 mb-8" />
            <p className="text-lg text-white/40 leading-relaxed">
              Wir sehen jede Elektroinstallation als ein Designprojekt — durchdacht,
              funktional, zukunftssicher. Von der ersten Beratung bis zur letzten Schraube.
            </p>
          </motion.div>
          <motion.div
            className="lg:col-span-7 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              { value: '15+', label: 'Jahre Erfahrung' },
              { value: '500+', label: 'Projekte realisiert' },
              { value: '100%', label: 'Meister-Qualität' },
              { value: '24/7', label: 'Notdienst' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                className="border border-white/8 p-6 md:p-8 hover:border-[#C8A850]/30 transition-colors"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              >
                <div className="text-3xl md:text-5xl font-bold tracking-tighter text-[#C8A850] mb-2">
                  {s.value}
                </div>
                <div className="text-xs text-white/30 uppercase tracking-wider">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ SERVICE CARDS — Full-bleed vertical cards ============ */}
      <section>
        <div className="px-6 md:px-16 mb-12">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-5xl md:text-7xl font-bold tracking-tighter"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Leistungen
            </motion.h2>
            <p className="text-lg text-white/30 mt-4 max-w-lg">
              Vier Kernbereiche. Eine Philosophie: Präzision in jedem Detail.
            </p>
          </div>
        </div>
        <ServiceCards />
      </section>

      {/* ============ PROCESS — Interactive accordion ============ */}
      <section className="py-24 md:py-36 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
              So arbeiten<br/>
              <span className="text-white/25">wir.</span>
            </h2>
          </motion.div>
        </div>
        <div className="max-w-7xl mx-auto border border-white/10 overflow-hidden">
          <ProcessSteps />
        </div>
      </section>

      {/* ============ IMMERSIVE QUOTE ============ */}
      <section className="relative py-32 md:py-48 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-12 h-px bg-[#C8A850] mb-10" />
            <blockquote className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05]">
              „Qualität ist kein Zufall —<br/>
              <span className="text-[#C8A850]">sie ist das Ergebnis</span><br/>
              von Sorgfalt und Anspruch."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ============ MARQUEE AGAIN ============ */}
      <MarqueeStrip />

      {/* ============ CTA ============ */}
      <section className="py-28 md:py-44 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] mb-8">
              Bereit für Ihr<br/>nächstes Projekt?
            </h2>
            <Link
              to={createPageUrl('Kontakt')}
              className="inline-flex items-center gap-3 text-lg font-medium text-[#C8A850] border-b-2 border-[#C8A850] pb-1 hover:text-white hover:border-white transition-all group"
            >
              Kontakt aufnehmen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}