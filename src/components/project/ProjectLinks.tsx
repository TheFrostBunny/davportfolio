import { BookOpen, ExternalLink, Github } from "lucide-react";
import type { ProjectData } from "@/types/project";

interface ProjectLinksProps {
  links?: ProjectData["links"];
}

export default function ProjectLinks({ links }: ProjectLinksProps) {
  if (!links?.github && !links?.demo && !links?.blog) return null;

  return (
    <div className="flex flex-wrap gap-4 mb-12">
      {links.github && (
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          <Github size={20} />
          View Code
        </a>
      )}

      {links.demo && (
        <a
          href={links.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
        >
          <ExternalLink size={20} />
          Live Demo
        </a>
      )}
      {links.blog && (
        <a
          href={links.blog}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 border border-gray-700 text-gray-400 hover:border-gray-600 rounded-lg transition-colors"
        >
          <BookOpen size={20} />
          Read Article
        </a>
      )}
    </div>
  );
}
