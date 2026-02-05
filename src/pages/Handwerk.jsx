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
      {/* Hero Section - Warm & Welcoming */}
      <section className="min-h-[80vh] flex items-center relative overflow-hidden px-6 py-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1600" 
            alt="Handwerk"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#C8A850]/20 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 bg-[#C8A850] text-[#0A0A0A] text-xs font-bold uppercase tracking-widest mb-6">
              Handwerk · Präzision · Erfahrung
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-none mb-8 max-w-4xl">
              Mit unseren<br />
              <span className="text-[#C8A850]">Händen</span><br />
              schaffen wir<br />
              Werte
            </h1>
            <p className="text-2xl text-[#0A0A0A]/70 max-w-2xl mb-12 leading-relaxed">
              Elektrotechnik, die funktioniert. Zuverlässig, sauber, auf den Punkt. 
              Seit Jahren vertrauen Kunden auf unsere Handwerkskunst.
            </p>
            <div className="flex gap-4">
              <Link
                to={createPageUrl('Kontakt')}
                className="px-8 py-4 bg-[#0A0A0A] text-[#F5F2EB] font-bold hover:bg-[#C8A850] hover:text-[#0A0A0A] transition-all inline-flex items-center gap-2"
              >
                Beratung anfragen
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services - Image-Heavy Layout */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Unsere Leistungen</h2>
            <p className="text-xl text-[#0A0A0A]/60">Vom Keller bis zum Dach — alles aus einer Hand</p>
          </div>

          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-[2fr_3fr]' : 'lg:grid-cols-[3fr_2fr]'} gap-0 bg-white shadow-lg hover:shadow-2xl transition-all overflow-hidden`}
              >
                <div className={`relative h-[400px] overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="p-12 flex flex-col justify-center">
                  <service.icon className="w-12 h-12 text-[#C8A850] mb-6" />
                  <h3 className="text-4xl font-bold mb-4">{service.title}</h3>
                  <p className="text-lg text-[#0A0A0A]/70 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-[#0A0A0A]/80">
                        <Check className="w-5 h-5 text-[#C8A850] mt-0.5 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              So arbeiten wir
            </h2>
            <p className="text-xl text-[#0A0A0A]/60 max-w-2xl">
              Transparenz von Anfang bis Ende
            </p>
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 shadow-md"
              >
                <div className="text-5xl font-bold text-[#C8A850] mb-4">{item.step}</div>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              "Qualität, auf die man sich verlassen kann"
            </h2>
            <p className="text-xl text-[#0A0A0A]/70 mb-12 leading-relaxed">
              Mit über 15 Jahren Erfahrung und hunderten zufriedenen Kunden setzen wir Maßstäbe 
              in der Elektrotechnik. Jedes Projekt behandeln wir, als wäre es unser eigenes Zuhause.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-5xl font-bold text-[#C8A850] mb-2">500+</div>
                <div className="text-sm text-[#0A0A0A]/60">Projekte</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#C8A850] mb-2">15+</div>
                <div className="text-sm text-[#0A0A0A]/60">Jahre</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#C8A850] mb-2">24/7</div>
                <div className="text-sm text-[#0A0A0A]/60">Notdienst</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#C8A850] mb-2">100%</div>
                <div className="text-sm text-[#0A0A0A]/60">Zufriedenheit</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-[#0A0A0A] text-[#F5F2EB]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Bereit für Ihr Projekt?
            </h2>
            <p className="text-xl text-[#F5F2EB]/70 mb-12 max-w-2xl mx-auto">
              Rufen Sie uns an oder schreiben Sie uns — wir beraten Sie gerne
            </p>
            <Link
              to={createPageUrl('Kontakt')}
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#C8A850] text-[#0A0A0A] font-bold hover:bg-[#D4B660] transition-all group"
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