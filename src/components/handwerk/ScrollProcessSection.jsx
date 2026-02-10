import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { MessageSquare, Ruler, Wrench, CheckCircle } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'BERATUNG',
    subtitle: 'Wir hören zu',
    detail: 'In einem persönlichen Gespräch analysieren wir Ihren Bedarf, besichtigen die Gegebenheiten vor Ort und entwickeln ein maßgeschneidertes Konzept — kostenlos und unverbindlich.',
  },
  {
    num: '02',
    icon: Ruler,
    title: 'PLANUNG',
    subtitle: 'Wir denken voraus',
    detail: 'Detaillierte Elektroplanung mit CAD, normgerechte Dokumentation und transparente Kostenaufstellung. Sie wissen genau, was passiert — bevor wir anfangen.',
  },
  {
    num: '03',
    icon: Wrench,
    title: 'UMSETZUNG',
    subtitle: 'Wir liefern Qualität',
    detail: 'Fachgerechte Installation durch unsere Meister-Elektriker. Saubere Arbeit, termingerecht, mit minimaler Beeinträchtigung Ihres Alltags.',
  },
  {
    num: '04',
    icon: CheckCircle,
    title: 'ABNAHME',
    subtitle: 'Wir garantieren Sicherheit',
    detail: 'Umfassende Prüfung, Einweisung in alle Systeme und lückenlose Dokumentation. Danach stehen wir Ihnen mit Service und Wartung zur Seite.',
  },
];

function StepRow({ step, index }) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.4, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [-40, 0]);
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      className="relative cursor-pointer"
      style={{ opacity, x }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Hover flash */}
      <motion.div
        className="absolute inset-0 bg-[#C8A850]/[0.02]"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.15 }}
      />

      {/* Main row */}
      <div className="relative z-10 border-b border-white/[0.06] py-8 md:py-10">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-5 md:gap-10 flex-1 min-w-0">
            {/* Giant number */}
            <motion.span
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-[-0.06em] select-none transition-colors duration-300 flex-shrink-0"
              style={{ 
                color: 'transparent',
                WebkitTextStroke: hovered ? '2px rgba(200,168,80,0.7)' : '1.5px rgba(255,255,255,0.08)',
              }}
              animate={{ 
                x: hovered ? 4 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {step.num}
            </motion.span>

            {/* Title with ghost double */}
            <div className="relative flex-1 min-w-0">
              <h3
                className="text-2xl md:text-5xl lg:text-6xl font-black tracking-[-0.04em] uppercase leading-none transition-colors duration-300"
                style={{ color: hovered ? '#C8A850' : '#F5F2EB' }}
              >
                {step.title}
              </h3>
              <motion.h3
                className="absolute top-0 left-0 text-2xl md:text-5xl lg:text-6xl font-black tracking-[-0.04em] uppercase leading-none pointer-events-none select-none"
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '1px rgba(200,168,80,0.12)',
                }}
                animate={{
                  x: hovered ? 5 : 0,
                  y: hovered ? -3 : 0,
                  opacity: hovered ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {step.title}
              </motion.h3>
            </div>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-5 flex-shrink-0">
            <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-white/20">
              {step.subtitle}
            </span>
            <motion.div
              className="w-10 h-10 border flex items-center justify-center transition-all duration-300"
              style={{
                borderColor: hovered ? 'rgba(200,168,80,0.5)' : 'rgba(255,255,255,0.06)',
                backgroundColor: hovered ? 'rgba(200,168,80,0.05)' : 'transparent',
              }}
              animate={{ rotate: hovered ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Icon
                className="w-4 h-4 transition-colors duration-300"
                style={{ color: hovered ? '#C8A850' : 'rgba(255,255,255,0.15)' }}
              />
            </motion.div>
          </div>
        </div>

        {/* Expandable detail */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              className="mt-6 md:mt-8 ml-0 md:ml-[calc(5rem+2.5rem)]"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-start gap-4 pb-2">
                <div className="w-px h-16 bg-[#C8A850]/20 flex-shrink-0 hidden md:block" />
                <p className="text-sm md:text-base text-white/30 leading-relaxed max-w-xl font-light">
                  {step.detail}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function ScrollProcessSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={sectionRef} className="relative bg-[#0A0A0A] py-32 md:py-48 px-6 md:px-16 overflow-hidden">
      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(200,168,80,0.15) 2px, rgba(200,168,80,0.15) 4px)'
      }} />

      {/* Animated progress line on left edge */}
      <div className="absolute left-6 md:left-16 top-0 bottom-0 w-px bg-white/[0.03]">
        <motion.div
          className="w-full bg-gradient-to-b from-[#C8A850]/30 via-[#C8A850]/10 to-transparent"
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
            <span className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-mono text-[#C8A850]/40">
              / PROZESS
            </span>
            <div className="h-px flex-1 bg-[#C8A850]/10" />
          </motion.div>

          <div className="relative">
            <motion.h2
              className="text-5xl md:text-7xl lg:text-[8rem] font-black tracking-[-0.05em] uppercase leading-[0.85] text-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              SO ARBEITEN<br/>WIR<span className="text-[#C8A850]">.</span>
            </motion.h2>
            <motion.h2
              className="absolute top-0 left-0 text-5xl md:text-7xl lg:text-[8rem] font-black tracking-[-0.05em] uppercase leading-[0.85] pointer-events-none select-none"
              style={{
                color: 'transparent',
                WebkitTextStroke: '1px rgba(200,168,80,0.1)',
              }}
              initial={{ opacity: 0, x: 6, y: -4 }}
              whileInView={{ opacity: 1, x: 6, y: -4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              SO ARBEITEN<br/>WIR.
            </motion.h2>
          </div>
        </div>

        {/* Step rows */}
        <div>
          {steps.map((step, i) => (
            <StepRow key={step.num} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}