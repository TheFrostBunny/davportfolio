import { motion } from "framer-motion";
import SectionReveal from "../SectionReveal";

interface ScreenshotsSectionProps {
  screenshots?: string[];
}

export default function ScreenshotsSection({
  screenshots,
}: ScreenshotsSectionProps) {
  if (!screenshots?.length) return null;

  return (
    <SectionReveal delay={0.5} className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-6">Screenshots</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {screenshots.map((screenshot, index) => (
          <motion.img
            key={`${screenshot}-${index}`}
            src={screenshot}
            alt={`Screenshot ${index + 1}`}
            className="rounded-lg border border-white/5 hover:border-blue-500/30 transition-colors"
            whileHover={{ scale: 1.02 }}
          />
        ))}
      </div>
    </SectionReveal>
  );
}
