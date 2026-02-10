import React from 'react';
import { motion } from 'framer-motion';

const team = [
  { name: 'Max Mustermann', role: 'Geschäftsführer', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop' },
  { name: 'Laura Schmidt', role: 'Projektleiterin Engineering', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&auto=format&fit=crop' },
  { name: 'Tobias Weber', role: 'Elektrotechniker-Meister', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&auto=format&fit=crop' },
  { name: 'Julia Braun', role: 'Design & Prototyping', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop' },
  { name: 'Markus Klein', role: 'Hardware-Entwicklung', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop' },
  { name: 'Sarah Fischer', role: 'Smarthome-Spezialistin', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80&auto=format&fit=crop' },
];

export default function AboutTeamGrid() {
  return (
    <section className="bg-[#0A0A0A] px-6 md:px-12 lg:px-16 py-28 md:py-40">
      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <span className="text-[11px] tracking-[0.3em] uppercase text-white/20 block mb-6">Unser Team</span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-[-0.02em] leading-[1.1] text-white max-w-3xl">
          Ein vielseitiges Team aus <em className="italic text-white/40">Experten</em>.
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            className="group relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
          >
            <div className="aspect-[3/4] overflow-hidden bg-white/5 rounded-sm">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-3">
              <div className="text-sm font-medium text-white/80">{member.name}</div>
              <div className="text-[11px] text-white/25 tracking-wide">{member.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}