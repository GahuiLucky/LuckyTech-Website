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
    <div className="bg-[#0A0A0A] relative">
      {/* Matrix-style Background */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none overflow-hidden font-mono text-[10px] leading-[10px] text-[#3B5BDB]">
        <div className="animate-scroll-slow">
          {Array(100).fill(null).map((_, i) => (
            <div key={i} className="whitespace-nowrap">
              {Array(200).fill(null).map((_, j) => 
                String.fromCharCode(33 + Math.floor(Math.random() * 94))
              ).join('')}
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section - Experimental */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3B5BDB] rounded-full blur-[150px] opacity-20" />
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#C8A850] rounded-full blur-[120px] opacity-10" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="font-mono text-xs text-[#3B5BDB] mb-8 tracking-widest flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span className="animate-pulse">{'>'} SYSTEM.ENGINEERING.init()</span>
            </div>
            
            <div className="relative mb-12">
              <h1 className={`text-6xl md:text-9xl font-bold tracking-tighter leading-none transition-all ${glitchActive ? 'animate-glitch' : ''}`}>
                <span className="block mb-4">INNOVATION</span>
                <span className="block mb-4">
                  <span className="relative inline-block">
                    <span className="relative z-10 text-[#3B5BDB]">TRIFFT</span>
                    {glitchActive && (
                      <>
                        <span className="absolute inset-0 text-[#C8A850] opacity-70" style={{transform: 'translate(-3px, -3px)'}}>TRIFFT</span>
                        <span className="absolute inset-0 text-[#3B5BDB] opacity-70" style={{transform: 'translate(3px, 3px)'}}>TRIFFT</span>
                      </>
                    )}
                  </span>
                </span>
                <span className="block">KREATIVITÄT</span>
              </h1>
              
              {/* Duplicate text layers for glitch effect */}
              <div className="absolute inset-0 pointer-events-none opacity-30 blur-[2px]">
                <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-none text-[#3B5BDB]">
                  <span className="block mb-4">INNOVATION</span>
                  <span className="block mb-4">TRIFFT</span>
                  <span className="block">KREATIVITÄT</span>
                </h1>
              </div>
            </div>
            
            <div className="font-mono text-sm text-[#F5F2EB]/40 mb-12 max-w-2xl">
              {'// '} from_concept(idea) → to_prototype(reality) <br/>
              {'// '} iterate(innovation) && solve(impossible)
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-3 border border-[#3B5BDB] text-[#3B5BDB] font-mono text-sm">
                [PROTOTYPING]
              </div>
              <div className="px-6 py-3 border border-[#3B5BDB] text-[#3B5BDB] font-mono text-sm">
                [DEVELOPMENT]
              </div>
              <div className="px-6 py-3 border border-[#3B5BDB] text-[#3B5BDB] font-mono text-sm">
                [INNOVATION]
              </div>
            </div>
          </motion.div>
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20 font-mono"
          >
            <div className="text-[#3B5BDB] text-sm mb-4">{'>'} services.list()</div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
              <span className="text-[#F5F2EB]/30">{'{'}</span> CAPABILITIES <span className="text-[#F5F2EB]/30">{'}'}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-[#0A0A0A] border border-[#3B5BDB]/20 p-10 hover:border-[#3B5BDB] hover:bg-[#3B5BDB]/5 transition-all overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#3B5BDB]/5 transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <service.icon className="w-12 h-12 text-[#3B5BDB]" />
                    <div className="font-mono text-xs text-[#3B5BDB]/50">
                      {'['}0{index + 1}{']'}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-[#3B5BDB] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-[#F5F2EB]/60 mb-8 text-lg leading-relaxed font-light">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 font-mono text-sm">
                    {service.features.map((feature, i) => (
                      <div key={feature} className="flex items-start gap-3 text-[#F5F2EB]/70">
                        <span className="text-[#3B5BDB] mt-0.5">{'>'}</span>
                        <span>{feature}</span>
                      </div>
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="font-mono text-sm text-[#3B5BDB] mb-6">
              {'>'} process.workflow() <span className="animate-pulse">_</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
              SYSTEMATIC<br/>INNOVATION
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              { step: '01', title: 'ANALYSE', cmd: 'analyze.requirements()', description: 'Deep-dive in Ihre Vision. Wir verstehen nicht nur was Sie wollen, sondern auch warum.' },
              { step: '02', title: 'KONZEPTION', cmd: 'design.solution()', description: 'Kreative Lösungsentwicklung mit iterativem Design Thinking und Rapid Ideation.' },
              { step: '03', title: 'PROTOTYPING', cmd: 'build.prototype()', description: 'Von digital zu physisch — schnelle Iteration, kontinuierliches Testing, echtes Feedback.' },
              { step: '04', title: 'REALISIERUNG', cmd: 'deploy.production()', description: 'Serienreife Umsetzung mit Qualitätssicherung und Produktionsbegleitung.' }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group border border-[#3B5BDB]/20 hover:border-[#3B5BDB] p-8 bg-[#0A0A0A] hover:bg-[#3B5BDB]/5 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="font-mono text-4xl font-bold text-[#3B5BDB]/30 group-hover:text-[#3B5BDB] transition-colors min-w-[80px]">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="font-mono text-xs text-[#3B5BDB]/60 mb-2">
                      {'// '}{item.cmd}
                    </div>
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

      {/* CTA Section - Terminal */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-2 border-[#3B5BDB] p-12 md:p-20 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[#3B5BDB]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <div className="font-mono text-xs text-[#3B5BDB] mb-6">
                {'>'} ready_to_start = true <span className="animate-pulse">_</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                EXECUTE(<span className="text-[#3B5BDB]">YOUR_VISION</span>)
              </h2>
              
              <p className="text-xl text-[#F5F2EB]/70 mb-12 max-w-2xl mx-auto font-mono">
                {'// '} Lassen Sie uns gemeinsam Ihre Vision in Code, Hardware und Realität übersetzen.
              </p>
              
              <Link
                to={createPageUrl('Kontakt')}
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#3B5BDB] text-white font-bold font-mono hover:bg-[#4C6BEB] transition-all group/btn border-2 border-[#3B5BDB]"
              >
                {'>'} START_PROJECT()
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}