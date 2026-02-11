import React from 'react';
import { motion } from 'framer-motion';

const values = [
  { title: 'Präzision', desc: 'Jedes Detail zählt — von der Kabelverlegung bis zum finalen Prototyp. Wir liefern Qualität ohne Kompromisse.', accent: '#C8A850' },
  { title: 'Innovation', desc: 'Wir denken über Konventionen hinaus und entwickeln zukunftsorientierte Lösungen, die den Unterschied machen.', accent: '#3B5BDB' },
  { title: 'Leidenschaft', desc: 'Wir lieben, was wir tun — und das spürt man in jedem Projekt. Engagement, das über Standards hinausgeht.', accent: '#C8A850' },
  { title: 'Partnerschaft', desc: 'Transparenz und Zusammenarbeit in jedem Schritt. Ihre Vision ist unser Antrieb.', accent: '#3B5BDB' },
];

export default function AboutValues() {
  return (
    <section className="bg-[#F0EDE6] text-[#0A0A0A] px-6 md:px-12 lg:px-16 py-20 md:py-28">
      <motion.div
        className="flex items-center gap-4 mb-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="w-8 h-px bg-[#0A0A0A]/20" />
        <span className="text-[11px] tracking-[0.3em] uppercase text-[#0A0A0A]/30">Unsere Werte</span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="px-6 py-8 first:pl-0 last:pr-0 border-l border-[#0A0A0A]/[0.08] first:border-l-0 group hover:bg-[#0A0A0A]/[0.03] transition-colors duration-500"
          >
            <div className="w-5 h-px mb-6 transition-all duration-500 group-hover:w-10" style={{ backgroundColor: v.accent }} />
            <div className="text-[10px] tracking-[0.3em] uppercase mb-4 transition-colors duration-300" style={{ color: v.accent + '80' }}>
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