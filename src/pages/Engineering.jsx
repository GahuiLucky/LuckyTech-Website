import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { Cpu, Lightbulb, Boxes, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

export default function Engineering() {
  const services = [
    {
      icon: Boxes,
      title: 'Prototypenbau',
      description: 'Von der Idee zum funktionsfähigen Prototypen. Wir entwickeln und bauen Ihre Vision.',
      features: [
        'Rapid Prototyping',
        '3D-Druck & CNC-Fertigung',
        'Elektronik-Integration',
        'Iterative Optimierung'
      ]
    },
    {
      icon: Cpu,
      title: 'Produktentwicklung',
      description: 'Komplette Entwicklung von der Konzeption bis zur Serienreife.',
      features: [
        'Marktanalyse & Konzeption',
        'Hardware & Software Design',
        'Prototypenentwicklung',
        'Produktionsbegleitung'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Creative Thinking',
      description: 'Innovative Lösungsansätze für komplexe Herausforderungen durch kreative Denkprozesse.',
      features: [
        'Design Thinking Workshops',
        'Innovations-Beratung',
        'Machbarkeitsstudien',
        'Problemlösungs-Strategien'
      ]
    },
    {
      icon: Sparkles,
      title: 'Beratung & Konzeption',
      description: 'Strategische Beratung für technische Projekte und Produktinnovationen.',
      features: [
        'Technologie-Beratung',
        'Konzeptentwicklung',
        'Feasibility Studies',
        'Projektplanung'
      ]
    }
  ];

  return (
    <div className="bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden px-6">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3B5BDB] rounded-full blur-[150px]" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-6 py-2 border border-[#3B5BDB] text-[#3B5BDB] text-sm uppercase tracking-wider mb-8">
              Engineering
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
              INNOVATION<br />
              <span className="text-[#3B5BDB]">TRIFFT</span><br />
              KREATIVITÄT
            </h1>
            <p className="text-xl md:text-2xl text-[#F5F2EB]/60 max-w-3xl mx-auto mb-12">
              Von der Idee zum Produkt — wir gestalten die Zukunft durch innovative Ingenieurskunst
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
                className="group bg-[#F5F2EB]/5 border border-[#3B5BDB]/20 p-10 hover:border-[#3B5BDB] hover:bg-[#3B5BDB]/5 transition-all"
              >
                <service.icon className="w-14 h-14 text-[#3B5BDB] mb-6" />
                <h3 className="text-3xl font-bold mb-4 tracking-tight">{service.title}</h3>
                <p className="text-[#F5F2EB]/70 mb-8 text-lg leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-[#F5F2EB]/80">
                      <CheckCircle className="w-5 h-5 text-[#3B5BDB] mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
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
              UNSER ANSATZ
            </h2>
            <p className="text-xl text-[#F5F2EB]/60 max-w-2xl mx-auto">
              Systematisch von der Vision zur Realität
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Analyse', description: 'Verstehen Ihrer Anforderungen und Ziele' },
              { step: '02', title: 'Konzeption', description: 'Kreative Lösungsentwicklung und Design' },
              { step: '03', title: 'Prototyping', description: 'Iterative Entwicklung und Testing' },
              { step: '04', title: 'Realisierung', description: 'Umsetzung und Markteinführung' }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl font-bold text-[#3B5BDB]/20 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-[#F5F2EB]/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
              DENKEN JENSEITS<br />DES GEWÖHNLICHEN
            </h2>
            <p className="text-xl md:text-2xl text-[#F5F2EB]/70 leading-relaxed mb-12">
              Bei LuckyTech Engineering glauben wir an die Kraft kreativer Problemlösung. 
              Wir kombinieren technisches Know-how mit innovativen Denkansätzen, um Lösungen 
              zu entwickeln, die nicht nur funktionieren, sondern begeistern.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="border-l-4 border-[#3B5BDB] pl-6">
                <h3 className="text-2xl font-bold mb-3">Interdisziplinär</h3>
                <p className="text-[#F5F2EB]/60">
                  Wir verbinden verschiedene Fachbereiche für ganzheitliche Lösungen
                </p>
              </div>
              <div className="border-l-4 border-[#3B5BDB] pl-6">
                <h3 className="text-2xl font-bold mb-3">Agil</h3>
                <p className="text-[#F5F2EB]/60">
                  Schnelle Iterationen und flexible Anpassung an neue Erkenntnisse
                </p>
              </div>
              <div className="border-l-4 border-[#3B5BDB] pl-6">
                <h3 className="text-2xl font-bold mb-3">Zukunftsorientiert</h3>
                <p className="text-[#F5F2EB]/60">
                  Wir entwickeln Lösungen, die auch morgen noch relevant sind
                </p>
              </div>
            </div>
          </motion.div>
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
            className="border border-[#3B5BDB] p-12 md:p-20 text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              INNOVATION STARTEN?
            </h2>
            <p className="text-xl text-[#F5F2EB]/70 mb-12 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihre Vision in die Realität umsetzen
            </p>
            <Link
              to={createPageUrl('Kontakt')}
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#3B5BDB] text-white font-bold uppercase tracking-wider hover:bg-[#4C6BEB] transition-all group"
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