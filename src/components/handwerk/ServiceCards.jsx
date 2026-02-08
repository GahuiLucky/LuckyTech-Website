import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Smarthome',
    tagline: 'Intelligente Automation',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=900&q=80',
    page: 'Smarthome',
  },
  {
    title: 'Wallbox',
    tagline: 'E-Mobilität Zuhause',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=900&q=80',
    page: 'Wallbox',
  },
  {
    title: 'Elektroinstallation',
    tagline: 'Neubau & Sanierung',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=900&q=80',
    page: 'Elektroinstallation',
  },
  {
    title: 'Reparatur',
    tagline: '24/7 Notdienst',
    image: 'https://images.unsplash.com/photo-1581092918484-8313e1f7e8c6?w=900&q=80',
    page: 'Reparatur',
  },
];

export default function ServiceCards() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
      {services.map((s, i) => (
        <Link
          key={s.title}
          to={createPageUrl(s.page)}
          className="group relative block overflow-hidden"
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
        >
          <motion.div
            className="relative aspect-[3/4] overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            {/* Image */}
            <motion.img
              src={s.image}
              alt={s.title}
              className="w-full h-full object-cover"
              animate={{ scale: hovered === i ? 1.08 : 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />

            {/* Hover accent line */}
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-[#C8A850]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: hovered === i ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              style={{ originX: 0 }}
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
              <div className="text-xs tracking-[0.25em] text-[#C8A850] uppercase mb-2">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-1">
                {s.title}
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-sm text-white/50">{s.tagline}</p>
                <motion.div
                  animate={{
                    x: hovered === i ? 0 : -8,
                    opacity: hovered === i ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight className="w-5 h-5 text-[#C8A850]" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}