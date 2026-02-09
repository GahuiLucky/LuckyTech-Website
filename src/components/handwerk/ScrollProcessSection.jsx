import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageSquare, Ruler, Wrench, CheckCircle } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Beratung',
    subtitle: 'Wir hören zu',
    detail: 'In einem persönlichen Gespräch analysieren wir Ihren Bedarf, besichtigen die Gegebenheiten vor Ort und entwickeln ein maßgeschneidertes Konzept — kostenlos und unverbindlich.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80',
  },
  {
    num: '02',
    icon: Ruler,
    title: 'Planung',
    subtitle: 'Wir denken voraus',
    detail: 'Detaillierte Elektroplanung mit CAD, normgerechte Dokumentation und transparente Kostenaufstellung. Sie wissen genau, was passiert — bevor wir anfangen.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
  },
  {
    num: '03',
    icon: Wrench,
    title: 'Umsetzung',
    subtitle: 'Wir liefern Qualität',
    detail: 'Fachgerechte Installation durch unsere Meister-Elektriker. Saubere Arbeit, termingerecht, mit minimaler Beeinträchtigung Ihres Alltags.',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&q=80',
  },
  {
    num: '04',
    icon: CheckCircle,
    title: 'Abnahme',
    subtitle: 'Wir garantieren Sicherheit',
    detail: 'Umfassende Prüfung, Einweisung in alle Systeme und lückenlose Dokumentation. Danach stehen wir Ihnen mit Service und Wartung zur Seite.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80',
  },
];

function StepCard({ step, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [0, 0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [120, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0.3, 1], [0, 0.35]);

  const Icon = step.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className="relative"
      style={{ opacity, y, scale }}
    >
      <motion.div
        className="absolute inset-0 rounded-2xl overflow-hidden"
        style={{ opacity: imageOpacity }}
      >
        <img
          src={step.image}
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center p-8 md:p-14 rounded-2xl border border-white/[0.06] bg-[#0A0A0A]/80 backdrop-blur-sm">
        <div className={`${!isEven ? 'md:order-2' : ''}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full border border-[#C8A850]/30 flex items-center justify-center">
              <Icon className="w-5 h-5 text-[#C8A850]" />
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-[#C8A850]/20 to-transparent" />
            <span className="text-[4rem] md:text-[5rem] font-black text-white/[0.04] leading-none tracking-tighter select-none">
              {step.num}
            </span>
          </div>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-2">
            {step.title}
          </h3>
          <span className="text-sm tracking-[0.15em] text-[#C8A850]/70 uppercase">
            {step.subtitle}
          </span>
        </div>

        <div className={`${!isEven ? 'md:order-1' : ''}`}>
          <p className="text-white/40 leading-relaxed text-base md:text-lg">
            {step.detail}
          </p>
        </div>
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
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(#F5F2EB 1px, transparent 1px), linear-gradient(90deg, #F5F2EB 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/[0.03]">
        <motion.div
          className="w-full bg-gradient-to-b from-[#C8A850]/40 via-[#C8A850]/20 to-transparent"
          style={{ height: lineHeight }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-24 md:mb-32">
          <motion.span
            className="text-xs tracking-[0.5em] text-[#C8A850]/50 uppercase mb-6 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Unser Prozess
          </motion.span>
          <motion.h2
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.85]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            So arbeiten<br />wir<span className="text-[#C8A850]">.</span>
          </motion.h2>
        </div>

        <div className="space-y-16 md:space-y-24">
          {steps.map((step, i) => (
            <StepCard key={step.num} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}