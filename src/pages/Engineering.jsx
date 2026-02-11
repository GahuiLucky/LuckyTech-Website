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
                INGENIEURS
              </span>
              <span className="block text-[3.5rem] md:text-[7rem] lg:text-[10rem] text-[#F5F2EB]">
                KUNST
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

      {/* ─── BLOCK 2: STATEMENT — editorial split ─── */}
      <section className="bg-[#F0EDE6] text-[#0A0A0A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[35vw] h-[35vw] bg-[#3B5BDB]/[0.03] rounded-full -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="relative px-6 md:px-12 lg:px-16 pt-24 md:pt-36 pb-20 md:pb-32">
          <motion.div
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-10 h-px bg-[#3B5BDB]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#0A0A0A]/35">Engineering</span>
          </motion.div>
          <motion.h2
            className="text-[1.8rem] md:text-[3.2rem] lg:text-[4rem] font-light leading-[1.1] tracking-[-0.02em] max-w-5xl mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Wir entwickeln <em className="italic text-[#0A0A0A]/45">Produkte</em> von Grund auf — vom Konzept über funktionsfähige Prototypen bis zur Serienreife.
          </motion.h2>

          {/* 4-column with accent lines */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-[#0A0A0A]/10">
            {[
              { accent: '#3B5BDB', text: 'Von der ersten Idee bis zum fertigen Prototyp — unser Ansatz verbindet interdisziplinäres Denken mit modernster Fertigungstechnologie.' },
              { accent: '#C8A850', text: 'Wir nutzen agile Methoden und Rapid Prototyping, um Ideen schneller Realität werden zu lassen. Keine starren Prozesse.' },
              { accent: '#3B5BDB', text: 'Hardware-Design und Software-Integration unter einem Dach. So entstehen Lösungen, die Effizienz und Performance maximieren.' },
              { accent: '#C8A850', text: 'Transparenz und Qualität in jedem Schritt. Wir arbeiten eng mit unseren Kunden zusammen — vom Konzept über Testing bis zur Serienreife.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="pt-8 px-5 first:pl-0 last:pr-0 border-l border-[#0A0A0A]/[0.08] first:border-l-0 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="w-5 h-px mb-5 transition-all duration-500 group-hover:w-10" style={{ backgroundColor: item.accent }} />
                <p className="text-sm text-[#0A0A0A]/45 leading-[1.7]">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BLOCK 3: SERVICES — 3 stacked cards with images ─── */}
      {[
        {
          label: 'Prototypenbau',
          title: <>Von der Skizze zum <em className="italic text-white/40">funktionsfähigen</em> Prototyp.</>,
          desc: 'Rapid Prototyping, 3D-Druck, CNC-Fertigung und Elektronik-Integration. Schnelle Iteration, echtes Feedback — alles unter einem Dach.',
          img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80&auto=format',
          accent: '#3B5BDB',
          dark: true,
        },
        {
          label: 'Produktentwicklung',
          title: <>Komplette <em className="italic text-[#0A0A0A]/40">Entwicklung</em> aus einer Hand.</>,
          desc: 'Hardware, Software, Mechanik, Design — wir begleiten Ihr Produkt durch den gesamten Entwicklungszyklus. Von der Machbarkeitsstudie bis zur Serienproduktion.',
          img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80&auto=format',
          accent: '#C8A850',
          dark: false,
        },
      ].map((service, idx) => (
        <section key={idx} className={`w-full ${service.dark ? 'bg-[#0A0A0A]' : 'bg-[#F0EDE6]'}`}>
          <div className={`grid grid-cols-1 lg:grid-cols-12 min-h-[70vh] ${idx % 2 === 1 ? '' : ''}`}>
            {/* Image — 7 cols */}
            <div className={`relative overflow-hidden min-h-[45vh] lg:min-h-0 lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
              <motion.img
                src={service.img}
                alt={service.label}
                className="w-full h-full object-cover"
                initial={{ scale: 1.06 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              />
              {/* Gradient overlay towards text */}
              <div className={`absolute inset-0 ${service.dark ? 'bg-gradient-to-r from-[#0A0A0A]/30 to-transparent' : 'bg-gradient-to-l from-[#F0EDE6]/30 to-transparent'}`} />
            </div>

            {/* Text — 5 cols */}
            <div className={`lg:col-span-5 flex items-center px-8 md:px-12 lg:px-14 py-16 lg:py-0 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-md"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-px" style={{ backgroundColor: service.accent }} />
                  <span className="text-[11px] tracking-[0.3em] uppercase" style={{ color: service.accent + '90' }}>
                    {service.label}
                  </span>
                </div>
                <h3 className={`text-2xl md:text-3xl lg:text-[2.5rem] font-light tracking-[-0.02em] leading-[1.12] mb-5 ${service.dark ? 'text-white' : 'text-[#0A0A0A]'}`}>
                  {service.title}
                </h3>
                <p className={`text-[15px] leading-[1.7] mb-8 ${service.dark ? 'text-white/30' : 'text-[#0A0A0A]/40'}`}>
                  {service.desc}
                </p>
                <Link
                  to={createPageUrl('Kontakt')}
                  className={`inline-flex items-center gap-2.5 text-xs tracking-[0.25em] uppercase transition-all duration-300 group border-b pb-2 ${
                    service.dark
                      ? 'text-white/35 border-white/10 hover:text-white hover:border-white/40'
                      : 'text-[#0A0A0A]/35 border-[#0A0A0A]/10 hover:text-[#0A0A0A] hover:border-[#0A0A0A]/40'
                  }`}
                >
                  PROJEKT STARTEN <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* ─── BLOCK 4: TWO CAPABILITY TILES — with hover interaction ─── */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 bg-[#0A0A0A]">
        {[
          {
            label: 'Creative Thinking',
            title: <>Innovative Lösungsansätze für komplexe <em className="italic text-white/35">Herausforderungen</em>.</>,
            desc: 'Design Thinking Workshops, Innovations-Beratung, Machbarkeitsstudien und strukturierte Problemlösungs-Strategien.',
            accent: '#3B5BDB',
          },
          {
            label: 'Beratung & Konzeption',
            title: <>Strategische Beratung für <em className="italic text-white/35">technische</em> Projekte.</>,
            desc: 'Technologie-Beratung, Konzeptentwicklung, Feasibility Studies und Projektplanung — vom ersten Gespräch bis zum Go.',
            accent: '#C8A850',
          },
        ].map((tile, i) => (
          <motion.div
            key={i}
            className="relative px-8 md:px-12 lg:px-14 py-20 md:py-28 flex flex-col justify-between min-h-[55vh] border-r border-white/[0.04] last:border-r-0 group overflow-hidden cursor-default"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.7 }}
          >
            {/* Hover glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{ background: `radial-gradient(ellipse at 50% 100%, ${tile.accent}08, transparent 70%)` }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-5 h-px transition-all duration-500 group-hover:w-10" style={{ backgroundColor: tile.accent }} />
                <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: tile.accent + '70' }}>
                  {tile.label}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-[2.2rem] font-light tracking-[-0.02em] leading-[1.15] text-white mb-5">
                {tile.title}
              </h3>
              <p className="text-sm text-white/20 leading-[1.7] max-w-sm">
                {tile.desc}
              </p>
            </div>
            <div className="relative z-10 mt-10">
              <Link
                to={createPageUrl('Kontakt')}
                className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-white/25 hover:text-white transition-colors group/link border-b border-white/[0.06] pb-2 hover:border-white/30"
              >
                KONTAKT <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ─── BLOCK 5: FULL-WIDTH VIDEO — cinematic ─── */}
      <section className="relative w-full h-[55vh] md:h-[75vh] overflow-hidden">
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-[#0A0A0A]/20 to-transparent" />
        <div className="absolute inset-0 flex items-end px-6 md:px-12 lg:px-16 pb-12 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <motion.div
              className="w-16 h-px bg-white/30 mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{ transformOrigin: 'left' }}
            />
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-light tracking-[-0.03em] leading-[1.05] text-white max-w-3xl">
              Schnellere Entwicklungszyklen. <em className="italic text-white/45">Messbare</em> Ergebnisse.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* ─── BLOCK 6: CTA ─── */}
      <section className="bg-[#0A0A0A] px-6 md:px-12 lg:px-16 py-28 md:py-40 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[45vw] h-[45vw] bg-[#3B5BDB]/[0.03] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-[#3B5BDB]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-white/20">Nächster Schritt</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-[6rem] font-light tracking-[-0.03em] leading-[0.95] text-white mb-10 max-w-4xl">
            Bereit für Ihr nächstes <em className="italic text-white/35">Projekt</em>?
          </h2>
          <Link
            to={createPageUrl('Kontakt')}
            className="inline-flex items-center gap-3 bg-white/[0.05] border border-white/10 px-8 py-4 text-white/50 text-sm tracking-[0.2em] uppercase hover:bg-white/[0.1] hover:text-white transition-all duration-300 group"
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
}