import React from 'react';
import { motion } from 'framer-motion';

const values = [
  { title: 'Präzision', desc: 'Jedes Detail zählt — von der Kabelverlegung bis zum finalen Prototyp. Wir liefern Qualität ohne Kompromisse.' },
  { title: 'Innovation', desc: 'Wir denken über Konventionen hinaus und entwickeln zukunftsorientierte Lösungen, die den Unterschied machen.' },
  { title: 'Leidenschaft', desc: 'Wir lieben, was wir tun — und das spürt man in jedem Projekt. Engagement, das über Standards hinausgeht.' },
  { title: 'Partnerschaft', desc: 'Transparenz und Zusammenarbeit in jedem Schritt. Ihre Vision ist unser Antrieb.' },
];

export default function AboutValues() {
  return (
    <section className="bg-[#F0EDE6] text-[#0A0A0A] px-6 md:px-12 lg:px-16 py-24 md:py-36">
      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <span className="text-[11px] tracking-[0.3em] uppercase text-[#0A0A0A]/25 block mb-6">Unsere Werte</span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
          >
            <div className="text-5xl md:text-6xl font-light text-[#0A0A0A]/[0.07] mb-4">
              {String(i + 1).padStart(2, '0')}
            </div>
            <h3 className="text-lg font-medium text-[#0A0A0A] mb-3 tracking-tight">{v.title}</h3>
            <p className="text-sm text-[#0A0A0A]/40 leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}