import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Home, Car, Wrench } from 'lucide-react';

const services = [
  {
    title: 'SMARTHOME',
    tagline: 'Ihr Zuhause denkt mit',
    icon: Home,
    description: 'Wir verwandeln Ihr Zuhause in ein intelligentes Ökosystem. Von der Lichtsteuerung über die Heizungsregelung bis zur kompletten Gebäudeautomation — alles reagiert auf Ihre Bedürfnisse.',
    features: ['KNX & Loxone Systeme', 'Sprachsteuerung (Alexa, Google)', 'Licht- & Jalousiesteuerung', 'Heizungsautomation', 'Multiroom-Audio', 'Fernzugriff per App'],
  },
  {
    title: 'WALLBOX',
    tagline: 'Laden. Zuhause. Jetzt.',
    icon: Car,
    description: 'Professionelle Installation Ihrer Wallbox — vom Antrag bei den Stadtwerken bis zur Inbetriebnahme. Wir kümmern uns um alles, damit Sie entspannt Zuhause laden können.',
    features: ['Beratung & Standortanalyse', 'Anmeldung beim Netzbetreiber', 'Installation & Inbetriebnahme', 'Lastmanagement', 'PV-Überschussladen', 'Wartung & Service'],
  },
  {
    title: 'ELEKTRO—INSTALLATION',
    tagline: 'Vom Plan zur Perfektion',
    icon: Zap,
    description: 'Ob Neubau, Sanierung oder Erweiterung — wir planen und installieren Ihre komplette Elektrik nach höchsten Standards. Normgerecht, zukunftssicher und sauber ausgeführt.',
    features: ['Neubau-Installation', 'Altbau-Sanierung', 'Zählerschrankarbeiten', 'Netzwerk & Glasfaser', 'Beleuchtungskonzepte', 'E-Check & Prüfung'],
  },
  {
    title: 'REPARATUR & SERVICE',
    tagline: 'Da, wenn es zählt',
    icon: Wrench,
    description: 'Schnelle Hilfe bei elektrischen Problemen — von der defekten Steckdose bis zum Komplettausfall. Zuverlässig, kompetent und fair.',
    features: ['Fehlerdiagnose', 'Reparatur & Austausch', 'Sicherungswechsel', 'Geräte-Instandsetzung', 'Wartungsverträge', 'Störungsbehebung'],
  },
];

export default function ServiceTilesWithDialog() {
  const [expandedIdx, setExpandedIdx] = useState(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const toggle = (i) => setExpandedIdx(expandedIdx === i ? null : i);

  return (
    <div>
      {services.map((s, i) => {
        const Icon = s.icon;
        const isHovered = hoveredIdx === i;
        const isExpanded = expandedIdx === i;

        return (
          <motion.div
            key={s.title}
            className="relative cursor-pointer"
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            onClick={() => toggle(i)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
          >
            {/* Hover bg flash */}
            <motion.div
              className="absolute inset-0 bg-[#BFFF00]/[0.03]"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            />

            {/* Main row */}
            <div className="relative z-10 border-b border-white/[0.06] py-6 md:py-8">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-5 md:gap-8 flex-1 min-w-0">
                  {/* Index */}
                  <span
                    className="text-xs md:text-sm font-mono tracking-wider transition-colors duration-300 flex-shrink-0"
                    style={{ color: isHovered || isExpanded ? '#BFFF00' : 'rgba(255,255,255,0.2)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Title with ghost double */}
                  <div className="relative">
                    <h3
                      className="text-2xl md:text-5xl lg:text-6xl font-black tracking-[-0.04em] uppercase transition-colors duration-300 leading-none"
                      style={{ color: isHovered || isExpanded ? '#BFFF00' : '#F5F2EB' }}
                    >
                      {s.title}
                    </h3>
                    <motion.h3
                      className="absolute top-0 left-0 text-2xl md:text-5xl lg:text-6xl font-black tracking-[-0.04em] uppercase leading-none pointer-events-none select-none"
                      style={{
                        color: 'transparent',
                        WebkitTextStroke: '1px rgba(191,255,0,0.15)',
                      }}
                      animate={{
                        x: isHovered || isExpanded ? 4 : 0,
                        y: isHovered || isExpanded ? -3 : 0,
                        opacity: isHovered || isExpanded ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {s.title}
                    </motion.h3>
                  </div>
                </div>

                {/* Right side */}
                <div className="hidden md:flex items-center gap-4 flex-shrink-0">
                  <span className="text-[11px] tracking-[0.15em] uppercase text-white/30 font-mono">
                    {s.tagline}
                  </span>
                  <motion.div
                    className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300"
                    style={{
                      borderColor: isHovered || isExpanded ? '#BFFF00' : 'rgba(255,255,255,0.1)',
                      backgroundColor: isHovered || isExpanded ? 'rgba(191,255,0,0.1)' : 'transparent',
                    }}
                    animate={{ rotate: isExpanded ? 45 : isHovered ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-4 h-4 transition-colors duration-300" style={{ color: isHovered || isExpanded ? '#BFFF00' : 'rgba(255,255,255,0.3)' }} />
                  </motion.div>
                </div>
              </div>

              {/* Expandable content */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    className="mt-6 md:mt-8 ml-0 md:ml-[calc(2rem+2.5rem)]"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="pb-4">
                      <div className="flex items-start gap-4 mb-8">
                        <div className="w-px h-16 bg-[#BFFF00]/20 flex-shrink-0 hidden md:block" />
                        <p className="text-sm md:text-base text-white/30 leading-relaxed max-w-xl font-light">
                          {s.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[10px] tracking-[0.4em] uppercase text-[#BFFF00]/40 font-mono">
                          LEISTUNGEN
                        </span>
                        <div className="h-px flex-1 bg-[#BFFF00]/10 max-w-xs" />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-w-2xl">
                        {s.features.map((f, fi) => (
                          <motion.div
                            key={f}
                            className="flex items-center gap-3 py-2.5 px-3 border border-white/[0.04] hover:border-[#BFFF00]/20 hover:bg-[#BFFF00]/[0.03] transition-all duration-300 group"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.05 + fi * 0.03 }}
                          >
                            <span className="text-[#BFFF00] font-mono text-xs">+</span>
                            <span className="text-xs md:text-sm text-white/40 group-hover:text-white/70 transition-colors font-light tracking-wide">
                              {f}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}