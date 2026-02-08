import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const details = {
  Smarthome: ['Lichtsteuerung', 'Heizungsautomatik', 'Sprachassistenten', 'Sicherheitssysteme'],
  Wallbox: ['11kW & 22kW Lader', 'Lastmanagement', 'KfW-Förderung', 'Wartungsservice'],
  Service: ['24/7 Notdienst', 'Fehlerdiagnose', 'Transparente Preise', 'Schnelle Termine'],
};

export default function HandwerkCard({ service, index }) {
  const [hovered, setHovered] = React.useState(false);
  const featureList = details[service.title] || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, delay: service.delay, type: "spring", stiffness: 60 }}
      whileHover={{ y: -15, scale: 1.02 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative h-[500px] overflow-hidden cursor-pointer focus-within:ring-2 focus-within:ring-[#0A0A0A] focus-within:ring-offset-4 focus-within:ring-offset-[#F5F2EB]"
      style={{ transformStyle: 'preserve-3d' }}
      tabIndex={0}
      role="article"
      aria-label={`${service.title}: ${service.subtitle}`}
    >
      <motion.img
        src={`https://images.unsplash.com/${service.img}?w=800`}
        alt={service.title}
        className="w-full h-full object-cover"
        animate={{ scale: hovered ? 1.1 : 1 }}
        transition={{ duration: 0.8 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <motion.div
          animate={{ scale: hovered ? 1.15 : 1, rotate: hovered ? -8 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <service.icon className="w-10 h-10 mb-4 text-[#C8A850]" />
        </motion.div>
        <h3 className="text-3xl font-bold mb-1">{service.title}</h3>
        <p className="text-white/70 mb-3">{service.subtitle}</p>

        <AnimatePresence>
          {hovered && (
            <motion.ul
              className="space-y-1.5"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {featureList.map((f, i) => (
                <motion.li
                  key={f}
                  className="text-sm text-white/80 flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A850]" />
                  {f}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}