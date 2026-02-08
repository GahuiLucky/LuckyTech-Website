import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Smarthome',
    tagline: 'Ihr Zuhause denkt mit',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&q=80',
    page: 'Smarthome',
    accent: '#C8A850',
  },
  {
    title: 'Wallbox',
    tagline: 'Laden. Zuhause. Jetzt.',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&q=80',
    page: 'Wallbox',
    accent: '#3B5BDB',
  },
  {
    title: 'Elektro-installation',
    tagline: 'Vom Plan zur Perfektion',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&q=80',
    page: 'Elektroinstallation',
    accent: '#C8A850',
  },
  {
    title: 'Reparatur & Service',
    tagline: 'Da, wenn es zählt',
    image: 'https://images.unsplash.com/photo-1581092918484-8313e1f7e8c6?w=1200&q=80',
    page: 'Reparatur',
    accent: '#3B5BDB',
  },
];

export default function HorizontalShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);

  return (
    <div ref={containerRef} className="h-[400vh] relative">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div className="flex gap-8 pl-6 md:pl-16" style={{ x }}>
          {services.map((s, i) => (
            <ServicePanel key={s.title} service={s} index={i} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function ServicePanel({ service, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={createPageUrl(service.page)}
      className="group flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] relative block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-[70vh] overflow-hidden rounded-2xl">
        <motion.img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Top badge */}
        <div className="absolute top-6 left-6 flex items-center gap-3">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: service.accent }}
          />
          <span className="text-xs tracking-[0.3em] text-white/50 uppercase">
            {String(index + 1).padStart(2, '0')} / 04
          </span>
        </div>

        {/* Arrow */}
        <motion.div
          className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center"
          animate={{
            backgroundColor: hovered ? service.accent : 'transparent',
            borderColor: hovered ? service.accent : 'rgba(255,255,255,0.2)',
          }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUpRight
            className="w-5 h-5 transition-colors"
            style={{ color: hovered ? '#0A0A0A' : 'rgba(255,255,255,0.6)' }}
          />
        </motion.div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <motion.p
            className="text-sm tracking-[0.2em] uppercase mb-3"
            style={{ color: service.accent }}
            animate={{ y: hovered ? 0 : 5, opacity: hovered ? 1 : 0.6 }}
            transition={{ duration: 0.3 }}
          >
            {service.tagline}
          </motion.p>
          <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[0.95]">
            {service.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}