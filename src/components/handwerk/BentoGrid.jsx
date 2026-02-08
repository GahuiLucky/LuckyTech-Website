import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Clock, Award, Leaf, Headphones } from 'lucide-react';

const items = [
  {
    icon: Shield,
    title: 'VDE-zertifiziert',
    desc: 'Alle Installationen nach aktuellen Normen und Sicherheitsstandards.',
    span: 'col-span-1',
    bg: 'bg-[#F5F2EB]',
    text: 'text-[#0A0A0A]',
  },
  {
    icon: Zap,
    title: 'Meisterbetrieb',
    desc: 'Höchste Qualifikation und über 15 Jahre Erfahrung in der Elektrotechnik.',
    span: 'col-span-1 md:col-span-2',
    bg: 'bg-[#0A0A0A]',
    text: 'text-[#F5F2EB]',
    accent: true,
  },
  {
    icon: Clock,
    title: '24/7 Notdienst',
    desc: 'Rund um die Uhr erreichbar — weil elektrische Notfälle nicht warten.',
    span: 'col-span-1 md:col-span-2',
    bg: 'bg-[#C8A850]',
    text: 'text-[#0A0A0A]',
  },
  {
    icon: Leaf,
    title: 'Nachhaltig',
    desc: 'Energieeffiziente Lösungen, die Kosten senken und die Umwelt schonen.',
    span: 'col-span-1',
    bg: 'bg-[#F5F2EB]',
    text: 'text-[#0A0A0A]',
  },
  {
    icon: Award,
    title: 'Garantie',
    desc: 'Auf alle unsere Arbeiten geben wir eine umfassende Qualitätsgarantie.',
    span: 'col-span-1',
    bg: 'bg-[#F5F2EB]',
    text: 'text-[#0A0A0A]',
  },
  {
    icon: Headphones,
    title: 'Persönlich',
    desc: 'Ein fester Ansprechpartner von Anfang bis Ende — kein Call-Center.',
    span: 'col-span-1 md:col-span-2',
    bg: 'bg-[#0A0A0A]',
    text: 'text-[#F5F2EB]',
  },
];

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.title}
            className={`${item.span} ${item.bg} ${item.text} rounded-2xl p-8 md:p-10 group hover:scale-[1.02] transition-transform duration-300`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <Icon
              className={`w-7 h-7 mb-5 ${
                item.accent ? 'text-[#C8A850]' : item.bg === 'bg-[#C8A850]' ? 'text-[#0A0A0A]' : 'text-[#C8A850]'
              }`}
            />
            <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3">
              {item.title}
            </h3>
            <p className={`text-sm leading-relaxed ${
              item.bg === 'bg-[#0A0A0A]' ? 'text-white/50' :
              item.bg === 'bg-[#C8A850]' ? 'text-[#0A0A0A]/70' :
              'text-[#0A0A0A]/50'
            }`}>
              {item.desc}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}