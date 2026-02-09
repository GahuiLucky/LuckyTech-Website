import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, Home, Car, Wrench } from 'lucide-react';

const services = [
  {
    title: 'SMARTHOME',
    tagline: 'Ihr Zuhause denkt mit',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&q=80',
    accent: '#BFFF00',
    description: 'Wir verwandeln Ihr Zuhause in ein intelligentes Ökosystem. Von der Lichtsteuerung über die Heizungsregelung bis zur kompletten Gebäudeautomation — alles reagiert auf Ihre Bedürfnisse.',
    features: ['KNX & Loxone Systeme', 'Sprachsteuerung (Alexa, Google)', 'Licht- & Jalousiesteuerung', 'Heizungsautomation', 'Multiroom-Audio', 'Fernzugriff per App'],
  },
  {
    title: 'WALLBOX',
    tagline: 'Laden. Zuhause. Jetzt.',
    icon: Car,
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&q=80',
    accent: '#BFFF00',
    description: 'Professionelle Installation Ihrer Wallbox — vom Antrag bei den Stadtwerken bis zur Inbetriebnahme. Wir kümmern uns um alles, damit Sie entspannt Zuhause laden können.',
    features: ['Beratung & Standortanalyse', 'Anmeldung beim Netzbetreiber', 'Installation & Inbetriebnahme', 'Lastmanagement', 'PV-Überschussladen', 'Wartung & Service'],
  },
  {
    title: 'ELEKTRO—INSTALLATION',
    tagline: 'Vom Plan zur Perfektion',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&q=80',
    accent: '#BFFF00',
    description: 'Ob Neubau, Sanierung oder Erweiterung — wir planen und installieren Ihre komplette Elektrik nach höchsten Standards. Normgerecht, zukunftssicher und sauber ausgeführt.',
    features: ['Neubau-Installation', 'Altbau-Sanierung', 'Zählerschrankarbeiten', 'Netzwerk & Glasfaser', 'Beleuchtungskonzepte', 'E-Check & Prüfung'],
  },
  {
    title: 'REPARATUR & SERVICE',
    tagline: 'Da, wenn es zählt',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&q=80',
    accent: '#BFFF00',
    description: 'Schnelle Hilfe bei elektrischen Problemen — von der defekten Steckdose bis zum Komplettausfall. Zuverlässig, kompetent und fair.',
    features: ['Fehlerdiagnose', 'Reparatur & Austausch', 'Sicherungswechsel', 'Geräte-Instandsetzung', 'Wartungsverträge', 'Störungsbehebung'],
  },
];

export default function ServiceTilesWithDialog() {
  const [selected, setSelected] = useState(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <>
      <div className="space-y-2">
        {services.map((s, i) => {
          const Icon = s.icon;
          const isHovered = hoveredIdx === i;
          return (
            <motion.button
              key={s.title}
              className="group relative w-full text-left overflow-hidden border-b border-white/[0.06] py-6 md:py-8 cursor-pointer"
              onClick={() => setSelected(s)}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
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

              <div className="relative z-10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-5 md:gap-8 flex-1 min-w-0">
                  {/* Index */}
                  <span 
                    className="text-xs md:text-sm font-mono tracking-wider transition-colors duration-300 flex-shrink-0"
                    style={{ color: isHovered ? '#BFFF00' : 'rgba(255,255,255,0.2)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Title — bold, with double/shadow text like eloyb */}
                  <div className="relative">
                    <h3
                      className="text-2xl md:text-5xl lg:text-6xl font-black tracking-[-0.04em] uppercase transition-colors duration-300 leading-none"
                      style={{ color: isHovered ? '#BFFF00' : '#F5F2EB' }}
                    >
                      {s.title}
                    </h3>
                    {/* Ghost double text behind */}
                    <motion.h3
                      className="absolute top-0 left-0 text-2xl md:text-5xl lg:text-6xl font-black tracking-[-0.04em] uppercase leading-none pointer-events-none select-none"
                      style={{
                        color: 'transparent',
                        WebkitTextStroke: '1px rgba(191,255,0,0.15)',
                      }}
                      animate={{
                        x: isHovered ? 4 : 0,
                        y: isHovered ? -3 : 0,
                        opacity: isHovered ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {s.title}
                    </motion.h3>
                  </div>
                </div>

                {/* Tags */}
                <div className="hidden md:flex items-center gap-4 flex-shrink-0">
                  <span className="text-[11px] tracking-[0.15em] uppercase text-white/30 font-mono">
                    {s.tagline}
                  </span>
                  <motion.div
                    className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300"
                    style={{
                      borderColor: isHovered ? '#BFFF00' : 'rgba(255,255,255,0.1)',
                      backgroundColor: isHovered ? 'rgba(191,255,0,0.1)' : 'transparent',
                    }}
                    animate={{ rotate: isHovered ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-4 h-4 transition-colors duration-300" style={{ color: isHovered ? '#BFFF00' : 'rgba(255,255,255,0.3)' }} />
                  </motion.div>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Dialog / Popup */}
      <AnimatePresence>
        {selected && (
          <ServiceDialog service={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
}

function ServiceDialog({ service, onClose }) {
  const Icon = service.icon;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-[#0A0A0A]/90 backdrop-blur-lg"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Panel */}
      <motion.div
        className="relative z-10 bg-[#0A0A0A] text-[#F5F2EB] border border-[#BFFF00]/20 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Header image */}
        <div className="relative h-52 md:h-72 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
          {/* Neon scanline overlay */}
          <div className="absolute inset-0 mix-blend-overlay opacity-20" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(191,255,0,0.1) 2px, rgba(191,255,0,0.1) 4px)'
          }} />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 border border-[#BFFF00]/30 bg-[#0A0A0A]/70 backdrop-blur-md flex items-center justify-center hover:bg-[#BFFF00]/10 transition-colors"
          >
            <X className="w-5 h-5 text-[#BFFF00]" />
          </button>

          <div className="absolute bottom-6 left-6 md:left-8">
            <div className="flex items-center gap-3 mb-3">
              <Icon className="w-5 h-5 text-[#BFFF00]" />
              <span className="text-[11px] tracking-[0.2em] uppercase font-mono text-[#BFFF00]/70">
                {service.tagline}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-[-0.04em] uppercase">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-10">
          <p className="text-base md:text-lg text-white/40 leading-relaxed mb-10 font-light">
            {service.description}
          </p>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#BFFF00]/50 font-mono">
              LEISTUNGEN
            </span>
            <div className="h-px flex-1 bg-[#BFFF00]/10" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {service.features.map((f, i) => (
              <motion.div
                key={f}
                className="flex items-center gap-3 py-3 px-4 border border-white/[0.04] hover:border-[#BFFF00]/20 hover:bg-[#BFFF00]/[0.03] transition-all duration-300 group"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.04 }}
              >
                <span className="text-[#BFFF00] font-mono text-xs">+</span>
                <span className="text-sm text-white/50 group-hover:text-white/80 transition-colors font-light tracking-wide">
                  {f}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}