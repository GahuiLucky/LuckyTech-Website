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
    <div className="bg-[#0A0A0A] overflow-x-hidden">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
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
              alt="" 
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

      {/* Handwerk Section - Light & Warm */}
      <section 
        ref={handwerkRef}
        className="min-h-screen relative py-20 md:py-32 px-6 bg-[#F5F2EB]"
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
                  className="group relative h-[500px] overflow-hidden cursor-pointer"
                  style={{ transformStyle: 'preserve-3d' }}
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
                className="inline-flex items-center gap-3 text-[#0A0A0A] font-bold text-lg hover:gap-5 transition-all group border-b-2 border-[#0A0A0A] pb-1"
              >
                Mehr erfahren <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Dynamic Transition Section */}
      <section 
        ref={transitionRef}
        className="h-screen relative overflow-hidden bg-gradient-to-b from-[#F5F2EB] via-[#1A1A2E] to-[#0A0A0A]"
      >
        <motion.div
          className="absolute inset-0"
          style={{
            opacity: useTransform(transitionProgress, [0, 0.5, 1], [0, 1, 0]),
            scale: useTransform(transitionProgress, [0, 0.5, 1], [0.8, 1, 1.2])
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              style={{
                rotate: useTransform(transitionProgress, [0, 1], [0, 180]),
                scale: useTransform(transitionProgress, [0, 0.5, 1], [0, 1.5, 0])
              }}
              className="w-[300px] h-[300px] md:w-[600px] md:h-[600px]"
            >
              <div className="absolute inset-0 border-4 border-[#C8A850] rounded-full opacity-30" />
              <div className="absolute inset-12 border-4 border-[#00EAFF] rounded-full opacity-30" />
              <div className="absolute inset-24 border-4 border-[#CDFF00] rounded-full opacity-30" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            opacity: useTransform(transitionProgress, [0.3, 0.5, 0.7], [0, 1, 0])
          }}
        >
          <motion.div
            className="text-center px-6"
            style={{
              y: useTransform(transitionProgress, [0, 1], [100, -100])
            }}
          >
            <div className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
              INNOVATION<br/>TRIFFT<br/>PRÄZISION
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(45deg, transparent 48%, rgba(255, 255, 255, 0.03) 49%, rgba(255, 255, 255, 0.03) 51%, transparent 52%)',
            backgroundSize: '20px 20px',
            opacity: useTransform(transitionProgress, [0, 0.5, 1], [0, 0.5, 0])
          }}
        />
      </section>

      {/* Engineering Section - Dark & Tech */}
      <section 
        ref={engineeringRef}
        className="min-h-screen relative py-20 md:py-32 px-6 bg-[#0A0A0A]"
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
                  className="relative aspect-square bg-white/5 border border-white/20 p-4 md:p-6 flex flex-col justify-end transition-all cursor-pointer backdrop-blur-sm hover:bg-white/10"
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
                className="inline-flex items-center gap-3 text-white font-bold text-lg hover:gap-5 transition-all group border-b-2 border-white pb-1"
              >
                Mehr erfahren <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section - Integrated */}
      <section 
        ref={contactRef}
        className="min-h-screen relative py-20 md:py-32 px-6 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A2E]"
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label className="text-white/70 mb-2 block text-sm">Name *</Label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white/5 border-white/10 text-white focus:border-white/40 backdrop-blur-sm"
                      placeholder="Ihr Name"
                    />
                  </div>

                  <div>
                    <Label className="text-white/70 mb-2 block text-sm">E-Mail *</Label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white/5 border-white/10 text-white focus:border-white/40 backdrop-blur-sm"
                      placeholder="ihre@email.de"
                    />
                  </div>

                  <div>
                    <Label className="text-white/70 mb-2 block text-sm">Telefon</Label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-white/5 border-white/10 text-white focus:border-white/40 backdrop-blur-sm"
                      placeholder="+49 123 456789"
                    />
                  </div>

                  <div>
                    <Label className="text-white/70 mb-2 block text-sm">Interessengebiet *</Label>
                    <Select
                      value={formData.service_type}
                      onValueChange={(value) => setFormData({ ...formData, service_type: value })}
                      required
                    >
                      <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-white/40 backdrop-blur-sm">
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
                    <Label className="text-white/70 mb-2 block text-sm">Nachricht *</Label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white/5 border-white/10 text-white focus:border-white/40 min-h-[120px] backdrop-blur-sm"
                      placeholder="Beschreiben Sie Ihr Projekt..."
                    />
                  </div>

                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 text-sm rounded"
                    >
                      ✓ Nachricht erfolgreich gesendet!
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white hover:bg-white/90 text-[#0A0A0A] font-bold py-6 text-lg border-0"
                  >
                    {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                    <Send className="w-5 h-5 ml-2" />
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
                            className="text-white/60 hover:text-white transition-colors whitespace-pre-line"
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
  );
}