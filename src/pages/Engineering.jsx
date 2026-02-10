import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Boxes, Cpu, Lightbulb, Sparkles, ArrowRight, Search, PenTool, Cog, Rocket } from 'lucide-react';
import EngineeringBackground from '../components/engineering/EngineeringBackground';
import ServiceRow from '../components/engineering/ServiceRow';
import ProcessRow from '../components/engineering/ProcessRow';
import FeatureCard from '../components/engineering/FeatureCard';
import SplitSection from '../components/engineering/SplitSection';
import SpecList from '../components/engineering/SpecList';
import PhilosophyMarquee from '../components/engineering/PhilosophyMarquee';
import SolutionCard from '../components/engineering/SolutionCard';

const services = [
  {
    title: 'Prototypenbau',
    tagline: 'Von Idee zu Realität',
    icon: Boxes,
    description: 'Von der Idee zum funktionsfähigen Prototypen. Wir entwickeln und bauen Ihre Vision mit modernsten Fertigungsmethoden.',
    features: ['Rapid Prototyping', '3D-Druck & CNC-Fertigung', 'Elektronik-Integration', 'Iterative Optimierung'],
  },
  {
    title: 'Produktentwicklung',
    tagline: 'Konzeption bis Serie',
    icon: Cpu,
    description: 'Komplette Entwicklung von der Konzeption bis zur Serienreife. Hardware, Software, Design — alles aus einer Hand.',
    features: ['Marktanalyse & Konzeption', 'Hardware & Software Design', 'Prototypenentwicklung', 'Produktionsbegleitung'],
  },
  {
    title: 'Creative Thinking',
    tagline: 'Innovation als Methode',
    icon: Lightbulb,
    description: 'Innovative Lösungsansätze für komplexe Herausforderungen durch kreative Denkprozesse und strukturierte Workshops.',
    features: ['Design Thinking Workshops', 'Innovations-Beratung', 'Machbarkeitsstudien', 'Problemlösungs-Strategien'],
  },
  {
    title: 'Beratung & Konzeption',
    tagline: 'Strategie trifft Technik',
    icon: Sparkles,
    description: 'Strategische Beratung für technische Projekte und Produktinnovationen. Wir denken mit, bevor wir bauen.',
    features: ['Technologie-Beratung', 'Konzeptentwicklung', 'Feasibility Studies', 'Projektplanung'],
  },
];

