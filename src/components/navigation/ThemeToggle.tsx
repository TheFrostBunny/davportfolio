import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

type ThemeToggleProps = {
  theme: string;
  onToggle: () => void;
};

export const ThemeToggle = ({ theme, onToggle }: ThemeToggleProps) => {
  const label =
    theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <motion.button
      onClick={onToggle}
      className="inline-flex items-center justify-center rounded-md p-1.5 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400/40 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.96 }}
      aria-label={label}
      title={label}
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </motion.button>
  );
};
