import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, MapPin, Clock, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  no: {
    title: 'La Oss Koble Oss',
    subtitle: 'Har du et prosjekt i tankene eller vil bare si hei? Jeg er alltid åpen for å diskutere nye idéer og samarbeid.',
    contactInfo: 'Kontaktinformasjon',
    socialPresence: 'Sosial Tilstedeværelse',
    location: 'Sted',
    currentFocus: 'Nåværende Fokus',
    locationValue: 'Kristiansund, Norge',
    currentFocusValue: 'Fullstack Utvikling',
  },
  en: {
    title: 'Let\'s Connect',
    subtitle: 'Have a project in mind or just want to say hi? I\'m always open to discussing new ideas and collaborations.',
    contactInfo: 'Contact Information',
    socialPresence: 'Social Presence',
    location: 'Location',
    currentFocus: 'Current Focus',
    locationValue: 'Kristiansund, Norway',
    currentFocusValue: 'Fullstack Development',
  },
};

export default function ContactSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/TheFrostBunny' },
    { name: 'Email', icon: Mail, url: 'mailto:david.aa.leren@gmail.com' },
  ];

  return (
    <section className="relative py-20 sm:py-32 bg-background/50">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-24 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full mb-6 mx-auto"></div>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl font-light mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <h3 className="text-xs font-bold text-blue-500 uppercase tracking-[0.2em]">{t.contactInfo}</h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start sm:items-center gap-4 sm:gap-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/5 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{t.location}</p>
                  <p className="text-white font-light text-sm">{t.locationValue}</p>
                </div>
              </div>
              <div className="flex items-start sm:items-center gap-4 sm:gap-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/5 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <Zap size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{t.currentFocus}</p>
                  <p className="text-white font-light text-sm">{t.currentFocusValue}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <h3 className="text-xs font-bold text-blue-500 uppercase tracking-[0.2em]">{t.socialPresence}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                    className="p-4 sm:p-6 bg-white/5 border border-white/10 rounded-xl flex flex-col items-center justify-center gap-2 sm:gap-3
                      text-white hover:border-blue-500/30 transition-all duration-300"
                  >
                    <Icon size={22} />
                    <span className="text-xs sm:text-sm font-semibold text-center">{link.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
