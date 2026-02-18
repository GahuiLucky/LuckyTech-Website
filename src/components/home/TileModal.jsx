// src/components/home/TileModal.jsx
import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TileModal({ open, title, children, onClose }) {
  const closeBtnRef = useRef(null);
  const lastActiveRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    if (open) {
      lastActiveRef.current = document.activeElement;
      document.addEventListener('keydown', onKey);
      setTimeout(() => closeBtnRef.current && closeBtnRef.current.focus(), 0);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      if (lastActiveRef.current && typeof lastActiveRef.current.focus === 'function') {
        lastActiveRef.current.focus();
      }
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="relative z-10 max-w-3xl w-full bg-[#0A0A0A] border border-white/8 rounded-lg shadow-lg p-6 text-white"
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold">{title}</h3>
              <button
                ref={closeBtnRef}
                onClick={onClose}
                aria-label="Schließen"
                className="ml-auto text-white/80 hover:text-white rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#C8A850]/40"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 text-sm leading-relaxed">
              {children}
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 bg-[#C8A850] text-black font-semibold px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#C8A850]/40"
              >
                Schließen
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
