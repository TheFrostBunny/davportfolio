import { motion } from "framer-motion";

type Language = "no" | "en";

type Props = {
  language: Language;
  onToggle: () => void;
};

const UKFlag = () => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 60 36"
      className="h-4 w-6 rounded-[2px] shadow-sm"
    >
      <rect width="60" height="36" fill="#012169" />
      <path d="M0 0L60 36M60 0L0 36" stroke="#fff" strokeWidth="7" />
      <path d="M0 0L60 36M60 0L0 36" stroke="#C8102E" strokeWidth="4" />
      <path d="M30 0v36M0 18h60" stroke="#fff" strokeWidth="12" />
      <path d="M30 0v36M0 18h60" stroke="#C8102E" strokeWidth="7" />
    </svg>
  );
};

const NorwayFlag = () => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 22 16"
      className="h-4 w-6 rounded-[2px] shadow-sm"
    >
      <rect width="22" height="16" fill="#BA0C2F" />
      <path d="M0 7h22M8 0v16" stroke="#fff" strokeWidth="4" />
      <path d="M0 7h22M8 0v16" stroke="#00205B" strokeWidth="2" />
    </svg>
  );
};

export const LanguageToggle = ({ language, onToggle }: Props) => {
  const label = language === "no" ? "Switch to English" : "Bytt til norsk";

  return (
    <motion.button
      onClick={onToggle}
      className="inline-flex items-center justify-center rounded-md p-1.5 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400/40 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.96 }}
      aria-label={label}
      title={label}
    >
      {language === "no" ? <UKFlag /> : <NorwayFlag />}
    </motion.button>
  );
};
