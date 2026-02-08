import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Zap, Lightbulb, Wrench, Cpu, ArrowRight, Cable, Sparkles, Mail, Phone, MapPin, Send } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service_type: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const containerRef = useRef(null);
  const handwerkRef = useRef(null);
  const transitionRef = useRef(null);
  const engineeringRef = useRef(null);
  const contactRef = useRef(null);
  
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

  const heroImages = [
    'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920',
    'https://images.unsplash.com/photo-1581092918484-8313e1f7e8c6?w=1920',
    'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1920',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await base44.entities.ContactInquiry.create(formData);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', service_type: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0A0A0A] overflow-x-hidden relative">
      {/* Circuit Board Background - Visible */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            {/* Glowing effect for animated lines */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Main Vertical Traces */}
          <line x1="15%" y1="0" x2="15%" y2="100%" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
          <line x1="35%" y1="0" x2="35%" y2="100%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />
          <line x1="65%" y1="0" x2="65%" y2="100%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
          <line x1="85%" y1="0" x2="85%" y2="100%" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
          
          {/* Horizontal Connection Traces */}
          <line x1="0" y1="20%" x2="100%" y2="20%" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
          <line x1="0" y1="40%" x2="100%" y2="40%" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
          <line x1="0" y1="60%" x2="100%" y2="60%" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
          <line x1="0" y1="80%" x2="100%" y2="80%" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
          
          {/* Diagonal Connections */}
          <line x1="15%" y1="20%" x2="35%" y2="40%" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
          <line x1="35%" y1="40%" x2="50%" y2="60%" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
          <line x1="50%" y1="60%" x2="65%" y2="80%" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
          <line x1="65%" y1="20%" x2="85%" y2="40%" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
          
          {/* Connection Nodes (Solder Pads) */}
          <circle cx="15%" cy="20%" r="6" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
          <circle cx="35%" cy="40%" r="6" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
          <circle cx="50%" cy="60%" r="8" fill="rgba(255,255,255,0.4)" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
          <circle cx="65%" cy="80%" r="6" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
          <circle cx="85%" cy="40%" r="6" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
          <circle cx="50%" cy="20%" r="6" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
          <circle cx="15%" cy="80%" r="6" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
          <circle cx="85%" cy="80%" r="6" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />

          {/* Animated Glowing Traces - Data Flow */}
          <motion.line 
            x1="15%" y1="0" x2="15%" y2="100%" 
            stroke="#60A5FA" 
            strokeWidth="3" 
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.8, 0.8, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut"
            }}
          />
          
          <motion.line 
            x1="50%" y1="0" x2="50%" y2="100%" 
            stroke="#F59E0B" 
            strokeWidth="4" 
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.9, 0.9, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              repeatDelay: 1,
              delay: 1,
              ease: "easeInOut"
            }}
          />

          <motion.line 
            x1="85%" y1="0" x2="85%" y2="100%" 
            stroke="#A78BFA" 
            strokeWidth="3" 
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.7, 0.7, 0]
            }}
            transition={{ 
              duration: 4.5,
              repeat: Infinity,
              repeatDelay: 1.5,
              delay: 2,
              ease: "easeInOut"
            }}
          />

          {/* Horizontal Animated Traces */}
          <motion.line 
            x1="0" y1="40%" x2="100%" y2="40%" 
            stroke="#10B981" 
            strokeWidth="3" 
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.8, 0.8, 0]
            }}
            transition={{ 
              duration: 3.5,
              repeat: Infinity,
              repeatDelay: 2.5,
              delay: 0.5,
              ease: "easeInOut"
            }}
          />

          <motion.line 
            x1="0" y1="80%" x2="100%" y2="80%" 
            stroke="#EC4899" 
            strokeWidth="3" 
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.7, 0.7, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              repeatDelay: 2,
              delay: 1.5,
              ease: "easeInOut"
            }}
          />

          {/* Animated Connection Nodes */}
          <motion.circle 
            cx="50%" cy="60%" r="8" 
            fill="#60A5FA" 
            filter="url(#glow)"
            animate={{ 
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>

        {/* Additional subtle grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 51px), repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 51px)',
        }} />
      </div>
      
      <div className="relative z-10">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden" aria-label="Hero section">
        {heroImages.map((img, index) => (
          <motion.div
            key={img}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 2 }}
          >
            <motion.img 
              src={img} 
              alt={`LuckyTech background ${index + 1}`}
              className="w-full h-full object-cover"
              animate={{ scale: index === currentImageIndex ? [1, 1.15] : 1 }}
              transition={{ duration: 10, ease: "easeOut" }}
            />
          </motion.div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/70 to-[#0A0A0A]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.div
              className="text-sm tracking-[0.4em] text-white/60 mb-8 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              WO HANDWERK AUF INNOVATION TRIFFT
            </motion.div>
            
            <motion.h1 
              className="text-7xl md:text-9xl lg:text-[12rem] font-bold tracking-tighter leading-[0.85] mb-8 text-white"
              style={{
                textShadow: "0 0 60px rgba(200,168,80,0.4)"
              }}
            >
              LUCKYTECH
            </motion.h1>
            
            <motion.div 
              className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-xl md:text-2xl font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <span className="text-white/90">Elektrotechnik</span>
              <span className="text-white/40">+</span>
              <span className="text-white/90">Engineering</span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div 
              className="w-1 h-3 bg-white/60 rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Puzzle Transition 1 */}
      <div className="h-32 relative overflow-hidden bg-[#0A0A0A]">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`puzzle1-${i}`}
            className="absolute bg-[#F5F2EB]"
            style={{
              width: '25%',
              height: '100%',
              left: `${(i % 4) * 25}%`,
              top: 0
            }}
            initial={{ y: 100, opacity: 0, rotate: -10 }}
            whileInView={{ y: 0, opacity: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
              duration: 0.6, 
              delay: i * 0.05,
              type: "spring",
              stiffness: 100
            }}
          />
        ))}
      </div>

      {/* Handwerk Section - Light & Warm */}
      <section 
        ref={handwerkRef}
        className="min-h-screen relative py-20 md:py-32 px-6 bg-[#F5F2EB]"
        aria-labelledby="handwerk-heading"
      >
        <motion.div 
          className="max-w-7xl mx-auto"
          style={{ 
            y: useTransform(handwerkProgress, [0, 1], [150, -150]),
            opacity: useTransform(handwerkProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3])
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
                className="text-sm font-bold tracking-[0.4em] text-[#0A0A0A]/30 mb-4"
              >
                / HANDWERK
              </motion.div>
              <motion.h2 
                id="handwerk-heading"
                className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-[#0A0A0A] mb-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                ELEKTRO—<br/>TECHNIK
              </motion.h2>
              <motion.p 
                className="text-xl md:text-2xl text-[#0A0A0A]/50 max-w-2xl font-light"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Präzision und Erfahrung in der Installation, Wartung und Reparatur
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { icon: Zap, title: 'Smarthome', subtitle: 'Installation & Automatisierung', img: 'photo-1558002038-1055907df827', delay: 0.1 },
                { icon: Cable, title: 'Wallbox', subtitle: 'E-Mobility Solutions', img: 'photo-1593941707882-a5bba14938c7', delay: 0.2 },
                { icon: Wrench, title: 'Service', subtitle: 'Wartung & Reparatur', img: 'photo-1581092160562-40aa08e78837', delay: 0.3 }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 80, rotateX: 15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ 
                    duration: 1, 
                    delay: service.delay,
                    type: "spring",
                    stiffness: 60
                  }}
                  whileHover={{ y: -15, scale: 1.02 }}
                  className="group relative h-[500px] overflow-hidden cursor-pointer focus-within:ring-2 focus-within:ring-[#0A0A0A] focus-within:ring-offset-4 focus-within:ring-offset-[#F5F2EB]"
                  style={{ transformStyle: 'preserve-3d' }}
                  tabIndex={0}
                  role="article"
                  aria-label={`${service.title}: ${service.subtitle}`}
                >
                  <motion.img 
                    src={`https://images.unsplash.com/${service.img}?w=800`}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-8 text-white"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: service.delay + 0.3 }}
                  >
                    <service.icon className="w-10 h-10 mb-4 text-white" />
                    <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
                    <p className="text-white/70">{service.subtitle}</p>
                  </motion.div>
                </motion.div>
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
                to={createPageUrl('Handwerk')} 
                className="inline-flex items-center gap-3 text-[#0A0A0A] font-bold text-lg hover:gap-5 transition-all group border-b-2 border-[#0A0A0A] pb-1 focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] focus:ring-offset-4 focus:ring-offset-[#F5F2EB]"
                aria-label="Mehr über Handwerk erfahren"
              >
                Mehr erfahren <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Dynamic Flowing Transition with Circuit Aesthetic */}
      <section 
        ref={transitionRef}
        className="h-screen relative overflow-hidden bg-gradient-to-b from-[#F5F2EB] via-[#1A1A2E] to-[#0A0A0A]"
        aria-hidden="true"
      >
        {/* Animated Circuit Lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M 0,200 Q 400,100 800,200 T 1600,200"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M 0,400 Q 400,300 800,400 T 1600,400"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
          />
          <motion.path
            d="M 0,600 Q 400,500 800,600 T 1600,600"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.4 }}
          />
        </svg>

        {/* Flowing Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${20 + i * 5}%`,
              }}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ 
                x: window.innerWidth + 100, 
                opacity: [0, 1, 1, 0]
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 3 + Math.random() * 2,
                delay: i * 0.2,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Central Morphing Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.div
              className="text-xl md:text-3xl font-light text-white/60 mb-8"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              ELEKTRISCHE PRÄZISION
            </motion.div>
            <motion.div
              className="text-6xl md:text-9xl font-bold text-white mb-8"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            >
              →
            </motion.div>
            <motion.div
              className="text-xl md:text-3xl font-light text-white/60"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              INNOVATIVE LÖSUNGEN
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Puzzle Transition 2 */}
      <div className="h-32 relative overflow-hidden bg-[#F5F2EB]">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={`puzzle2-${i}`}
            className="absolute bg-[#0A0A0A]"
            style={{
              width: '25%',
              height: '50%',
              left: `${(i % 4) * 25}%`,
              top: i < 8 ? 0 : '50%'
            }}
            initial={{ scale: 0, opacity: 0, rotate: 45 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
              duration: 0.5, 
              delay: i * 0.04,
              type: "spring",
              stiffness: 120
            }}
          />
        ))}
      </div>

      {/* Engineering Section - Dark & Tech */}
      <section 
        ref={engineeringRef}
        className="min-h-screen relative py-20 md:py-32 px-6 bg-[#0A0A0A]"
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
                <motion.div
                  key={service.title + index}
                  initial={{ 
                    opacity: 0, 
                    scale: 0,
                    rotate: index % 2 === 0 ? -30 : 30
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1,
                    rotate: 0
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: service.delay,
                    type: "spring",
                    stiffness: 150,
                    damping: 12
                  }}
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: index % 2 === 0 ? 8 : -8,
                    y: -12
                  }}
                  className="relative aspect-square bg-white/5 border border-white/20 p-4 md:p-6 flex flex-col justify-end transition-all cursor-pointer backdrop-blur-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0A0A0A]"
                  tabIndex={0}
                  role="article"
                  aria-label={service.title}
                >
                  <service.icon className="w-8 h-8 md:w-10 md:h-10 mb-2 text-white" />
                  <div className="text-sm md:text-base font-bold text-white">{service.title}</div>
                </motion.div>
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

      {/* Puzzle Transition 3 */}
      <div className="h-32 relative overflow-hidden bg-[#0A0A0A]">
        {[...Array(24)].map((_, i) => (
          <motion.div
            key={`puzzle3-${i}`}
            className="absolute"
            style={{
              width: `${100 / 6}%`,
              height: '33.33%',
              left: `${(i % 6) * (100 / 6)}%`,
              top: `${Math.floor(i / 6) * 33.33}%`,
              background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A2E 100%)'
            }}
            initial={{ 
              y: -100, 
              opacity: 0,
              rotateX: 90
            }}
            whileInView={{ 
              y: 0, 
              opacity: 1,
              rotateX: 0
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
              duration: 0.6, 
              delay: i * 0.03,
              type: "spring",
              stiffness: 100
            }}
          />
        ))}
      </div>

      {/* Contact Section - Integrated */}
      <section 
        ref={contactRef}
        className="min-h-screen relative py-20 md:py-32 px-6 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A2E]"
        aria-labelledby="contact-heading"
      >
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, #C8A850 2px, transparent 2px)',
            backgroundSize: '60px 60px',
            y: useTransform(scrollYProgress, [0.7, 1], [0, -300])
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <div className="text-center mb-16 md:mb-24">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-sm tracking-[0.4em] text-white/30 mb-4"
              >
                / KONTAKT
              </motion.div>
              <motion.h2 
                id="contact-heading"
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                LET'S TALK
              </motion.h2>
              <motion.p 
                className="text-xl text-white/50 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Bereit für Ihr nächstes Projekt?
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <form onSubmit={handleSubmit} className="space-y-6" aria-label="Kontaktformular">
                  <div>
                    <Label htmlFor="contact-name" className="text-white/70 mb-2 block text-sm">Name *</Label>
                    <Input
                      id="contact-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white/5 border-white/10 text-white focus:border-white/40 focus:ring-2 focus:ring-white/20 backdrop-blur-sm"
                      placeholder="Ihr Name"
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact-email" className="text-white/70 mb-2 block text-sm">E-Mail *</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white/5 border-white/10 text-white focus:border-white/40 focus:ring-2 focus:ring-white/20 backdrop-blur-sm"
                      placeholder="ihre@email.de"
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact-phone" className="text-white/70 mb-2 block text-sm">Telefon</Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-white/5 border-white/10 text-white focus:border-white/40 focus:ring-2 focus:ring-white/20 backdrop-blur-sm"
                      placeholder="+49 123 456789"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact-service" className="text-white/70 mb-2 block text-sm">Interessengebiet *</Label>
                    <Select
                      value={formData.service_type}
                      onValueChange={(value) => setFormData({ ...formData, service_type: value })}
                      required
                    >
                      <SelectTrigger 
                        id="contact-service"
                        className="bg-white/5 border-white/10 text-white focus:border-white/40 focus:ring-2 focus:ring-white/20 backdrop-blur-sm"
                        aria-required="true"
                      >
                        <SelectValue placeholder="Bitte wählen" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1A1A2E] border-white/10 backdrop-blur-xl">
                        <SelectItem value="handwerk">Handwerk (Elektrotechnik)</SelectItem>
                        <SelectItem value="engineering">Engineering (Innovation)</SelectItem>
                        <SelectItem value="beide">Beide Bereiche</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="contact-message" className="text-white/70 mb-2 block text-sm">Nachricht *</Label>
                    <Textarea
                      id="contact-message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white/5 border-white/10 text-white focus:border-white/40 focus:ring-2 focus:ring-white/20 min-h-[120px] backdrop-blur-sm"
                      placeholder="Beschreiben Sie Ihr Projekt..."
                      aria-required="true"
                    />
                  </div>

                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 text-sm rounded"
                      role="alert"
                      aria-live="polite"
                    >
                      ✓ Nachricht erfolgreich gesendet!
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white hover:bg-white/90 focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-[#0A0A0A] text-[#0A0A0A] font-bold py-6 text-lg border-0 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label={isSubmitting ? 'Nachricht wird gesendet' : 'Nachricht senden'}
                  >
                    {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                    <Send className="w-5 h-5 ml-2" aria-hidden="true" />
                  </Button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  {[
                    { icon: Mail, title: 'E-Mail', value: 'info@luckytech.de', href: 'mailto:info@luckytech.de' },
                    { icon: Phone, title: 'Telefon', value: '+49 123 456 7890', href: 'tel:+491234567890' },
                    { icon: MapPin, title: 'Standort', value: 'Musterstraße 123\n12345 Musterstadt' }
                  ].map((contact, index) => (
                    <motion.div
                      key={contact.title}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all"
                    >
                      <div className="p-3 rounded-full bg-white/10">
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-1">{contact.title}</h3>
                        {contact.href ? (
                          <a 
                            href={contact.href} 
                            className="text-white/60 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white/40 transition-colors whitespace-pre-line"
                            aria-label={`${contact.title}: ${contact.value}`}
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-white/60 whitespace-pre-line">{contact.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                  className="p-6 bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-bold text-white mb-3">Schnelle Antwort</h3>
                  <p className="text-white/60 text-sm">
                    Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          </div>
          </section>
          </div>
          </div>
          );
          }