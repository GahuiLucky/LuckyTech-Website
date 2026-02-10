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

      {/* ─── BLOCK 1: HERO STATEMENT — light bg, massive text ─── */}
      <section className="bg-[#F0EDE6] text-[#0A0A0A] min-h-screen flex flex-col justify-between">
        <div className="px-6 md:px-12 lg:px-16 pt-32 md:pt-44 pb-16 flex-1 flex flex-col justify-center">
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#0A0A0A]/30 font-mono">
              LUCKYTECH — HANDWERK + ENGINEERING
            </span>
          </motion.div>

          <motion.h1
            className="text-[2rem] md:text-[4rem] lg:text-[5.5rem] xl:text-[6.5rem] font-light leading-[1.05] tracking-[-0.025em] max-w-[1200px]"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease }}
          >
            Wo <em className="italic text-[#C8A850]">Handwerk</em> auf Innovation trifft — Elektrotechnik und Engineering aus einer Hand.
          </motion.h1>
        </div>

        {/* 4-column text block */}
        <div className="px-6 md:px-12 lg:px-16 pb-20 md:pb-28">
          <div className="border-t border-[#0A0A0A]/10 pt-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {[
              'LuckyTech wurde aus der Überzeugung gegründet, dass die besten Ergebnisse entstehen, wenn handwerkliche Präzision auf kreatives Engineering trifft. Unser Team vereint Jahrzehnte Erfahrung in der Elektrotechnik.',
              'Die Anforderungen moderner Projekte erfordern mehr als Standardlösungen. Unsere Arbeit verbindet bewährtes Handwerk mit den neuesten Methoden der Produktentwicklung und des Prototypenbaus.',
              'Von der Installation einer Wallbox bis zum komplexen Prototyp — wir verstehen, dass jedes Projekt einzigartig ist. Deshalb arbeiten wir eng mit unseren Kunden zusammen, vom ersten Gespräch bis zur Übergabe.',
              'Wir sind ein schlankes, vielseitiges Team aus Elektrotechnikern, Ingenieuren und kreativen Köpfen. Unser Standort verbindet regionale Nähe mit überregionalem Anspruch.',
            ].map((text, i) => (
              <motion.p
                key={i}
                className="text-sm text-[#0A0A0A]/45 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BLOCK 2: FULL-WIDTH IMAGE ─── */}
      <section className="relative w-full h-[50vh] md:h-[75vh] overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80&auto=format"
          alt="Team bei der Arbeit"
          className="w-full h-full object-cover"
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease }}
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/30" />
      </section>

      {/* ─── BLOCK 3: PHILOSOPHY — large quote on dark ─── */}
      <section className="bg-[#0A0A0A] px-6 md:px-12 lg:px-16 py-28 md:py-44">
        <motion.div
          className="max-w-5xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease }}
        >
          <span className="text-[11px] tracking-[0.3em] uppercase text-white/20 block mb-10">Unsere Philosophie</span>
          <h2 className="text-[1.6rem] md:text-[3rem] lg:text-[4rem] font-light leading-[1.1] tracking-[-0.02em] text-white">
            "Wir glauben, dass die besten <em className="italic text-white/40">Innovationen</em> entstehen, wenn man das Fundament des Handwerks mit der Freiheit kreativen Denkens verbindet."
          </h2>
        </motion.div>
      </section>

      {/* ─── BLOCK 4: VALUES — 4 columns on light ─── */}
      <AboutValues />

      {/* ─── BLOCK 5: STATS — full-width dark strip ─── */}
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
              className="px-6 md:px-10 py-14 md:py-20 border-r border-white/[0.06] last:border-r-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-2">{stat.number}</div>
              <div className="text-xs tracking-[0.15em] uppercase text-white/25">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── BLOCK 6: TEAM ─── */}
      <AboutTeamGrid />

      {/* ─── BLOCK 7: TWO-COLUMN APPROACH — light bg ─── */}
      <section className="bg-[#F0EDE6] text-[#0A0A0A]">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
          {/* Left: Handwerk */}
          <div className="px-8 md:px-14 lg:px-16 py-20 lg:py-28 flex items-center border-b lg:border-b-0 lg:border-r border-[#0A0A0A]/10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="max-w-md"
            >
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#C8A850] block mb-6">Handwerk</span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-[-0.02em] leading-[1.15] text-[#0A0A0A] mb-6">
                Präzision, Erfahrung und handwerkliche <em className="italic text-[#0A0A0A]/40">Exzellenz</em>.
              </h3>
              <p className="text-sm text-[#0A0A0A]/40 leading-relaxed">
                Mit über 15 Jahren Erfahrung in der Elektrotechnik kennen wir die Herausforderungen des Alltags. Jede Installation wird mit der Sorgfalt durchgeführt, die Sie erwarten dürfen — präzise, sauber, zuverlässig.
              </p>
            </motion.div>
          </div>
          {/* Right: Engineering */}
          <div className="px-8 md:px-14 lg:px-16 py-20 lg:py-28 flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="max-w-md"
            >
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#3B5BDB] block mb-6">Engineering</span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-[-0.02em] leading-[1.15] text-[#0A0A0A] mb-6">
                Kreative Lösungen für <em className="italic text-[#0A0A0A]/40">komplexe</em> Herausforderungen.
              </h3>
              <p className="text-sm text-[#0A0A0A]/40 leading-relaxed">
                Unser Engineering-Team verbindet technisches Know-how mit kreativem Denken. Vom ersten Konzept bis zum fertigen Prototypen begleiten wir Ihre Vision mit innovativen Lösungsansätzen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── BLOCK 8: CTA — dark, massive text ─── */}
      <section className="bg-[#0A0A0A] px-6 md:px-12 lg:px-16 py-32 md:py-48">
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