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
    <div className="bg-[#F5F2EB]">
      {/* Hero Section - Light and Fresh */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#CDFF00] rounded-full blur-[100px] opacity-30" />
          <div className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] bg-[#3B5BDB] rounded-full blur-[120px] opacity-20" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-12">
              <div className="text-sm font-bold tracking-[0.3em] text-[#0A0A0A]/40 mb-8">
                LUCKYTECH — EST. 2010
              </div>
            </div>
            
            <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-bold tracking-tighter leading-[0.9] mb-12 text-[#0A0A0A]">
              <span className="block">WO</span>
              <span className="block">HANDWERK</span>
              <span className="block relative inline-block">
                <span className="relative z-10">{glitchText}</span>
                <span className="absolute inset-0 text-[#CDFF00] opacity-50 blur-sm">{glitchText}</span>
              </span>
              <span className="block">INNOVATION</span>
            </h1>
            
            <div className="text-xl text-[#0A0A0A]/50 max-w-2xl mx-auto mb-16">
              Elektrotechnik & Ingenieurskunst — Eine Symbiose
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to={createPageUrl('Handwerk')}
                className="group px-10 py-5 bg-[#0A0A0A] text-[#F5F2EB] font-bold hover:bg-[#C8A850] hover:text-[#0A0A0A] transition-all inline-flex items-center justify-center gap-3"
              >
                <span>Handwerk</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to={createPageUrl('Engineering')}
                className="group px-10 py-5 border-2 border-[#0A0A0A] text-[#0A0A0A] font-bold hover:bg-[#0A0A0A] hover:text-[#F5F2EB] transition-all inline-flex items-center justify-center gap-3"
              >
                <span>Engineering</span>
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
          <div className="w-6 h-10 border-2 border-[#0A0A0A]/20 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-[#0A0A0A]/20 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-[#0A0A0A]">
              ZWEI WELTEN
            </h2>
            <p className="text-xl text-[#0A0A0A]/50 max-w-2xl">
              Handwerk trifft auf digitale Innovation
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
                className="group relative h-[600px] bg-[#C8A850] p-12 hover:scale-[1.02] transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#0A0A0A] opacity-0 group-hover:opacity-5 transition-opacity" />
                
                <div className="relative z-10 h-full flex flex-col justify-between text-[#0A0A0A]">
                  <div>
                    <Zap className="w-16 h-16 mb-6" />
                    <h3 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                      HANDWERK
                    </h3>
                    <p className="text-xl mb-8 leading-relaxed">
                      Präzision und Erfahrung in der Elektrotechnik
                    </p>
                  </div>
                  
                  <div className="space-y-3 text-lg">
                    <div>→ Smarthome Installation</div>
                    <div>→ Wallbox Installation</div>
                    <div>→ Kabelverlegung</div>
                    <div>→ Reparaturen</div>
                  </div>

                  <div className="flex items-center gap-2 font-bold text-lg group-hover:gap-4 transition-all">
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
                className="group relative h-[600px] bg-[#0A0A0A] p-12 hover:scale-[1.02] transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#CDFF00] opacity-0 group-hover:opacity-5 transition-opacity" />
                
                <div className="relative z-10 h-full flex flex-col justify-between text-[#F5F2EB]">
                  <div>
                    <Cpu className="w-16 h-16 mb-6" />
                    <h3 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                      ENGINEERING
                    </h3>
                    <p className="text-xl text-[#F5F2EB]/70 mb-8 leading-relaxed">
                      Innovation und kreative Lösungen für die Zukunft
                    </p>
                  </div>
                  
                  <div className="space-y-3 text-lg text-[#F5F2EB]/80 font-mono">
                    <div>{'>'} Prototypenbau</div>
                    <div>{'>'} Produktentwicklung</div>
                    <div>{'>'} Creative Thinking</div>
                    <div>{'>'} Beratung</div>
                  </div>

                  <div className="flex items-center gap-2 font-bold text-lg group-hover:gap-4 transition-all">
                    Mehr erfahren <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
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