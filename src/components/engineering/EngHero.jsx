import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function EngHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section ref={ref} className="h-screen relative overflow-hidden flex flex-col justify-end">
      <motion.div className="px-6 md:px-16 pb-10 md:pb-16" style={{ opacity, y }}>
        <div className="max-w-7xl mx-auto">
          {/* Small label top */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-[11px] md:text-xs tracking-[0.3em] text-white/30 uppercase font-light">
              Prototypenbau · Produktentwicklung · Engineering
            </span>
          </motion.div>

          {/* Giant serif-like headline */}
          <motion.h1
            className="text-[2.8rem] md:text-[5.5rem] lg:text-[8rem] xl:text-[9.5rem] font-light tracking-[-0.03em] leading-[0.92] text-white"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Von der Idee
            <br />
            zum{' '}
            <span className="italic text-white/60">Prototyp</span>
            <span className="text-[#3B5BDB]">.</span>
          </motion.h1>

          {/* Bottom row with link */}
          <motion.div
            className="mt-8 md:mt-12 flex items-center justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <span className="text-white/20 text-xs tracking-widest uppercase hidden md:block">Scroll</span>
            <Link
              to={createPageUrl('Kontakt')}
              className="inline-flex items-center gap-3 text-white/50 text-xs tracking-[0.25em] uppercase hover:text-white transition-colors group"
            >
              LET'S TALK
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}