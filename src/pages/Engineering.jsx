import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu, Lightbulb, Boxes, Sparkles, ArrowRight, ArrowDown, Search, PenTool, Cog, Rocket } from 'lucide-react';
import ServiceRow from '../components/engineering/ServiceRow';
import ProcessRow from '../components/engineering/ProcessRow';
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

export default function Engineering() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroOpacity = useTransform(heroProgress, [0, 0.6], [1, 0]);
  const textY = useTransform(heroProgress, [0, 1], [0, 150]);

  const processRef = useRef(null);
  const { scrollYProgress: processProgress } = useScroll({
    target: processRef,
    offset: ['start end', 'end start'],
  });
  const lineHeight = useTransform(processProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="bg-[#0B1A1F] text-[#E0F0F0] overflow-x-hidden relative">
      {/* Subtle grid pattern — OXI-inspired */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(0,234,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,234,255,0.4) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="relative z-10">
        {/* ===== HERO ===== */}
        <section ref={heroRef} className="h-screen relative overflow-hidden flex flex-col justify-between">
          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00EAFF] rounded-full blur-[180px] opacity-[0.06]" />
            <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#3B5BDB] rounded-full blur-[150px] opacity-[0.05]" />
          </div>

          <motion.div
            className="flex-1 flex flex-col justify-between px-6 md:px-16 pt-32 pb-12 relative z-10"
            style={{ opacity: heroOpacity, y: textY }}
          >
            <div className="max-w-7xl mx-auto w-full">
              <motion.div
                className="text-xs tracking-[0.4em] text-[#00EAFF]/60 uppercase mb-8 font-mono"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                WITH INNOVATION, IDEAS BECOME REALITY
              </motion.div>
              <motion.h1
                className="font-bold tracking-tighter leading-[0.85] mb-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 1, type: 'spring', stiffness: 40 }}
              >
                <span
                  className="block text-[3.5rem] md:text-[7rem] lg:text-[10rem] text-transparent"
                  style={{ WebkitTextStroke: '1.5px rgba(0,234,255,0.7)' }}
                >
                  ENGI
                </span>
                <span className="block text-[3.5rem] md:text-[7rem] lg:text-[10rem] text-[#E0F0F0]">
                  NEERING
                </span>
              </motion.h1>
            </div>

            <div className="max-w-7xl mx-auto w-full flex items-end justify-between">
              <motion.div
                className="hidden md:flex gap-5 font-mono text-[11px] tracking-[0.15em] text-[#E0F0F0]/30 uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <span>[Prototyping]</span>
                <span>[Development]</span>
                <span>[Innovation]</span>
                <span>[Consulting]</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 text-[#00EAFF]/40"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-xs tracking-widest uppercase hidden md:block font-mono">Scrollen</span>
                <ArrowDown className="w-4 h-4" />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ===== INTRO ===== */}
        <section className="py-24 md:py-36 px-6 md:px-16 border-t border-[#00EAFF]/[0.06]">
          <div className="max-w-4xl mx-auto">
            <motion.p
              className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-[1.1] text-[#E0F0F0]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              Wir kombinieren technisches{' '}
              <span className="text-[#00EAFF]">Know-how</span> mit kreativen
              Denkansätzen für Lösungen, die{' '}
              <span className="text-[#E0F0F0]/20">begeistern.</span>
            </motion.p>
          </div>
        </section>

        {/* ===== MARQUEE ===== */}
        <PhilosophyMarquee />

        {/* ===== SERVICES — brutalist list ===== */}
        <section className="px-6 md:px-16 py-24 md:py-36 relative overflow-hidden">
          {/* Scanline overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,234,255,0.08) 3px, rgba(0,234,255,0.08) 4px)'
          }} />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              className="mb-16 md:mb-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-mono text-[#00EAFF]/40">
                  / CAPABILITIES
                </span>
                <div className="h-px flex-1 bg-[#00EAFF]/10" />
              </div>

              {/* Brutalist double-text heading */}
              <div className="relative">
                <motion.h2
                  className="text-5xl md:text-7xl lg:text-[8rem] font-black tracking-[-0.05em] uppercase leading-[0.85] text-[#E0F0F0]"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  WAS WIR<br/>BAUEN<span className="text-[#00EAFF]">.</span>
                </motion.h2>
                <motion.h2
                  className="absolute top-0 left-0 text-5xl md:text-7xl lg:text-[8rem] font-black tracking-[-0.05em] uppercase leading-[0.85] pointer-events-none select-none"
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '1px rgba(0,234,255,0.08)',
                  }}
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

        {/* ===== PROCESS — scroll-reveal timeline ===== */}
        <section ref={processRef} className="relative bg-[#081518] py-32 md:py-48 px-6 md:px-16 overflow-hidden border-y border-[#00EAFF]/[0.06]">
          {/* Scanline overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,234,255,0.08) 3px, rgba(0,234,255,0.08) 4px)'
          }} />

          {/* Animated progress line */}
          <div className="absolute left-6 md:left-16 top-0 bottom-0 w-px bg-[#00EAFF]/[0.04]">
            <motion.div
              className="w-full bg-gradient-to-b from-[#00EAFF]/30 via-[#00EAFF]/10 to-transparent"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Header */}
            <div className="mb-20 md:mb-28">
              <motion.div
                className="flex items-center gap-4 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-mono text-[#00EAFF]/40">
                  / PROZESS
                </span>
                <div className="h-px flex-1 bg-[#00EAFF]/10" />
              </motion.div>

              <div className="relative">
                <motion.h2
                  className="text-5xl md:text-7xl lg:text-[8rem] font-black tracking-[-0.05em] uppercase leading-[0.85] text-[#E0F0F0]"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  SYSTEMATIC<br/>INNOVATION<span className="text-[#00EAFF]">.</span>
                </motion.h2>
                <motion.h2
                  className="absolute top-0 left-0 text-5xl md:text-7xl lg:text-[8rem] font-black tracking-[-0.05em] uppercase leading-[0.85] pointer-events-none select-none"
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '1px rgba(0,234,255,0.08)',
                  }}
                  initial={{ opacity: 0, x: 6, y: -4 }}
                  whileInView={{ opacity: 1, x: 6, y: -4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                >
                  SYSTEMATIC<br/>INNOVATION.
                </motion.h2>
              </div>
            </div>

            {/* Steps */}
            <div>
              {processSteps.map((step, i) => (
                <ProcessRow key={step.num} step={step} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ===== PHILOSOPHY — OXI numbered features style ===== */}
        <section className="py-32 md:py-44 px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="flex items-center gap-4 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-mono text-[#00EAFF]/40">
                / PHILOSOPHIE
              </span>
              <div className="h-px flex-1 bg-[#00EAFF]/10" />
            </motion.div>

            <motion.h2
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-[-0.04em] uppercase leading-[0.9] text-[#E0F0F0] mb-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              DENKEN JENSEITS<br/>DES GEWÖHNLICHEN<span className="text-[#00EAFF]">.</span>
            </motion.h2>

            <motion.p
              className="text-base md:text-lg text-[#E0F0F0]/30 max-w-2xl leading-relaxed font-light mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Bei LuckyTech Engineering glauben wir an die Kraft kreativer Problemlösung.
              Wir kombinieren technisches Know-how mit innovativen Denkansätzen, um Lösungen
              zu entwickeln, die nicht nur funktionieren, sondern begeistern.
            </motion.p>

            {/* OXI-style numbered feature list */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {[
                { title: 'Interdisziplinär', text: 'Wir verbinden verschiedene Fachbereiche für ganzheitliche Lösungen' },
                { title: 'Agil', text: 'Schnelle Iterationen und flexible Anpassung an neue Erkenntnisse' },
                { title: 'Zukunftsorientiert', text: 'Wir entwickeln Lösungen, die auch morgen noch relevant sind' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="border-t border-[#00EAFF]/[0.08] py-8 md:pr-8 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl md:text-3xl font-black text-[#00EAFF]/20 font-mono leading-none flex-shrink-0">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#E0F0F0] mb-3">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#E0F0F0]/30 font-light leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="py-28 md:py-44 px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative mb-8">
                <h2 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-[-0.04em] uppercase leading-[0.9] text-[#E0F0F0]">
                  BEREIT FÜR<br/>IHR PROJEKT<span className="text-[#00EAFF]">?</span>
                </h2>
                <h2
                  className="absolute top-0 left-0 text-4xl md:text-6xl lg:text-8xl font-black tracking-[-0.04em] uppercase leading-[0.9] pointer-events-none select-none"
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '1px rgba(0,234,255,0.06)',
                    transform: 'translate(5px, -3px)',
                  }}
                >
                  BEREIT FÜR<br/>IHR PROJEKT?
                </h2>
              </div>
              <Link
                to={createPageUrl('Kontakt')}
                className="inline-flex items-center gap-3 px-10 py-4 bg-[#00EAFF] text-[#0B1A1F] font-bold uppercase tracking-wider hover:bg-[#E0F0F0] transition-all group"
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