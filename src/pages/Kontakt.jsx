import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import SuccessOverlay from '../components/kontakt/SuccessOverlay';
import HeroBackground from '../components/home/HeroBackground';

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service_type: '', message: ''
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
        if (value.trim().length < 2) return 'Mind. 2 Zeichen';
        return '';
      case 'email':
        if (!value.trim()) return 'E-Mail ist erforderlich';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Ungültige E-Mail';
        return '';
      case 'phone':
        if (value && !/^[+]?[\d\s()-]{6,}$/.test(value)) return 'Ungültige Nummer';
        return '';
      case 'service_type':
        if (!value) return 'Bitte wählen';
        return '';
      case 'message':
        if (!value.trim()) return 'Nachricht ist erforderlich';
        if (value.trim().length < 10) return 'Mind. 10 Zeichen';
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
    Object.keys(formData).forEach((key) => {
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

  const FieldError = ({ name }) =>
  <AnimatePresence>
      {touched[name] && errors[name] &&
    <motion.div
      className="flex items-center gap-1 mt-1 text-red-400 text-xs"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.2 }}>

          <AlertCircle className="w-3 h-3 flex-shrink-0" />
          <span>{errors[name]}</span>
        </motion.div>
    }
    </AnimatePresence>;


  const fc = (name) =>
  `bg-white/5 border-white/10 text-[#F5F2EB] focus:border-[#C8A850] transition-colors backdrop-blur-sm h-9 text-sm ${
  touched[name] && errors[name] ? 'border-red-400/60' : ''} ${
  touched[name] && !errors[name] && formData[name] ? 'border-green-500/40' : ''}`;

  return (
    <div className="bg-[#0A0A0A] h-[calc(100vh-80px)] overflow-hidden relative">
      <SuccessOverlay show={showOverlay} onClose={() => setShowOverlay(false)} />
      
      {/* Animated background like homepage */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <HeroBackground />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto w-full">
          {/* Header */}
          <motion.div
            className="text-center mb-6 md:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none mb-2">
              <span className="bg-transparent text-slate-100 from-[#C8A850] to-[#3B5BDB]">LET'S TALK

              </span>
            </h1>
            <p className="text-sm md:text-base text-[#F5F2EB]/50">
              Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Form — takes 3 cols */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3 bg-white/[0.03] border border-white/10 backdrop-blur-md p-5 md:p-6 rounded-xl">

              {isSuccess &&
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-3 p-2.5 bg-green-500/10 border border-green-500/20 flex items-center gap-2 rounded text-sm">

                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <p className="text-green-500">Vielen Dank! Wir melden uns in Kürze.</p>
                </motion.div>
              }

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <Label className="text-[#F5F2EB]/70 mb-1 block text-xs">Name *</Label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleFieldChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      className={fc('name')}
                      placeholder="Ihr Name" />

                    <FieldError name="name" />
                  </div>
                  <div>
                    <Label className="text-[#F5F2EB]/70 mb-1 block text-xs">E-Mail *</Label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleFieldChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      className={fc('email')}
                      placeholder="ihre@email.de" />

                    <FieldError name="email" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <Label className="text-[#F5F2EB]/70 mb-1 block text-xs">Telefon</Label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleFieldChange('phone', e.target.value)}
                      onBlur={() => handleBlur('phone')}
                      className={fc('phone')}
                      placeholder="+49 123 456789" />

                    <FieldError name="phone" />
                  </div>
                  <div>
                    <Label className="text-[#F5F2EB]/70 mb-1 block text-xs">Interessengebiet *</Label>
                    <Select
                      value={formData.service_type}
                      onValueChange={(value) => {
                        handleFieldChange('service_type', value);
                        setTouched({ ...touched, service_type: true });
                      }}>

                      <SelectTrigger className={fc('service_type')}>
                        <SelectValue placeholder="Bitte wählen" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0A0A0A] border-white/20">
                        <SelectItem value="handwerk">Handwerk</SelectItem>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="beide">Beide Bereiche</SelectItem>
                      </SelectContent>
                    </Select>
                    <FieldError name="service_type" />
                  </div>
                </div>

                <div>
                  <Label className="text-[#F5F2EB]/70 mb-1 block text-xs">Nachricht *</Label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleFieldChange('message', e.target.value)}
                    onBlur={() => handleBlur('message')}
                    className={`${fc('message')} min-h-[140px] md:min-h-[180px]`}
                    placeholder="Beschreiben Sie Ihr Projekt..." />

                  <FieldError name="message" />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting} className="bg-[#ffffff] text-gray-950 px-4 py-5 text-sm font-bold uppercase tracking-wider rounded-md inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow hover:bg-primary/90 h-9 w-full from-[#C8A850] to-[#3B5BDB] hover:opacity-90">


                  {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </motion.div>

            {/* Right side — Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-2 flex flex-col gap-4">

              {/* Contact cards */}
              {[
              { icon: Mail, title: 'E-Mail', value: 'info@luckytech.de', href: 'mailto:info@luckytech.de', accent: '#C8A850' },
              { icon: Phone, title: 'Telefon', value: '+49 123 456 7890', href: 'tel:+491234567890', accent: '#3B5BDB' },
              { icon: MapPin, title: 'Standort', value: 'Musterstraße 123, 12345 Musterstadt', accent: '#F5F2EB' }].
              map((c, i) =>
              <motion.div
                key={c.title}
                className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-xl"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}>

                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: c.accent + '15', border: `1px solid ${c.accent}30` }}>
                    <c.icon className="w-4 h-4" style={{ color: c.accent }} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-white/40">{c.title}</div>
                    {c.href ?
                  <a href={c.href} className="text-sm text-white/80 hover:text-white transition-colors truncate block">{c.value}</a> :

                  <p className="text-sm text-white/80 truncate">{c.value}</p>
                  }
                  </div>
                </motion.div>
              )}

              {/* Opening hours */}
              <motion.div
                className="p-4 bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-xl"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}>

                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-[#C8A850]" />
                  <h3 className="font-bold text-sm">Öffnungszeiten</h3>
                </div>
                <div className="space-y-1.5 text-xs text-[#F5F2EB]/60">
                  <div className="flex justify-between">
                    <span>Mo – Fr</span>
                    <span className="font-bold text-[#F5F2EB]/80">08:00 – 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samstag</span>
                    <span className="font-bold text-[#F5F2EB]/80">09:00 – 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sonntag</span>
                    <span className="font-bold text-[#F5F2EB]/80">Geschlossen</span>
                  </div>
                </div>
              </motion.div>

              {/* Quick info */}
              <motion.div
                className="p-4 bg-gradient-to-br from-[#C8A850]/5 to-[#3B5BDB]/5 border border-white/10 backdrop-blur-md rounded-xl"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}>

                <div className="space-y-2">
                  {['Kostenlose Erstberatung', 'Antwort in 24h', 'Persönliche Betreuung'].map((text) =>
                  <div key={text} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#C8A850] flex-shrink-0" />
                      <span className="text-xs text-[#F5F2EB]/60">{text}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>);

}