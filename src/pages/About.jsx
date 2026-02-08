import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Heart, Lightbulb, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function About() {
  const heroRef = useRef(null);
  const visionRef = useRef(null);
  
  const { scrollYProgress } = useScroll();
  
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const { scrollYProgress: visionProgress } = useScroll({
    target: visionRef,
    offset: ["start end", "end start"]
  });
  
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.2]);
  const heroOpacity = useTransform(heroProgress, [0, 1], [1, 0]);

  return (
    <div className="bg-[#0A0A0A] text-white">
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen relative overflow-hidden flex items-center">
        <motion.div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(#00EAFF 1px, transparent 1px), linear-gradient(90deg, #00EAFF 1px, transparent 1px)',
            backgroundSize: '100px 100px',
            y: useTransform(scrollYProgress, [0, 1], [0, -500])
          }}
        />
        
        <motion.div 
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#C8A850] rounded-full blur-[200px] opacity-20"
          style={{ 
            scale: heroScale,
            opacity: heroOpacity
          }}
        />

        <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm tracking-[0.4em] text-white/40 mb-8 font-mono"
            >
              / ABOUT
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-12 leading-[0.9]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              WO HANDWERK<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A850] to-[#00EAFF]">
                AUF INNOVATION<br/>
                TRIFFT
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/60 max-w-3xl leading-relaxed mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              LuckyTech wurde aus der Vision geboren, die bewährte Präzision 
              des Elektrohandwerks mit der Kreativität moderner Ingenieurskunst zu verbinden. 
              Was als kleine Werkstatt begann, ist heute eine einzigartige Symbiose aus 
              Tradition und Innovation.
            </motion.p>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link
                to={createPageUrl('Kontakt')}
                className="px-8 py-4 bg-gradient-to-r from-[#C8A850] to-[#00EAFF] text-[#0A0A0A] font-bold hover:opacity-90 transition-all"
              >
                Kontakt aufnehmen
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A2E]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tight">
              Die Geschichte
            </h2>

            <div className="space-y-8 text-lg md:text-xl text-white/70 leading-relaxed">
              <p>
                Gegründet von einem Team aus erfahrenen Elektrotechnikern und innovativen 
                Ingenieuren, verstehen wir beide Welten in ihrer Tiefe. Wir kennen die 
                Herausforderungen der Installation vor Ort genauso gut wie die komplexen 
                Anforderungen der Produktentwicklung.
              </p>
              <p>
                Unsere Mission ist es, nicht nur Lösungen zu liefern, sondern Erlebnisse 
                zu schaffen — Elektroinstallationen, die nicht nur funktionieren, sondern 
                begeistern. Prototypen, die nicht nur technisch überzeugen, sondern eine 
                Vision zum Leben erwecken.
              </p>
              <p className="text-white text-2xl font-light italic">
                "Wir glauben, dass die besten Innovationen entstehen, wenn man das 
                Fundament des Handwerks mit der Freiheit kreativen Denkens verbindet."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        ref={visionRef}
        className="py-20 md:py-32 px-6 bg-[#0A0A0A] relative overflow-hidden"
      >
        <motion.div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #00EAFF 2px, transparent 2px)',
            backgroundSize: '60px 60px',
            y: useTransform(visionProgress, [0, 1], [0, -200])
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-20 text-center tracking-tight">
              Unsere Werte
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Zap,
                  title: 'Präzision',
                  description: 'Jedes Detail zählt. Von der Kabelverlegung bis zum finalen Prototypen.',
                  color: '#C8A850',
                  delay: 0.1
                },
                {
                  icon: Lightbulb,
                  title: 'Innovation',
                  description: 'Wir denken über Konventionen hinaus und entwickeln zukunftsorientierte Lösungen.',
                  color: '#00EAFF',
                  delay: 0.2
                },
                {
                  icon: Heart,
                  title: 'Leidenschaft',
                  description: 'Wir lieben, was wir tun — und das spürt man in jedem Projekt.',
                  color: '#CDFF00',
                  delay: 0.3
                },
                {
                  icon: Target,
                  title: 'Qualität',
                  description: 'Kompromisslose Qualität in Handwerk und Engineering.',
                  color: '#C8A850',
                  delay: 0.4
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 80, rotate: -5 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: value.delay,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="p-8 bg-white/5 border-2 backdrop-blur-sm hover:bg-white/10 transition-all"
                  style={{ borderColor: `${value.color}30` }}
                >
                  <value.icon 
                    className="w-12 h-12 mb-6" 
                    style={{ color: value.color }}
                  />
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-white/60 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team/Philosophy Section */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-[#0A0A0A] via-[#1A1A2E] to-[#0A0A0A]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tight">
              Unser Ansatz
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="space-y-6"
              >
                <div className="border-l-4 border-[#C8A850] pl-6">
                  <h3 className="text-2xl font-bold mb-4 text-[#C8A850]">Handwerk</h3>
                  <p className="text-white/70 leading-relaxed">
                    Mit über 15 Jahren Erfahrung in der Elektrotechnik kennen wir die 
                    Herausforderungen des Alltags. Jede Installation wird mit der Sorgfalt 
                    durchgeführt, die Sie erwarten dürfen — präzise, sauber, zuverlässig.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="space-y-6"
              >
                <div className="border-l-4 border-[#00EAFF] pl-6">
                  <h3 className="text-2xl font-bold mb-4 text-[#00EAFF]">Engineering</h3>
                  <p className="text-white/70 leading-relaxed">
                    Unser Engineering-Team verbindet technisches Know-how mit kreativem 
                    Denken. Vom ersten Konzept bis zum fertigen Prototypen begleiten wir 
                    Ihre Vision mit innovativen Lösungsansätzen.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-16 p-12 bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <h3 className="text-3xl font-bold mb-6">Warum LuckyTech?</h3>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                Weil Sie nicht zwischen Handwerk und Innovation wählen müssen. 
                Weil wir beide Welten verstehen und nahtlos verbinden können. 
                Weil jedes Projekt für uns mehr ist als nur ein Auftrag — 
                es ist die Chance, etwas Außergewöhnliches zu schaffen.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-[#C8A850] mb-2">15+</div>
                  <div className="text-sm text-white/60">Jahre Erfahrung</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#00EAFF] mb-2">500+</div>
                  <div className="text-sm text-white/60">Projekte</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#CDFF00] mb-2">100%</div>
                  <div className="text-sm text-white/60">Kundenzufriedenheit</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#C8A850] mb-2">24/7</div>
                  <div className="text-sm text-white/60">Support</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 bg-[#0A0A0A] relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(45deg, transparent 48%, rgba(200, 168, 80, 0.05) 49%, rgba(200, 168, 80, 0.05) 51%, transparent 52%)',
            backgroundSize: '30px 30px',
          }}
        />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              BEREIT FÜR<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A850] to-[#00EAFF]">
                IHR PROJEKT?
              </span>
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam etwas Außergewöhnliches schaffen
            </p>
            <Link
              to={createPageUrl('Kontakt')}
              className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-[#C8A850] to-[#00EAFF] text-[#0A0A0A] font-bold text-lg hover:opacity-90 transition-all group"
            >
              Jetzt Kontakt aufnehmen
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}