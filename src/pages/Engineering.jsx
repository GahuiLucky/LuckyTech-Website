import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Boxes, Cpu, Lightbulb, Sparkles, ArrowRight, ArrowDown, Search, PenTool, Cog, Rocket } from 'lucide-react';
import HeroImage from '../components/engineering/HeroImage';
import ServiceRow from '../components/engineering/ServiceRow';
import ProcessRow from '../components/engineering/ProcessRow';
import FeatureCard from '../components/engineering/FeatureCard';
import SplitSection from '../components/engineering/SplitSection';
import SpecList from '../components/engineering/SpecList';
import PhilosophyMarquee from '../components/engineering/PhilosophyMarquee';

const services = [
  {
    title: 'PROTOTYPENBAU',
    tagline: 'Von Idee zu Realität',
    icon: Boxes,
    description: 'Von der Idee zum funktionsfähigen Prototypen. Wir entwickeln und bauen Ihre Vision mit modernsten Fertigungsmethoden.',
    features: ['Rapid Prototyping', '3D-Druck & CNC-Fertigung', 'Elektronik-Integration', 'Iterative Optimierung'],
  },
  {
    title: 'PRODUKTENTWICKLUNG',
    tagline: 'Konzeption bis Serie',
    icon: Cpu,
    description: 'Komplette Entwicklung von der Konzeption bis zur Serienreife. Hardware, Software, Design — alles aus einer Hand.',
    features: ['Marktanalyse & Konzeption', 'Hardware & Software Design', 'Prototypenentwicklung', 'Produktionsbegleitung'],
  },
  {
    title: 'CREATIVE THINKING',
    tagline: 'Innovation als Methode',
    icon: Lightbulb,
    description: 'Innovative Lösungsansätze für komplexe Herausforderungen durch kreative Denkprozesse und strukturierte Workshops.',
    features: ['Design Thinking Workshops', 'Innovations-Beratung', 'Machbarkeitsstudien', 'Problemlösungs-Strategien'],
  },
  {
    title: 'BERATUNG & KONZEPTION',
    tagline: 'Strategie trifft Technik',
    icon: Sparkles,
    description: 'Strategische Beratung für technische Projekte und Produktinnovationen. Wir denken mit, bevor wir bauen.',
    features: ['Technologie-Beratung', 'Konzeptentwicklung', 'Feasibility Studies', 'Projektplanung'],
  },
];

const processSteps = [
  { num: '01', icon: Search, title: 'ANALYSE', subtitle: 'Verstehen & Erforschen', cmd: 'analyze.requirements()', detail: 'Deep-dive in Ihre Vision. Wir verstehen nicht nur was Sie wollen, sondern auch warum — und finden die besten Wege dorthin.' },
  { num: '02', icon: PenTool, title: 'KONZEPTION', subtitle: 'Entwerfen & Planen', cmd: 'design.solution()', detail: 'Kreative Lösungsentwicklung mit iterativem Design Thinking und Rapid Ideation. Jede Idee wird geprüft und verfeinert.' },
  { num: '03', icon: Cog, title: 'PROTOTYPING', subtitle: 'Bauen & Testen', cmd: 'build.prototype()', detail: 'Von digital zu physisch — schnelle Iteration, kontinuierliches Testing, echtes Feedback. Wir lernen durch Machen.' },
  { num: '04', icon: Rocket, title: 'REALISIERUNG', subtitle: 'Produzieren & Liefern', cmd: 'deploy.production()', detail: 'Serienreife Umsetzung mit Qualitätssicherung und Produktionsbegleitung. Vom Prototyp zur Perfektion.' },
];

const featureCards = [
  { num: '01', title: 'Schneller Bauen, Smarter Testen', description: 'Vom Konzept zum funktionalen Prototypen in Rekordzeit. Hands-on-Kontrolle über jeden Entwicklungsschritt.' },
  { num: '02', title: 'Qualität & Material', description: 'Höchste Fertigungsstandards mit Premium-Materialien. Jedes Detail wird auf Langlebigkeit und Performance optimiert.' },
  { num: '03', title: 'Konnektivität & Integration', description: 'Nahtlose Verbindung zwischen Hardware, Software und bestehenden Systemen — alles aus einer Hand.' },
  { num: '04', title: 'Skalierbar & Zukunftssicher', description: 'Von Einzelstücken bis zur Serienproduktion. Lösungen, die wachsen und sich anpassen.' },
  { num: '05', title: 'Direkter Zugriff', description: 'Transparente Prozesse, kein Rätselraten. Sie sehen und verstehen jeden Schritt der Entwicklung.' },
  { num: '06', title: 'Kreative Werkzeuge', description: 'Modernste Tools und Methoden für Innovation: 3D-Druck, CAD, Rapid Prototyping und mehr.' },
];

