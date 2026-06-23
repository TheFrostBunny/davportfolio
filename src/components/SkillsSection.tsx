import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Skills, { categories } from '@/data/Skills';

export default function SkillsGalaxy() {
  const { language } = useLanguage();
  const t = Skills[language];
  const skills = t.skills;

  return (
    <section className="relative py-20 sm:py-32 bg-background">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 sm:gap-x-16 gap-y-12 sm:gap-y-16">
          {categories.map((category, categoryIndex) => {
            const categorySkills = skills.filter((s) => s.category === category);

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xs font-bold text-blue-500 uppercase tracking-[0.2em] mb-6 sm:mb-10">
                  {t.categories[category as keyof typeof t.categories] || category}
                </h3>

                <div className="space-y-6 sm:space-y-8">
                  {categorySkills.map((skill, index) => (
                    <div key={skill.name} className="group">
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <h4 className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-[9px] sm:text-[10px] font-mono text-muted-foreground ml-2 flex-shrink-0">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="w-full bg-white/5 dark:bg-white/5 light:bg-black/5 rounded-full h-[2px] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.2, delay: index * 0.1, ease: 'easeOut' }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-blue-600 to-blue-400 h-full rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
