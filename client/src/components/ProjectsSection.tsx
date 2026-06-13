import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import GlassCard from './GlassCard';
import { Github, ExternalLink, Code2, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import projectsData from '@/data/projects.json';

const translations = {
  no: {
    title: 'Valgte Prosjekter',
    subtitle: 'Et kuratert utvalg av mine tekniske utforskninger og forskningsprosjekter.',
  },
  en: {
    title: 'Selected Projects',
    subtitle: 'A curated selection of my technical explorations and research projects.',
  },
};

interface Project {
  id: string;
  nameNo: string;
  nameEn: string;
  descriptionNo: string;
  descriptionEn: string;
  status: 'Active' | 'Completed' | 'Experimental' | 'Archived';
  technologies: string[];
  keyLearningNo: string;
  keyLearningEn: string;
  innovationScore: number;
  github?: string;
  demo?: string;
  url?: string;
}

const projects = projectsData as Project[];

const statusColors = {
  Active: 'text-emerald-400 bg-emerald-500/10',
  Completed: 'text-blue-400 bg-blue-500/10',
  Experimental: 'text-amber-400 bg-amber-500/10',
  Archived: 'text-slate-400 bg-slate-500/10',
};

export default function ExperimentArchive() {
  const [, navigate] = useLocation();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative py-20 sm:py-32">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full mb-6"></div>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl font-light">
            {t.subtitle}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard
                delay={0}
                hover
                className="h-full flex flex-col p-4 sm:p-6 md:p-8 border-white/5 hover:border-blue-500/30 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-4 sm:mb-6 gap-3">
                  <div className="p-2 bg-blue-500/10 rounded-lg flex-shrink-0">
                    <Code2 size={18} className="text-blue-400" />
                  </div>
                  <span
                    className={`px-2 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider flex-shrink-0 ${
                      statusColors[project.status]
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {language === 'no' ? project.nameNo : project.nameEn}
                </h3>
                
                <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed font-light line-clamp-3">
                  {language === 'no' ? project.descriptionNo : project.descriptionEn}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[8px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 sm:py-1 bg-white/5 border border-white/10 rounded text-gray-400 font-mono whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto space-y-4 sm:space-y-6">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <Zap size={12} className="text-amber-400" />
                      <span className="text-[8px] sm:text-[10px] text-gray-500 font-bold uppercase tracking-widest">Innovation</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 sm:w-3 h-0.5 sm:h-1 rounded-full ${
                            i < Math.round(project.innovationScore / 2) ? 'bg-blue-500' : 'bg-white/10'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 pt-4 sm:pt-6 border-t border-white/5">
                    {typeof project.url === 'string' ? (
                      <motion.button
                        onClick={() => {
                          if (project.url) {
                            navigate(project.url);
                          }
                        }}
                        whileHover={{ x: 3 }}
                        className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 text-white hover:text-blue-400 transition-colors text-[10px] sm:text-xs font-bold uppercase tracking-widest cursor-pointer bg-none border-none p-0 py-2 sm:py-0"
                      >
                        Details
                        <ExternalLink size={12} />
                      </motion.button>
                    ) : null}
                    {project.demo ? (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ x: 3 }}
                        className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 text-white hover:text-blue-400 transition-colors text-[10px] sm:text-xs font-bold uppercase tracking-widest py-2 sm:py-0"
                      >
                        Demo
                        <ExternalLink size={12} />
                      </motion.a>
                    ) : null}
                    {project.github ? (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ x: 3 }}
                        className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 text-gray-500 hover:text-white transition-colors text-[10px] sm:text-xs font-bold uppercase tracking-widest py-2 sm:py-0"
                      >
                        Source
                        <Github size={12} />
                      </motion.a>
                    ) : null}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
