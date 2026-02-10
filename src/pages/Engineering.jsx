import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Boxes, Cpu, Lightbulb, Sparkles, ArrowRight, Search, PenTool, Cog, Rocket } from 'lucide-react';
import HeroBackground from '../components/home/HeroBackground';
import ServiceRow from '../components/engineering/ServiceRow';
import EngServiceCard from '../components/engineering/EngServiceCard';
import EngProcessStep from '../components/engineering/EngProcessStep';

const processSteps = [
  { num: '01', icon: Search, title: 'ANALYSE', subtitle: 'Verstehen & Erforschen', detail: 'Deep-dive in Ihre Vision. Wir verstehen nicht nur was Sie wollen, sondern auch warum — und finden die besten Wege dorthin.' },
  { num: '02', icon: PenTool, title: 'KONZEPTION', subtitle: 'Entwerfen & Planen', detail: 'Kreative Lösungsentwicklung mit iterativem Design Thinking und Rapid Ideation. Jede Idee wird geprüft und verfeinert.' },
  { num: '03', icon: Cog, title: 'PROTOTYPING', subtitle: 'Bauen & Testen', detail: 'Von digital zu physisch — schnelle Iteration, kontinuierliches Testing, echtes Feedback. Wir lernen durch Machen.' },
  { num: '04', icon: Rocket, title: 'REALISIERUNG', subtitle: 'Produzieren & Liefern', detail: 'Serienreife Umsetzung mit Qualitätssicherung und Produktionsbegleitung. Vom Prototyp zur Perfektion.' },
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
      {/* Animated background — blue-shifted variant from homepage */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
        <HeroBackground />
      </div>

      <div className="relative z-10">

        {/* ══════════════════════════════════════════════
            1. HERO — Normal-style: fullscreen, massive headline bottom-left, "ABOUT" link
        ══════════════════════════════════════════════ */}
        <section ref={heroRef} className="h-screen relative overflow-hidden flex flex-col justify-end">
          <motion.div
            className="px-6 md:px-16 pb-12 md:pb-20"
            style={{ opacity: heroOpacity, y: textY }}
          >
            <div className="max-w-7xl mx-auto">
              {/* Label */}
              <motion.div
                className="flex items-center gap-4 mb-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-[10px] md:text-xs tracking-[0.5em] text-[#3B5BDB]/50 uppercase font-mono">
                  LUCKYTECH ENGINEERING
                </span>
                <div className="h-px w-16 md:w-32 bg-[#3B5BDB]/20" />
              </motion.div>

              {/* Giant headline */}
              <div className="relative">
                <motion.h1
                  className="text-[2.5rem] md:text-[5rem] lg:text-[7rem] font-black tracking-[-0.04em] uppercase leading-[0.88] text-white"
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 40 }}
                >
                  Kreative <span className="text-[#3B5BDB]">Lösungen</span><br />
                  für komplexe<br />
                  Herausforderungen.
                </motion.h1>
                <motion.h1
                  className="absolute top-0 left-0 text-[2.5rem] md:text-[5rem] lg:text-[7rem] font-black tracking-[-0.04em] uppercase leading-[0.88] pointer-events-none select-none"
                  style={{ color: 'transparent', WebkitTextStroke: '1px rgba(59,91,219,0.08)' }}
                  initial={{ opacity: 0, x: 6, y: -4 }}
                  animate={{ opacity: 1, x: 6, y: -4 }}
                  transition={{ duration: 1, delay: 0.35 }}
                >
                  Kreative Lösungen<br />für komplexe<br />Herausforderungen.
                </motion.h1>
              </div>

              {/* Bottom row — Normal-style "ABOUT →" link right-aligned */}
              <motion.div
                className="mt-10 flex items-center justify-end"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <Link
                  to={createPageUrl('Kontakt')}
                  className="inline-flex items-center gap-3 text-white/60 font-mono text-xs tracking-[0.2em] uppercase hover:text-white transition-colors group"
                >
                  KONTAKT <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════
            2. ABOUT STATEMENT — Normal-style: centered huge statement with accent word
        ══════════════════════════════════════════════ */}
        <section className="py-32 md:py-48 px-6 md:px-16 border-t border-white/[0.04]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="flex items-center gap-4 mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] md:text-xs tracking-[0.5em] text-[#3B5BDB]/40 uppercase font-mono">
                LUCKYTECH ENGINEERING
              </span>
              <div className="h-px flex-1 bg-white/[0.04]" />
            </motion.div>
            <motion.h2
              className="text-3xl md:text-5xl lg:text-[4.5rem] font-black tracking-[-0.03em] leading-[1.05] text-white/90"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              Wir denken <span className="text-[#3B5BDB]">Engineering</span> neu — von der Idee über den Prototypen bis zum fertigen Produkt.
            </motion.h2>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            3. FOUR-COLUMN TEXT — Normal About-style
        ══════════════════════════════════════════════ */}
        <section className="px-6 md:px-16 pb-28 md:pb-40">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
              {[
                'Von der ersten Idee bis zum fertigen Prototyp — unser Ansatz verbindet interdisziplinäres Denken mit modernster Fertigungstechnologie.',
                'Traditionelle Entwicklung ist oft starr und langsam. Wir nutzen agile Methoden und Rapid Prototyping, um Ideen schneller Realität werden zu lassen.',
                'Durch die Verbindung von Hardware-Design mit Software-Integration entstehen Lösungen, die Effizienz und Performance maximieren.',
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

        {/* ══════════════════════════════════════════════
            4. SOLUTIONS — Normal-style: two big cards with icon, text, image, CTA
        ══════════════════════════════════════════════ */}
        <section className="px-6 md:px-16 pb-24 md:pb-36 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.012]" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(59,91,219,0.3) 2px, rgba(59,91,219,0.3) 4px)'
          }} />

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div className="flex items-center gap-4 mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <span className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-mono text-[#3B5BDB]/40">/ UNSERE LÖSUNGEN</span>
              <div className="h-px flex-1 bg-[#3B5BDB]/10" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <EngServiceCard
                icon={Boxes}
                label="PROTOTYPING"
                headline="Von der Skizze zum Prototypen."
                description="Rapid Prototyping, 3D-Druck und iteratives Testing — alles unter einem Dach. Schnelle Iteration, echtes Feedback."
                imgSrc="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&q=80&auto=format"
                features={['Rapid Prototyping', '3D-Druck & CNC', 'Elektronik-Integration', 'Iterative Optimierung']}
                index={0}
              />
              <EngServiceCard
                icon={Cpu}
                label="ENTWICKLUNG"
                headline="Komplette Produkt­entwicklung."
                description="Hardware, Software, Design — wir bringen Ihr Produkt von der Konzeption bis zur Serienreife. Alles aus einer Hand."
                imgSrc="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&q=80&auto=format"
                features={['Marktanalyse & Konzeption', 'HW & SW Design', 'Prototypenentwicklung', 'Produktionsbegleitung']}
                index={1}
              />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            5. TWO PRODUCT BLOCKS — Normal-style side-by-side text blocks
        ══════════════════════════════════════════════ */}
        <section className="px-6 md:px-16 py-20 md:py-32 border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {[
              {
                label: 'Creative Thinking',
                icon: Lightbulb,
                title: 'Innovative Lösungsansätze für komplexe Herausforderungen. Workshops, Methoden, Ergebnisse.',
                desc: 'Design Thinking Workshops, Innovations-Beratung, Machbarkeitsstudien und strukturierte Problemlösungs-Strategien.',
              },
              {
                label: 'Beratung & Konzeption',
                icon: Sparkles,
                title: 'Strategische Beratung für technische Projekte. Wir denken mit, bevor wir bauen.',
                desc: 'Technologie-Beratung, Konzeptentwicklung, Feasibility Studies und Projektplanung — vom ersten Gespräch bis zum Go.',
              },
            ].map((block, i) => {
              const Icon = block.icon;
              return (
                <motion.div
                  key={block.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 border border-[#3B5BDB]/30 bg-[#3B5BDB]/10 flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5 text-[#3B5BDB]" />
                    </div>
                    <span className="text-[10px] tracking-[0.4em] uppercase text-[#3B5BDB]/40 font-mono">{block.label}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-tight mb-4">
                    {block.title}
                  </h3>
                  <p className="text-sm text-white/30 font-light leading-relaxed mb-6">{block.desc}</p>
                  <Link
                    to={createPageUrl('Kontakt')}
                    className="inline-flex items-center gap-2 text-[#3B5BDB] text-xs font-mono tracking-[0.2em] uppercase hover:gap-3 transition-all group"
                  >
                    KONTAKT <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            6. SOCIAL PROOF / STATEMENT — Normal-style large centered text over image
        ══════════════════════════════════════════════ */}
        <section className="relative h-[50vh] md:h-[70vh] overflow-hidden">
          <motion.img
            src="https://images.unsplash.com/photo-1563770660941-20978e870e26?w=1920&q=80&auto=format"
            alt="Engineering workshop"
            className="w-full h-full object-cover"
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          />
          <div className="absolute inset-0 bg-[#0A0A0A]/60" />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-[-0.04em] uppercase text-white leading-[0.9] mb-6">
                VON DER IDEE<br/>ZUR REALITÄT<span className="text-[#3B5BDB]">.</span>
              </h2>
              <p className="text-sm md:text-base text-white/40 font-light max-w-lg mx-auto">
                Unsere Kunden vertrauen auf LuckyTech Engineering für schnellere Entwicklungszyklen und messbare Ergebnisse.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            7. PROCESS — scroll-reveal timeline with expanding rows
        ══════════════════════════════════════════════ */}
        <section ref={processRef} className="relative py-32 md:py-48 px-6 md:px-16 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.012]" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(59,91,219,0.15) 2px, rgba(59,91,219,0.15) 4px)'
          }} />
          <div className="absolute left-6 md:left-16 top-0 bottom-0 w-px bg-white/[0.03]">
            <motion.div className="w-full bg-gradient-to-b from-[#3B5BDB]/30 via-[#3B5BDB]/10 to-transparent" style={{ height: lineHeight }} />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="mb-20 md:mb-28">
              <motion.div className="flex items-center gap-4 mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <span className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-mono text-[#3B5BDB]/40">/ PROZESS</span>
                <div className="h-px flex-1 bg-[#3B5BDB]/10" />
              </motion.div>
              <div className="relative">
                <motion.h2
                  className="text-5xl md:text-7xl lg:text-[8rem] font-black tracking-[-0.05em] uppercase leading-[0.85] text-white"
                  initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                >
                  UNSER<br/>PROZESS<span className="text-[#3B5BDB]">.</span>
                </motion.h2>
                <motion.h2
                  className="absolute top-0 left-0 text-5xl md:text-7xl lg:text-[8rem] font-black tracking-[-0.05em] uppercase leading-[0.85] pointer-events-none select-none"
                  style={{ color: 'transparent', WebkitTextStroke: '1px rgba(59,91,219,0.1)' }}
                  initial={{ opacity: 0, x: 6, y: -4 }} whileInView={{ opacity: 1, x: 6, y: -4 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
                >
                  UNSER<br/>PROZESS.
                </motion.h2>
              </div>
            </div>

            <div>
              {processSteps.map((step, i) => (
                <EngProcessStep key={step.num} step={step} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            8. CTA — Normal-style: big headline + link
        ══════════════════════════════════════════════ */}
        <section className="py-28 md:py-44 px-6 md:px-16 border-t border-white/[0.04]">
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
                  style={{ color: 'transparent', WebkitTextStroke: '1px rgba(59,91,219,0.08)', transform: 'translate(5px, -3px)' }}
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