import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Zap, Home, Car, Wrench, ChevronRight } from 'lucide-react';

const services = [
  {
    title: 'Smarthome',
    tagline: 'Ihr Zuhause denkt mit',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&q=80',
    accent: '#C8A850',
    description: 'Wir verwandeln Ihr Zuhause in ein intelligentes Ökosystem. Von der Lichtsteuerung über die Heizungsregelung bis zur kompletten Gebäudeautomation — alles reagiert auf Ihre Bedürfnisse.',
    features: ['KNX & Loxone Systeme', 'Sprachsteuerung (Alexa, Google)', 'Licht- & Jalousiesteuerung', 'Heizungsautomation', 'Multiroom-Audio', 'Fernzugriff per App'],
  },
  {
    title: 'Wallbox',
    tagline: 'Laden. Zuhause. Jetzt.',
    icon: Car,
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&q=80',
    accent: '#3B5BDB',
    description: 'Professionelle Installation Ihrer Wallbox — vom Antrag bei den Stadtwerken bis zur Inbetriebnahme. Wir kümmern uns um alles, damit Sie entspannt Zuhause laden können.',
    features: ['Beratung & Standortanalyse', 'Anmeldung beim Netzbetreiber', 'Installation & Inbetriebnahme', 'Lastmanagement', 'PV-Überschussladen', 'Wartung & Service'],
  },
  {
    title: 'Elektroinstallation',
    tagline: 'Vom Plan zur Perfektion',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&q=80',
    accent: '#C8A850',
    description: 'Ob Neubau, Sanierung oder Erweiterung — wir planen und installieren Ihre komplette Elektrik nach höchsten Standards. Normgerecht, zukunftssicher und sauber ausgeführt.',
    features: ['Neubau-Installation', 'Altbau-Sanierung', 'Zählerschrankarbeiten', 'Netzwerk & Glasfaser', 'Beleuchtungskonzepte', 'E-Check & Prüfung'],
  },
  {
    title: 'Reparatur & Service',
    tagline: 'Da, wenn es zählt',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&q=80',
    accent: '#3B5BDB',
    description: 'Schnelle Hilfe bei elektrischen Problemen — von der defekten Steckdose bis zum Komplettausfall. Zuverlässig, kompetent und fair.',
    features: ['Fehlerdiagnose', 'Reparatur & Austausch', 'Sicherungswechsel', 'Geräte-Instandsetzung', 'Wartungsverträge', 'Störungsbehebung'],
  },
];

export default function ServiceTilesWithDialog() {
  const [selected, setSelected] = useState(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((s, i) => {
          const Icon = s.icon;
          const isHovered = hoveredIdx === i;
          return (
            <motion.button
              key={s.title}
              className="group relative text-left overflow-hidden rounded-2xl"
              style={{ aspectRatio: '16/10' }}
              onClick={() => setSelected(s)}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover"
                animate={{ scale: isHovered ? 1.08 : 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-[#0A0A0A]/30 to-transparent" />
              
              {/* Accent line at top */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ backgroundColor: s.accent }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isHovered ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              />

              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                {/* Top row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center backdrop-blur-md transition-all duration-300"
                      style={{ 
                        backgroundColor: isHovered ? s.accent + '25' : 'rgba(255,255,255,0.08)',
                        border: `1px solid ${isHovered ? s.accent + '40' : 'rgba(255,255,255,0.12)'}`
                      }}
                    >
                      <Icon className="w-4 h-4 transition-colors duration-300" style={{ color: isHovered ? s.accent : 'rgba(255,255,255,0.6)' }} />
                    </div>
                    <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase font-medium">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  <motion.div
                    className="w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md"
                    style={{ 
                      backgroundColor: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.12)'
                    }}
                    animate={{ 
                      backgroundColor: isHovered ? s.accent + '20' : 'rgba(255,255,255,0.06)',
                      borderColor: isHovered ? s.accent + '40' : 'rgba(255,255,255,0.12)',
                      rotate: isHovered ? 45 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                  </motion.div>
                </div>

                {/* Bottom content */}
                <div>
                  <motion.p
                    className="text-[11px] tracking-[0.2em] uppercase mb-2 font-medium"
                    style={{ color: s.accent }}
                    animate={{ x: isHovered ? 4 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {s.tagline}
                  </motion.p>
                  <div className="flex items-end justify-between">
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                      {s.title}
                    </h3>
                    <motion.div
                      className="flex items-center gap-1 text-white/40 text-xs"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span>Details</span>
                      <ChevronRight className="w-3 h-3" />
                    </motion.div>
                  </div>
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
      transition={{ duration: 0.3 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-[#0A0A0A]/85 backdrop-blur-md"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Panel */}
      <motion.div
        className="relative z-10 bg-[#111111] text-[#F5F2EB] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-white/[0.08]"
        initial={{ opacity: 0, y: 50, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.95 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Header image */}
        <div className="relative h-52 md:h-72 overflow-hidden rounded-t-2xl">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors border border-white/10"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div className="absolute bottom-6 left-6 md:left-8">
            <div className="flex items-center gap-3 mb-3">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: service.accent + '20', border: `1px solid ${service.accent}30` }}
              >
                <Icon className="w-4 h-4" style={{ color: service.accent }} />
              </div>
              <span
                className="text-[11px] tracking-[0.2em] uppercase font-medium"
                style={{ color: service.accent }}
              >
                {service.tagline}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-10">
          <p className="text-base md:text-lg text-white/50 leading-relaxed mb-10">
            {service.description}
          </p>

          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-white/[0.06]" />
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-medium">
              Leistungen
            </h4>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.features.map((f, i) => (
              <motion.div
                key={f}
                className="flex items-center gap-3 py-3.5 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-300 group"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.04 }}
              >
                <div
                  className="w-2 h-2 rounded-sm flex-shrink-0 rotate-45 group-hover:scale-125 transition-transform"
                  style={{ backgroundColor: service.accent }}
                />
                <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}