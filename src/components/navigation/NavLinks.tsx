import { motion } from "framer-motion";
import { Props } from "recharts/types/cartesian/Funnel";

export type NavItem = {
  label: string;
  href: string;
};

type NavLinksProps = {
  items: NavItem[];
  onNavigate: (href: string) => void;
  mobile?: boolean;
};

export const NavLinks = ({
  items,
  onNavigate,
  mobile = false,
}: NavLinksProps) => {
  return (
    <div
      className={
        mobile
          ? "container max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-3"
          : "hidden md:flex items-center gap-8"
      }
    >
      {items.map(item => (
        <motion.button
          key={item.href}
          onClick={() => onNavigate(item.href)}
          className={
            mobile
              ? "text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors font-medium py-2 text-left"
              : "text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors font-medium"
          }
          whileHover={mobile ? { x: 4 } : { scale: 1.1 }}
        >
          {item.label}
        </motion.button>
      ))}
    </div>
  );
};
