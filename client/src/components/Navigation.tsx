import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  no: {
    home: 'Hjem',
    timeline: 'Reise',
    projects: 'Prosjekter',
    skills: 'Ferdigheter',
    contact: 'Kontakt',
  },
  en: {
    home: 'Home',
    timeline: 'Journey',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
  },
};

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[language];

  const navItems = [
    { label: t.home, href: '#home' },
    { label: t.timeline, href: '#timeline' },
    { label: t.projects, href: '#projects' },
    { label: t.skills, href: '#skills' },
    { label: t.contact, href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/70 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors font-medium"
              whileHover={{ scale: 1.1 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Language Toggle */}
        <motion.button
          onClick={() => setLanguage(language === 'no' ? 'en' : 'no')}
          className="inline-flex items-center justify-center rounded-md p-1.5 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400/40 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.96 }}
          aria-label={language === 'no' ? 'Switch to English' : 'Bytt til norsk'}
          title={language === 'no' ? 'Switch to English' : 'Bytt til norsk'}
        >
          {language === 'no' ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 60 36"
              className="h-4 w-6 rounded-[2px] shadow-sm"
            >
              <rect width="60" height="36" fill="#012169" />
              <path d="M0 0L60 36M60 0L0 36" stroke="#fff" strokeWidth="7" />
              <path d="M0 0L60 36M60 0L0 36" stroke="#C8102E" strokeWidth="4" />
              <path d="M30 0v36M0 18h60" stroke="#fff" strokeWidth="12" />
              <path d="M30 0v36M0 18h60" stroke="#C8102E" strokeWidth="7" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 22 16"
              className="h-4 w-6 rounded-[2px] shadow-sm"
            >
              <rect width="22" height="16" fill="#BA0C2F" />
              <path d="M0 7h22M8 0v16" stroke="#fff" strokeWidth="4" />
              <path d="M0 7h22M8 0v16" stroke="#00205B" strokeWidth="2" />
            </svg>
          )}
        </motion.button>
      </div>
    </motion.nav>
  );
}
