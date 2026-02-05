import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout({ children, currentPageName }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: 'Home' },
    { name: 'Handwerk', path: 'Handwerk' },
    { name: 'Engineering', path: 'Engineering' },
    { name: 'Kontakt', path: 'Kontakt' }
  ];

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
        
        * {
          font-feature-settings: 'ss01' on;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#F5F2EB]/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <Link to={createPageUrl('Home')} className="text-2xl font-bold tracking-tighter hover:text-[#C8A850] transition-colors">
            LUCKYTECH
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={createPageUrl(item.path)}
                className={`text-sm uppercase tracking-wider hover:text-[#C8A850] transition-colors ${
                  currentPageName === item.path ? 'text-[#C8A850]' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
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
                    className={`block text-2xl uppercase tracking-wider hover:text-[#C8A850] transition-colors ${
                      currentPageName === item.path ? 'text-[#C8A850]' : ''
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

      {/* Footer */}
      <footer className="border-t border-[#F5F2EB]/10 mt-32">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">LUCKYTECH</h3>
              <p className="text-sm text-[#F5F2EB]/60">
                Wo Handwerk auf Innovation trifft
              </p>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-wider mb-4 text-[#C8A850]">Handwerk</h4>
              <ul className="space-y-2 text-sm text-[#F5F2EB]/60">
                <li>Smarthome Installation</li>
                <li>Wallbox Installation</li>
                <li>Kabelverlegung</li>
                <li>Reparaturen</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-wider mb-4 text-[#3B5BDB]">Engineering</h4>
              <ul className="space-y-2 text-sm text-[#F5F2EB]/60">
                <li>Prototypenbau</li>
                <li>Produktentwicklung</li>
                <li>Creative Thinking</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#F5F2EB]/10 text-center text-sm text-[#F5F2EB]/40">
            © 2026 LuckyTech. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
}