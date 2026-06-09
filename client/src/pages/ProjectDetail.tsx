import { useParams, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowLeft, Github, ExternalLink, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import QuantumBackground from '@/components/QuantumBackground';

interface ProjectData {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  status: string;
  year: number;
  links?: {
    github?: string;
    demo?: string;
    blog?: string;
  };
  images?: {
    thumbnail?: string;
    hero?: string;
    screenshots?: string[];
  };
  features?: string[];
  challenges?: string;
  learnings?: string;
  innovationScore?: number;
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const [, setLocation] = useLocation();
  const [project, setProject] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/projects-data/${id}.json`);
        if (!response.ok) {
          throw new Error('Project not found');
        }
        const data = await response.json();
        setProject(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load project');
        setProject(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProject();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading project...</p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-8">{error || 'The project you are looking for does not exist.'}</p>
          <Button
            onClick={() => setLocation('/')}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <QuantumBackground />
      <div className="relative z-10">
        <Navigation />

        <div className="sticky top-20 z-40 bg-background/80 backdrop-blur border-b border-white/5">
          <div className="container max-w-6xl mx-auto px-6 py-4">
            <button
              onClick={() => setLocation('/')}
              className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Portfolio
            </button>
          </div>
        </div>
        {project.images?.hero && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-96 md:h-[500px] overflow-hidden"
          >
            <img
              src={project.images.hero}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
          </motion.div>
        )}

        <div className="container max-w-4xl mx-auto px-6 py-16">
    
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-blue-500 font-mono text-sm">{project.year}</span>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
              {project.status}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {project.name}
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            {project.fullDescription}
          </p>

          <div className="flex flex-wrap gap-4">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Github size={20} />
                View Code
              </a>
            )}
            {project.links?.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            )}
            {project.links?.blog && (
              <a
                href={project.links.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-gray-700 text-gray-400 hover:border-gray-600 rounded-lg transition-colors"
              >
                <BookOpen size={20} />
                Read Article
              </a>
            )}
          </div>
        </motion.div>

        {/* Technologies */}
        {project.technologies && project.technologies.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span className="text-gray-400">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Challenges */}
        {project.challenges && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Challenges</h2>
            <p className="text-gray-400 leading-relaxed">{project.challenges}</p>
          </motion.div>
        )}

        {/* Learnings */}
        {project.learnings && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Key Learnings</h2>
            <p className="text-gray-400 leading-relaxed">{project.learnings}</p>
          </motion.div>
        )}

        {/* Screenshots */}
        {project.images?.screenshots && project.images.screenshots.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.screenshots.map((screenshot, index) => (
                <motion.img
                  key={index}
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  className="rounded-lg border border-white/5 hover:border-blue-500/30 transition-colors"
                  whileHover={{ scale: 1.02 }}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Innovation Score */}
        {project.innovationScore !== undefined && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12 p-6 bg-blue-500/10 border border-blue-500/20 rounded-lg"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Innovation Score</h2>
            <div className="flex items-center gap-4">
              <div className="text-5xl font-bold text-blue-500">{project.innovationScore}/10</div>
              <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                  style={{ width: `${(project.innovationScore / 10) * 100}%` }}
                />
              </div>
            </div>
          </motion.div>
        )}
        </div>
      </div>
    </div>
  );
}
