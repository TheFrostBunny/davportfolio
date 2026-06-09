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
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection('#home')}
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-white font-mono text-sm font-bold">
            <span className="text-blue-500">TFB</span>.LAB
          </span>
        </motion.div>

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
          className="text-xs uppercase tracking-widest text-gray-400 hover:text-blue-500 transition-colors font-medium"
          whileHover={{ scale: 1.1 }}
        >
          {language === 'no' ? 'EN' : 'NO'}
        </motion.button>
      </div>
    </motion.nav>
  );
}
