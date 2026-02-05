import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Lightbulb, Wrench, Cpu, ArrowRight, Cable, Sparkles } from 'lucide-react';

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  
  const engineeringY = useTransform(scrollYProgress, [0.3, 0.6], [300, 0]);
  const engineeringOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  const heroImages = [
    'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920',
    'https://images.unsplash.com/photo-1581092918484-8313e1f7e8c6?w=1920',
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920',
    'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1920',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920',
    'https://images.unsplash.com/photo-1558002038-1055907df827?w=1920'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0A0A0A]">
      {/* Hero Section - Single Changing Image */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        {/* Single Background Image with Crossfade */}
        {heroImages.map((img, index) => (
          <motion.div
            key={img}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </motion.div>
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0A0A0A]/60" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-bold tracking-tighter leading-[0.85] mb-12 text-white">
              LUCKYTECH
            </h1>
            
            <div className="text-2xl md:text-4xl text-white/90 font-light font-mono">
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

      {/* Spacer for layering effect */}
      <div className="h-screen" />

      {/* Handwerk Section - Base Layer */}
      <section className="min-h-screen relative py-32 px-6 bg-[#F5F2EB]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-16">
              <div className="text-sm font-bold tracking-[0.3em] text-[#0A0A0A]/40 mb-4">
                01 / HANDWERK
              </div>
              <h2 className="text-7xl md:text-9xl font-bold tracking-tighter text-[#0A0A0A] mb-8">
                ELEKTRO<br/>TECHNIK
              </h2>
              <p className="text-2xl text-[#0A0A0A]/60 max-w-2xl mb-12">
                Präzision und Erfahrung in der Installation, Wartung und Reparatur
              </p>
            </div>

            {/* Image Grid with Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-[500px] overflow-hidden group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200" 
                  alt="Smarthome" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <Zap className="w-12 h-12 mb-4" />
                  <h3 className="text-4xl font-bold mb-2">Smarthome</h3>
                  <p className="text-white/80">Installation & Automatisierung</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-[500px] overflow-hidden group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200" 
                  alt="Wallbox" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <Cable className="w-12 h-12 mb-4" />
                  <h3 className="text-4xl font-bold mb-2">Wallbox</h3>
                  <p className="text-white/80">E-Mobility Solutions</p>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-[400px] overflow-hidden group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1581092918484-8313e1f7e8c6?w=1200" 
                  alt="Kabelverlegung" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <Lightbulb className="w-12 h-12 mb-4" />
                  <h3 className="text-3xl font-bold mb-2">Kabelverlegung</h3>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative h-[400px] overflow-hidden group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200" 
                  alt="Reparaturen" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <Wrench className="w-12 h-12 mb-4" />
                  <h3 className="text-3xl font-bold mb-2">Reparaturen</h3>
                </div>
              </motion.div>
            </div>

            <Link to={createPageUrl('Handwerk')} className="inline-flex items-center gap-3 text-[#0A0A0A] font-bold text-xl mt-12 hover:gap-5 transition-all group">
              Mehr erfahren <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Engineering Section - Overlays on Top */}
      <motion.section 
        style={{ y: engineeringY, opacity: engineeringOpacity }}
        className="min-h-screen sticky top-0 py-32 px-6 bg-[#0A0A0A] z-10"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-16">
              <div className="text-sm font-bold tracking-[0.3em] text-white/40 mb-4 font-mono">
                02 / ENGINEERING
              </div>
              <h2 className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-8">
                INGENIEURS<br/>KUNST
              </h2>
              <p className="text-2xl text-white/60 max-w-2xl mb-12 font-mono">
                Innovation und kreative Lösungen für komplexe Herausforderungen
              </p>
            </div>

            {/* Building Tiles with Stagger Effect */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="relative aspect-square overflow-hidden group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1581092160366-4ee93eb8116b?w=800" 
                  alt="Prototyping" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#00EAFF]/20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <Cpu className="w-10 h-10 mb-3" />
                  <div className="text-2xl font-bold">Prototypenbau</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative aspect-square overflow-hidden group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800" 
                  alt="Development" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#CDFF00]/20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <Lightbulb className="w-10 h-10 mb-3" />
                  <div className="text-2xl font-bold">Entwicklung</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative aspect-square overflow-hidden group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1597587026534-8f61ed6c5ed3?w=800" 
                  alt="Innovation" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#3B5BDB]/20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <Sparkles className="w-10 h-10 mb-3" />
                  <div className="text-2xl font-bold">Innovation</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative aspect-square bg-[#00EAFF]/10 border border-[#00EAFF]/30 p-8 flex items-end group hover:bg-[#00EAFF]/20 transition-all"
              >
                <div>
                  <Cpu className="w-10 h-10 mb-3 text-[#00EAFF]" />
                  <div className="text-2xl font-bold text-white">Beratung</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative aspect-square bg-[#CDFF00]/10 border border-[#CDFF00]/30 p-8 flex items-end group hover:bg-[#CDFF00]/20 transition-all"
              >
                <div>
                  <Sparkles className="w-10 h-10 mb-3 text-[#CDFF00]" />
                  <div className="text-2xl font-bold text-white">Testing</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative aspect-square bg-white/5 border border-white/20 p-8 flex items-end group hover:bg-white/10 transition-all"
              >
                <div>
                  <Cpu className="w-10 h-10 mb-3 text-white" />
                  <div className="text-2xl font-bold text-white">3D Design</div>
                </div>
              </motion.div>
            </div>

            <Link to={createPageUrl('Engineering')} className="inline-flex items-center gap-3 text-white font-bold text-xl mt-12 hover:gap-5 transition-all group">
              Mehr erfahren <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

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