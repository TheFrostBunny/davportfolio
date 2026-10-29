import SectionReveal from "../SectionReveal";

interface TechnologiesSectionProps {
  technologies?: string[];
}

export default function TechnologiesSection({
  technologies,
}: TechnologiesSectionProps) {
  if (!technologies?.length) return null;

  return (
    <SectionReveal delay={0.1} className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-6">Technologies</h2>
      <div className="flex flex-wrap gap-3">
        {technologies.map(technology => (
          <span
            key={technology}
            className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-medium"
          >
            {technology}
          </span>
        ))}
      </div>
    </SectionReveal>
  );
}
