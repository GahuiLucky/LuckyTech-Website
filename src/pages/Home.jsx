import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { Zap, Lightbulb, Wrench, Cpu, ArrowRight, Cable, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-[#0A0A0A]">
      {/* Hero Section - Image Collage like UNStudio */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Image Grid Collage */}
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="overflow-hidden"
          >
            <img src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800" alt="" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="overflow-hidden"
          >
            <img src="https://images.unsplash.com/photo-1581092918484-8313e1f7e8c6?w=800" alt="" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="overflow-hidden"
          >
            <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800" alt="" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="overflow-hidden"
          >
            <img src="https://images.unsplash.com/photo-1597587026534-8f61ed6c5ed3?w=800" alt="" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="overflow-hidden"
          >
            <img src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800" alt="" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="overflow-hidden"
          >
            <img src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800" alt="" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="overflow-hidden"
          >
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800" alt="" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="overflow-hidden"
          >
            <img src="https://images.unsplash.com/photo-1558002038-1055907df827?w=800" alt="" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="overflow-hidden"
          >
            <img src="https://images.unsplash.com/photo-1581092160366-4ee93eb8116b?w=800" alt="" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0A0A0A]/70" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-bold tracking-tighter leading-[0.85] mb-12 text-white">
              LUCKYTECH
            </h1>
            
            <div className="text-2xl md:text-4xl text-white/80 font-light mb-20 font-mono">
              = Elektrotechnik + Ingenieurskunst
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/40 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Handwerk Section - Appears First on Scroll */}
      <section className="min-h-screen flex items-center justify-center py-32 px-6 bg-[#F5F2EB]">
        <div className="max-w-7xl mx-auto">
          <Link to={createPageUrl('Handwerk')} className="block">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="mb-12">
                <div className="text-sm font-bold tracking-[0.3em] text-[#0A0A0A]/40 mb-4">
                  01 / HANDWERK
                </div>
                <h2 className="text-7xl md:text-9xl font-bold tracking-tighter text-[#0A0A0A] mb-6">
                  ELEKTRO<br/>TECHNIK
                </h2>
                <p className="text-2xl text-[#0A0A0A]/60 max-w-2xl">
                  Präzision und Erfahrung in der Installation, Wartung und Reparatur
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="aspect-square bg-[#C8A850] p-6 flex items-end group-hover:scale-105 transition-transform"
                >
                  <div>
                    <Zap className="w-8 h-8 mb-3 text-[#0A0A0A]" />
                    <div className="font-bold text-lg text-[#0A0A0A]">Smarthome</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="aspect-square bg-white p-6 flex items-end group-hover:scale-105 transition-transform"
                >
                  <div>
                    <Cable className="w-8 h-8 mb-3 text-[#0A0A0A]" />
                    <div className="font-bold text-lg text-[#0A0A0A]">Wallbox</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="aspect-square bg-white p-6 flex items-end group-hover:scale-105 transition-transform"
                >
                  <div>
                    <Lightbulb className="w-8 h-8 mb-3 text-[#0A0A0A]" />
                    <div className="font-bold text-lg text-[#0A0A0A]">Kabel<br/>verlegung</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="aspect-square bg-[#C8A850] p-6 flex items-end group-hover:scale-105 transition-transform"
                >
                  <div>
                    <Wrench className="w-8 h-8 mb-3 text-[#0A0A0A]" />
                    <div className="font-bold text-lg text-[#0A0A0A]">Reparaturen</div>
                  </div>
                </motion.div>
              </div>

              <div className="mt-12 flex items-center gap-3 text-[#0A0A0A] font-bold text-lg group-hover:gap-5 transition-all">
                Mehr erfahren <ArrowRight className="w-6 h-6" />
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Engineering Section - Builds on Top */}
      <section className="min-h-screen flex items-center justify-center py-32 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <Link to={createPageUrl('Engineering')} className="block">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="mb-12">
                <div className="text-sm font-bold tracking-[0.3em] text-white/40 mb-4 font-mono">
                  02 / ENGINEERING
                </div>
                <h2 className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-6">
                  INGENIEURS<br/>KUNST
                </h2>
                <p className="text-2xl text-white/60 max-w-2xl font-mono">
                  Innovation und kreative Lösungen für komplexe Herausforderungen
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="aspect-square bg-[#00EAFF] p-6 flex items-end group-hover:scale-105 transition-transform"
                >
                  <div>
                    <Cpu className="w-8 h-8 mb-3 text-[#0A0A0A]" />
                    <div className="font-bold text-lg text-[#0A0A0A]">Prototypen<br/>bau</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="aspect-square bg-white/10 border border-white/20 p-6 flex items-end group-hover:scale-105 transition-transform"
                >
                  <div>
                    <Lightbulb className="w-8 h-8 mb-3 text-white" />
                    <div className="font-bold text-lg text-white">Produkt<br/>entwicklung</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="aspect-square bg-white/10 border border-white/20 p-6 flex items-end group-hover:scale-105 transition-transform"
                >
                  <div>
                    <Sparkles className="w-8 h-8 mb-3 text-white" />
                    <div className="font-bold text-lg text-white">Creative<br/>Thinking</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="aspect-square bg-[#CDFF00] p-6 flex items-end group-hover:scale-105 transition-transform"
                >
                  <div>
                    <Cpu className="w-8 h-8 mb-3 text-[#0A0A0A]" />
                    <div className="font-bold text-lg text-[#0A0A0A]">Beratung</div>
                  </div>
                </motion.div>
              </div>

              <div className="mt-12 flex items-center gap-3 text-white font-bold text-lg group-hover:gap-5 transition-all">
                Mehr erfahren <ArrowRight className="w-6 h-6" />
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 bg-[#F5F2EB]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12 text-[#0A0A0A]">
              EINE EINZIGARTIGE<br />SYMBIOSE
            </h2>
            <p className="text-xl md:text-2xl text-[#0A0A0A]/60 leading-relaxed max-w-3xl mx-auto">
              Bei LuckyTech verbinden wir das Fundament solider Elektrotechnik mit der 
              Freiheit innovativen Denkens. Unser Team vereint jahrzehntelange Handwerkserfahrung 
              mit modernster Ingenieurskunst — für Lösungen, die funktionieren und begeistern.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-[#0A0A0A]">
              BEREIT FÜR<br />IHR PROJEKT?
            </h2>
            <p className="text-xl text-[#0A0A0A]/50 mb-12 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam die perfekte Lösung entwickeln
            </p>
            <Link
              to={createPageUrl('Kontakt')}
              className="inline-flex items-center gap-3 px-12 py-6 bg-[#0A0A0A] text-[#F5F2EB] font-bold hover:bg-[#CDFF00] hover:text-[#0A0A0A] transition-all group text-lg"
            >
              Jetzt Kontakt aufnehmen
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}