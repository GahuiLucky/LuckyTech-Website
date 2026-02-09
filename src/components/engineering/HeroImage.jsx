import React from 'react';
import { motion } from 'framer-motion';

export default function HeroImage() {
  return (
    <div className="absolute inset-0 z-0">
      <motion.img
        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80&auto=format"
        alt="Engineering workspace"
        className="w-full h-full object-cover"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 to-transparent" />
    </div>
  );
}