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
import CircuitBoardBg from '../components/CircuitBoardBg';
import SectionTransition from '../components/home/SectionTransition';
import HeroBackground from '../components/home/HeroBackground';
import HandwerkCard from '../components/home/HandwerkCard';
import EngineeringTile from '../components/home/EngineeringTile';

export default function Home() {
  const [heroReady, setHeroReady] = useState(false);
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

  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 200);
    return () => clearTimeout(t);
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
      <CircuitBoardBg />
      {/* Animated electrotechnical canvas — full page fixed background */}
      <div className="fixed inset-0 z-[6] pointer-events-none">
        <HeroBackground />
      </div>
      
      <div className="relative z-10">
      {/* Hero Section — isolated text with animated background */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden bg-transparent" aria-label="Hero section">
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

      {/* Handwerk Section - Light & Warm */}
      <section 
        ref={handwerkRef}
        className="min-h-screen relative py-20 md:py-32 px-6 bg-[#F5F2EB]/95"
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
                <HandwerkCard key={service.title} service={service} index={index} />
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

      {/* Contact Section - Integrated */}
      <section 
        ref={contactRef}
        className="min-h-screen relative py-20 md:py-32 px-6 bg-gradient-to-b from-[#0A0A0A]/90 to-[#1A1A2E]/90"
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