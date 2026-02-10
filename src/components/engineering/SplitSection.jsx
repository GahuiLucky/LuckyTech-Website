import React from 'react';
import { motion } from 'framer-motion';

export default function SplitSection({ imgSrc, imgAlt, title, text, reverse = false, accent }) {
  return (
    <section className="px-6 md:px-16 py-20 md:py-32">
      <div className={`max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center`}>
        {/* Image */}
        <motion.div
          className={`relative overflow-hidden rounded-2xl ${reverse ? 'lg:order-2' : ''}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={imgSrc}
            alt={imgAlt}
            className="w-full h-[350px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/30 to-transparent" />
        </motion.div>

        {/* Text */}
        <motion.div
          className={`${reverse ? 'lg:order-1' : ''}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          {accent && (
            <span className="text-[11px] tracking-[0.3em] uppercase font-mono text-[#3B5BDB]/50 mb-5 block">
              {accent}
            </span>
          )}
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-white mb-6">
            {title}
          </h2>
          <p className="text-base md:text-lg text-white/35 font-light leading-relaxed max-w-lg">
            {text}
          </p>
        </motion.div>
      </div>
    </section>
  );
}