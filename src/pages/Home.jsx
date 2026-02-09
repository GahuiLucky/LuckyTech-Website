import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Zap, Lightbulb, Wrench, Cpu, ArrowRight, Cable, Sparkles } from 'lucide-react';
import SectionTransition from '../components/home/SectionTransition';
import HeroBackground from '../components/home/HeroBackground';
import HandwerkListItem from '../components/home/HandwerkListItem';
import EngineeringTile from '../components/home/EngineeringTile';
import HomeContactSection from '../components/home/HomeContactSection';

export default function Home() {
    const [heroReady, setHeroReady] = useState(false);

    const containerRef = useRef(null);
    const handwerkRef = useRef(null);
    const transitionRef = useRef(null);
    const engineeringRef = useRef(null);
  
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const { scrollYProgress: handwerkProgress } = useScroll({
    target: handwerkRef,
    offset: ["start end", "end start"]
  });
  
  const { scrollYProgress: transitionProgress } = useScroll({
    target: transitionRef,
    offset: ["start end", "end start"]
  });
  
  const { scrollYProgress: engineeringProgress } = useScroll({
    target: engineeringRef,
    offset: ["start end", "end start"]
  });

  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="bg-[#0A0A0A] overflow-x-hidden relative">
      {/* Animated electrotechnical canvas — full page background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <HeroBackground />
      </div>
      
      <div className="relative z-10">
      {/* Hero Section — isolated text with animated background */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden" aria-label="Hero section">
        {/* Text layer — isolated, bold, no images behind */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: heroReady ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-xs md:text-sm tracking-[0.5em] text-[#C8A850]/70 mb-6 font-mono uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Wo Handwerk auf Innovation trifft
            </motion.div>

            {/* Main title with text-stroke outline effect like eloyb */}
            <motion.h1
              className="font-bold tracking-tighter leading-[0.85] mb-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1, type: "spring", stiffness: 40 }}
            >
              <span 
                className="block text-7xl md:text-9xl lg:text-[11rem] text-transparent"
                style={{
                  WebkitTextStroke: '2px rgba(245,242,235,0.9)',
                }}
              >
                LUCKY
              </span>
              <span 
                className="block text-7xl md:text-9xl lg:text-[11rem] text-[#F5F2EB]"
              >
                TECH
              </span>
            </motion.h1>

            {/* Subtitle row */}
            <motion.div
              className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mt-8"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              <span className="text-lg md:text-xl text-[#F5F2EB]/80 font-light tracking-wider">Elektrotechnik</span>
              <span className="hidden md:block w-12 h-px bg-[#C8A850]/50" />
              <span className="text-lg md:text-xl text-[#F5F2EB]/80 font-light tracking-wider">Engineering</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-5 h-9 border border-white/25 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-0.5 h-2.5 bg-white/50 rounded-full"
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Transition: Hero → Handwerk */}
      <SectionTransition fromColor="#0A0A0A" toColor="rgba(245,242,235,0.95)" variant="wave" />

      {/* Handwerk Section — eloyb brutalist style, warm color kept */}
      <section 
        ref={handwerkRef}
        className="relative py-24 md:py-40 px-6 md:px-16 bg-[#F5F2EB]/95 overflow-hidden"
        aria-labelledby="handwerk-heading"
      >
        {/* Subtle scanline overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(10,10,10,0.15) 2px, rgba(10,10,10,0.15) 4px)'
        }} />

        <motion.div 
          className="max-w-6xl mx-auto relative z-10"
          style={{ 
            y: useTransform(handwerkProgress, [0, 1], [80, -80]),
            opacity: useTransform(handwerkProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0.3])
          }}
        >
          {/* Section label */}
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-mono text-[#0A0A0A]/30">
              / HANDWERK
            </span>
            <div className="h-px flex-1 bg-[#0A0A0A]/10" />
          </motion.div>

          {/* Brutalist double-text heading */}
          <div className="relative mb-16 md:mb-24">
            <motion.h2
              id="handwerk-heading"
              className="text-5xl md:text-7xl lg:text-[8rem] font-black tracking-[-0.05em] uppercase leading-[0.85] text-[#0A0A0A]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              ELEKTRO—<br/>TECHNIK<span className="text-[#C8A850]">.</span>
            </motion.h2>
            <motion.h2
              className="absolute top-0 left-0 text-5xl md:text-7xl lg:text-[8rem] font-black tracking-[-0.05em] uppercase leading-[0.85] pointer-events-none select-none"
              style={{
                color: 'transparent',
                WebkitTextStroke: '1px rgba(10,10,10,0.08)',
              }}
              initial={{ opacity: 0, x: 6, y: -4 }}
              whileInView={{ opacity: 1, x: 6, y: -4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              ELEKTRO—<br/>TECHNIK.
            </motion.h2>
            <motion.p
              className="mt-6 text-base md:text-lg text-[#0A0A0A]/40 max-w-lg font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Präzision und Erfahrung in der Installation, Wartung und Reparatur
            </motion.p>
          </div>

          {/* Service list — brutalist rows */}
          <div className="space-y-0 mb-16">
            {[
              { icon: Zap, title: 'SMARTHOME', subtitle: 'Installation & Automatisierung' },
              { icon: Cable, title: 'WALLBOX', subtitle: 'E-Mobility Solutions' },
              { icon: Wrench, title: 'ELEKTROINSTALLATION', subtitle: 'Planung & Installation' },
            ].map((service, index) => (
              <HandwerkListItem key={service.title} service={service} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              to={createPageUrl('Handwerk')} 
              className="inline-flex items-center gap-3 text-[#0A0A0A] font-bold text-base md:text-lg hover:gap-5 transition-all group border-b-2 border-[#0A0A0A] pb-1"
              aria-label="Mehr über Handwerk erfahren"
            >
              Alle Leistungen <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Transition: Handwerk → Engineering */}
      <SectionTransition fromColor="rgba(245,242,235,0.95)" toColor="rgba(10,10,10,0.9)" variant="diagonal" />

      {/* Engineering Section - Dark & Tech */}
      <section 
        ref={engineeringRef}
        className="min-h-screen relative py-20 md:py-32 px-6 bg-[#0A0A0A]/90"
        aria-labelledby="engineering-heading"
      >
        <motion.div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            y: useTransform(engineeringProgress, [0, 1], [0, -150])
          }}
        />

        <motion.div 
          className="max-w-7xl mx-auto relative z-10"
          style={{ 
            y: useTransform(engineeringProgress, [0, 1], [150, -150]),
            opacity: useTransform(engineeringProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3])
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
          >
            <div className="mb-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-sm font-bold tracking-[0.4em] text-white/30 mb-4 font-mono"
              >
                / ENGINEERING
              </motion.div>
              <motion.h2 
                id="engineering-heading"
                className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                INGENIEURS—<br/>KUNST
              </motion.h2>
              <motion.p 
                className="text-xl md:text-2xl text-white/50 max-w-2xl font-light font-mono"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Innovation und kreative Lösungen für komplexe Herausforderungen
              </motion.p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
              {[
                { icon: Cpu, title: 'Prototyping', delay: 0.1 },
                { icon: Lightbulb, title: 'Development', delay: 0.15 },
                { icon: Sparkles, title: 'Innovation', delay: 0.2 },
                { icon: Wrench, title: 'Consulting', delay: 0.25 },
                { icon: Cpu, title: 'Testing', delay: 0.3 },
                { icon: Sparkles, title: '3D Design', delay: 0.35 }
              ].map((service, index) => (
                <EngineeringTile key={service.title + index} service={service} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <Link 
                to={createPageUrl('Engineering')} 
                className="inline-flex items-center gap-3 text-white font-bold text-lg hover:gap-5 transition-all group border-b-2 border-white pb-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-[#0A0A0A]"
                aria-label="Mehr über Engineering erfahren"
              >
                Mehr erfahren <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Transition: Engineering → Contact */}
      <SectionTransition fromColor="rgba(10,10,10,0.9)" toColor="#0A0A0A" variant="shards" />

      {/* Contact Section with Map */}
      <HomeContactSection />
      </div>
          </div>
          );
          }