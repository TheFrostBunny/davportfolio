import { motion } from 'framer-motion';
import { Code, Shield, Cpu, Brain, Rocket, Briefcase } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import TimeLine from "../data/Timeline";

const icons = [Code, Shield, Cpu, Brain, Rocket, Briefcase];

export default function TimelineSection() {
  const { language } = useLanguage();
  const t = TimeLine[language];

  return (
    <section id="journey" className="relative py-20 sm:py-32 bg-background">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-24 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full mb-6 mx-auto"></div>
          <p className="text-muted-foreground text-base sm:text-lg font-light">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 left-[calc(1.25rem-2px)] sm:left-1/2 sm:-translate-x-1/2" />

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
                  className="relative"
                >
                  <div className="sm:hidden flex items-start gap-4">
                    <div className="flex-shrink-0 relative z-10">
                      <motion.div
                        className="w-10 h-10 bg-background border-2 border-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50"
                        whileHover={{ scale: 1.2 }}
                      >
                        <Icon className="text-blue-500" size={18} />
                      </motion.div>
                    </div>
                    <div className="flex-1 pt-1">
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="bg-card border border-white/5 dark:border-white/5 hover:border-blue-500/30 rounded-lg p-4 transition-all duration-500"
                      >
                        <div className="text-blue-500 font-mono text-xs font-bold mb-2">
                          {event.year}
                        </div>
                        <h3 className="text-foreground font-bold text-base mb-2">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          {event.description}
                        </p>
                      </motion.div>
                    </div>
                  </div>

                  <div className={`hidden sm:flex items-center gap-8 md:gap-12 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="flex-1">
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="bg-card border border-white/5 dark:border-white/5 hover:border-blue-500/30 rounded-lg p-6 md:p-8 transition-all duration-500"
                      >
                        <div className="text-blue-500 font-mono text-sm font-bold mb-2">
                          {event.year}
                        </div>
                        <h3 className="text-foreground font-bold text-lg md:text-xl mb-3">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                          {event.description}
                        </p>
                      </motion.div>
                    </div>

                    <div className="flex-shrink-0 relative z-10">
                      <motion.div
                        className="w-12 h-12 bg-background border-2 border-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50"
                        whileHover={{ scale: 1.2 }}
                      >
                        <Icon className="text-blue-500" size={20} />
                      </motion.div>
                    </div>

                    <div className="flex-1" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
