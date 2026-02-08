import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';

const services = [
  {
    title: 'Smarthome',
    tagline: 'Ein Zuhause, das mitdenkt',
    description: 'Intelligente Gebäudeautomation — von Lichtsteuerung bis Sicherheitssysteme. Wir machen Ihr Zuhause smart.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=900&q=80',
    page: 'Smarthome',
  },
  {
    title: 'Wallbox',
    tagline: 'Elektromobilität beginnt zuhause',
    description: 'Professionelle Ladeinfrastruktur für Elektromobilität, fachgerecht installiert und optimal integriert.',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=900&q=80',
    page: 'Wallbox',
  },
  {
    title: 'Elektroinstallation',
    tagline: 'Vom Kabel bis zum Verteiler',
    description: 'Komplette Elektrik für Neubau, Sanierung und Gewerbe auf höchstem Niveau.',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=900&q=80',
    page: 'Elektroinstallation',
  },
  {
    title: 'Reparatur',
    tagline: 'Schnelle Hilfe, wenn es zählt',
    description: 'Notdienst und Reparaturen — rund um die Uhr erreichbar, kompetent und transparent.',
    image: 'https://images.unsplash.com/photo-1581092918484-8313e1f7e8c6?w=900&q=80',
    page: 'Reparatur',
  },
];

export default function ServiceGrid() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#0A0A0A]/10">
      {services.map((s, i) => (
        <Link
          key={s.title}
          to={createPageUrl(s.page)}
          className="group relative bg-white overflow-hidden cursor-pointer block"
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
        >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          {/* Image */}
          <div className="relative overflow-hidden aspect-[16/10]">
            <motion.img
              src={s.image}
              alt={s.title}
              className="w-full h-full object-cover"
              animate={{ scale: hovered === i ? 1.05 : 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
            <motion.div
              className="absolute inset-0 bg-[#0A0A0A]"
              animate={{ opacity: hovered === i ? 0.15 : 0 }}
              transition={{ duration: 0.4 }}
            />
          </div>

          {/* Text */}
          <div className="p-8 md:p-10">
            <div className="text-xs tracking-[0.2em] text-[#0A0A0A]/30 uppercase mb-3">
              {String(i + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0A0A0A] mb-2">
              {s.title}
            </h3>
            <p className="text-sm font-medium text-[#0A0A0A]/70 mb-4">{s.tagline}</p>
            <p className="text-sm text-[#0A0A0A]/45 leading-relaxed">{s.description}</p>
            <motion.div
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#0A0A0A]"
              animate={{ x: hovered === i ? 4 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="border-b border-[#0A0A0A]/20 pb-px group-hover:border-[#0A0A0A] transition-colors">
                Mehr erfahren
              </span>
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </div>
        </motion.div>
        </Link>
      ))}
    </div>
  );
}