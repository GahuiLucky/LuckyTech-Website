import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { Home, Zap, Cable, Wrench, ArrowRight, CheckCircle } from 'lucide-react';

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
      ]
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
      ]
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
      ]
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
      ]
    }
  ];

  return (
    <div className="bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden px-6">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8A850] rounded-full blur-[150px]" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-6 py-2 border border-[#C8A850] text-[#C8A850] text-sm uppercase tracking-wider mb-8">
              Handwerk
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
              PRÄZISION<br />
              <span className="text-[#C8A850]">TRIFFT</span><br />
              ERFAHRUNG
            </h1>
            <p className="text-xl md:text-2xl text-[#F5F2EB]/60 max-w-3xl mx-auto mb-12">
              Elektrotechnik auf höchstem Niveau — von der Smarthome-Installation bis zur Industrieverkabelung
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-[#F5F2EB]/5 border border-[#C8A850]/20 p-10 hover:border-[#C8A850] hover:bg-[#C8A850]/5 transition-all"
              >
                <service.icon className="w-14 h-14 text-[#C8A850] mb-6" />
                <h3 className="text-3xl font-bold mb-4 tracking-tight">{service.title}</h3>
                <p className="text-[#F5F2EB]/70 mb-8 text-lg leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-[#F5F2EB]/80">
                      <CheckCircle className="w-5 h-5 text-[#C8A850] mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 bg-[#F5F2EB]/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              UNSER PROZESS
            </h2>
            <p className="text-xl text-[#F5F2EB]/60 max-w-2xl mx-auto">
              Von der ersten Idee bis zur finalen Abnahme
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Beratung', description: 'Kostenlose Erstberatung und Standortanalyse' },
              { step: '02', title: 'Planung', description: 'Detaillierte Planung und transparentes Angebot' },
              { step: '03', title: 'Umsetzung', description: 'Professionelle Installation durch Fachpersonal' },
              { step: '04', title: 'Abnahme', description: 'Einweisung und langfristige Betreuung' }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl font-bold text-[#C8A850]/20 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-[#F5F2EB]/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-[#C8A850] p-12 md:p-20 text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              PROJEKT STARTEN?
            </h2>
            <p className="text-xl text-[#F5F2EB]/70 mb-12 max-w-2xl mx-auto">
              Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch
            </p>
            <Link
              to={createPageUrl('Kontakt')}
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#C8A850] text-[#0A0A0A] font-bold uppercase tracking-wider hover:bg-[#D4B660] transition-all group"
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