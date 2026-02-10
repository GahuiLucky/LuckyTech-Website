import React from 'react';
import { motion } from 'framer-motion';

const columns = [
  { title: 'Interdisziplinär', text: 'Mechanik, Elektronik, Software und Design unter einem Dach — keine Schnittstellen, keine Reibungsverluste.' },
  { title: 'Agil', text: 'Rapid Prototyping und iteratives Testing beschleunigen Ihren Entwicklungszyklus um ein Vielfaches.' },
  { title: 'Ganzheitlich', text: 'Von der Machbarkeitsstudie über den Prototyp bis zur Produktionsbegleitung — alles aus einer Hand.' },
  { title: 'Partnerschaftlich', text: 'Wir arbeiten eng mit Ihnen zusammen. Transparenz, Qualität und schnelle Kommunikation in jedem Schritt.' },
];

export default function EngFourColumns() {
  return (
    <section className="px-6 md:px-16 pb-28 md:pb-40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] tracking-[0.3em] uppercase text-white/20">Unser Ansatz</span>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {columns.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <h3 className="text-white/70 text-sm font-medium mb-3 tracking-wide">{col.title}</h3>
              <p className="text-sm text-white/25 leading-relaxed font-light">{col.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}