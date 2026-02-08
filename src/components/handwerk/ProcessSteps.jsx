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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[600px]">
      {/* Left: Steps */}
      <div className="flex flex-col justify-center p-8 md:p-16">
        <div className="space-y-0">
          {steps.map((step, i) => {
            const isActive = i === active;
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                className={`border-b border-[#0A0A0A]/8 cursor-pointer transition-colors ${
                  isActive ? 'bg-[#0A0A0A]/[0.03]' : ''
                }`}
                onClick={() => setActive(i)}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-5 py-6 md:py-8 px-4">
                  <span className={`text-xs tracking-[0.2em] transition-colors duration-300 ${
                    isActive ? 'text-[#C8A850]' : 'text-[#0A0A0A]/20'
                  }`}>
                    {step.num}
                  </span>
                  <Icon className={`w-5 h-5 transition-colors duration-300 ${
                    isActive ? 'text-[#C8A850]' : 'text-[#0A0A0A]/25'
                  }`} />
                  <div className="flex-1">
                    <h4 className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                      isActive ? 'text-[#0A0A0A]' : 'text-[#0A0A0A]/30'
                    }`}>
                      {step.title}
                    </h4>
                    <p className={`text-sm transition-colors duration-300 ${
                      isActive ? 'text-[#0A0A0A]/60' : 'text-[#0A0A0A]/20'
                    }`}>
                      {step.short}
                    </p>
                  </div>
                  <motion.div
                    className="w-8 h-0.5 bg-[#C8A850]"
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ originX: 0 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Right: Detail */}
      <div className="relative overflow-hidden min-h-[400px] lg:min-h-0 bg-[#0A0A0A]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="text-[5rem] md:text-[8rem] font-bold text-white/[0.06] leading-none tracking-tighter absolute top-8 right-8">
                  {current.num}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                  {current.title}
                </h3>
                <p className="text-white/60 leading-relaxed max-w-md text-base">
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