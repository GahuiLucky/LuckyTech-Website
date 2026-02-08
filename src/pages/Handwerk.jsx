import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ProjectCarousel from '../components/handwerk/ProjectCarousel';
import ServiceGrid from '../components/handwerk/ServiceGrid';
import ManifestoBlock from '../components/handwerk/ManifestoBlock';

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
    <div className="bg-white text-[#0A0A0A]">

      {/* ============ HERO — Full viewport, centered type ============ */}
      <section ref={heroRef} className="h-screen relative overflow-hidden flex items-center justify-center">
        <motion.div className="absolute inset-0" style={{ y: heroY, scale: heroScale }}>
          <img
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&q=80"
            alt="Elektrotechnik"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0A0A0A]/45" />
        </motion.div>

        <motion.div
          className="relative z-10 text-center px-6"
          style={{ opacity: heroOpacity }}
        >
          <motion.h1
            className="text-[3.5rem] md:text-[7rem] lg:text-[10rem] font-black text-white tracking-tighter leading-[0.88] uppercase"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 30 }}
          >
            Wir schaffen<br/>
            <span className="text-white/40">Handwerk</span>
          </motion.h1>
          <motion.div
            className="flex justify-center gap-8 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link
              to={createPageUrl('Kontakt')}
              className="text-sm text-white/70 border-b border-white/30 pb-1 hover:text-white hover:border-white transition-all uppercase tracking-widest"
            >
              Kontakt
            </Link>
            <span className="text-sm text-white/30 uppercase tracking-widest hidden md:block">
              Elektroinstallation · Smarthome · E-Mobilität
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* ============ MANIFESTO — UNS rotating text style ============ */}
      <section className="py-28 md:py-44 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="text-xl md:text-2xl text-[#0A0A0A]/40 leading-relaxed max-w-3xl mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Wir verbinden traditionelle Handwerkskunst mit modernster Technologie.
            Jede Installation erzählt eine Geschichte von Sorgfalt, Expertise und dem
            Anspruch, das Gewöhnliche zu übertreffen.
          </motion.p>

          <ManifestoBlock />
        </div>
      </section>

      {/* ============ FEATURED PROJECTS — Horizontal scroll like UNS ============ */}
      <section className="py-20 md:py-32 bg-[#F5F2EB]">
        <ProjectCarousel />
      </section>

      {/* ============ PHILOSOPHY — Large image + editorial text ============ */}
      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
          {/* Image */}
          <div className="relative overflow-hidden min-h-[50vh]">
            <motion.img
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80"
              alt="Werkstatt"
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center p-10 md:p-20 lg:p-28">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05] mb-8">
                Architektur<br/>
                der Elektrik
              </h2>
              <p className="text-lg text-[#0A0A0A]/50 leading-relaxed mb-6">
                Unsere Arbeit beginnt dort, wo andere aufhören. Wir sehen jede
                Elektroinstallation als ein Designprojekt — durchdacht, funktional,
                zukunftssicher.
              </p>
              <p className="text-lg text-[#0A0A0A]/50 leading-relaxed mb-10">
                Als Meisterbetrieb entwickeln wir Lösungen, die über Jahrzehnte bestehen.
                Von der Beratung bis zur letzten Schraube — Präzision in jedem Detail.
              </p>
              <Link
                to={createPageUrl('Kontakt')}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#0A0A0A] border-b border-[#0A0A0A]/20 pb-1 hover:border-[#0A0A0A] transition-all uppercase tracking-wider"
              >
                Projekt starten <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES — UNS grid with clean cards ============ */}
      <section className="py-24 md:py-36 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-16 md:mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
              Leistungen
            </h2>
            <p className="text-lg text-[#0A0A0A]/40 mt-6 max-w-xl">
              Umfassende Elektrotechnik-Lösungen für Wohn- und Gewerbeimmobilien.
            </p>
          </motion.div>
        </div>
        <div className="max-w-7xl mx-auto">
          <ServiceGrid />
        </div>
      </section>

      {/* ============ STATS — Clean horizontal bar ============ */}
      <section className="bg-[#0A0A0A] py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {[
              { value: '15+', label: 'Jahre Erfahrung' },
              { value: '500+', label: 'Abgeschlossene Projekte' },
              { value: '100%', label: 'Kundenzufriedenheit' },
              { value: '24/7', label: 'Notdienst verfügbar' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                className="text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-3">
                  {s.value}
                </div>
                <div className="text-sm text-white/35 uppercase tracking-wider">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FULL-BLEED IMAGE + QUOTE ============ */}
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="Detail"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/50" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <motion.blockquote
            className="text-center max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-[1.05]">
              „Qualität ist kein Zufall — sie ist das Ergebnis von Sorgfalt und Anspruch."
            </p>
          </motion.blockquote>
        </div>
      </section>

      {/* ============ CTA — Minimal like UNS ============ */}
      <section className="py-28 md:py-44 px-6 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] mb-8">
              Bereit für Ihr nächstes Projekt?<br/>
              <span className="text-[#0A0A0A]/25">Lassen Sie uns reden.</span>
            </h2>
            <Link
              to={createPageUrl('Kontakt')}
              className="inline-flex items-center gap-3 text-lg font-medium text-[#0A0A0A] border-b-2 border-[#0A0A0A] pb-1 hover:text-[#0A0A0A]/60 hover:border-[#0A0A0A]/60 transition-all group"
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