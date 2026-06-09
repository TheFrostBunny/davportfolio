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
    responseTime: 'Responstid',
    currentFocus: 'Nåværende Fokus',
    locationValue: 'Oslo, Norge',
    responseTimeValue: 'Innen 24 timer',
    currentFocusValue: 'Fullstack Utvikling',
  },
  en: {
    title: 'Let\'s Connect',
    subtitle: 'Have a project in mind or just want to say hi? I\'m always open to discussing new ideas and collaborations.',
    contactInfo: 'Contact Information',
    socialPresence: 'Social Presence',
    location: 'Location',
    responseTime: 'Response Time',
    currentFocus: 'Current Focus',
    locationValue: 'Oslo, Norway',
    responseTimeValue: 'Within 24 hours',
    currentFocusValue: 'Fullstack Development',
  },
};

export default function ContactSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/TheFrostBunny' },
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'Email', icon: Mail, url: 'mailto:hello@example.com' },
  ];

  return (
    <section className="relative py-32 bg-background/50">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full mb-6 mx-auto"></div>
          <p className="text-gray-400 text-lg max-w-2xl font-light mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-xs font-bold text-blue-500 uppercase tracking-[0.2em]">{t.contactInfo}</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-blue-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{t.location}</p>
                  <p className="text-white font-light">{t.locationValue}</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-blue-400">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{t.responseTime}</p>
                  <p className="text-white font-light">{t.responseTimeValue}</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-blue-400">
                  <Zap size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{t.currentFocus}</p>
                  <p className="text-white font-light">{t.currentFocusValue}</p>
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
            className="space-y-8"
          >
            <h3 className="text-xs font-bold text-blue-500 uppercase tracking-[0.2em]">{t.socialPresence}</h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                    className="p-6 bg-white/5 border border-white/10 rounded-xl flex flex-col items-center justify-center gap-3
                      text-white hover:border-blue-500/30 transition-all duration-300"
                  >
                    <Icon size={24} />
                    <span className="text-sm font-semibold text-center">{link.name}</span>
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
