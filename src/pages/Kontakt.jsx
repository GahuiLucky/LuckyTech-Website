import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import LocationMap from '../components/kontakt/LocationMap';
import SuccessOverlay from '../components/kontakt/SuccessOverlay';

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
  const [showOverlay, setShowOverlay] = useState(false);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name ist erforderlich';
        if (value.trim().length < 2) return 'Name muss mindestens 2 Zeichen lang sein';
        return '';
      case 'email':
        if (!value.trim()) return 'E-Mail ist erforderlich';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
        return '';
      case 'phone':
        if (value && !/^[+]?[\d\s()-]{6,}$/.test(value)) return 'Bitte geben Sie eine gültige Telefonnummer ein';
        return '';
      case 'service_type':
        if (!value) return 'Bitte wählen Sie ein Interessengebiet';
        return '';
      case 'message':
        if (!value.trim()) return 'Nachricht ist erforderlich';
        if (value.trim().length < 10) return 'Nachricht muss mindestens 10 Zeichen lang sein';
        return '';
      default:
        return '';
    }
  };

  const handleFieldChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
    if (touched[name]) {
      setErrors({ ...errors, [name]: validateField(name, value) });
    }
  };

  const handleBlur = (name) => {
    setTouched({ ...touched, [name]: true });
    setErrors({ ...errors, [name]: validateField(name, formData[name]) });
  };

  const validateAll = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    setTouched({ name: true, email: true, phone: true, service_type: true, message: true });
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateAll()) return;
    setIsSubmitting(true);

    try {
      await base44.entities.ContactInquiry.create(formData);
      setIsSuccess(true);
      setShowOverlay(true);
      setFormData({ name: '', email: '', phone: '', service_type: '', message: '' });
      setTouched({});
      setErrors({});
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const FieldError = ({ name }) => (
    <AnimatePresence>
      {touched[name] && errors[name] && (
        <motion.div
          className="flex items-center gap-1.5 mt-1.5 text-red-400 text-xs"
          initial={{ opacity: 0, y: -5, height: 0 }}
          animate={{ opacity: 1, y: 0, height: 'auto' }}
          exit={{ opacity: 0, y: -5, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          <AlertCircle className="w-3 h-3 flex-shrink-0" />
          <span>{errors[name]}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );

  const fieldClass = (name) =>
    `bg-[#0A0A0A] border-[#F5F2EB]/20 text-[#F5F2EB] focus:border-[#C8A850] transition-colors ${
      touched[name] && errors[name] ? 'border-red-400/60' : ''
    } ${touched[name] && !errors[name] && formData[name] ? 'border-green-500/40' : ''}`;

  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <SuccessOverlay show={showOverlay} onClose={() => setShowOverlay(false)} />
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.h1 
              className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 40 }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                LASSEN SIE UNS
              </motion.span>
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C8A850] to-[#3B5BDB]"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                SPRECHEN
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-[#F5F2EB]/60 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 40 }}
              className="bg-[#F5F2EB]/5 border border-[#F5F2EB]/10 p-10"
            >
              <motion.h2 
                className="text-3xl font-bold mb-8"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Anfrage senden
              </motion.h2>
              
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
                    value={formData.name}
                    onChange={(e) => handleFieldChange('name', e.target.value)}
                    onBlur={() => handleBlur('name')}
                    className={fieldClass('name')}
                    placeholder="Ihr Name"
                  />
                  <FieldError name="name" />
                </div>

                <div>
                  <Label htmlFor="email" className="text-[#F5F2EB] mb-2 block">
                    E-Mail *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleFieldChange('email', e.target.value)}
                    onBlur={() => handleBlur('email')}
                    className={fieldClass('email')}
                    placeholder="ihre@email.de"
                  />
                  <FieldError name="email" />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-[#F5F2EB] mb-2 block">
                    Telefon
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleFieldChange('phone', e.target.value)}
                    onBlur={() => handleBlur('phone')}
                    className={fieldClass('phone')}
                    placeholder="+49 123 456789"
                  />
                  <FieldError name="phone" />
                </div>

                <div>
                  <Label htmlFor="service_type" className="text-[#F5F2EB] mb-2 block">
                    Interessengebiet *
                  </Label>
                  <Select
                    value={formData.service_type}
                    onValueChange={(value) => {
                      handleFieldChange('service_type', value);
                      setTouched({ ...touched, service_type: true });
                    }}
                  >
                    <SelectTrigger className={fieldClass('service_type')}>
                      <SelectValue placeholder="Bitte wählen" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0A0A0A] border-[#F5F2EB]/20">
                      <SelectItem value="handwerk">Handwerk (Elektrotechnik)</SelectItem>
                      <SelectItem value="engineering">Engineering (Innovation)</SelectItem>
                      <SelectItem value="beide">Beide Bereiche</SelectItem>
                    </SelectContent>
                  </Select>
                  <FieldError name="service_type" />
                </div>

                <div>
                  <Label htmlFor="message" className="text-[#F5F2EB] mb-2 block">
                    Nachricht *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleFieldChange('message', e.target.value)}
                    onBlur={() => handleBlur('message')}
                    className={`${fieldClass('message')} min-h-[150px]`}
                    placeholder="Beschreiben Sie Ihr Projekt..."
                  />
                  <FieldError name="message" />
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
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 40 }}
              className="space-y-12"
            >
              <div>
                <motion.h2 
                  className="text-3xl font-bold mb-8"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  Direkter Kontakt
                </motion.h2>
                <div className="space-y-6">
                  {[
                    { icon: Mail, title: 'E-Mail', content: <a href="mailto:info@luckytech.de" className="text-[#F5F2EB]/70 hover:text-[#C8A850] transition-colors">info@luckytech.de</a>, bg: 'bg-[#C8A850]/10 border-[#C8A850]/20', iconColor: 'text-[#C8A850]' },
                    { icon: Phone, title: 'Telefon', content: <a href="tel:+491234567890" className="text-[#F5F2EB]/70 hover:text-[#3B5BDB] transition-colors">+49 123 456 7890</a>, bg: 'bg-[#3B5BDB]/10 border-[#3B5BDB]/20', iconColor: 'text-[#3B5BDB]' },
                    { icon: MapPin, title: 'Standort', content: <p className="text-[#F5F2EB]/70">Musterstraße 123<br />12345 Musterstadt<br />Deutschland</p>, bg: 'bg-[#F5F2EB]/10 border-[#F5F2EB]/20', iconColor: 'text-[#F5F2EB]' }
                  ].map((item, i) => (
                    <motion.div 
                      key={item.title}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + i * 0.15, type: "spring", stiffness: 70 }}
                    >
                      <motion.div 
                        className={`p-3 ${item.bg} border`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.9 + i * 0.15, type: "spring", stiffness: 150 }}
                      >
                        <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                      </motion.div>
                      <div>
                        <h3 className="font-bold mb-1">{item.title}</h3>
                        {item.content}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div 
                className="bg-[#F5F2EB]/5 border border-[#F5F2EB]/10 p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.3, type: "spring", stiffness: 60 }}
              >
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
              </motion.div>

              {/* Map */}
              <LocationMap />

              <motion.div 
                className="bg-gradient-to-br from-[#C8A850]/10 to-[#3B5BDB]/10 border border-[#F5F2EB]/10 p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.5, type: "spring", stiffness: 60 }}
              >
                <h3 className="text-2xl font-bold mb-4">Schnelle Antwort</h3>
                <p className="text-[#F5F2EB]/70 mb-4">
                  Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.
                </p>
                <ul className="space-y-2 text-sm text-[#F5F2EB]/60">
                  {['Kostenlose Erstberatung', 'Unverbindliches Angebot', 'Persönliche Betreuung'].map((text, i) => (
                    <motion.li 
                      key={text}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 1.6 + i * 0.1 }}
                    >
                      <CheckCircle className="w-4 h-4 text-[#C8A850]" />
                      {text}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}