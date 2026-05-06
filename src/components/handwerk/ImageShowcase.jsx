// src/components/handwerk/ImageShowcase.jsx
import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80&auto=format',
    alt: 'Verkabelung',
    caption: 'Präzise Verkabelung',
  },
  {
    src: 'src/assets/SmartHome.jpg',
    alt: 'Smarthome',
    caption: 'Smarthome Steuerung',
  },

  // WALLBOX — COMING SOON
  {
    src: 'src/assets/Wallbox.jpg',
    alt: 'Wallbox',
    caption: 'Wallbox Installation',
    comingSoon: true,
  },

  // PHOTOVOLTAIK — COMING SOON
  {
    src: 'src/assets/Photovoltaik.jpg',
    alt: 'Photovoltaik',
    caption: 'Photovoltaik Anlagen',
    comingSoon: true,
  },

  {
    src: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1200&q=80&auto=format',
    alt: 'Reparatur',
    caption: 'Reparatur & Service',
  },
  {
    src: 'src/assets/Rolladensteuerung.jpeg',
    alt: 'Rolladensteuerung',
    caption: 'Rolladensteuerung',
  },
];

export default function ImageShowcase() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((img, i) => {
            const disabled = img.comingSoon === true;

            return (
              <motion.div
                key={i}
                className={`relative overflow-hidden group aspect-[4/5] md:aspect-[3/4] ${
                  disabled ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
              >
                <motion.img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  whileHover={disabled ? {} : { scale: 1.04 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Coming Soon Overlay */}
                {disabled && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-lg">
                    <span className="text-white text-sm font-bold uppercase tracking-wide">
                      Coming Soon
                    </span>
                  </div>
                )}

                {/* Hover overlay */}
                {!disabled && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="text-[10px] tracking-[0.3em] uppercase text-white/50">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-sm text-white font-medium mt-1">{img.caption}</p>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
