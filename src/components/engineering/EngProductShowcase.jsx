import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    title: 'Prototypenbau',
    subtitle: 'Schnelle Iteration, echtes Feedback.',
    desc: 'Von 3D-Druck über CNC-Fertigung bis zur Elektronik-Integration — wir bauen funktionsfähige Prototypen, die Sie testen, zeigen und weiterentwickeln können.',
    img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&q=80&auto=format',
  },
  {
    title: 'Produktentwicklung',
    subtitle: 'Vom Konzept bis zur Serienreife.',
    desc: 'Hardware, Software, Design — wir begleiten Ihr Produkt durch den gesamten Entwicklungszyklus. Interdisziplinär, agil und ergebnisorientiert.',
    img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&q=80&auto=format',
  },
];

export default function EngProductShowcase() {
  return (
    <section className="px-6 md:px-16 py-20 md:py-32 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto space-y-20 md:space-y-32">
        {products.map((p, i) => (
          <motion.div
            key={p.title}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Image */}
            <div className={`relative overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-[1.2s]"
                />
              </div>
            </div>

            {/* Text */}
            <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#3B5BDB]/50 block mb-4">{p.subtitle}</span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.02em] text-white leading-[1.1] mb-6">
                {p.title}
              </h3>
              <p className="text-sm md:text-base text-white/30 font-light leading-relaxed mb-8 max-w-lg">
                {p.desc}
              </p>
              <Link
                to={createPageUrl('Kontakt')}
                className="inline-flex items-center gap-2 text-white/40 text-xs tracking-[0.25em] uppercase hover:text-white transition-colors group"
              >
                MEHR ERFAHREN
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}