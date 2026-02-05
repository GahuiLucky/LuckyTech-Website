import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Lightbulb, Wrench, Cpu, ArrowRight, Cable, Sparkles } from 'lucide-react';

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handwerkRef = useRef(null);
  const engineeringRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  const { scrollYProgress: handwerkProgress } = useScroll({
    target: handwerkRef,
    offset: ["start end", "end start"]
  });
  
  const { scrollYProgress: engineeringProgress } = useScroll({
    target: engineeringRef,
    offset: ["start end", "end start"]
  });
  
  const handwerkY = useTransform(handwerkProgress, [0, 1], [100, -100]);
  const engineeringY = useTransform(engineeringProgress, [0, 1], [150, -150]);

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
    <div className="bg-[#0A0A0A] overflow-x-hidden">
      {/* Hero Section - Single Changing Image */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        {/* Single Background Image with Crossfade + Zoom */}
        {heroImages.map((img, index) => (
          <motion.div
            key={img}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <motion.img 
              src={img} 
              alt="" 
              className="w-full h-full object-cover"
              animate={{ scale: index === currentImageIndex ? [1, 1.1] : 1 }}
              transition={{ duration: 8, ease: "easeOut" }}
            />
          </motion.div>
        ))}

        {/* Dark Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/60 to-[#0A0A0A]/80" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.h1 
              className="text-7xl md:text-9xl lg:text-[11rem] font-bold tracking-tighter leading-[0.85] mb-12 text-white"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(200,168,80,0.3)",
                  "0 0 40px rgba(59,91,219,0.3)",
                  "0 0 20px rgba(200,168,80,0.3)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              LUCKYTECH
            </motion.h1>
            
            <motion.div 
              className="text-2xl md:text-4xl text-white/90 font-light font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              = Elektrotechnik + Ingenieurskunst
            </motion.div>
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

      {/* Handwerk Section - Warm & Clean Design */}
      <section 
        ref={handwerkRef}
        className="min-h-screen relative py-20 md:py-32 px-6 bg-[#F5F2EB] overflow-hidden"
      >
        <motion.div 
          className="max-w-7xl mx-auto"
          style={{ y: handwerkY }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
          >
            <motion.div 
              className="mb-16 md:mb-24"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, type: "spring", stiffness: 50 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-sm font-bold tracking-[0.3em] text-[#0A0A0A]/40 mb-4"
              >
                01 / HANDWERK
              </motion.div>
              <motion.h2 
                className="text-7xl md:text-9xl font-bold tracking-tighter text-[#0A0A0A] mb-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                ELEKTRO<br/>TECHNIK
              </motion.h2>
              <motion.p 
                className="text-2xl text-[#0A0A0A]/60 max-w-2xl mb-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Präzision und Erfahrung in der Installation, Wartung und Reparatur
              </motion.p>
            </motion.div>

            {/* Large Featured Image with Parallax */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2 }}
              className="relative h-[60vh] md:h-[70vh] overflow-hidden mb-8"
            >
              <motion.div
                style={{ y: useTransform(handwerkProgress, [0, 1], [0, -80]) }}
                className="w-full h-full"
              >
                <img 
                  src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1600" 
                  alt="Handwerk" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#F5F2EB] via-transparent to-transparent" />
            </motion.div>

            {/* Services Grid with Stagger */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Zap, title: 'Smarthome', delay: 0.1, img: 'photo-1558002038-1055907df827' },
                { icon: Cable, title: 'Wallbox', delay: 0.2, img: 'photo-1593941707882-a5bba14938c7' },
                { icon: Lightbulb, title: 'Kabel', delay: 0.3, img: 'photo-1581092918484-8313e1f7e8c6' },
                { icon: Wrench, title: 'Reparatur', delay: 0.4, img: 'photo-1581092160562-40aa08e78837' }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 60, rotate: index % 2 === 0 ? -5 : 5 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: service.delay, type: "spring", stiffness: 80 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="relative aspect-square overflow-hidden group cursor-pointer"
                >
                  <img 
                    src={`https://images.unsplash.com/${service.img}?w=600`}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <service.icon className="w-8 h-8 mb-2" />
                    <div className="text-lg font-bold">{service.title}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-center"
            >
              <Link to={createPageUrl('Handwerk')} className="inline-flex items-center gap-3 text-[#0A0A0A] font-bold text-xl hover:gap-5 transition-all group">
                Mehr erfahren <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Engineering Section - Dark Tech Aesthetic */}
      <section 
        ref={engineeringRef}
        className="min-h-screen relative py-20 md:py-32 px-6 bg-[#0A0A0A] overflow-hidden"
      >
        {/* Animated Grid Background */}
        <motion.div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#00EAFF 1px, transparent 1px), linear-gradient(90deg, #00EAFF 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            y: useTransform(engineeringProgress, [0, 1], [0, -100])
          }}
        />
        
        {/* Neon Blobs with Parallax */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#00EAFF] rounded-full blur-[150px] opacity-20"
          style={{ y: useTransform(engineeringProgress, [0, 1], [0, 150]) }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-[#CDFF00] rounded-full blur-[180px] opacity-15"
          style={{ y: useTransform(engineeringProgress, [0, 1], [0, -100]) }}
        />

        <motion.div 
          className="max-w-7xl mx-auto relative z-10"
          style={{ y: engineeringY }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
          >
            <motion.div 
              className="mb-16 md:mb-24"
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2, type: "spring", stiffness: 50 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-sm font-bold tracking-[0.3em] text-white/40 mb-4 font-mono"
              >
                02 / ENGINEERING
              </motion.div>
              <motion.h2 
                className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                INGENIEURS<br/>KUNST
              </motion.h2>
              <motion.p 
                className="text-2xl text-white/60 max-w-2xl mb-12 font-mono"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Innovation und kreative Lösungen für komplexe Herausforderungen
              </motion.p>
            </motion.div>

            {/* Large Featured Image Row with Opposing Parallax */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, delay: 0.1 }}
                className="relative h-[400px] md:h-[500px] overflow-hidden"
              >
                <motion.div
                  style={{ y: useTransform(engineeringProgress, [0, 1], [0, -60]) }}
                  className="w-full h-full"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1581092160366-4ee93eb8116b?w=1200" 
                    alt="Engineering" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-[#00EAFF]/20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="relative h-[400px] md:h-[500px] overflow-hidden"
              >
                <motion.div
                  style={{ y: useTransform(engineeringProgress, [0, 1], [0, 60]) }}
                  className="w-full h-full"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200" 
                    alt="Innovation" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-[#CDFF00]/20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
              </motion.div>
            </div>

            {/* Building Tiles Grid with Explosive Stagger */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-12">
              {[
                { icon: Cpu, title: 'Prototyping', color: '#00EAFF', delay: 0.1, rotate: -15 },
                { icon: Lightbulb, title: 'Development', color: '#CDFF00', delay: 0.15, rotate: 15 },
                { icon: Sparkles, title: 'Innovation', color: '#3B5BDB', delay: 0.2, rotate: -10 },
                { icon: Cpu, title: 'Consulting', color: '#00EAFF', delay: 0.25, rotate: 10 },
                { icon: Sparkles, title: 'Testing', color: '#CDFF00', delay: 0.3, rotate: -12 },
                { icon: Wrench, title: '3D Design', color: '#FFFFFF', delay: 0.35, rotate: 12 }
              ].map((service, index) => (
                <motion.div
                  key={service.title + index}
                  initial={{ 
                    opacity: 0, 
                    scale: 0, 
                    y: 150,
                    rotate: service.rotate 
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1, 
                    y: 0,
                    rotate: 0 
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: service.delay, 
                    type: "spring", 
                    stiffness: 120,
                    damping: 15 
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: index % 2 === 0 ? 5 : -5,
                    y: -10
                  }}
                  className="relative aspect-square bg-white/5 border-2 p-6 flex flex-col items-start justify-end transition-all cursor-pointer"
                  style={{ borderColor: `${service.color}40` }}
                >
                  <service.icon className="w-8 md:w-10 h-8 md:h-10 mb-2" style={{ color: service.color }} />
                  <div className="text-base md:text-lg font-bold text-white">{service.title}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-center"
            >
              <Link to={createPageUrl('Engineering')} className="inline-flex items-center gap-3 text-white font-bold text-xl hover:gap-5 transition-all group">
                Mehr erfahren <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Philosophy Section with Parallax */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-[#0A0A0A] via-[#1A1A2E] to-[#0A0A0A] relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, #C8A850 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            y: useTransform(scrollYProgress, [0.5, 1], [0, -200])
          }}
        />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-bold tracking-tighter mb-12 text-white"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              EINE EINZIGARTIGE<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A850] to-[#00EAFF]">
                SYMBIOSE
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Bei LuckyTech verbinden wir das Fundament solider Elektrotechnik mit der 
              Freiheit innovativen Denkens. Unser Team vereint jahrzehntelange Handwerkserfahrung 
              mit modernster Ingenieurskunst — für Lösungen, die funktionieren und begeistern.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Dynamic Elements */}
      <section className="py-20 md:py-32 px-6 bg-[#F5F2EB] relative overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C8A850] rounded-full blur-[150px] opacity-20"
          style={{ y: useTransform(scrollYProgress, [0.8, 1], [100, -100]) }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-[#0A0A0A]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              BEREIT FÜR<br />IHR PROJEKT?
            </motion.h2>
            <motion.p 
              className="text-xl text-[#0A0A0A]/50 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Lassen Sie uns gemeinsam die perfekte Lösung entwickeln
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
            >
              <Link
                to={createPageUrl('Kontakt')}
                className="inline-flex items-center gap-3 px-12 py-6 bg-[#0A0A0A] text-[#F5F2EB] font-bold hover:bg-[#CDFF00] hover:text-[#0A0A0A] transition-all group text-lg"
              >
                Jetzt Kontakt aufnehmen
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}