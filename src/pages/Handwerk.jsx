import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ServiceShowcase from '../components/handwerk/ServiceShowcase';
import ProcessTimeline from '../components/handwerk/ProcessTimeline';
import StatsBar from '../components/handwerk/StatsBar';

const services = [
  {
    title: 'Smarthome',
    description: 'Intelligente Gebäudeautomation — von Lichtsteuerung bis Sicherheitssysteme.',
    image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&q=80',
    features: ['Lichtsteuerung', 'Heizungsautomation', 'Sicherheitssysteme', 'Sprachassistenten']
  },
  {
    title: 'Wallbox',
    description: 'Professionelle Ladeinfrastruktur für Elektromobilität, fachgerecht installiert.',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
    features: ['Standortanalyse', 'KfW-Förderung', 'Lastmanagement', 'Wartung & Service']
  },
  {
    title: 'Elektroinstallation',
    description: 'Komplette Elektrik für Neubau, Sanierung und Gewerbe auf höchstem Niveau.',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80',
    features: ['Netzwerkleitungen', 'Starkstrom', 'Unterputz & Aufputz', 'Baubegleitend']
  },
  {
    title: 'Reparatur & Notdienst',
    description: 'Schnelle Hilfe bei elektrischen Störungen — rund um die Uhr erreichbar.',
    image: 'https://images.unsplash.com/photo-1581092918484-8313e1f7e8c6?w=800&q=80',
    features: ['Fehlerdiagnose', 'Kurzfristige Termine', 'Transparente Preise', '24/7 Notdienst']
  }
];

export default function Handwerk() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(heroProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);

  return (
    <div className="bg-[#F5F2EB] text-[#0A0A0A]">

      {/* Hero — Full-bleed image with editorial type */}
      <section ref={heroRef} className="h-screen relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{ y: heroY }}
        >
          <img
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&q=80"
            alt="Elektrotechnik Handwerk"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0A0A0A]/50" />
        </motion.div>

        <motion.div 
          className="relative z-10 h-full flex flex-col justify-end px-6 md:px-16 pb-16 md:pb-24"
          style={{ opacity: heroOpacity }}
        >
          <div className="max-w-7xl w-full">
            <motion.div
              className="text-sm tracking-[0.3em] text-[#F5F2EB]/60 mb-6 uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              LuckyTech — Elektrohandwerk
            </motion.div>

            <motion.h1
              className="text-5xl md:text-8xl lg:text-[9rem] font-bold text-[#F5F2EB] tracking-tighter leading-[0.9]"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 1, type: "spring", stiffness: 35 }}
            >
              Präzision<br/>
              trifft<br/>
              <span className="text-[#C8A850]">Handwerk</span>
            </motion.h1>

            <motion.div
              className="flex gap-8 mt-10 items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              <Link
                to={createPageUrl('Kontakt')}
                className="inline-flex items-center gap-3 text-[#F5F2EB] font-medium border-b border-[#F5F2EB]/40 pb-1 hover:border-[#C8A850] hover:text-[#C8A850] transition-all"
              >
                Projekt anfragen <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-[#F5F2EB]/40 text-sm hidden md:block">
                Elektroinstallation · Smarthome · E-Mobilität
              </span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Intro Text — editorial, like UNStudio */}
      <section className="py-24 md:py-40 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-[#0A0A0A]">
                Wir sehen Elektrotechnik nicht als Dienstleistung — sondern als Handwerkskunst.
              </h2>
            </motion.div>

            <motion.div
              className="lg:col-span-5 lg:pt-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg text-[#0A0A0A]/60 leading-relaxed mb-6">
                Jede Installation erzählt eine Geschichte von Sorgfalt und Expertise.
                Von der ersten Beratung bis zur letzten Schraube — wir liefern Ergebnisse,
                die über Jahrzehnte bestehen.
              </p>
              <p className="text-lg text-[#0A0A0A]/60 leading-relaxed">
                Als Meisterbetrieb verbinden wir traditionelle Handwerkskunst mit
                modernster Technologie. Das Ergebnis: Installationen, die nicht nur
                funktionieren, sondern begeistern.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-16 pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto border-t border-b border-[#0A0A0A]/10 py-16">
          <StatsBar />
        </div>
      </section>

      {/* Services — Extravagant mixed layouts */}
      <section className="pb-24 md:pb-40">
        <div className="max-w-[1600px] mx-auto px-6 md:px-16">
          <motion.div
            className="mb-20 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.4em] text-[#C8A850] uppercase">Was wir tun</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mt-6">
              Unsere Leistungen
            </h2>
            <div className="w-24 h-px bg-[#C8A850]/40 mx-auto mt-8" />
          </motion.div>
        </div>

        <div className="max-w-[1600px] mx-auto">
          <ServiceShowcase services={services} />
        </div>
      </section>

      {/* Full-bleed Image Break */}
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80"
          alt="Werkstatt Detail"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/30" />
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-center px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold text-[#F5F2EB] tracking-tighter leading-[0.9]">
            Qualität,<br/>die man sieht
          </h2>
        </motion.div>
      </section>

      {/* Process — Dark section */}
      <section className="bg-[#0A0A0A] py-24 md:py-40 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm tracking-[0.3em] text-[#F5F2EB]/30 uppercase">Prozess</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#F5F2EB] mt-4">
              So arbeiten wir
            </h2>
            <p className="text-xl text-[#F5F2EB]/40 mt-6 max-w-2xl">
              Transparenz von der ersten Beratung bis zur Übergabe.
              Jeder Schritt klar kommuniziert, jedes Detail durchdacht.
            </p>
          </motion.div>

          <ProcessTimeline />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-40 px-6 md:px-16 bg-[#F5F2EB]">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm tracking-[0.3em] text-[#0A0A0A]/30 uppercase mb-6 block">
              Bereit?
            </span>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8">
              Lassen Sie uns<br/>Ihr Projekt starten
            </h2>
            <p className="text-xl text-[#0A0A0A]/50 max-w-xl mx-auto mb-12 leading-relaxed">
              Egal ob Smarthome, Wallbox oder komplette Elektroinstallation —
              wir beraten Sie gerne persönlich.
            </p>
            <Link
              to={createPageUrl('Kontakt')}
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#0A0A0A] text-[#F5F2EB] font-bold hover:bg-[#C8A850] hover:text-[#0A0A0A] transition-all duration-500 group"
            >
              Kontakt aufnehmen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}