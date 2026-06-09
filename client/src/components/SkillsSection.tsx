import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  no: {
    title: 'Teknisk Arsenal',
    subtitle: 'En omfattende oversikt over teknologiene jeg bruker for å bringe idéer til liv.',
    categories: {
      Frontend: 'Frontend',
      Backend: 'Backend',
      DevOps: 'DevOps',
      Emerging: 'Fremvoksende',
    },
  },
  en: {
    title: 'Technical Arsenal',
    subtitle: 'A comprehensive overview of the technologies I use to bring ideas to life.',
    categories: {
      Frontend: 'Frontend',
      Backend: 'Backend',
      DevOps: 'DevOps',
      Emerging: 'Emerging',
    },
  },
};

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
  { name: 'JavaScript', level: 95, category: 'Frontend' },

  // Backend
  { name: 'Node.js', level: 90, category: 'Backend' },
  { name: 'Python', level: 92, category: 'Backend' },
  { name: 'MySQL', level: 85, category: 'Backend' },
  { name: 'PostgreSQL', level: 80, category: 'Backend' },
  { name: "C#", level: 60, category: 'Backend' },
  { name: 'Database Design', level: 88, category: 'Backend' },
  { name: 'REST APIs', level: 90, category: 'Backend' },

  // DevOps
  { name: 'Docker', level: 82, category: 'DevOps' },
  { name: 'Linux', level: 88, category: 'DevOps' },
  { name: 'Git', level: 90, category: 'DevOps' },
];

const categories = ['Frontend', 'Backend', 'DevOps'];

export default function SkillsGalaxy() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative py-32 bg-background">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl font-light">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {categories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(s => s.category === category);
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xs font-bold text-blue-500 uppercase tracking-[0.2em] mb-10">{t.categories[category as keyof typeof t.categories] || category}</h3>
                <div className="space-y-8">
                  {categorySkills.map((skill, index) => (
                    <div key={skill.name} className="group">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">{skill.name}</h4>
                        <span className="text-[10px] font-mono text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/5 rounded-full h-[2px] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
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
