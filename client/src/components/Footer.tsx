import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  no: {
    tagline: 'Kreativ Utvikler & Forsker',
    home: 'Hjem',
    projects: 'Prosjekter',
    contact: 'Kontakt',
    copyright: 'Laget med Presisjon & Passion',
  },
  en: {
    tagline: 'Creative Developer & Researcher',
    home: 'Home',
    projects: 'Projects',
    contact: 'Contact',
    copyright: 'Crafted with Precision & Passion',
  },
};


export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-20 bg-background border-t border-white/5">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Branding */}
          <div className="text-center md:text-left">
            <div className="text-xl font-bold tracking-tighter text-white mb-3">
              <span className="text-blue-500">TFB</span>.LAB
            </div>
            <p className="text-gray-500 text-xs font-medium uppercase tracking-[0.2em]">
              {t.tagline}
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-10">
            <a href="#home" className="text-gray-500 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">{t.home}</a>
            <a href="#projects" className="text-gray-500 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">{t.projects}</a>
            <a href="#contact" className="text-gray-500 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">{t.contact}</a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              © {currentYear} TheFrostBunny
            </p>
            <p className="text-gray-600 text-[9px] font-medium uppercase tracking-[0.1em]">
              {t.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
