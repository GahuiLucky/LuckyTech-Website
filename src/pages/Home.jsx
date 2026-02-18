// src/pages/Home.jsx
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { Zap, Lightbulb, Wrench, Cpu, ArrowRight, Cable, Sparkles } from 'lucide-react';
import SectionTransition from '../components/home/SectionTransition';
import HeroBackground from '../components/home/HeroBackground';
import HomeContactSection from '../components/home/HomeContactSection';

/**
 * Reusable modal used by tiles
 */
function TileModal({ open, title, children, onClose }) {
  const closeRef = useRef(null);
  const lastActive = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    if (open) {
      lastActive.current = document.activeElement;
      document.addEventListener('keydown', onKey);
      setTimeout(() => closeRef.current && closeRef.current.focus(), 0);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      if (lastActive.current && typeof lastActive.current.focus === 'function') {
        lastActive.current.focus();
      }
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="relative z-10 max-w-3xl w-full bg-[#0A0A0A] border border-white/8 rounded-xl shadow-xl p-6 text-white"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold">{title}</h3>
              <button
                ref={closeRef}
                onClick={onClose}
                aria-label="Schließen"
                className="ml-auto text-white/80 hover:text-white rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#C8A850]/40"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 text-sm leading-relaxed">{children}</div>

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

/**
 * Modern card for Handwerk section (interactive)
 */
function HandwerkCard({ service, index }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.06 + index * 0.04 }}
        className="w-full text-left p-6 bg-white/95 rounded-lg shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all flex items-start gap-4"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <div className="w-12 h-12 rounded-full bg-[#0A0A0A] flex items-center justify-center text-white flex-shrink-0">
          <service.icon className="w-5 h-5" />
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-[#0A0A0A]/90 font-semibold">{service.title}</div>
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

/**
 * Modern engineering tile (grid) — interactive
 */
function EngineeringCard({ service, index }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.04 + index * 0.03 }}
        className="group relative flex flex-col items-center justify-center gap-3 p-5 rounded-xl bg-gradient-to-b from-white/6 to-white/3 hover:from-white/8 hover:to-white/6 border border-white/6 hover:border-white/10 transition transform hover:-translate-y-1 cursor-pointer"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <div className="p-3 rounded-full bg-white/8 group-hover:bg-white/12 transition">
          <service.icon className="w-6 h-6 text-white/90" />
        </div>
        <div className="text-sm font-semibold text-white">{service.title}</div>
        <div className="text-xs text-white/60 text-center">{service.short ?? ''}</div>

        {/* subtle hover overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/10 to-transparent" />
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

/**
 * Main Home page
 */
export default function Home() {
  const [heroReady, setHeroReady] = useState(false);

  const handwerkRef = useRef(null);
  const engineeringRef = useRef(null);

  const { scrollYProgress } = useScroll();
  useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const { scrollYProgress: handwerkProgress } = useScroll({
    target: handwerkRef,
    offset: ['start end', 'end start'],
  });

  const { scrollYProgress: engineeringProgress } = useScroll({
    target: engineeringRef,
    offset: ['start end', 'end start'],
  });

  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 200);
    return () => clearTimeout(t);
  }, []);

  const handwerkServices = [
    {
      icon: Zap,
      title: 'SMARTHOME',
      subtitle: 'Installation & Automatisierung',
      description:
        'Wir planen und installieren SmartHome‑Lösungen: Steuerung, Szenen, Sicherheit und Integration in bestehende Systeme. Beratung, Inbetriebnahme und Wartung inklusive.',
    },
    {
      icon: Cable,
      title: 'WALLBOX',
      subtitle: 'E‑Mobility Solutions',
      description:
        'Wallbox‑Installation für Zuhause und Gewerbe, Lastmanagement, Fördermittelberatung und Anschluss an PV‑Systeme.',
    },
    {
      icon: Wrench,
      title: 'ELEKTROINSTALLATION',
      subtitle: 'Planung & Installation',
      description:
        'Komplette Elektroinstallationen: Neubau, Sanierung, Beleuchtungskonzepte, Schutzmaßnahmen und Prüfungen nach DIN.',
    },
  ];

  const engineeringServices = [
    {
      icon: Cpu,
      title: 'Prototyping',
      short: 'Schnelle Iteration',
      description: 'Rapid Prototyping: Elektronik, Gehäuse, Fertigungstests und schnelle Iterationen.',
    },
    {
      icon: Lightbulb,
      title: 'Development',
      short: 'Hardware & Software',
      description: 'Hardware‑ und Softwareentwicklung: von Konzept bis funktionsfähigem Prototyp.',
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      short: 'Ideen & Konzepte',
      description: 'Ideation, Konzeptvalidierung und Machbarkeitsstudien.',
    },
    {
      icon: Wrench,
      title: 'Consulting',
      short: 'Technische Beratung',
      description: 'Technische Beratung, Systemarchitektur und Fertigungsoptimierung.',
    },
    {
      icon: Cpu,
      title: 'Testing',
      short: 'Verifikation',
      description: 'Testaufbauten, Messungen und Verifikation.',
    },
    {
      icon: Sparkles,
      title: '3D Design',
      short: 'Gehäuse & DFM',
      description: 'Gehäusedesign, DFM‑Optimierung und 3D‑Druck‑Prototypen.',
    },
  ];

  return (
    <div className="bg-[#0A0A0A] overflow-x-hidden relative">
      {/* Background canvas */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <HeroBackground />
      </div>

      <div className="relative z-10">
        {/* HERO */}
        <section className="h-screen flex items-center justify-center relative overflow-hidden" aria-label="Hero section">
          {/* subtle decorative logo behind the title (kept very subtle) */}
          <img
            src={"src/assets/luckytech-logo.png"}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-[900px] opacity-8 mix-blend-screen"
            style={{ zIndex: 0 }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: heroReady ? 1 : 0 }} transition={{ duration: 0.8 }}>
              <motion.div className="text-xs md:text-sm tracking-[0.5em] text-[#C8A850]/70 mb-6 font-mono uppercase" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
                Wo Handwerk auf Innovation trifft
              </motion.div>

              <motion.h1 className="font-bold tracking-tighter leading-[0.85] mb-4" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 1, type: 'spring', stiffness: 40 }}>
                <span className="block text-7xl md:text-9xl lg:text-[11rem] text-transparent" style={{ WebkitTextStroke: '2px rgba(245,242,235,0.9)' }}>
                  LUCKY
                </span>
                <span className="block text-7xl md:text-9xl lg:text-[11rem] text-[#F5F2EB]">TECH</span>
              </motion.h1>

              <motion.div className="mt-8" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.7 }}>
                <span className="text-lg md:text-xl text-[#F5F2EB]/80 font-light tracking-wider">Elektrotechnik + Ingenieurskunst</span>
              </motion.div>
            </motion.div>
          </div>

          {/* scroll indicator */}
          <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10" animate={{ y: [0, 10, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}>
            <div className="w-5 h-9 border border-white/25 rounded-full flex justify-center pt-2">
              <motion.div className="w-0.5 h-2.5 bg-white/50 rounded-full" animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
            </div>
          </motion.div>
        </section>

        {/* Modern logo block + animated divider */}
        <section className="relative z-10 bg-transparent">
          <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <img src={logoImage} alt="LuckyTech Logo" className="w-40 h-auto object-contain" loading="lazy" />
            </div>

            <div className="flex-1">
              <motion.h3 initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-2xl md:text-3xl font-semibold text-[#F5F2EB]">
                Elektrotechnik trifft Ingenieurskunst
              </motion.h3>

              <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06, duration: 0.4 }} className="mt-3 text-sm text-[#F5F2EB]/70 max-w-2xl">
                Wir verbinden präzise Elektroinstallation mit innovativer Produktentwicklung — von der Idee bis zur Serienreife. Unser Team kombiniert praktisches Handwerk mit systematischem Engineering.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.4 }} className="mt-6">
                <Link to={createPageUrl('Kontakt')} className="inline-flex items-center gap-3 bg-[#C8A850] text-black font-semibold px-4 py-2 rounded shadow hover:brightness-95 transition">
                  Kontakt aufnehmen <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* animated divider */}
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, scaleX: 0.98 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.45 }}
              className="h-px bg-gradient-to-r from-transparent via-[#C8A850]/30 to-transparent mt-2"
              style={{ transformOrigin: 'left' }}
            />
          </div>
        </section>

        {/* Transition to Handwerk */}
        <SectionTransition fromColor="#0A0A0A" toColor="rgba(245,242,235,0.95)" variant="wave" />

        {/* HANDWERK */}
        <section ref={handwerkRef} className="relative py-24 md:py-40 px-6 md:px-16 bg-[#F5F2EB]/95 overflow-hidden" aria-labelledby="handwerk-heading">
          <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(10,10,10,0.15) 2px, rgba(10,10,10,0.15) 4px)' }} />

          <motion.div className="max-w-6xl mx-auto relative z-10" style={{ y: useTransform(handwerkProgress, [0, 1], [80, -80]), opacity: useTransform(handwerkProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0.3]) }}>
            <motion.div className="flex items-center gap-4 mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <span className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-mono text-[#0A0A0A]/30">/ HANDWERK</span>
              <div className="h-px flex-1 bg-[#0A0A0A]/10" />
            </motion.div>

            <div className="relative mb-16 md:mb-24">
              <motion.h2 id="handwerk-heading" className="text-5xl md:text-7xl lg:text-[8rem] font-black tracking-[-0.05em] uppercase leading-[0.85] text-[#0A0A0A]" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                ELEKTRO —<br />TECHNIK<span className="text-[#C8A850]">.</span>
              </motion.h2>

              <motion.h2 className="absolute top-0 left-0 text-5xl md:text-7xl lg:text-[8rem] font-black tracking-[-0.05em] uppercase leading-[0.85] pointer-events-none select-none" style={{ color: 'transparent', WebkitTextStroke: '1px rgba(10,10,10,0.08)' }} initial={{ opacity: 0, x: 6, y: -4 }} whileInView={{ opacity: 1, x: 6, y: -4 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
                ELEKTRO —<br />TECHNIK.
              </motion.h2>

              <motion.p className="mt-6 text-base md:text-lg text-[#0A0A0A]/40 max-w-lg font-light" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                Präzision und Erfahrung in der Installation, Wartung und Reparatur
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {handwerkServices.map((service, index) => (
                <HandwerkCard key={service.title} service={service} index={index} />
              ))}
            </div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <Link to={createPageUrl('Handwerk')} className="inline-flex items-center gap-3 text-[#0A0A0A] font-bold text-base md:text-lg hover:gap-5 transition-all group border-b-2 border-[#0A0A0A] pb-1" aria-label="Mehr über Handwerk erfahren">
                Alle Leistungen <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Transition: Handwerk → Engineering */}
        <SectionTransition fromColor="rgba(245,242,235,0.95)" toColor="rgba(10, 10, 10, 0.44)" variant="diagonal" />

        {/* ENGINEERING */}
        <section ref={engineeringRef} className="relative py-24 md:py-40 px-6 md:px-16 bg-[#0A0A0A]/90 overflow-hidden" aria-labelledby="engineering-heading">
          <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(59,91,219,0.2) 2px, rgba(59,91,219,0.2) 4px)' }} />

          <motion.div className="max-w-6xl mx-auto relative z-10" style={{ y: useTransform(engineeringProgress, [0, 1], [80, -80]), opacity: useTransform(engineeringProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0.3]) }}>
            <motion.div className="flex items-center gap-4 mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <span className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-mono text-[#3B5BDB]/40">/ ENGINEERING</span>
              <div className="h-px flex-1 bg-[#3B5BDB]/10" />
            </motion.div>

            <div className="relative mb-16 md:mb-24">
              <motion.h2 id="engineering-heading" className="text-5xl md:text-7xl lg:text-[8rem] font-black tracking-[-0.05em] uppercase leading-[0.85] text-white" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                INGENIEURS —<br />KUNST<span className="text-[#3B5BDB]">.</span>
              </motion.h2>

              <motion.h2 className="absolute top-0 left-0 text-5xl md:text-7xl lg:text-[8rem] font-black tracking-[-0.05em] uppercase leading-[0.85] pointer-events-none select-none" style={{ color: 'transparent', WebkitTextStroke: '1px rgba(59,91,219,0.12)' }} initial={{ opacity: 0, x: 6, y: -4 }} whileInView={{ opacity: 1, x: 6, y: -4 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
                INGENIEURS —<br />KUNST.
              </motion.h2>

              <motion.p className="mt-6 text-base md:text-lg text-white/30 max-w-lg font-light" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                Innovation und kreative Lösungen für komplexe Herausforderungen
              </motion.p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
              {engineeringServices.map((service, index) => (
                <EngineeringCard key={service.title + index} service={service} index={index} />
              ))}
            </div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <Link to={createPageUrl('Engineering')} className="inline-flex items-center gap-3 text-white font-bold text-base md:text-lg hover:gap-5 transition-all group border-b-2 border-white pb-1" aria-label="Mehr über Engineering erfahren">
                Projekte entdecken <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Transition: Engineering → Contact */}
        <SectionTransition fromColor="rgba(10, 10, 10, 0.4)" toColor="#000000" variant="wave" />

        {/* CONTACT */}
        <HomeContactSection />
      </div>
    </div>
  );
}
