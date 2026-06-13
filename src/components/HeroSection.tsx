import { motion } from 'framer-motion';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  no: {
    greeting: 'Hei, jeg er',
    name: 'David',
    titles: [
      'Bygger Moderne Nettsider',
      'Utforsker Nye Teknologier',
      'Innoverer Gjennom Kode',
    ],
    subtitle: 'Fullstack Utvikler. Jeg spesialiserer meg i webdesign og utvikling med fokus på brukeropplevelse og moderne teknologi.',
    cta1: 'Se Prosjekter',
    cta2: 'Min Reise',
    scroll: 'Utforsk',
  },
  en: {
    greeting: 'Hi, I\'m',
    name: 'David',
    titles: [
      'Building Modern Websites',
      'Exploring New Technologies',
      'Innovating Through Code',
    ],
    subtitle: 'Fullstack Developer. I specialize in web design and development with focus on user experience and modern technology.',
    cta1: 'View Projects',
    cta2: 'My Journey',
    scroll: 'Explore',
  },
};

export default function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const displayText = useTypingEffect(t.titles, 80, 40, 3000);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      <motion.div
        className="relative z-10 container max-w-5xl mx-auto px-4 sm:px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name/Branding */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-blue-500 font-mono text-sm tracking-widest uppercase">{t.name}</span>
        </motion.div>

        {/* Main headline */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight text-white">
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-blue-500 ml-1"
            >
              _
            </motion.span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.div variants={itemVariants} className="mb-12 max-w-3xl">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed font-light">
            {t.subtitle}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-5 mb-20"
        >
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: '#3b82f6' }}
            whileTap={{ scale: 0.98 }}
            className="px-6 sm:px-10 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-full text-sm sm:text-base
              transition-all duration-300 shadow-lg shadow-blue-500/20 w-full sm:w-auto"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t.cta1}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02, borderColor: '#60a5fa', backgroundColor: 'rgba(255,255,255,0.05)' }}
            whileTap={{ scale: 0.98 }}
            className="px-6 sm:px-10 py-3 sm:py-4 border border-gray-700 text-white font-semibold rounded-full text-sm sm:text-base
              transition-all duration-300 w-full sm:w-auto"
            onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t.cta2}
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-3 text-gray-500"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs uppercase tracking-[0.2em] font-medium">{t.scroll}</span>
          <ArrowDown size={18} className="text-blue-500" />
        </motion.div>
      </motion.div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] -z-0 pointer-events-none" />
    </section>
  );
}
