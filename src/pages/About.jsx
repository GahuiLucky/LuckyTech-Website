import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AboutValues from '../components/about/AboutValues';
import HeroBackground from '../components/home/HeroBackground';

const ease = [0.22, 1, 0.36, 1];

export default function About() {
  return (
    <div className="bg-[#0A0A0A] text-[#F5F2EB] overflow-x-hidden">

      {/* ─── BLOCK 1: HERO + GRÜNDER ─── */}
      <section className="bg-[#F0EDE6] text-[#0A0A0A] relative overflow-hidden">
        {/* Subtle geometric accent */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#C8A850]/[0.04] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />

        <div className="relative px-6 md:px-12 lg:px-16 pt-32 md:pt-40 pb-20">
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="w-8 h-px bg-[#C8A850]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#0A0A0A]/40 font-mono">
              ÜBER UNS
            </span>
          </motion.div>

          <motion.h1
            className="text-[2rem] md:text-[3.5rem] lg:text-[5rem] font-light leading-[1.05] tracking-[-0.025em] max-w-[1000px] mb-20"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease }}
          >
            Wo <em className="italic text-[#C8A850]">Handwerk</em> auf Innovation trifft — Elektrotechnik und Engineering aus einer Hand.
          </motion.h1>

          {/* Gründer */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start border-t border-[#0A0A0A]/10 pt-14">
            {/* Foto — links, kompakter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="lg:col-span-2 relative group"
            >
              <div className="aspect-[4/5] max-w-sm mx-auto lg:mx-0 overflow-hidden bg-[#0A0A0A]/5">
                <img
                  src="src/assets/AchimKolb.png"
                  alt="Max Mustermann"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              {/* Floating label */}
              <div className="absolute -bottom-3 -right-3 md:bottom-4 md:right-4 bg-[#0A0A0A] text-[#F5F2EB] px-4 py-2.5">
                <div className="text-xs tracking-[0.2em] uppercase">Gründer & Inhaber</div>
              </div>
            </motion.div>

            {/* Text — rechts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="lg:col-span-3 flex flex-col justify-center"
            >
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#C8A850] block mb-5">Die Person dahinter</span>
              <h2 className="text-2xl md:text-3xl lg:text-[2.8rem] font-light tracking-[-0.02em] leading-[1.1] text-[#0A0A0A] mb-5">
                Max Mustermann
              </h2>
              <p className="text-[15px] text-[#0A0A0A]/50 leading-[1.7] mb-8 max-w-lg">
                LuckyTech ist aktuell ein Ein-Mann-Betrieb — mit der Überzeugung, dass Qualität wichtiger ist als Größe. Von der Idee über die Planung bis zur Umsetzung liegt alles in einer Hand. Jedes Projekt wird mit dem gleichen Anspruch an Exzellenz behandelt.
              </p>
              <div className="flex gap-8 border-t border-[#0A0A0A]/10 pt-6">
                <div>
                  <div className="text-2xl md:text-3xl font-light text-[#0A0A0A]">15+</div>
                  <div className="text-[10px] tracking-[0.15em] uppercase text-[#0A0A0A]/30 mt-1">Jahre Erfahrung</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-light text-[#0A0A0A]">500+</div>
                  <div className="text-[10px] tracking-[0.15em] uppercase text-[#0A0A0A]/30 mt-1">Projekte</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── BLOCK 2: PHILOSOPHY — dark with accent line ─── */}
      <section className="bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
          <HeroBackground />
        </div>
        <div className="relative z-10 px-6 md:px-12 lg:px-16 py-24 md:py-36">
          <motion.div
            className="max-w-5xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-px bg-[#C8A850]" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#C8A850]/60">Philosophie</span>
            </div>
            <h2 className="text-[1.5rem] md:text-[2.5rem] lg:text-[3.5rem] font-light leading-[1.15] tracking-[-0.02em] text-white">
              "Wir glauben, dass die besten <em className="italic text-white/40">Innovationen</em> entstehen, wenn man das Fundament des Handwerks mit der Freiheit kreativen Denkens verbindet."
            </h2>
            <motion.div
              className="w-24 h-px bg-gradient-to-r from-[#C8A850] to-[#3B5BDB] mt-10"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{ transformOrigin: 'left' }}
            />
          </motion.div>
        </div>
      </section>

      {/* ─── BLOCK 3: VALUES ─── */}
      <AboutValues />

      {/* ─── BLOCK 4: STATS — refined ─── */}
      <section className="bg-[#0A0A0A] border-y border-white/[0.06]">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            { number: '15+', label: 'Jahre Erfahrung', accent: '#C8A850' },
            { number: '500+', label: 'Abgeschlossene Projekte', accent: '#3B5BDB' },
            { number: '100%', label: 'Kundenzufriedenheit', accent: '#C8A850' },
            { number: '24/7', label: 'Support & Service', accent: '#3B5BDB' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="px-6 md:px-10 py-12 md:py-16 border-r border-white/[0.06] last:border-r-0 group hover:bg-white/[0.02] transition-colors duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            >
              <div className="w-6 h-px mb-6 transition-all duration-500 group-hover:w-10" style={{ backgroundColor: stat.accent }} />
              <div className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-2">{stat.number}</div>
              <div className="text-[10px] tracking-[0.15em] uppercase text-white/25">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── BLOCK 5: CTA ─── */}
      <section className="bg-[#0A0A0A] px-6 md:px-12 lg:px-16 py-24 md:py-36 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-[#3B5BDB]/[0.03] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-[#C8A850]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-white/20">Nächster Schritt</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-[6rem] font-light tracking-[-0.03em] leading-[0.95] text-white mb-10 max-w-4xl">
            Bereit für Ihr nächstes <em className="italic text-white/40">Projekt</em>?
          </h2>
          <Link
            to={createPageUrl('Kontakt')}
            className="inline-flex items-center gap-3 bg-white/[0.05] border border-white/10 px-8 py-4 text-white/60 text-sm tracking-[0.2em] uppercase hover:bg-white/[0.1] hover:text-white transition-all duration-300 group"
          >
            LET'S TALK
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}