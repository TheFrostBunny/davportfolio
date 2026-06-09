import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import GlassCard from './GlassCard';
import { Github, ExternalLink, Code2, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

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

/**
 * Experiment Archive Component - Profile Edition
 * 
 * Design:
 * - Clean grid layout
 * - Subtle hover effects
 * - Professional status badges
 * - Clear hierarchy
 */

interface Project {
  id: string;
  name: string;
  description: string;
  status: 'Active' | 'Completed' | 'Experimental' | 'Archived';
  technologies: string[];
  keyLearning: string;
  innovationScore: number;
  github?: string;
  url?: string;
}

const projects: Project[] = [
  {
    id: '1',
    name: 'Sikkerhetslab',
    description: 'Security research laboratory for vulnerability testing and exploitation',
    status: 'Active',
    technologies: ['Python', 'Bash', 'Docker', 'Penetration Testing'],
    keyLearning: 'Advanced network security and ethical hacking techniques',
    innovationScore: 9,
  },
  {
    id: '2',
    name: 'HTML4Hacker',
    description: 'Educational platform teaching HTML and web security fundamentals',
    status: 'Completed',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Web Security'],
    keyLearning: 'Effective technical education and community engagement',
    innovationScore: 7,
  },
  {
    id: '3',
    name: 'Elemental-Realms',
    description: 'Fantasy RPG game engine with dynamic element system',
    status: 'Active',
    technologies: ['Unity', 'C#', 'Game Design', 'Physics'],
    keyLearning: 'Complex game mechanics and player engagement systems',
    innovationScore: 8,
  },
  {
    id: '4',
    name: 'KySI',
    description: 'Advanced AI chatbot with natural language processing',
    status: 'Experimental',
    technologies: ['Python', 'TensorFlow', 'NLP', 'FastAPI'],
    keyLearning: 'Machine learning model optimization and deployment',
    innovationScore: 9,
  },
  {
    id: '5',
    name: 'Raspberry Pi-Audio',
    description: 'IoT audio streaming system for distributed sound systems',
    status: 'Completed',
    technologies: ['Raspberry Pi', 'Python', 'Audio Processing', 'Network'],
    keyLearning: 'Embedded systems and real-time audio processing',
    innovationScore: 8,
  },
  {
    id: '6',
    name: 'VERT',
    description: 'Vertical scrolling shooter game with advanced graphics',
    status: 'Active',
    technologies: ['Godot', 'GDScript', 'Game Physics', 'Graphics'],
    keyLearning: 'Real-time graphics rendering and game optimization',
    innovationScore: 7,
  },
  {
    id: '7',
    name: 'Caus-2026',
    description: 'Causality analysis framework for complex system modeling',
    status: 'Experimental',
    technologies: ['Python', 'Data Science', 'Statistics', 'Visualization'],
    keyLearning: 'Advanced statistical analysis and causal inference',
    innovationScore: 9,
  },
  {
    id: '9',
    name: 'Ninja-Streamingserver',
    description: 'High-performance streaming server for live content delivery',
    status: 'Active',
    technologies: ['Node.js', 'WebRTC', 'FFmpeg', 'Streaming Protocols'],
    keyLearning: 'Real-time streaming architecture and optimization',
    innovationScore: 8,
  },
  {
    id: '11',
    name: 'Inspira-Studio',
    description: 'Creative design studio platform with collaborative tools',
    status: 'Active',
    technologies: ['React', 'Canvas API', 'WebSockets', 'Collaboration'],
    keyLearning: 'Real-time collaborative editing and design systems',
    innovationScore: 8,
  },
];

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
    <section className="relative py-32">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl font-light">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="h-full flex flex-col p-8 border-white/5 hover:border-blue-500/30 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Code2 size={20} className="text-blue-400" />
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      statusColors[project.status]
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-gray-400 text-sm mb-6 leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-1 bg-white/5 border border-white/10 rounded text-gray-400 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto space-y-6">
                  {/* Innovation Score */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Zap size={14} className="text-amber-400" />
                      <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Innovation</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-1 rounded-full ${
                            i < Math.round(project.innovationScore / 2) ? 'bg-blue-500' : 'bg-white/10'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-6 border-t border-white/5">
                    <motion.button
                      onClick={() => navigate(`/project/${project.id}`)}
                      whileHover={{ x: 3 }}
                      className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors text-xs font-bold uppercase tracking-widest cursor-pointer bg-none border-none p-0"
                    >
                      Details
                      <ExternalLink size={14} />
                    </motion.button>
                    <motion.a
                      href="#"
                      whileHover={{ x: 3 }}
                      className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
                    >
                      Source
                      <Github size={14} />
                    </motion.a>
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
