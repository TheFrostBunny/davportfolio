import { motion } from 'framer-motion';
import { Code, Shield, Cpu, Brain, Rocket, Briefcase } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  no: {
    title: 'Min Reise',
    subtitle: 'Utvikling gjennom læring og erfaring',
    events: [
      {
        year: '2024-2025',
        title: 'Videregående - Informasjonsteknologi',
        description: 'Startet på videregående i Informasjonsteknologi og medieproduksjon hvor jeg lærte om webdev og bygget første interaktive prosjekter.',
      },
      {
        year: '2025-2026',
        title: 'Andre År - Informasjonsteknologi',
        description: 'Fortsatte på andre året av videregående i Informasjonsteknologi med fokus på dypere tekniske ferdigheter.',
      },
      {
        year: '2026-2028',
        title: 'Læring hos Norseye',
        description: 'Læring og praktisk erfaring hos Norseye fra sommeren 2026 til 2028.',
      },
    ],
  },
  en: {
    title: 'My Journey',
    subtitle: 'Development through learning and experience',
    events: [
      {
        year: '2024',
        title: 'Secondary School - Information Technology',
        description: 'Started secondary school in Information Technology and Media Production where I learned about web development and built first interactive projects.',
      },
      {
        year: '2025',
        title: 'Second Year - Information Technology',
        description: 'Continued second year of secondary school in Information Technology with focus on deeper technical skills.',
      },
      {
        year: '2026-2028',
        title: 'Apprenticeship at Norseye',
        description: 'Learning and practical experience at Norseye from summer 2026 to 2028.',
      },
    ],
  },
};

const icons = [Code, Shield, Cpu, Brain, Rocket, Briefcase];

export default function TimelineSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="journey" className="relative py-20 sm:py-32 bg-background/30">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6">
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
          <p className="text-gray-400 text-base sm:text-lg font-light">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Timeline with central line */}
        <div className="relative">
          {/* Central vertical line - hidden on mobile */}
          <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500" />

          {/* Timeline events */}
          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {t.events.map((event, index) => {
              const Icon = icons[index];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex sm:${isEven ? 'flex-row' : 'flex-row-reverse'} flex-col items-start sm:items-center gap-4 sm:gap-8 md:gap-12`}
                >
                  {/* Timeline node - left on mobile, centered on desktop */}
                  <div className="flex-shrink-0 relative z-10">
                    <motion.div
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-background border-2 border-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50"
                      whileHover={{ scale: 1.2 }}
                    >
                      <Icon className="text-blue-500" size={18} />
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 pl-4 sm:pl-0">
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="bg-card border border-white/5 hover:border-blue-500/30 rounded-lg p-4 sm:p-6 md:p-8 transition-all duration-500"
                    >
                      <div className="text-blue-500 font-mono text-xs sm:text-sm font-bold mb-2">
                        {event.year}
                      </div>
                      <h3 className="text-white font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3">
                        {event.title}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
                        {event.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Spacer for right side alignment - hidden on mobile */}
                  <div className="hidden sm:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
