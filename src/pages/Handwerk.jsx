import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { Home, Zap, Cable, Wrench, ArrowRight, Check } from 'lucide-react';

export default function Handwerk() {
  const services = [
    {
      icon: Home,
      title: 'Smarthome Installation',
      description: 'Verwandeln Sie Ihr Zuhause in ein intelligentes System. Von der Planung bis zur Umsetzung.',
      features: [
        'Lichtsteuerung & Automatisierung',
        'Heizungs- & Klimasteuerung',
        'Sicherheitssysteme',
        'Sprachassistenten-Integration'
      ],
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800'
    },
    {
      icon: Zap,
      title: 'Wallbox Installation',
      description: 'Professionelle Installation von Ladestationen für Ihr Elektrofahrzeug — schnell, sicher, zuverlässig.',
      features: [
        'Beratung & Standortanalyse',
        'Fachgerechte Installation',
        'KfW-Förderung Unterstützung',
        'Wartung & Service'
      ],
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800'
    },
    {
      icon: Cable,
      title: 'Kabelverlegung & Installation',
      description: 'Professionelle Elektroinstallationen für Neubau, Sanierung und Gewerbe.',
      features: [
        'Netzwerk- & Datenleitungen',
        'Starkstrom-Installationen',
        'Unterputz & Aufputz',
        'Baubegleitende Elektrik'
      ],
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800'
    },
    {
      icon: Wrench,
      title: 'Reparaturen',
      description: 'Schnelle und zuverlässige Reparatur aller Elektroinstallationen — 24/7 Notdienst verfügbar.',
      features: [
        'Fehlerdiagnose',
        'Kurzfristige Termine',
        'Transparente Preise',
        'Notdienst'
      ],
      image: 'https://images.unsplash.com/photo-1581092918484-8313e1f7e8c6?w=800'
    }
  ];

  return (
    <div className="bg-[#F5F2EB] text-[#0A0A0A]">
      {/* Hero Section - Minimal & Clean like Jacky Grob */}
      <section className="min-h-screen flex items-center relative overflow-hidden px-6 py-20">
        <motion.div 
          className="absolute top-8 right-8 text-right text-sm"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-[#0A0A0A]/40 mb-2">Kontakt:</div>
          <div className="font-bold">info@luckytech.de</div>
          <div className="text-[#0A0A0A]/60">Deutschland</div>
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 40 }}
            >
              <h1 className="text-7xl md:text-9xl font-bold leading-none mb-12">
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  HAND
                </motion.span>
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.25 }}
                >
                  WERK
                </motion.span>
                <motion.span 
                  className="block text-[#C8A850]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 100 }}
                >
                  (2026)
                </motion.span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 40 }}
            >
              <motion.div 
                className="text-lg md:text-xl leading-relaxed text-[#0A0A0A]/70 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                Mit Fokus auf Präzision erschafft LuckyTech Elektroinstallationen, 
                die höchsten Standards entsprechen. Vom klassischen Handwerk bis zur 
                modernen Smarthome-Technologie.
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Link
                  to={createPageUrl('Kontakt')}
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#0A0A0A] text-[#0A0A0A] font-bold hover:bg-[#0A0A0A] hover:text-[#F5F2EB] transition-all"
                >
                  Beratung anfragen
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services - Grid Layout like Jacky Grob */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <motion.h2 
              className="text-6xl md:text-8xl font-bold mb-6"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
            >
              LEISTUNGEN
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.15, type: "spring", stiffness: 60 }}
                className="group bg-[#F5F2EB] overflow-hidden hover:shadow-xl transition-all"
              >
                <motion.div 
                  className="relative h-[300px] overflow-hidden"
                  initial={{ scale: 1.15 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: index * 0.15 }}
                >
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>
                
                <div className="p-8">
                  <motion.div 
                    className="flex items-start justify-between mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                  >
                    <h3 className="text-3xl font-bold">{service.title}</h3>
                  </motion.div>
                  <motion.p 
                    className="text-[#0A0A0A]/70 mb-6 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  >
                    {service.description}
                  </motion.p>
                  <ul className="space-y-2 text-sm">
                    {service.features.map((feature, fi) => (
                      <motion.li 
                        key={feature} 
                        className="text-[#0A0A0A]/60"
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 + fi * 0.08 + index * 0.15 }}
                      >
                        — {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 bg-[#C8A850]/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
            className="mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              So arbeiten wir
            </h2>
            <motion.p 
              className="text-xl text-[#0A0A0A]/60 max-w-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Transparenz von Anfang bis Ende
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Beratung', description: 'Kostenlose Erstberatung vor Ort. Wir nehmen uns Zeit für Ihre Fragen.' },
              { step: '02', title: 'Planung', description: 'Detaillierte Planung und transparentes Festpreisangebot — keine versteckten Kosten.' },
              { step: '03', title: 'Umsetzung', description: 'Saubere, termingerechte Installation durch erfahrene Fachkräfte.' },
              { step: '04', title: 'Service', description: 'Einweisung, Dokumentation und Service auch nach Projektabschluss.' }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 50, rotateY: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.15, type: "spring", stiffness: 70 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white p-8 shadow-md"
              >
                <motion.div 
                  className="text-5xl font-bold text-[#C8A850] mb-4"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.15, type: "spring", stiffness: 120 }}
                >
                  {item.step}
                </motion.div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-[#0A0A0A]/60 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Trust Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
            >
              "Qualität, auf die man sich verlassen kann"
            </motion.h2>
            <motion.p 
              className="text-xl text-[#0A0A0A]/70 mb-12 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Mit über 15 Jahren Erfahrung und hunderten zufriedenen Kunden setzen wir Maßstäbe 
              in der Elektrotechnik. Jedes Projekt behandeln wir, als wäre es unser eigenes Zuhause.
            </motion.p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '500+', label: 'Projekte' },
                { value: '15+', label: 'Jahre' },
                { value: '24/7', label: 'Notdienst' },
                { value: '100%', label: 'Zufriedenheit' }
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.12, type: "spring", stiffness: 100 }}
                >
                  <div className="text-5xl font-bold text-[#C8A850] mb-2">{stat.value}</div>
                  <div className="text-sm text-[#0A0A0A]/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-[#0A0A0A] text-[#F5F2EB]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
            >
              Bereit für Ihr Projekt?
            </motion.h2>
            <motion.p 
              className="text-xl text-[#F5F2EB]/70 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Rufen Sie uns an oder schreiben Sie uns — wir beraten Sie gerne
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                to={createPageUrl('Kontakt')}
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#C8A850] text-[#0A0A0A] font-bold hover:bg-[#D4B660] transition-all group"
              >
                Jetzt Kontakt aufnehmen
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}