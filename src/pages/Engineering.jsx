import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { Cpu, Lightbulb, Boxes, Sparkles, ArrowRight, CheckCircle, Terminal } from 'lucide-react';

export default function Engineering() {
  const [glitchActive, setGlitchActive] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
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
    <div className="bg-[#0A1820] relative text-[#F5F2EB]">
      {/* Subtle Grid Pattern */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(#3B5BDB 1px, transparent 1px), linear-gradient(90deg, #3B5BDB 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      {/* Hero Section - OXI Instruments Style */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#00EAFF] rounded-full blur-[150px] opacity-10" />
          <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-[#CDFF00] rounded-full blur-[180px] opacity-10" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div>
            <div className="mb-20">
              <motion.div 
                className="text-sm font-mono tracking-widest text-[#00EAFF] mb-8 uppercase"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                WITH INNOVATION, CREATIVITY MOVES AT THE SPEED OF INSPIRATION
              </motion.div>
              
              <h1 className={`text-7xl md:text-[10rem] lg:text-[12rem] font-bold tracking-tighter leading-[0.85] mb-12 ${glitchActive ? 'animate-glitch' : ''}`}>
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, x: -80 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9, delay: 0.3, type: "spring", stiffness: 40 }}
                >
                  OXI
                </motion.span>
                <motion.span 
                  className="block relative"
                  initial={{ opacity: 0, x: -80 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9, delay: 0.5, type: "spring", stiffness: 40 }}
                >
                  <span className="text-[#00EAFF]">ENGINEERING</span>
                  {glitchActive && (
                    <>
                      <span className="absolute inset-0 text-[#CDFF00] opacity-50" style={{transform: 'translate(-2px, -2px)'}}>ENGINEERING</span>
                      <span className="absolute inset-0 text-[#00EAFF] opacity-50" style={{transform: 'translate(2px, 2px)'}}>ENGINEERING</span>
                    </>
                  )}
                </motion.span>
              </h1>
            </div>

            <motion.div 
              className="flex flex-wrap gap-6 items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <Link
                to={createPageUrl('Kontakt')}
                className="px-12 py-5 bg-[#00EAFF] text-[#0A1820] font-bold uppercase tracking-wider hover:bg-[#CDFF00] transition-all"
              >
                Start Your Project
              </Link>
              <motion.div 
                className="flex gap-4 font-mono text-sm text-[#F5F2EB]/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <span>[Prototyping]</span>
                <span>[Development]</span>
                <span>[Innovation]</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <style jsx>{`
          @keyframes glitch {
            0%, 100% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(2px, -2px); }
            60% { transform: translate(-2px, -2px); }
            80% { transform: translate(2px, 2px); }
          }
          .animate-glitch {
            animation: glitch 0.3s ease-in-out;
          }
          @keyframes scroll-slow {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          .animate-scroll-slow {
            animation: scroll-slow 60s linear infinite;
          }
        `}</style>
      </section>

      {/* Services Grid - Tech Style */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 font-mono">
            <motion.div 
              className="text-[#3B5BDB] text-sm mb-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              {'>'} services.list()
            </motion.div>
            <motion.h2 
              className="text-5xl md:text-7xl font-bold tracking-tighter"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 50 }}
            >
              <span className="text-[#F5F2EB]/30">{'{'}</span> CAPABILITIES <span className="text-[#F5F2EB]/30">{'}'}</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.12, type: "spring", stiffness: 60 }}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-[#0A0A0A] border border-[#3B5BDB]/20 p-10 hover:border-[#3B5BDB] hover:bg-[#3B5BDB]/5 transition-all overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#3B5BDB]/5 transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.12, type: "spring", stiffness: 150 }}
                    >
                      <service.icon className="w-12 h-12 text-[#3B5BDB]" />
                    </motion.div>
                    <div className="font-mono text-xs text-[#3B5BDB]/50">
                      {'['}0{index + 1}{']'}
                    </div>
                  </div>
                  
                  <motion.h3 
                    className="text-3xl font-bold mb-4 tracking-tight group-hover:text-[#3B5BDB] transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.25 + index * 0.12 }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-[#F5F2EB]/60 mb-8 text-lg leading-relaxed font-light"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.35 + index * 0.12 }}
                  >
                    {service.description}
                  </motion.p>
                  
                  <div className="space-y-2 font-mono text-sm">
                    {service.features.map((feature, i) => (
                      <motion.div 
                        key={feature} 
                        className="flex items-start gap-3 text-[#F5F2EB]/70"
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 + i * 0.08 + index * 0.12 }}
                      >
                        <span className="text-[#3B5BDB] mt-0.5">{'>'}</span>
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section - Terminal Style */}
      <section className="py-32 px-6 bg-[#0A0A0A] border-y border-[#3B5BDB]/20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <motion.div 
              className="font-mono text-sm text-[#3B5BDB] mb-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              {'>'} process.workflow() <span className="animate-pulse">_</span>
            </motion.div>
            <motion.h2 
              className="text-5xl md:text-7xl font-bold tracking-tighter"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.1, type: "spring", stiffness: 45 }}
            >
              SYSTEMATIC<br/>INNOVATION
            </motion.h2>
          </div>

          <div className="space-y-6">
            {[
              { step: '01', title: 'ANALYSE', cmd: 'analyze.requirements()', description: 'Deep-dive in Ihre Vision. Wir verstehen nicht nur was Sie wollen, sondern auch warum.' },
              { step: '02', title: 'KONZEPTION', cmd: 'design.solution()', description: 'Kreative Lösungsentwicklung mit iterativem Design Thinking und Rapid Ideation.' },
              { step: '03', title: 'PROTOTYPING', cmd: 'build.prototype()', description: 'Von digital zu physisch — schnelle Iteration, kontinuierliches Testing, echtes Feedback.' },
              { step: '04', title: 'REALISIERUNG', cmd: 'deploy.production()', description: 'Serienreife Umsetzung mit Qualitätssicherung und Produktionsbegleitung.' }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -50, rotateY: 10 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.15, type: "spring", stiffness: 60 }}
                whileHover={{ x: 10, borderColor: "rgba(59,91,219,1)" }}
                className="group border border-[#3B5BDB]/20 hover:border-[#3B5BDB] p-8 bg-[#0A0A0A] hover:bg-[#3B5BDB]/5 transition-all"
              >
                <div className="flex items-start gap-6">
                  <motion.div 
                    className="font-mono text-4xl font-bold text-[#3B5BDB]/30 group-hover:text-[#3B5BDB] transition-colors min-w-[80px]"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.15, type: "spring", stiffness: 120 }}
                  >
                    {item.step}
                  </motion.div>
                  <div className="flex-1">
                    <motion.div 
                      className="font-mono text-xs text-[#3B5BDB]/60 mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.15 }}
                    >
                      {'// '}{item.cmd}
                    </motion.div>
                    <h3 className="text-3xl font-bold mb-3 group-hover:text-[#3B5BDB] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#F5F2EB]/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <motion.h2 
              className="text-4xl md:text-6xl font-bold tracking-tighter mb-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
            >
              DENKEN JENSEITS<br />DES GEWÖHNLICHEN
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl text-[#F5F2EB]/70 leading-relaxed mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Bei LuckyTech Engineering glauben wir an die Kraft kreativer Problemlösung. 
              Wir kombinieren technisches Know-how mit innovativen Denkansätzen, um Lösungen 
              zu entwickeln, die nicht nur funktionieren, sondern begeistern.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                { title: 'Interdisziplinär', text: 'Wir verbinden verschiedene Fachbereiche für ganzheitliche Lösungen' },
                { title: 'Agil', text: 'Schnelle Iterationen und flexible Anpassung an neue Erkenntnisse' },
                { title: 'Zukunftsorientiert', text: 'Wir entwickeln Lösungen, die auch morgen noch relevant sind' }
              ].map((item, i) => (
                <motion.div 
                  key={item.title}
                  className="border-l-4 border-[#3B5BDB] pl-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15, type: "spring", stiffness: 70 }}
                >
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-[#F5F2EB]/60">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Terminal */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
            className="border-2 border-[#3B5BDB] p-12 md:p-20 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[#3B5BDB]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <motion.div 
                className="font-mono text-xs text-[#3B5BDB] mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {'>'} ready_to_start = true <span className="animate-pulse">_</span>
              </motion.div>
              
              <motion.h2 
                className="text-4xl md:text-6xl font-bold tracking-tighter mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                EXECUTE(<span className="text-[#3B5BDB]">YOUR_VISION</span>)
              </motion.h2>
              
              <motion.p 
                className="text-xl text-[#F5F2EB]/70 mb-12 max-w-2xl mx-auto font-mono"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {'// '} Lassen Sie uns gemeinsam Ihre Vision in Code, Hardware und Realität übersetzen.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link
                  to={createPageUrl('Kontakt')}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-[#3B5BDB] text-white font-bold font-mono hover:bg-[#4C6BEB] transition-all group/btn border-2 border-[#3B5BDB]"
                >
                  {'>'} START_PROJECT()
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}