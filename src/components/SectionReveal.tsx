import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function SectionReveal({
  children,
  delay = 0,
  className = "",
}: SectionRevealProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
