import { motion } from "framer-motion";
import type { ProjectData } from "@/types/project";

interface ProjectHeroProps {
  project: ProjectData;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  const heroImage = project.images?.hero;

  if (!heroImage) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative h-96 md:h-125 overflow-hidden"
    >
      <img
        src={heroImage}
        alt={project.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 g-linear-to-b from-transparent via-transparent to-background" />
    </motion.div>
  );
}
