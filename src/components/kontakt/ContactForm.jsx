import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { Mail, Phone, MapPin, ArrowRight, Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service_type: 'handwerk', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await base44.entities.ContactInquiry.create(form);
    setSending(false);
    setSent(true);
  };

  const contacts = [
    { icon: Mail, title: 'E‑Mail', value: 'info.luckytech@icloud.com', href: 'mailto:info.luckytech@icloud.com' },
    { icon: Phone, title: 'Telefon', value: '+49 123 456 7890', href: 'tel:+491234567890' },
    { icon: MapPin, title: 'Standort', value: 'Im Rappen 11, 74388 Talheim' },
  ];

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-10 md:p-14 text-center max-w-lg mx-auto"
      >
        <CheckCircle className="w-12 h-12 text-[#C8A850] mx-auto mb-5" />
        <h3 className="text-2xl font-bold text-white mb-3">Nachricht gesendet</h3>
        <p className="text-white/50 text-sm">Vielen Dank für Ihre Anfrage. Wir melden uns in Kürze bei Ihnen.</p>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-5xl mx-auto w-full">
      {/* Left: Contact Info */}
      <motion.div
        className="lg:col-span-2 flex flex-col gap-4"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
          <div className="text-xs tracking-[0.4em] text-white/40 uppercase mb-2">Kontakt</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
            LET'S TALK<span className="text-[#3B5BDB]">.</span>
          </h2>
          <p className="text-sm text-white/40 leading-relaxed mb-8">
            Erzählen Sie uns von Ihrem Vorhaben — wir melden uns zeitnah.
          </p>

          <div className="space-y-5">
            {contacts.map((c) => (
              <div key={c.title} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <c.icon className="w-4 h-4 text-white/70" />
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase tracking-wider mb-0.5">{c.title}</div>
                  {c.href ? (
                    <a href={c.href} className="text-sm text-white/80 hover:text-white transition-colors">{c.value}</a>
                  ) : (
                    <p className="text-sm text-white/80">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right: Form */}
      <motion.div
        className="lg:col-span-3"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <form onSubmit={handleSubmit} className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] uppercase tracking-wider text-white/40 block mb-1.5">Name *</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
                placeholder="Ihr Name"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-wider text-white/40 block mb-1.5">E-Mail *</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
                placeholder="ihre@email.de"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] uppercase tracking-wider text-white/40 block mb-1.5">Telefon</label>
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
                placeholder="+49 ..."
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-wider text-white/40 block mb-1.5">Bereich *</label>
              <select
                required
                value={form.service_type}
                onChange={(e) => setForm({ ...form, service_type: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors appearance-none"
              >
                <option value="handwerk" className="bg-[#0A0A0A]">Handwerk / Elektrotechnik</option>
                <option value="engineering" className="bg-[#0A0A0A]">Engineering</option>
                <option value="beide" className="bg-[#0A0A0A]">Beides</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-wider text-white/40 block mb-1.5">Nachricht *</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors resize-none"
              placeholder="Beschreiben Sie kurz Ihr Vorhaben..."
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="w-full bg-white hover:bg-white/90 text-[#0A0A0A] font-bold text-sm py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {sending ? 'Wird gesendet...' : (
              <>Nachricht senden <Send className="w-4 h-4" /></>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
}