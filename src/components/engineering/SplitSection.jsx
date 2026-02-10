import React from 'react';
import { motion } from 'framer-motion';

export default function SplitSection({ imgSrc, imgAlt, title, text, reverse = false, accent }) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[60vh]`}>
      <motion.div
        className={`relative overflow-hidden ${reverse ? 'lg:order-2' : ''}`}
        initial={{ opacity: 0, x: reverse ? 60 : -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={imgSrc}
          alt={imgAlt}
          className="w-full h-full object-cover min-h-[300px] lg:min-h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A0A0A]/60" />
      </motion.div>

      <motion.div
        className={`flex flex-col justify-center px-8 md:px-16 py-16 md:py-24 ${reverse ? 'lg:order-1' : ''}`}
        initial={{ opacity: 0, x: reverse ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        {accent && (
          <span className="text-[10px] tracking-[0.5em] uppercase font-mono text-[#3B5BDB]/50 mb-4 block">
            {accent}
          </span>
        )}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-[-0.04em] uppercase leading-[0.9] text-white mb-6">
          {title}
        </h2>
        <p className="text-base md:text-lg text-white/30 font-light leading-relaxed max-w-lg">
          {text}
        </p>
      </motion.div>
    </div>
  );
}