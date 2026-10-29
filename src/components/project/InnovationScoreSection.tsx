import SectionReveal from "../SectionReveal";

interface InnovationScoreSectionProps {
  score?: number;
}

export default function InnovationScoreSection({
  score,
}: InnovationScoreSectionProps) {
  if (score === undefined) return null;

  return (
    <SectionReveal
      delay={0.6}
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
    </SectionReveal>
  );
}
