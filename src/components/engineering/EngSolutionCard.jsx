import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function EngSolutionCard({ icon: Icon, label, headline, description, imgSrc, index }) {
  return (
    <motion.div
      className="group relative border border-white/[0.06] overflow-hidden bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Image */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={imgSrc}
          alt={label}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.2s] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-8 md:p-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-full border border-[#3B5BDB]/30 bg-[#3B5BDB]/5 flex items-center justify-center">
            <Icon className="w-4 h-4 text-[#3B5BDB]" />
          </div>
          <span className="text-[11px] tracking-[0.3em] uppercase text-white/30">{label}</span>
        </div>

        <h3 className="text-2xl md:text-3xl font-light tracking-[-0.02em] text-white leading-tight mb-4">
          {headline}
        </h3>
        <p className="text-sm text-white/30 font-light leading-relaxed mb-8 max-w-md">
          {description}
        </p>

        <Link
          to={createPageUrl('Kontakt')}
          className="inline-flex items-center gap-2 text-white/40 text-xs tracking-[0.25em] uppercase hover:text-white transition-colors group/link"
        >
          KONTAKT
          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}