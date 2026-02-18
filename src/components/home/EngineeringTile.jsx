// src/components/home/EngineeringTile.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TileModal from './TileModal';

export default function EngineeringTile({ service, index }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.04 + index * 0.03 }}
        className="flex flex-col items-center justify-center gap-2 p-4 bg-white/6 hover:bg-white/10 rounded-md text-center text-white cursor-pointer"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <div className="p-3 rounded-full bg-white/8">
          <service.icon className="w-6 h-6 text-white/90" />
        </div>
        <div className="text-xs mt-2 font-semibold">{service.title}</div>
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
