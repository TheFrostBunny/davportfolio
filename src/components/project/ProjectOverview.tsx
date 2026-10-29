import type { ProjectData } from "@/types/project";
import SectionReveal from "../SectionReveal";

interface ProjectOverviewProps {
  project: ProjectData;
}

export default function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <SectionReveal className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-blue-500 font-mono text-sm">{project.year}</span>
        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
          {project.status}
        </span>
      </div>

      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
        {project.name}
      </h1>

      <p className="text-xl text-gray-400 leading-relaxed">
        {project.fullDescription}
      </p>
    </SectionReveal>
  );
}
