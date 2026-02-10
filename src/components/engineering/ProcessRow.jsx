import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

export default function ProcessRow({ step, index }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      className="group cursor-pointer"
      style={{ opacity, y }}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="border-b border-white/[0.05] py-10 md:py-14 group-hover:border-white/[0.1] transition-colors duration-300">
        <div className="flex items-start gap-6 md:gap-10">
          {/* Big number */}
          <span className="text-5xl md:text-7xl font-light tracking-tight text-white/[0.06] group-hover:text-[#3B5BDB]/20 transition-colors duration-500 flex-shrink-0 leading-none">
            {step.num}
          </span>

          <div className="flex-1 min-w-0 pt-2">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-white/80 group-hover:text-white transition-colors duration-300 mb-1">
                  {step.title}
                </h3>
                <span className="text-sm text-white/20 font-light">
                  {step.subtitle}
                </span>
              </div>
              <div className="w-10 h-10 rounded-full border border-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:border-[#3B5BDB]/30 transition-all duration-300">
                <Icon className="w-4 h-4 text-white/15 group-hover:text-[#3B5BDB]/60 transition-colors duration-300" />
              </div>
            </div>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  className="mt-6"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-sm md:text-base text-white/30 leading-relaxed max-w-xl font-light">
                    {step.detail}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}