import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Sparkles } from 'lucide-react';

export default function SuccessOverlay({ show, onClose }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0A]/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative bg-[#0A0A0A] border border-[#C8A850]/30 p-12 md:p-16 max-w-md mx-4 text-center"
            initial={{ scale: 0.3, opacity: 0, rotateY: 90 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            exit={{ scale: 0.3, opacity: 0, rotateY: -90 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 80, damping: 12 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#C8A850] rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                }}
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{
                  x: Math.cos((i * Math.PI * 2) / 8) * 120,
                  y: Math.sin((i * Math.PI * 2) / 8) * 120,
                  opacity: 0,
                  scale: 0,
                }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              />
            ))}

            {/* Check icon */}
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#C8A850]/20 to-[#3B5BDB]/20 border border-[#C8A850]/30 mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 150 }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.4, duration: 0.6, type: "spring", stiffness: 120 }}
              >
                <CheckCircle className="w-10 h-10 text-[#C8A850]" />
              </motion.div>
            </motion.div>

            <motion.h3
              className="text-2xl font-bold text-[#F5F2EB] mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Nachricht gesendet!
            </motion.h3>

            <motion.p
              className="text-[#F5F2EB]/60 mb-8"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
            </motion.p>

            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-[#C8A850] to-[#3B5BDB] text-white font-bold uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              onClick={onClose}
            >
              Verstanden
            </motion.button>

            {/* Sparkle decorations */}
            <motion.div
              className="absolute top-4 right-4"
              initial={{ opacity: 0, rotate: -30 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Sparkles className="w-5 h-5 text-[#C8A850]/40" />
            </motion.div>
            <motion.div
              className="absolute bottom-4 left-4"
              initial={{ opacity: 0, rotate: 30 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Sparkles className="w-4 h-4 text-[#3B5BDB]/40" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}