// src/components/home/HandwerkListItem.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TileModal from './TileModal';

export default function HandwerkListItem({ service, index }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.06 + index * 0.04 }}
        className="w-full text-left p-6 bg-white/90 rounded-none md:rounded-md flex items-start gap-4 hover:bg-white/95 transition"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <div className="w-12 h-12 rounded-full bg-[#0A0A0A] flex items-center justify-center text-white flex-shrink-0">
          <service.icon className="w-5 h-5" />
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-[#0A0A0A]/80 font-semibold">{service.title}</div>
          <div className="text-sm text-[#0A0A0A]/60 mt-1">{service.subtitle}</div>
        </div>
      </motion.button>

      <TileModal open={open} title={service.title} onClose={() => setOpen(false)}>
        {service.description ? (
          <div className="space-y-3">
            <p className="text-sm text-white/90">{service.description}</p>
          </div>
        ) : (
          <p className="text-sm text-white/80">Keine zusätzlichen Informationen vorhanden.</p>
        )}
      </TileModal>
    </>
  );
}
