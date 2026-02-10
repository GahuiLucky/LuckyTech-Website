import React from 'react';
import { motion } from 'framer-motion';

export default function FeatureCard({ num, title, description, index }) {
  return (
    <motion.div
      className="group relative bg-white/[0.015] border border-white/[0.05] rounded-xl p-6 md:p-8 hover:border-[#3B5BDB]/25 hover:bg-white/[0.03] transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <span className="text-[11px] font-mono tracking-widest text-[#3B5BDB]/40 block mb-5">
        {num}
      </span>
      <h3 className="text-lg md:text-xl font-semibold text-white mb-3 tracking-tight group-hover:text-[#3B5BDB] transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-white/30 font-light leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}