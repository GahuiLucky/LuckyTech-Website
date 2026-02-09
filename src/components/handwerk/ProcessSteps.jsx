import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Ruler, Wrench, CheckCircle } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Beratung',
    short: 'Wir hören zu',
    detail: 'In einem persönlichen Gespräch analysieren wir Ihren Bedarf, besichtigen die Gegebenheiten vor Ort und entwickeln ein maßgeschneidertes Konzept — kostenlos und unverbindlich.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
  },
  {
    num: '02',
    icon: Ruler,
    title: 'Planung',
    short: 'Wir denken voraus',
    detail: 'Detaillierte Elektroplanung mit CAD, normgerechte Dokumentation und transparente Kostenaufstellung. Sie wissen genau, was passiert — bevor wir anfangen.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
  },
  {
    num: '03',
    icon: Wrench,
    title: 'Umsetzung',
    short: 'Wir liefern Qualität',
    detail: 'Fachgerechte Installation durch unsere Meister-Elektriker. Saubere Arbeit, termingerecht, mit minimaler Beeinträchtigung Ihres Alltags.',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80',
  },
  {
    num: '04',
    icon: CheckCircle,
    title: 'Abnahme',
    short: 'Wir garantieren Sicherheit',
    detail: 'Umfassende Prüfung, Einweisung in alle Systeme und lückenlose Dokumentation. Danach stehen wir Ihnen mit Service und Wartung zur Seite.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
  },
];

export default function ProcessSteps() {
  const [active, setActive] = useState(0);
  const current = steps[active];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-0 min-h-[550px]">
      {/* Left: Steps as vertical timeline */}
      <div className="flex flex-col justify-center relative">
        {/* Timeline line */}
        <div className="absolute left-[22px] md:left-[26px] top-0 bottom-0 w-px bg-white/[0.06]" />
        
        <div className="space-y-1">
          {steps.map((step, i) => {
            const isActive = i === active;
            const isPast = i < active;
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                className="cursor-pointer relative pl-14 md:pl-16 py-5 md:py-6 group"
                onClick={() => setActive(i)}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 rounded-full flex items-center justify-center"
                  animate={{
                    width: isActive ? 20 : 10,
                    height: isActive ? 20 : 10,
                    backgroundColor: isActive ? '#C8A850' : isPast ? 'rgba(200,168,80,0.3)' : 'rgba(255,255,255,0.1)',
                    boxShadow: isActive ? '0 0 20px rgba(200,168,80,0.3)' : '0 0 0px transparent',
                  }}
                  transition={{ duration: 0.4 }}
                />

                <div className="flex items-center gap-4">
                  <Icon className={`w-4 h-4 transition-colors duration-300 flex-shrink-0 ${
                    isActive ? 'text-[#C8A850]' : 'text-white/15'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3">
                      <h4 className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-white/25 group-hover:text-white/40'
                      }`}>
                        {step.title}
                      </h4>
                      <span className={`text-[10px] tracking-[0.2em] transition-colors duration-300 ${
                        isActive ? 'text-[#C8A850]/60' : 'text-white/10'
                      }`}>
                        {step.num}
                      </span>
                    </div>
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          className="text-sm text-white/40 mt-1"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {step.short}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Progress indicator */}
        <div className="mt-8 pl-14 md:pl-16">
          <div className="flex gap-1.5">
            {steps.map((_, i) => (
              <motion.div
                key={i}
                className="h-0.5 rounded-full"
                animate={{
                  width: i === active ? 32 : 12,
                  backgroundColor: i === active ? '#C8A850' : i < active ? 'rgba(200,168,80,0.3)' : 'rgba(255,255,255,0.08)',
                }}
                transition={{ duration: 0.4 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right: Immersive detail card */}
      <div className="relative overflow-hidden rounded-2xl min-h-[400px] lg:min-h-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="absolute inset-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/50 to-transparent" />
            
            {/* Large background number */}
            <div className="absolute top-6 right-8 text-[7rem] md:text-[10rem] font-black text-white/[0.04] leading-none tracking-tighter select-none">
              {current.num}
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
              >
                {/* Accent line */}
                <motion.div
                  className="w-10 h-0.5 bg-[#C8A850] mb-6"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  style={{ originX: 0 }}
                />
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
                  {current.title}
                </h3>
                <p className="text-white/50 leading-relaxed max-w-md text-sm md:text-base">
                  {current.detail}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}