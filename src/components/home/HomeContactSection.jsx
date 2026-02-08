import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const POSITION = [51.1657, 10.4515];

export default function HomeContactSection() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service_type: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await base44.entities.ContactInquiry.create(formData);
    setIsSuccess(true);
    setFormData({ name: '', email: '', phone: '', service_type: '', message: '' });
    setTimeout(() => setIsSuccess(false), 5000);
    setIsSubmitting(false);
  };

  return (
    <section className="min-h-screen relative py-20 md:py-32 px-6 bg-gradient-to-b from-[#0A0A0A]/90 to-[#1A1A2E]/90">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <div className="text-sm tracking-[0.4em] text-white/30 mb-4">/ KONTAKT</div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-white">
              LET'S TALK
            </h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">Bereit für Ihr nächstes Projekt?</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <Label className="text-white/70 mb-2 block text-sm">Name *</Label>
                    <Input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="bg-white/5 border-white/10 text-white focus:border-white/40 backdrop-blur-sm" placeholder="Ihr Name" />
                  </div>
                  <div>
                    <Label className="text-white/70 mb-2 block text-sm">E-Mail *</Label>
                    <Input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="bg-white/5 border-white/10 text-white focus:border-white/40 backdrop-blur-sm" placeholder="ihre@email.de" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <Label className="text-white/70 mb-2 block text-sm">Telefon</Label>
                    <Input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="bg-white/5 border-white/10 text-white focus:border-white/40 backdrop-blur-sm" placeholder="+49 123 456789" />
                  </div>
                  <div>
                    <Label className="text-white/70 mb-2 block text-sm">Interessengebiet *</Label>
                    <Select value={formData.service_type} onValueChange={(v) => setFormData({ ...formData, service_type: v })}>
                      <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-white/40 backdrop-blur-sm">
                        <SelectValue placeholder="Bitte wählen" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1A1A2E] border-white/10 backdrop-blur-xl">
                        <SelectItem value="handwerk">Handwerk</SelectItem>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="beide">Beide Bereiche</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label className="text-white/70 mb-2 block text-sm">Nachricht *</Label>
                  <Textarea required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="bg-white/5 border-white/10 text-white focus:border-white/40 min-h-[100px] backdrop-blur-sm" placeholder="Beschreiben Sie Ihr Projekt..." />
                </div>

                {isSuccess && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-3 bg-green-500/10 border border-green-500/20 text-green-400 text-sm rounded">
                    ✓ Nachricht erfolgreich gesendet!
                  </motion.div>
                )}

                <Button type="submit" disabled={isSubmitting} className="w-full bg-white hover:bg-white/90 text-[#0A0A0A] font-bold py-6 text-lg border-0">
                  {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </motion.div>

            {/* Right: Map + Contact Info */}
            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {/* Map */}
              <div className="h-[300px] md:h-[340px] overflow-hidden border border-white/10">
                <MapContainer
                  center={POSITION}
                  zoom={6}
                  scrollWheelZoom={false}
                  style={{ height: '100%', width: '100%' }}
                  attributionControl={false}
                >
                  <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
                  <Marker position={POSITION}>
                    <Popup>
                      <div className="text-sm font-bold text-gray-900">
                        LuckyTech<br />
                        <span className="font-normal text-gray-600">Musterstraße 123, 12345 Musterstadt</span>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>

              {/* Contact cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { icon: Mail, title: 'E-Mail', value: 'info@luckytech.de', href: 'mailto:info@luckytech.de' },
                  { icon: Phone, title: 'Telefon', value: '+49 123 456 7890', href: 'tel:+491234567890' },
                  { icon: MapPin, title: 'Standort', value: 'Musterstraße 123' },
                ].map((c) => (
                  <div key={c.title} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 backdrop-blur-sm">
                    <c.icon className="w-5 h-5 text-white/60 flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="text-xs text-white/40">{c.title}</div>
                      {c.href ? (
                        <a href={c.href} className="text-sm text-white/80 hover:text-white transition-colors truncate block">{c.value}</a>
                      ) : (
                        <p className="text-sm text-white/80 truncate">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}