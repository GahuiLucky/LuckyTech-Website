import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function ServiceDetailLayout({ service }) {
  const {
    title, tagline, heroImage, intro,
    features, technologies, caseStudy,
    relatedServices
  } = service;

  return (
    <div className="bg-white text-[#0A0A0A]">

      {/* Hero */}
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        <motion.img
          src={heroImage}
          alt={title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 lg:p-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link
              to={createPageUrl('Handwerk')}
              className="inline-flex items-center gap-2 text-white/60 text-sm uppercase tracking-widest mb-6 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Handwerk
            </Link>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-white leading-[0.9] mb-4">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl font-light">{tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-36 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.p
            className="text-2xl md:text-3xl lg:text-4xl font-light text-[#0A0A0A]/70 leading-relaxed tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {intro}
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 md:px-16 pb-24 md:pb-36">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-bold tracking-tighter mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Leistungen
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0A0A0A]/10">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="bg-white p-8 md:p-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="text-xs tracking-[0.2em] text-[#C8A850] uppercase mb-4">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-3">{f.title}</h3>
                <p className="text-sm text-[#0A0A0A]/50 leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-[#0A0A0A] py-24 md:py-36 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Technologien
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((t, i) => (
              <motion.div
                key={t}
                className="border border-white/10 p-6 text-center hover:border-[#C8A850]/40 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <span className="text-sm text-white/70">{t}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="bg-[#F5F2EB]">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
          <div className="relative overflow-hidden min-h-[40vh]">
            <motion.img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            />
          </div>
          <div className="flex flex-col justify-center p-10 md:p-16 lg:p-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-xs tracking-[0.3em] text-[#C8A850] uppercase mb-6">Projektbeispiel</div>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">{caseStudy.title}</h3>
              <p className="text-lg text-[#0A0A0A]/50 leading-relaxed mb-4">{caseStudy.description}</p>
              {caseStudy.stats && (
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {caseStudy.stats.map((s) => (
                    <div key={s.label}>
                      <div className="text-2xl md:text-3xl font-bold tracking-tight">{s.value}</div>
                      <div className="text-xs text-[#0A0A0A]/40 uppercase tracking-wider mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 md:py-36 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-bold tracking-tighter mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Weitere Leistungen
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#0A0A0A]/10">
            {relatedServices.map((rs, i) => (
              <Link
                key={rs.title}
                to={createPageUrl(rs.page)}
                className="group bg-white block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={rs.image}
                      alt={rs.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold tracking-tight mb-2 group-hover:text-[#C8A850] transition-colors">
                      {rs.title}
                    </h3>
                    <span className="inline-flex items-center gap-2 text-sm text-[#0A0A0A]/50 group-hover:text-[#0A0A0A] transition-colors">
                      Mehr erfahren <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-40 px-6 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] mb-8">
              Interesse geweckt?<br />
              <span className="text-[#0A0A0A]/25">Lassen Sie uns reden.</span>
            </h2>
            <Link
              to={createPageUrl('Kontakt')}
              className="inline-flex items-center gap-3 text-lg font-medium text-[#0A0A0A] border-b-2 border-[#0A0A0A] pb-1 hover:text-[#0A0A0A]/60 hover:border-[#0A0A0A]/60 transition-all group"
            >
              Kontakt aufnehmen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}