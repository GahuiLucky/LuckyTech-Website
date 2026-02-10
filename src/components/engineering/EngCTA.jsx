import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function EngCTA() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-16 border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-[7rem] font-light tracking-[-0.03em] leading-[0.95] text-white mb-10">
            Bereit für Ihr
            <br />
            nächstes{' '}
            <span className="italic text-white/50">Projekt</span>
            <span className="text-[#3B5BDB]">?</span>
          </h2>
          <Link
            to={createPageUrl('Kontakt')}
            className="inline-flex items-center gap-3 text-white/50 text-sm tracking-[0.2em] uppercase hover:text-white transition-colors group border-b border-white/20 pb-3 hover:border-white"
          >
            LET'S TALK
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}