const processSteps = [
  { num: '01', icon: Search, title: 'Analyse', subtitle: 'Verstehen & Erforschen', cmd: 'analyze.requirements()', detail: 'Deep-dive in Ihre Vision. Wir verstehen nicht nur was Sie wollen, sondern auch warum — und finden die besten Wege dorthin.' },
  { num: '02', icon: PenTool, title: 'Konzeption', subtitle: 'Entwerfen & Planen', cmd: 'design.solution()', detail: 'Kreative Lösungsentwicklung mit iterativem Design Thinking und Rapid Ideation. Jede Idee wird geprüft und verfeinert.' },
  { num: '03', icon: Cog, title: 'Prototyping', subtitle: 'Bauen & Testen', cmd: 'build.prototype()', detail: 'Von digital zu physisch — schnelle Iteration, kontinuierliches Testing, echtes Feedback. Wir lernen durch Machen.' },
  { num: '04', icon: Rocket, title: 'Realisierung', subtitle: 'Produzieren & Liefern', cmd: 'deploy.production()', detail: 'Serienreife Umsetzung mit Qualitätssicherung und Produktionsbegleitung. Vom Prototyp zur Perfektion.' },
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
  const heroOpacity = useTransform(heroProgress, [0, 0.7], [1, 0]);
  const textY = useTransform(heroProgress, [0, 1], [0, 100]);

  const processRef = useRef(null);
  const { scrollYProgress: processProgress } = useScroll({
    target: processRef,
    offset: ['start end', 'end start'],
  });
  const lineHeight = useTransform(processProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="bg-[#0A0A0A] text-[#F5F2EB] overflow-x-hidden relative">

      {/* ===== Animated background — adapted from homepage ===== */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <EngineeringBackground />
      </div>

      <div className="relative z-10">

        {/* ===== HERO — Normal Computing style: massive serif headline, centered, minimal ===== */}
        <section ref={heroRef} className="min-h-screen relative flex items-end">
          <motion.div
            className="w-full px-6 md:px-16 pb-16 md:pb-24 pt-32"
            style={{ opacity: heroOpacity, y: textY }}
          >
            <div className="max-w-7xl mx-auto">
              <motion.p
                className="text-[11px] md:text-xs tracking-[0.4em] uppercase font-mono text-[#3B5BDB]/50 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Engineering & Innovation
              </motion.p>

              <motion.h1
                className="text-[2.8rem] md:text-[5.5rem] lg:text-[7.5rem] font-light tracking-tight leading-[1.05] text-white/90 max-w-5xl"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                Kreative Lösungen für komplexe Heraus&shy;forderungen.
              </motion.h1>

              <motion.div
                className="mt-12 flex items-center gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <Link
                  to={createPageUrl('Kontakt')}
                  className="text-sm font-medium text-white/60 hover:text-white transition-colors flex items-center gap-2"
                >
                  Kontakt
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ===== INTRO STATEMENT ===== */}
        <section className="py-32 md:py-48 px-6 md:px-16">
          <div className="max-w-4xl mx-auto">
            <motion.p
              className="text-xl md:text-3xl lg:text-4xl font-light tracking-tight leading-[1.4] text-white/60"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              Wir kombinieren technisches <span className="text-white">Know-how</span> mit innovativen Denkansätzen,
              um Produkte zu schaffen, die nicht nur funktionieren — sondern <span className="text-[#3B5BDB]">begeistern</span>.
            </motion.p>
          </div>
        </section>

        {/* ===== SOLUTIONS — Normal-style image cards ===== */}
        <section className="px-6 md:px-16 pb-20 md:pb-32">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-[11px] tracking-[0.3em] uppercase font-mono text-[#3B5BDB]/40">
                Unsere Lösungen
              </span>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SolutionCard
                icon={Boxes}
                title="Prototypenbau"
                description="Von der ersten Skizze zum funktionalen Prototypen — mit Rapid Prototyping, 3D-Druck und iterativer Optimierung."
                imgSrc="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80&auto=format"
                index={0}
              />
              <SolutionCard
                icon={Cpu}
                title="Produktentwicklung"
                description="Komplette Entwicklung bis zur Serienreife. Hardware, Software, Design — alles aus einer Hand."
                imgSrc="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80&auto=format"
                index={1}
              />
            </div>
          </div>
        </section>

        {/* ===== SPLIT SECTION ===== */}
        <SplitSection
          imgSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format"
          imgAlt="Circuit board detail"
          accent="/ Integration"
          title={<>Nahtlose Konnektivität zwischen allen Systemen</>}
          text="Hardware, Software, Cloud — wir verbinden alle Systeme zu einem durchdachten Ganzen. Modular aufgebaut, zukunftssicher designt."
        />

        {/* ===== MARQUEE ===== */}
        <PhilosophyMarquee />

        {/* ===== FEATURE GRID ===== */}
        <section className="py-24 md:py-36 px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
            <motion.div className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[11px] tracking-[0.3em] uppercase font-mono text-[#3B5BDB]/40 block mb-5">
                Key Capabilities
              </span>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
                Was uns auszeichnet
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {featureCards.map((card, i) => (
                <FeatureCard key={card.num} {...card} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ===== FULL WIDTH IMAGE BREAK ===== */}
        <section className="relative h-[40vh] md:h-[60vh] overflow-hidden mx-6 md:mx-16 rounded-2xl">
          <motion.img
            src="https://images.unsplash.com/photo-1563770660941-20978e870e26?w=1920&q=80&auto=format"
            alt="Engineering detail"
            className="w-full h-full object-cover"
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          />
          <div className="absolute inset-0 bg-[#0A0A0A]/40 rounded-2xl" />
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <motion.h2
              className="text-3xl md:text-5xl lg:text-7xl font-light tracking-tight text-white/90 text-center leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Grenzenlose Kreativität
            </motion.h2>
          </div>
        </section>

        {/* ===== SERVICES LIST ===== */}
        <section className="px-6 md:px-16 py-28 md:py-40">
          <div className="max-w-6xl mx-auto">
            <motion.div className="mb-14"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-[11px] tracking-[0.3em] uppercase font-mono text-[#3B5BDB]/40 block mb-5">
                Leistungen
              </span>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
                Was wir bauen
              </h2>
            </motion.div>

            <div>
              {services.map((s, i) => (
                <ServiceRow key={s.title} service={s} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ===== SPLIT SECTION 2 ===== */}
        <SplitSection
          imgSrc="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80&auto=format"
          imgAlt="Prototyping workspace"
          accent="/ Qualität"
          title={<>Höchste Standards in jedem Detail</>}
          text="Höchste Fertigungsstandards mit Premium-Materialien. Vom Konzept bis zur Serienreife — durchdacht, getestet, perfektioniert."
          reverse
        />

        {/* ===== SPEC LIST ===== */}
        <section className="py-20 md:py-32 px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
            <motion.div className="mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-[11px] tracking-[0.3em] uppercase font-mono text-[#3B5BDB]/40 block mb-5">
                Specifications
              </span>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
                Unsere Expertise
              </h2>
            </motion.div>
            <SpecList />
          </div>
        </section>

        {/* ===== PROCESS ===== */}
        <section ref={processRef} className="relative py-32 md:py-48 px-6 md:px-16 overflow-hidden">
          {/* Progress line */}
          <div className="absolute left-6 md:left-16 top-0 bottom-0 w-px bg-white/[0.02]">
            <motion.div
              className="w-full bg-gradient-to-b from-[#3B5BDB]/20 via-[#3B5BDB]/5 to-transparent"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div className="mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[11px] tracking-[0.3em] uppercase font-mono text-[#3B5BDB]/40 block mb-5">
                Prozess
              </span>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
                Systematische Innovation
              </h2>
            </motion.div>

            <div>
              {processSteps.map((step, i) => (
                <ProcessRow key={step.num} step={step} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="py-32 md:py-48 px-6 md:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] text-white/90 mb-10">
                Bereit für Ihr nächstes Projekt?
              </h2>
              <Link
                to={createPageUrl('Kontakt')}
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full border border-white/15 text-white/80 font-medium text-sm hover:bg-white hover:text-[#0A0A0A] transition-all duration-300 group"
              >
                Projekt starten
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}