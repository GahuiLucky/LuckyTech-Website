// src/pages/Contact.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HomeContactSection from "../components/home/HomeContactSection";

export default function Contact() {
  return (
    <main className="bg-[#0A0A0A] text-white min-h-screen">


      {/* Main contact section (map background + contact cards + form) */}
      <HomeContactSection />

      {/* Footer CTA */}
      <section className="px-6 md:px-12 py-12 md:py-20 bg-gradient-to-t from-black/80 to-transparent">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-2xl md:text-3xl font-semibold mb-4">
            Bereit loszulegen?
          </motion.h2>
          <p className="text-white/70 mb-6">Erzählen Sie uns kurz von Ihrem Vorhaben — wir melden uns zeitnah mit einem Vorschlag.</p>
          <div className="flex items-center justify-center gap-3">
            <Link to="/kontakt" className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#C8A850] text-black font-semibold hover:brightness-95 transition">
              Anfrage senden
            </Link>
            <a href="tel:+491234567890" className="inline-flex items-center gap-2 px-4 py-3 rounded border border-white/10 text-white hover:bg-white/5 transition">
              Anrufen
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}