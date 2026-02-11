import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AboutTeamGrid from '../components/about/AboutTeamGrid';
import AboutValues from '../components/about/AboutValues';

const ease = [0.22, 1, 0.36, 1];

export default function About() {
  return (
    <div className="bg-[#0A0A0A] text-[#F5F2EB] overflow-x-hidden">

      {/* ─── BLOCK 1: HERO + GRÜNDER ─── */}
      <section className="bg-[#F0EDE6] text-[#0A0A0A]">
        <div className="px-6 md:px-12 lg:px-16 pt-32 md:pt-40 pb-16">
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#0A0A0A]/30 font-mono">
              LUCKYTECH — HANDWERK + ENGINEERING
            </span>
          </motion.div>

          <motion.h1
            className="text-[2rem] md:text-[3.5rem] lg:text-[5rem] font-light leading-[1.05] tracking-[-0.025em] max-w-[1000px] mb-16"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease }}
          >
            Wo <em className="italic text-[#C8A850]">Handwerk</em> auf Innovation trifft — Elektrotechnik und Engineering aus einer Hand.
          </motion.h1>

          {/* Gründer — direkt im Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl border-t border-[#0A0A0A]/10 pt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#0A0A0A]/25 block mb-4">Gründer</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-[-0.02em] leading-[1.1] text-[#0A0A0A] mb-4">
                Die treibende Kraft hinter <em className="italic text-[#0A0A0A]/40">LuckyTech</em>.
              </h2>
              <p className="text-sm text-[#0A0A0A]/40 leading-relaxed mb-6 max-w-md">
                LuckyTech ist aktuell ein Ein-Mann-Betrieb — mit der Überzeugung, dass Qualität wichtiger ist als Größe. Von der Idee über die Planung bis zur Umsetzung liegt alles in einer Hand.
              </p>
              <div className="space-y-1">
                <div className="text-xl md:text-2xl font-light text-[#0A0A0A]">Max Mustermann</div>
                <div className="text-xs tracking-[0.2em] uppercase text-[#0A0A0A]/30">Gründer & Inhaber</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <div className="aspect-[3/4] max-w-xs mx-auto lg:mx-0 overflow-hidden bg-[#0A0A0A]/5 rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop"
                  alt="Max Mustermann"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── BLOCK 2: PHILOSOPHY — large quote on dark ─── */}
      <section className="bg-[#0A0A0A] px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <motion.div
          className="max-w-5xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease }}
        >
          <span className="text-[11px] tracking-[0.3em] uppercase text-white/20 block mb-8">Unsere Philosophie</span>
          <h2 className="text-[1.5rem] md:text-[2.5rem] lg:text-[3.5rem] font-light leading-[1.1] tracking-[-0.02em] text-white">
            "Wir glauben, dass die besten <em className="italic text-white/40">Innovationen</em> entstehen, wenn man das Fundament des Handwerks mit der Freiheit kreativen Denkens verbindet."
          </h2>
        </motion.div>
      </section>

      {/* ─── BLOCK 3: VALUES — compact ─── */}
      <AboutValues />

      {/* ─── BLOCK 4: STATS — full-width dark strip ─── */}
      <section className="bg-[#0A0A0A] border-y border-white/[0.06]">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            { number: '15+', label: 'Jahre Erfahrung' },
            { number: '500+', label: 'Abgeschlossene Projekte' },
            { number: '100%', label: 'Kundenzufriedenheit' },
            { number: '24/7', label: 'Support & Service' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="px-6 md:px-10 py-10 md:py-14 border-r border-white/[0.06] last:border-r-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-2">{stat.number}</div>
              <div className="text-xs tracking-[0.15em] uppercase text-white/25">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── BLOCK 5: CTA — dark, massive text ─── */}
      <section className="bg-[#0A0A0A] px-6 md:px-12 lg:px-16 py-24 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-[7rem] font-light tracking-[-0.03em] leading-[0.95] text-white mb-10 max-w-5xl">
            Bereit für Ihr nächstes <em className="italic text-white/40">Projekt</em>?
          </h2>
          <Link
            to={createPageUrl('Kontakt')}
            className="inline-flex items-center gap-3 text-white/40 text-sm tracking-[0.2em] uppercase hover:text-white transition-colors group border-b border-white/15 pb-3 hover:border-white/50"
          >
            LET'S TALK
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}