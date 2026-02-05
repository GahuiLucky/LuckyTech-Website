import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service_type: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await base44.entities.ContactInquiry.create(formData);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service_type: '',
        message: ''
      });
      
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
              LASSEN SIE UNS<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A850] to-[#3B5BDB]">
                SPRECHEN
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#F5F2EB]/60 max-w-3xl mx-auto">
              Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#F5F2EB]/5 border border-[#F5F2EB]/10 p-10"
            >
              <h2 className="text-3xl font-bold mb-8">Anfrage senden</h2>
              
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/10 border border-green-500/20 flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <p className="text-green-500">Vielen Dank! Wir melden uns in Kürze bei Ihnen.</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-[#F5F2EB] mb-2 block">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-[#0A0A0A] border-[#F5F2EB]/20 text-[#F5F2EB] focus:border-[#C8A850]"
                    placeholder="Ihr Name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-[#F5F2EB] mb-2 block">
                    E-Mail *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-[#0A0A0A] border-[#F5F2EB]/20 text-[#F5F2EB] focus:border-[#C8A850]"
                    placeholder="ihre@email.de"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-[#F5F2EB] mb-2 block">
                    Telefon
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-[#0A0A0A] border-[#F5F2EB]/20 text-[#F5F2EB] focus:border-[#C8A850]"
                    placeholder="+49 123 456789"
                  />
                </div>

                <div>
                  <Label htmlFor="service_type" className="text-[#F5F2EB] mb-2 block">
                    Interessengebiet *
                  </Label>
                  <Select
                    value={formData.service_type}
                    onValueChange={(value) => setFormData({ ...formData, service_type: value })}
                    required
                  >
                    <SelectTrigger className="bg-[#0A0A0A] border-[#F5F2EB]/20 text-[#F5F2EB] focus:border-[#C8A850]">
                      <SelectValue placeholder="Bitte wählen" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0A0A0A] border-[#F5F2EB]/20">
                      <SelectItem value="handwerk">Handwerk (Elektrotechnik)</SelectItem>
                      <SelectItem value="engineering">Engineering (Innovation)</SelectItem>
                      <SelectItem value="beide">Beide Bereiche</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-[#F5F2EB] mb-2 block">
                    Nachricht *
                  </Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-[#0A0A0A] border-[#F5F2EB]/20 text-[#F5F2EB] focus:border-[#C8A850] min-h-[150px]"
                    placeholder="Beschreiben Sie Ihr Projekt..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#C8A850] to-[#3B5BDB] hover:opacity-90 text-white font-bold uppercase tracking-wider py-6 text-lg"
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-bold mb-8">Direkter Kontakt</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#C8A850]/10 border border-[#C8A850]/20">
                      <Mail className="w-6 h-6 text-[#C8A850]" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">E-Mail</h3>
                      <a href="mailto:info@luckytech.de" className="text-[#F5F2EB]/70 hover:text-[#C8A850] transition-colors">
                        info@luckytech.de
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#3B5BDB]/10 border border-[#3B5BDB]/20">
                      <Phone className="w-6 h-6 text-[#3B5BDB]" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Telefon</h3>
                      <a href="tel:+491234567890" className="text-[#F5F2EB]/70 hover:text-[#3B5BDB] transition-colors">
                        +49 123 456 7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#F5F2EB]/10 border border-[#F5F2EB]/20">
                      <MapPin className="w-6 h-6 text-[#F5F2EB]" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Standort</h3>
                      <p className="text-[#F5F2EB]/70">
                        Musterstraße 123<br />
                        12345 Musterstadt<br />
                        Deutschland
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F5F2EB]/5 border border-[#F5F2EB]/10 p-8">
                <h3 className="text-2xl font-bold mb-4">Öffnungszeiten</h3>
                <div className="space-y-3 text-[#F5F2EB]/70">
                  <div className="flex justify-between">
                    <span>Montag - Freitag</span>
                    <span className="font-bold text-[#F5F2EB]">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samstag</span>
                    <span className="font-bold text-[#F5F2EB]">09:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sonntag</span>
                    <span className="font-bold text-[#F5F2EB]">Geschlossen</span>
                  </div>
                  <div className="pt-3 border-t border-[#F5F2EB]/10">
                    <p className="text-sm">
                      <span className="text-[#C8A850] font-bold">24/7 Notdienst</span> verfügbar
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#C8A850]/10 to-[#3B5BDB]/10 border border-[#F5F2EB]/10 p-8">
                <h3 className="text-2xl font-bold mb-4">Schnelle Antwort</h3>
                <p className="text-[#F5F2EB]/70 mb-4">
                  Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.
                </p>
                <ul className="space-y-2 text-sm text-[#F5F2EB]/60">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C8A850]" />
                    Kostenlose Erstberatung
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C8A850]" />
                    Unverbindliches Angebot
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C8A850]" />
                    Persönliche Betreuung
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}