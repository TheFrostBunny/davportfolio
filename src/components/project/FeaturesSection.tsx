import SectionReveal from "../SectionReveal";

interface FeaturesSectionProps {
  features?: string[];
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  if (!features?.length) return null;

  return (
    <SectionReveal delay={0.2} className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-6">Features</h2>
      <ul className="space-y-3">
        {features.map(feature => (
          <li key={feature} className="flex items-start gap-3">
            <span className="text-blue-500 mt-1">✓</span>
            <span className="text-gray-400">{feature}</span>
          </li>
        ))}
      </ul>
    </SectionReveal>
  );
}
