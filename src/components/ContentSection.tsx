import SectionReveal from "./SectionReveal";

interface ContentSectionProps {
  title: string;
  text?: string;
  delay?: number;
}

export const ContentSection = ({
  title,
  text,
  delay = 0,
}: ContentSectionProps) => {
  if (!text) return null;

  return (
    <SectionReveal delay={delay} className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <p className="text-gray-400 leading-relaxed">{text}</p>
    </SectionReveal>
  );
};
