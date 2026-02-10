import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Boxes, Cpu, Lightbulb, Sparkles, ArrowRight, ArrowDown, Search, PenTool, Cog, Rocket } from 'lucide-react';
import HeroBackground from '../components/home/HeroBackground';
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
  const textY = useTransform(heroProgress, [0, 1], [0, 150]);

  const processRef = useRef(null);
  const { scrollYProgress: processProgress } = useScroll({
    target: processRef,
    offset: ['start end', 'end start'],
  });
  const lineHeight = useTransform(processProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="bg-[#0A0A0A] text-[#F5F2EB] overflow-x-hidden relative">
      {/* Animated background from homepage (blue-tinted variant) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
        <HeroBackground />
      </div>

      <div className="relative z-10">

        {/* ===== 1. HERO — Normal-style: full-screen, huge headline at bottom ===== */}
        <section ref={heroRef} className="h-screen relative overflow-hidden flex flex-col justify-end">
          <motion.div
            className="px-6 md:px-16 pb-16 md:pb-24"
            style={{ opacity: heroOpacity, y: textY }}
          >
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="flex items-center gap-4 mb-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-[10px] md:text-xs tracking-[0.5em] text-[#3B5BDB]/50 uppercase font-mono">
                  LUCKYTECH ENGINEERING
                </span>
                <div className="h-px w-16 md:w-32 bg-[#3B5BDB]/20" />
              </motion.div>

              {/* Giant headline with ghost double — Normal-style large serif feeling but brutalist */}
              <div className="relative">
                <motion.h1
                  className="text-[2.5rem] md:text-[5rem] lg:text-[7rem] font-black tracking-[-0.04em] uppercase leading-[0.88] text-white"
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 40 }}
                >
                  Kreative Lösungen<br />für komplexe<br />
                  Herausforderungen<span className="text-[#3B5BDB]">.</span>
                </motion.h1>
                <motion.h1
                  className="absolute top-0 left-0 text-[2.5rem] md:text-[5rem] lg:text-[7rem] font-black tracking-[-0.04em] uppercase leading-[0.88] pointer-events-none select-none"
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '1px rgba(59,91,219,0.08)',
                  }}
                  initial={{ opacity: 0, x: 6, y: -4 }}
                  animate={{ opacity: 1, x: 6, y: -4 }}
                  transition={{ duration: 1, delay: 0.35 }}
                >
                  Kreative Lösungen<br />für komplexe<br />
                  Herausforderungen.
                </motion.h1>
              </div>

              <motion.div
                className="mt-10 flex items-center justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <Link
                  to={createPageUrl('Kontakt')}
                  className="inline-flex items-center gap-3 text-white font-bold text-sm md:text-base hover:gap-5 transition-all group border-b-2 border-white pb-1 uppercase tracking-wider"
                >
                  Kontakt <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
                <motion.div
                  className="flex items-center gap-3 text-white/30"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <span className="text-[10px] tracking-[0.3em] uppercase font-mono hidden md:block">Scrollen</span>
                  <ArrowDown className="w-4 h-4" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ===== 2. INTRO STATEMENT — Normal-style large text block ===== */}
        <section className="py-28 md:py-44 px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <motion.p
              className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-[1.1] text-[#F5F2EB]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              Wir kombinieren technisches{' '}
              <span className="text-[#3B5BDB]">Know-how</span> mit kreativen
              Denkansätzen für Lösungen, die{' '}
              <span className="text-[#F5F2EB]/20">begeistern.</span>
            </motion.p>
          </div>
        </section>

        {/* ===== 3. FOUR COLUMN DESCRIPTION — Normal About-style ===== */}
        <section className="px-6 md:px-16 pb-20 md:pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
              {[
                'Von der ersten Idee bis zum fertigen Prototyp — unser Engineering-Ansatz verbindet interdisziplinäres Denken mit modernster Fertigungstechnologie.',
                'Traditionelle Entwicklungsprozesse sind oft starr und langsam. Wir nutzen agile Methoden und Rapid Prototyping, um Ideen schneller zur Realität zu machen.',
                'Durch die Verbindung von Hardware-Design mit Software-Integration entstehen ganzheitliche Lösungen, die Effizienz und Performance maximieren.',
                'Wir arbeiten eng mit unseren Kunden zusammen — vom Konzept über Testing bis zur Serienreife. Transparenz und Qualität in jedem Schritt.',
              ].map((text, i) => (
                <motion.p
                  key={i}
                  className="text-sm md:text-[15px] text-white/30 leading-relaxed font-light"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 4. SOLUTIONS — Normal-style: two side-by-side blocks with images ===== */}
        <section className="px-6 md:px-16 pb-24 md:pb-36 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.012]" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(59,91,219,0.3) 2px, rgba(59,91,219,0.3) 4px)'
          }} />

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              className="flex items-center gap-4 mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-mono text-[#3B5BDB]/40">
                / UNSERE LÖSUNGEN
              </span>
              <div className="h-px flex-1 bg-[#3B5BDB]/10" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {[
                {
                  icon: Boxes,
                  label: 'PROTOTYPING',
                  title: 'Von der Skizze zum funktionalen Prototypen.',
                  desc: 'Rapid Prototyping, 3D-Druck und iteratives Testing — alles unter einem Dach. Schnelle Iteration, echtes Feedback.',
                  img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&q=80&auto=format',
                },
                {
                  icon: Cpu,
                  label: 'ENTWICKLUNG',
                  title: 'Komplette Produktentwicklung bis zur Serie.',
                  desc: 'Hardware, Software, Design — wir bringen Ihr Produkt von der Konzeption bis zur Serienreife. Alles aus einer Hand.',
                  img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&q=80&auto=format',
                },
              ].map((solution, i) => {
                const Icon = solution.icon;
                return (
                  <motion.div
                    key={solution.label}
                    className="group relative overflow-hidden border border-white/[0.06] hover:border-[#3B5BDB]/20 transition-all duration-500"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.15 }}
                  >
                    {/* Image */}
                    <div className="relative h-64 md:h-80 overflow-hidden">
                      <img
                        src={solution.img}
                        alt={solution.label}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
                      <div className="absolute top-5 left-5">
                        <div className="w-10 h-10 border border-[#3B5BDB]/30 bg-[#3B5BDB]/10 flex items-center justify-center backdrop-blur-sm">
                          <Icon className="w-4 h-4 text-[#3B5BDB]" />
                        </div>
                      </div>
                    </div>

                    {/* Text */}
                    <div className="p-6 md:p-8">
                      <span className="text-[10px] tracking-[0.4em] uppercase text-[#3B5BDB]/40 font-mono block mb-3">
                        {solution.label}
                      </span>
                      <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-3 leading-tight">
                        {solution.title}
                      </h3>
                      <p className="text-sm text-white/30 font-light leading-relaxed">
                        {solution.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== 5. SPLIT IMAGE + TEXT — Normal-style side by side ===== */}
        <SplitSection
          imgSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format"
          imgAlt="Circuit board detail"
          accent="/ Integration"
          title={<>NAHTLOSE<br/>KONNEKTIVITÄT<span className="text-[#3B5BDB]">.</span></>}
          text="Hardware, Software, Cloud — wir verbinden alle Systeme zu einem durchdachten Ganzen. Modular aufgebaut, zukunftssicher designt."
        />

        {/* ===== 6. MARQUEE ===== */}
        <PhilosophyMarquee />

        {/* ===== 7. FEATURE CARDS — Normal-style grid ===== */}
        <section className="py-28 md:py-40 px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="mb-16 md:mb-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-mono text-[#3B5BDB]/40">
                  / KEY CAPABILITIES
                </span>
                <div className="h-px flex-1 bg-[#3B5BDB]/10" />
              </div>

              <div className="relative">
                <motion.h2
                  className="text-5xl md:text-7xl lg:text-[8rem] font-black tracking-[-0.05em] uppercase leading-[0.85] text-white"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  WAS UNS<br/>AUSZEICHNET<span className="text-[#3B5BDB]">.</span>
                </motion.h2>
                <motion.h2
                  className="absolute top-0 left-0 text-5xl md:text-7xl lg:text-[8rem] font-black tracking-[-0.05em] uppercase leading-[0.85] pointer-events-none select-none"
                  style={{ color: 'transparent', WebkitTextStroke: '1px rgba(59,91,219,0.1)' }}
                  initial={{ opacity: 0, x: 6, y: -4 }}
                  whileInView={{ opacity: 1, x: 6, y: -4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                >
                  WAS UNS<br/>AUSZEICHNET.
                </motion.h2>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {featureCards.map((card, i) => (
                <FeatureCard key={card.num} {...card} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ===== 8. FULL WIDTH IMAGE BREAK ===== */}
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

        {/* ===== 9. SERVICES LIST — brutalist expandable rows ===== */}
        <section className="px-6 md:px-16 py-28 md:py-40 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.012]" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(59,91,219,0.3) 2px, rgba(59,91,219,0.3) 4px)'
          }} />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div className="mb-16 md:mb-20">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-mono text-[#3B5BDB]/40">
                  / LEISTUNGEN
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

        {/* ===== 10. SPLIT: Quality ===== */}
        <SplitSection
          imgSrc="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80&auto=format"
          imgAlt="Prototyping workspace"
          accent="/ Qualität"
          title={<>HÖCHSTE STANDARDS<br/>IN JEDEM DETAIL<span className="text-[#3B5BDB]">.</span></>}
          text="Höchste Fertigungsstandards mit Premium-Materialien. Vom Konzept bis zur Serienreife — durchdacht, getestet, perfektioniert."
          reverse
        />

        {/* ===== 11. SPEC LIST ===== */}
        <section className="py-20 md:py-32 px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
            <motion.div className="flex items-center gap-4 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-mono text-[#3B5BDB]/40">
                / SPECIFICATIONS
              </span>
              <div className="h-px flex-1 bg-[#3B5BDB]/10" />
            </motion.div>
            <SpecList />
          </div>
        </section>

        {/* ===== 12. PROCESS — scroll-reveal timeline ===== */}
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
                  / PROZESS
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

        {/* ===== 13. CTA ===== */}
        <section className="py-28 md:py-44 px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative mb-8">
                <h2 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-[-0.04em] uppercase leading-[0.9] text-white">
                  BEREIT FÜR<br/>IHR PROJEKT<span className="text-[#3B5BDB]">?</span>
                </h2>
                <h2
                  className="absolute top-0 left-0 text-4xl md:text-6xl lg:text-8xl font-black tracking-[-0.04em] uppercase leading-[0.9] pointer-events-none select-none"
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '1px rgba(59,91,219,0.08)',
                    transform: 'translate(5px, -3px)',
                  }}
                >
                  BEREIT FÜR<br/>IHR PROJEKT?
                </h2>
              </div>
              <Link
                to={createPageUrl('Kontakt')}
                className="inline-flex items-center gap-3 text-lg font-medium text-[#3B5BDB] border-b-2 border-[#3B5BDB] pb-2 hover:text-white hover:border-white transition-all group"
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