export default function Engineering() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroOpacity = useTransform(heroProgress, [0, 0.6], [1, 0]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(heroProgress, [0, 1], [0, 120]);

  const processRef = useRef(null);
  const { scrollYProgress: processProgress } = useScroll({
    target: processRef,
    offset: ['start end', 'end start'],
  });
  const lineHeight = useTransform(processProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="bg-[#0A0A0A] text-[#F5F2EB] overflow-x-hidden relative">
      <div className="relative z-10">

        {/* ===== HERO — OXI-style full-bleed image with overlay text ===== */}
        <section ref={heroRef} className="h-screen relative overflow-hidden">
          <motion.div style={{ scale: heroScale }} className="absolute inset-0">
            <HeroImage />
          </motion.div>

          <motion.div
            className="relative z-10 h-full flex flex-col justify-between px-6 md:px-16 pt-32 pb-12"
            style={{ opacity: heroOpacity, y: textY }}
          >
            <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-end pb-16 md:pb-24">
              <motion.h1
                className="font-black tracking-tighter leading-[0.85] mb-6"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, type: 'spring', stiffness: 40 }}
              >
                <span className="block text-6xl md:text-[8rem] lg:text-[11rem] text-white">
                  ENGI
                </span>
                <span className="block text-6xl md:text-[8rem] lg:text-[11rem] text-white">
                  NEERING
                </span>
              </motion.h1>

              <motion.div
                className="flex items-end justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <div className="hidden md:block" />
                <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-white/50 max-w-xs text-right">
                  Innovation trifft Kreativität —<br />in der Geschwindigkeit der Inspiration
                </p>
              </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
              className="flex items-center gap-3 text-white/30"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <span className="text-[10px] tracking-[0.3em] uppercase font-mono">Scrollen</span>
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </section>

        {/* ===== OVERVIEW — OXI-style centered statement ===== */}
        <section className="py-28 md:py-44 px-6 md:px-16">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              className="flex items-center justify-center gap-4 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-px w-12 bg-[#3B5BDB]/20" />
              <span className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-mono text-[#3B5BDB]/50">
                Overview
              </span>
              <div className="h-px w-12 bg-[#3B5BDB]/20" />
            </motion.div>
            <motion.h2
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-[-0.04em] leading-[0.9] uppercase text-white mb-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Ein neuer Standard<br />in kreativer <span className="text-[#3B5BDB]">Freiheit</span>
            </motion.h2>
            <motion.p
              className="text-base md:text-lg text-white/30 font-light leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Wir kombinieren technisches Know-how mit innovativen Denkansätzen, um Lösungen
              zu entwickeln, die nicht nur funktionieren, sondern begeistern.
            </motion.p>
          </div>
        </section>

        {/* ===== SPLIT IMAGE SECTIONS — OXI-style alternating ===== */}
        <SplitSection
          imgSrc="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80&auto=format"
          imgAlt="Prototyping workspace"
          accent="/ Prototyping"
          title={<>Schneller bauen,<br/>smarter testen</>}
          text="Von der ersten Skizze zum funktionalen Prototypen. Rapid Prototyping, 3D-Druck und iteratives Testing — alles unter einem Dach."
        />
        <SplitSection
          imgSrc="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80&auto=format"
          imgAlt="Product development"
          accent="/ Entwicklung"
          title={<>Qualität in<br/>jedem Detail</>}
          text="Höchste Fertigungsstandards mit Premium-Materialien. Vom Konzept bis zur Serienreife — durchdacht, getestet, perfektioniert."
          reverse
        />

        {/* ===== FEATURE CARDS — OXI-style numbered grid ===== */}
        <section className="py-28 md:py-40 px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-mono text-[#3B5BDB]/40">
                / Key Capabilities
              </span>
              <div className="h-px flex-1 bg-[#3B5BDB]/10" />
            </motion.div>

            <div className="relative mb-16">
              <motion.h2
                className="text-4xl md:text-6xl lg:text-[6rem] font-black tracking-[-0.05em] uppercase leading-[0.85] text-white"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                Was uns<br/>auszeichnet<span className="text-[#3B5BDB]">.</span>
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {featureCards.map((card, i) => (
                <FeatureCard key={card.num} {...card} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ===== MARQUEE ===== */}
        <PhilosophyMarquee />

        {/* ===== FULL WIDTH IMAGE BREAK ===== */}
        <section className="relative h-[50vh] md:h-[70vh] overflow-hidden">
          <motion.img
            src="https://images.unsplash.com/photo-1563770660941-20978e870e26?w=1920&q=80&auto=format"
            alt="Engineering detail"
            className="w-full h-full object-cover"
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          />
          <div className="absolute inset-0 bg-[#0A0A0A]/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.h2
              className="text-4xl md:text-7xl lg:text-[8rem] font-black tracking-[-0.05em] uppercase text-white/90 text-center leading-[0.85]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              GRENZENLOSE<br/>KREATIVITÄT
            </motion.h2>
          </div>
        </section>

        {/* ===== SERVICES — brutalist list ===== */}
        <section className="px-6 md:px-16 py-28 md:py-40 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.012]" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(59,91,219,0.3) 2px, rgba(59,91,219,0.3) 4px)'
          }} />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div className="mb-16 md:mb-20">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-mono text-[#3B5BDB]/40">
                  / Leistungen
                </span>
                <div className="h-px flex-1 bg-[#3B5BDB]/10" />
              </div>
              <div className="relative">
                <motion.h2
                  className="text-5xl md:text-7xl lg:text-[8rem] font-black tracking-[-0.05em] uppercase leading-[0.85] text-[#F5F2EB]"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  WAS WIR<br/>BAUEN<span className="text-[#3B5BDB]">.</span>
                </motion.h2>
                <motion.h2
                  className="absolute top-0 left-0 text-5xl md:text-7xl lg:text-[8rem] font-black tracking-[-0.05em] uppercase leading-[0.85] pointer-events-none select-none"
                  style={{ color: 'transparent', WebkitTextStroke: '1px rgba(59,91,219,0.1)' }}
                  initial={{ opacity: 0, x: 6, y: -4 }}
                  whileInView={{ opacity: 1, x: 6, y: -4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                >
                  WAS WIR<br/>BAUEN.
                </motion.h2>
              </div>
            </motion.div>

            <div>
              {services.map((s, i) => (
                <ServiceRow key={s.title} service={s} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ===== SPLIT: Connectivity ===== */}
        <SplitSection
          imgSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format"
          imgAlt="Circuit board detail"
          accent="/ Integration"
          title={<>Nahtlose<br/>Konnektivität</>}
          text="Hardware, Software, Cloud — wir verbinden alle Systeme zu einem durchdachten Ganzen. Modular aufgebaut, zukunftssicher designt."
          reverse
        />

        {/* ===== SPEC LIST ===== */}
        <section className="py-20 md:py-32 px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
            <motion.div className="flex items-center gap-4 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-mono text-[#3B5BDB]/40">
                / Specifications
              </span>
              <div className="h-px flex-1 bg-[#3B5BDB]/10" />
            </motion.div>
            <SpecList />
          </div>
        </section>

        {/* ===== PROCESS — scroll-reveal ===== */}
        <section ref={processRef} className="relative bg-[#0A0A0A] py-32 md:py-48 px-6 md:px-16 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.012]" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(59,91,219,0.15) 2px, rgba(59,91,219,0.15) 4px)'
          }} />

          <div className="absolute left-6 md:left-16 top-0 bottom-0 w-px bg-white/[0.03]">
            <motion.div
              className="w-full bg-gradient-to-b from-[#3B5BDB]/30 via-[#3B5BDB]/10 to-transparent"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="mb-20 md:mb-28">
              <motion.div className="flex items-center gap-4 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <span className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-mono text-[#3B5BDB]/40">
                  / Prozess
                </span>
                <div className="h-px flex-1 bg-[#3B5BDB]/10" />
              </motion.div>

              <div className="relative">
                <motion.h2
                  className="text-5xl md:text-7xl lg:text-[8rem] font-black tracking-[-0.05em] uppercase leading-[0.85] text-white"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  SYSTEMATIC<br/>INNOVATION<span className="text-[#3B5BDB]">.</span>
                </motion.h2>
                <motion.h2
                  className="absolute top-0 left-0 text-5xl md:text-7xl lg:text-[8rem] font-black tracking-[-0.05em] uppercase leading-[0.85] pointer-events-none select-none"
                  style={{ color: 'transparent', WebkitTextStroke: '1px rgba(59,91,219,0.1)' }}
                  initial={{ opacity: 0, x: 6, y: -4 }}
                  whileInView={{ opacity: 1, x: 6, y: -4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                >
                  SYSTEMATIC<br/>INNOVATION.
                </motion.h2>
              </div>
            </div>

            <div>
              {processSteps.map((step, i) => (
                <ProcessRow key={step.num} step={step} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="py-32 md:py-48 px-6 md:px-16">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-[-0.04em] uppercase leading-[0.9] text-white mb-10">
                BEREIT FÜR<br/>IHR PROJEKT<span className="text-[#3B5BDB]">?</span>
              </h2>
              <Link
                to={createPageUrl('Kontakt')}
                className="inline-flex items-center gap-3 px-12 py-5 bg-[#3B5BDB] text-white font-bold uppercase tracking-wider hover:bg-[#4C6BEB] transition-all group text-base"
              >
                Projekt starten
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}