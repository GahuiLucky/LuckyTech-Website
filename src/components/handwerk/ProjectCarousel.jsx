import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const projects = [
  {
    num: '01',
    title: 'Villa Smarthome',
    subtitle: 'Komplettinstallation KNX',
    location: 'München, 2024',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80',
  },
  {
    num: '02',
    title: 'Wallbox Campus',
    subtitle: '24 Ladestationen Gewerbe',
    location: 'Frankfurt, 2024',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=900&q=80',
  },
  {
    num: '03',
    title: 'Penthouse Elektrik',
    subtitle: 'High-End Elektroinstallation',
    location: 'Hamburg, 2023',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80',
  },
  {
    num: '04',
    title: 'Office Automation',
    subtitle: 'Gebäudeautomation Bürokomplex',
    location: 'Berlin, 2024',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80',
  },
  {
    num: '05',
    title: 'Altbau Sanierung',
    subtitle: 'Denkmalgerechte Elektroinstallation',
    location: 'Heidelberg, 2023',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18f6b6637?w=900&q=80',
  },
];

export default function ProjectCarousel() {
  const scrollRef = useRef(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.6;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Header row */}
      <div className="flex items-end justify-between mb-12 px-6 md:px-16">
        <div>
          <motion.h2
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[0.95] text-[#0A0A0A]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Ausgewählte<br />Projekte
          </motion.h2>
        </div>
        <div className="hidden md:flex gap-3">
          <button
            onClick={() => scroll('left')}
            className="w-12 h-12 border border-[#0A0A0A]/20 flex items-center justify-center hover:bg-[#0A0A0A] hover:text-white transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-12 h-12 border border-[#0A0A0A]/20 flex items-center justify-center hover:bg-[#0A0A0A] hover:text-white transition-all"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Scrollable row */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide pl-6 md:pl-16 pr-6 pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((p, i) => (
          <motion.div
            key={p.num}
            className="flex-shrink-0 w-[75vw] md:w-[42vw] lg:w-[32vw] group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {/* Image */}
            <div className="relative overflow-hidden aspect-[4/5] mb-5 bg-[#E8E4DB]">
              <motion.img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover"
                animate={{ scale: hoveredIdx === i ? 1.04 : 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              />
              {/* Number overlay */}
              <div className="absolute top-5 left-5 text-sm font-medium text-white/70">
                {p.num}
              </div>
            </div>

            {/* Text */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#0A0A0A] group-hover:underline decoration-1 underline-offset-4">
                {p.title}
              </h3>
              <p className="text-sm text-[#0A0A0A]/50 mt-1">{p.subtitle}</p>
              <p className="text-xs text-[#0A0A0A]/35 mt-2 tracking-wide">{p.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}