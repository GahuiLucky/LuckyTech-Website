import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Zap, Home, Car, Wrench } from 'lucide-react';

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
    image: 'https://images.unsplash.com/photo-1581092918484-8313e1f7e8c6?w=1200&q=80',
    accent: '#3B5BDB',
    description: 'Schnelle Hilfe bei elektrischen Problemen — von der defekten Steckdose bis zum Komplettausfall. Unser 24/7-Notdienst ist immer für Sie da.',
    features: ['24/7 Notdienst', 'Fehlerdiagnose', 'Reparatur & Austausch', 'Sicherungswechsel', 'Geräte-Instandsetzung', 'Wartungsverträge'],
  },
];

export default function ServiceTilesWithDialog() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.button
              key={s.title}
              className="group relative text-left overflow-hidden rounded-xl aspect-[16/10] md:aspect-[16/9]"
              onClick={() => setSelected(s)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#0A0A0A]/50 group-hover:bg-[#0A0A0A]/35 transition-colors duration-500" />

              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-[0.3em] text-white/40 uppercase">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                  </div>
                </div>

                <div>
                  <p
                    className="text-xs tracking-[0.2em] uppercase mb-2"
                    style={{ color: s.accent }}
                  >
                    {s.tagline}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    {s.title}
                  </h3>
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
        className="absolute inset-0 bg-[#0A0A0A]/80 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Panel */}
      <motion.div
        className="relative z-10 bg-[#F5F2EB] text-[#0A0A0A] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        {/* Header image */}
        <div className="relative h-48 md:h-64 overflow-hidden rounded-t-2xl">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/25 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div className="absolute bottom-6 left-6 md:left-8">
            <div className="flex items-center gap-3 mb-2">
              <Icon className="w-5 h-5" style={{ color: service.accent }} />
              <span
                className="text-xs tracking-[0.2em] uppercase"
                style={{ color: service.accent }}
              >
                {service.tagline}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-10">
          <p className="text-base md:text-lg text-[#0A0A0A]/60 leading-relaxed mb-8">
            {service.description}
          </p>

          <h4 className="text-xs tracking-[0.25em] uppercase text-[#0A0A0A]/30 mb-4">
            Leistungen
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.features.map((f, i) => (
              <div
                key={f}
                className="flex items-center gap-3 py-3 px-4 rounded-lg bg-[#0A0A0A]/[0.03] border border-[#0A0A0A]/5"
              >
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: service.accent }}
                />
                <span className="text-sm text-[#0A0A0A]/70">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}