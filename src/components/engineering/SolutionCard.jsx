import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function SolutionCard({ icon: Icon, title, description, imgSrc, index }) {
  return (
    <motion.div
      className="group relative bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-[#3B5BDB]/30 transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
    >
      {/* Image area */}
      <div className="relative h-64 md:h-72 overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
        <div className="absolute top-5 left-5">
          <div className="w-10 h-10 rounded-full bg-[#3B5BDB]/10 border border-[#3B5BDB]/20 flex items-center justify-center backdrop-blur-sm">
            <Icon className="w-4 h-4 text-[#3B5BDB]" />
          </div>
        </div>
      </div>

      {/* Text area */}
      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-white/35 leading-relaxed mb-6 font-light">
          {description}
        </p>
        <div className="flex items-center gap-2 text-[#3B5BDB] text-sm font-medium group-hover:gap-3 transition-all">
          <span>Mehr erfahren</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
}