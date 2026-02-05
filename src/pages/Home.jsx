import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { Zap, Lightbulb, Wrench, Cpu, ArrowRight } from 'lucide-react';

export default function Home() {
  const [glitchText, setGlitchText] = useState('TRIFFT');

  useEffect(() => {
    const glitchChars = '█▓▒░TRIFFT01';
    const originalText = 'TRIFFT';
    
    const interval = setInterval(() => {
      if (Math.random() > 0.95) {
        let glitched = '';
        for (let i = 0; i < originalText.length; i++) {
          glitched += Math.random() > 0.7 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : originalText[i];
        }
        setGlitchText(glitched);
        setTimeout(() => setGlitchText(originalText), 100);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0A0A0A]">
      {/* ASCII Background */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none font-mono text-[8px] leading-[8px] text-[#C8A850] overflow-hidden whitespace-pre">
        {Array(50).fill(null).map((_, i) => (
          <div key={i}>
            {Array(200).fill(null).map((_, j) => 
              Math.random() > 0.5 ? '█' : Math.random() > 0.7 ? '▓' : '░'
            ).join('')}
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C8A850] rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3B5BDB] rounded-full blur-[120px]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="font-mono text-xs text-[#C8A850] mb-8 tracking-widest">
              {'>'} LOCATION: 49.4872° N, 8.4683° E // SYSTEM: ONLINE
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-8 relative">
              <span className="block">WO HANDWERK</span>
              <span className="block">AUF INNOVATION</span>
              <span className="block relative inline-block">
                <span className="text-[#C8A850] relative z-10">{glitchText}</span>
                <span className="absolute inset-0 text-[#C8A850] opacity-50 blur-sm animate-pulse">{glitchText}</span>
                <span className="absolute inset-0 text-[#3B5BDB] opacity-30" style={{transform: 'translate(2px, 2px)'}}>{glitchText}</span>
              </span>
            </h1>
            
            <div className="font-mono text-sm text-[#F5F2EB]/40 max-w-3xl mx-auto mb-12">
              [ELEKTROTECHNIK.exe] && [INGENIEURSKUNST.sys] → FUSION_PROTOCOL.init()
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to={createPageUrl('Handwerk')}
                className="px-8 py-4 bg-[#C8A850] text-[#0A0A0A] font-bold uppercase tracking-wider hover:bg-[#D4B660] transition-all inline-flex items-center justify-center gap-2 group"
              >
                Handwerk entdecken
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to={createPageUrl('Engineering')}
                className="px-8 py-4 bg-[#3B5BDB] text-white font-bold uppercase tracking-wider hover:bg-[#4C6BEB] transition-all inline-flex items-center justify-center gap-2 group"
              >
                Engineering entdecken
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-[#F5F2EB]/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-[#F5F2EB]/40 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              UNSERE WELTEN
            </h2>
            <p className="text-xl text-[#F5F2EB]/60 max-w-2xl">
              Von der präzisen Handwerkskunst bis zur visionären Produktentwicklung
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Handwerk Card */}
            <Link to={createPageUrl('Handwerk')}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative h-[600px] bg-gradient-to-br from-[#C8A850]/10 to-transparent border border-[#C8A850]/20 p-12 hover:border-[#C8A850] transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#C8A850]/0 to-[#C8A850]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <Zap className="w-16 h-16 text-[#C8A850] mb-6" />
                    <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                      HANDWERK
                    </h3>
                    <p className="text-lg text-[#F5F2EB]/70 mb-8">
                      Präzision und Erfahrung in der Elektrotechnik
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-[#F5F2EB]/80">
                      <div className="w-2 h-2 bg-[#C8A850]" />
                      <span>Smarthome Installation</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#F5F2EB]/80">
                      <div className="w-2 h-2 bg-[#C8A850]" />
                      <span>Wallbox Installation</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#F5F2EB]/80">
                      <div className="w-2 h-2 bg-[#C8A850]" />
                      <span>Kabelverlegung & Installation</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#F5F2EB]/80">
                      <div className="w-2 h-2 bg-[#C8A850]" />
                      <span>Reparaturen</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[#C8A850] font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                    Mehr erfahren <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Engineering Card */}
            <Link to={createPageUrl('Engineering')}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative h-[600px] bg-gradient-to-br from-[#3B5BDB]/10 to-transparent border border-[#3B5BDB]/20 p-12 hover:border-[#3B5BDB] transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#3B5BDB]/0 to-[#3B5BDB]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <Cpu className="w-16 h-16 text-[#3B5BDB] mb-6" />
                    <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                      ENGINEERING
                    </h3>
                    <p className="text-lg text-[#F5F2EB]/70 mb-8">
                      Innovation und kreative Lösungen für die Zukunft
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-[#F5F2EB]/80">
                      <div className="w-2 h-2 bg-[#3B5BDB]" />
                      <span>Prototypenbau</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#F5F2EB]/80">
                      <div className="w-2 h-2 bg-[#3B5BDB]" />
                      <span>Produktentwicklung</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#F5F2EB]/80">
                      <div className="w-2 h-2 bg-[#3B5BDB]" />
                      <span>Creative Thinking</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#F5F2EB]/80">
                      <div className="w-2 h-2 bg-[#3B5BDB]" />
                      <span>Beratung & Konzeption</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[#3B5BDB] font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                    Mehr erfahren <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 bg-[#F5F2EB]/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
              EINE EINZIGARTIGE<br />SYMBIOSE
            </h2>
            <p className="text-xl md:text-2xl text-[#F5F2EB]/70 leading-relaxed">
              Bei LuckyTech verbinden wir das Fundament solider Elektrotechnik mit der 
              Freiheit innovativen Denkens. Unser Team vereint jahrzehntelange Handwerkserfahrung 
              mit modernster Ingenieurskunst — für Lösungen, die funktionieren und begeistern.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#C8A850]/20 to-[#3B5BDB]/20 border border-[#F5F2EB]/10 p-12 md:p-20 text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              BEREIT FÜR IHR PROJEKT?
            </h2>
            <p className="text-xl text-[#F5F2EB]/70 mb-12 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam die perfekte Lösung für Ihre Anforderungen entwickeln
            </p>
            <Link
              to={createPageUrl('Kontakt')}
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#F5F2EB] text-[#0A0A0A] font-bold uppercase tracking-wider hover:bg-white transition-all group"
            >
              Jetzt Kontakt aufnehmen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}