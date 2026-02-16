// src/Layout.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Modal({ open, title, children, onClose }) {
  const overlayRef = useRef(null);
  const closeBtnRef = useRef(null);
  const lastActiveRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    if (open) {
      lastActiveRef.current = document.activeElement;
      document.addEventListener('keydown', onKey);
      // focus the close button after a tick
      setTimeout(() => closeBtnRef.current && closeBtnRef.current.focus(), 0);
      // prevent background scroll
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      // restore focus
      if (lastActiveRef.current && typeof lastActiveRef.current.focus === 'function') {
        lastActiveRef.current.focus();
      }
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 12 }}
        className="relative z-10 max-w-3xl w-full bg-[#0A0A0A] border border-white/8 rounded-lg shadow-lg p-6 text-white"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            aria-label="Schließen"
            className="ml-auto text-white/80 hover:text-white rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#C8A850]/40"
          >
            ✕
          </button>
        </div>

        <div className="mt-4 text-sm leading-relaxed">
          {children}
        </div>

        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 bg-[#C8A850] text-black font-semibold px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#C8A850]/40"
          >
            Schließen
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default function Layout({ children, currentPageName }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Footer modals
  const [impressumOpen, setImpressumOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: 'Home' },
    { name: 'Handwerk', path: 'Handwerk' },
    { name: 'Ingenieurskunst', path: 'Engineering' },
    { name: 'About', path: 'About' },
    { name: 'Kontakt', path: 'Kontakt' }
  ];

  // Beispieltexte für Impressum und Datenschutz. Ersetze durch deine echten Inhalte.
  const impressumText = (
    <>
      <p className="mb-2"><strong>LuckyTech</strong></p>
      <p className="mb-2">Im Rappen 11<br/>74388 Talheim</p>
      <p className="mb-2">Geschäftsführer: Achim Kolb</p>
      <p className="mb-2">Kontakt: info.luckytech@icloud.com</p>
      <p className="text-xs text-white/60 mt-4">Trotz sorgfältiger Kontrolle übernehme ich keine Haftung für die Inhalte externer Links. Für den Inhalt verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich.</p>
    </>
  );

const privacyText = (
  <div className="space-y-3">
    <p className="font-semibold">1. Verantwortlicher</p>
    <p>
      LuckyTech<br />
      Inhaber: Achim Kolb<br />
      Im Rappen 11, 74388 Talheim<br />
      Telefon: 0179 2612732<br />
      E‑Mail: info.luckytech@icloud.com
    </p>

    <p className="font-semibold">2. Allgemeine Hinweise</p>
    <p>
      Der Schutz Ihrer personenbezogenen Daten ist mir wichtig. Daten werden ausschließlich gemäß DSGVO verarbeitet. Es werden keine Cookies, Analyse‑Tools oder eingebetteten Inhalte eingesetzt.
    </p>

    <p className="font-semibold">3. Webhosting bei STRATO</p>
    <p>
      Beim Aufruf der Website erhebt STRATO automatisch Server‑Logfiles (anonymisiert): IP‑Adresse, Datum/Uhrzeit, Browser, Betriebssystem, besuchte Seiten. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
    </p>

    <p className="font-semibold">4. Kontaktformular</p>
    <p>
      Daten aus dem Kontaktformular (Name, E‑Mail, Telefonnummer, Nachricht) werden zur Bearbeitung Ihrer Anfrage verarbeitet. Rechtsgrundlagen: Art. 6 Abs. 1 lit. b &amp; f DSGVO.
    </p>

    <p className="font-semibold">5. Nutzung von sevDesk</p>
    <p>
      Für Rechnungs‑ und Angebotsverwaltung nutze ich sevDesk (sevDesk GmbH, Offenburg). Es besteht ein Auftragsverarbeitungsvertrag. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.
    </p>

    <p className="font-semibold">6. Ihre Rechte</p>
    <p>
      Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch sowie das Recht auf Beschwerde bei einer Aufsichtsbehörde.
    </p>

    <p className="font-semibold">7. Aktualität</p>
    <p>Stand: 2025</p>
  </div>
);


  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F2EB]">
      <style>{`
        :root {
          --color-dark: #0A0A0A;
          --color-light: #F5F2EB;
          --color-accent-gold: #C8A850;
          --color-accent-blue: #3B5BDB;
        }
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
        * { font-feature-settings: 'ss01' on; }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#F5F2EB]/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <Link to={createPageUrl('Home')} className="text-2xl font-bold tracking-tighter hover:text-white/70 transition-colors">
            LUCKYTECH
          </Link>

          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={createPageUrl(item.path)}
                className={`text-sm uppercase tracking-wider hover:text-white/70 transition-colors ${
                  currentPageName === item.path ? 'text-white' : 'text-white/60'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Navigation öffnen"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-[#0A0A0A] border-t border-[#F5F2EB]/10"
            >
              <div className="px-6 py-8 space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={createPageUrl(item.path)}
                    onClick={() => setMenuOpen(false)}
                    className={`block text-2xl uppercase tracking-wider hover:text-white/70 transition-colors ${
                      currentPageName === item.path ? 'text-white' : 'text-white/60'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer minimal mit Modal Links */}
      <footer className="border-t border-[#F5F2EB]/10 mt-32">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-1">LUCKYTECH</h3>
              <p className="text-sm text-[#F5F2EB]/60">Elektrotechnik + Ingenieurskunst</p>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setImpressumOpen(true)}
                className="text-sm text-white/70 hover:text-white underline focus:outline-none focus:ring-2 focus:ring-[#C8A850]/40 px-2 py-1 rounded"
                aria-haspopup="dialog"
              >
                Impressum
              </button>

              <button
                onClick={() => setPrivacyOpen(true)}
                className="text-sm text-white/70 hover:text-white underline focus:outline-none focus:ring-2 focus:ring-[#C8A850]/40 px-2 py-1 rounded"
                aria-haspopup="dialog"
              >
                Datenschutz
              </button>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#F5F2EB]/10 text-center text-sm text-[#F5F2EB]/40">
            © {new Date().getFullYear()} LuckyTech. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>

      {/* Modals */}
      <AnimatePresence>
        {impressumOpen && (
          <Modal title="Impressum" open={impressumOpen} onClose={() => setImpressumOpen(false)}>
            {impressumText}
          </Modal>
        )}

        {privacyOpen && (
          <Modal title="Datenschutzerklärung" open={privacyOpen} onClose={() => setPrivacyOpen(false)}>
            {privacyText}
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}
