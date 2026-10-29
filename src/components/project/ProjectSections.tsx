import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ProjectData } from "@/types/project";

interface BackBarProps {
  onBack: () => void;
}

export function BackBar({ onBack }: BackBarProps) {
  return (
    <div className="sticky top-20 z-40 bg-background/80 backdrop-blur border-b border-white/5">
      <div className="container max-w-6xl mx-auto px-6 py-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Portfolio
        </button>
      </div>
    </div>
  );
}

export function ProjectLoading() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4" />
        <p className="text-gray-400">Loading project...</p>
      </div>
    </div>
  );
}

interface ProjectNotFoundProps {
  message: string;
  onBack: () => void;
}

export function ProjectNotFound({ message, onBack }: ProjectNotFoundProps) {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-4">
          Project Not Found
        </h1>
        <p className="text-gray-400 mb-8">{message}</p>
        <Button onClick={onBack} className="bg-blue-600 hover:bg-blue-700">
          Back to Portfolio
        </Button>
      </div>
    </div>
  );
}

interface ProjectHeroProps {
  project: ProjectData;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  if (!project.images?.hero) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative h-96 md:h-125 overflow-hidden"
    >
      <img
        src={project.images.hero}
        alt={project.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background" />
    </motion.div>
  );
}

interface ProjectOverviewProps {
  project: ProjectData;
}

export function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
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
  );
}

interface TechnologiesSectionProps {
  technologies?: string[];
}

export function TechnologiesSection({
  technologies,
}: TechnologiesSectionProps) {
  if (!technologies?.length) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold text-white mb-6">Technologies</h2>
      <div className="flex flex-wrap gap-3">
        {technologies.map(tech => (
          <span
            key={tech}
            className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.section>
  );
}

interface FeaturesSectionProps {
  features?: string[];
}

export function FeaturesSection({ features }: FeaturesSectionProps) {
  if (!features?.length) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold text-white mb-6">Features</h2>
      <ul className="space-y-3">
        {features.map(feature => (
          <li key={feature} className="flex items-start gap-3">
            <span className="text-blue-500 mt-1">✓</span>
            <span className="text-gray-400">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}

interface TextSectionProps {
  title: string;
  text?: string;
  delay: number;
}

export function TextSection({ title, text, delay }: TextSectionProps) {
  if (!text) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <p className="text-gray-400 leading-relaxed">{text}</p>
    </motion.section>
  );
}

interface ScreenshotsSectionProps {
  screenshots?: string[];
}

export function ScreenshotsSection({ screenshots }: ScreenshotsSectionProps) {
  if (!screenshots?.length) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold text-white mb-6">Screenshots</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {screenshots.map((screenshot, index) => (
          <motion.img
            key={screenshot}
            src={screenshot}
            alt={`Screenshot ${index + 1}`}
            className="rounded-lg border border-white/5 hover:border-blue-500/30 transition-colors"
            whileHover={{ scale: 1.02 }}
          />
        ))}
      </div>
    </motion.section>
  );
}

interface InnovationScoreSectionProps {
  score?: number;
}

export function InnovationScoreSection({ score }: InnovationScoreSectionProps) {
  if (score === undefined) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="mb-12 p-6 bg-blue-500/10 border border-blue-500/20 rounded-lg"
    >
      <h2 className="text-2xl font-bold text-white mb-4">Innovation Score</h2>
      <div className="flex items-center gap-4">
        <div className="text-5xl font-bold text-blue-500">{score}/10</div>
        <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-blue-500 to-purple-500"
            style={{ width: `${(score / 10) * 100}%` }}
          />
        </div>
      </div>
    </motion.section>
  );
}
