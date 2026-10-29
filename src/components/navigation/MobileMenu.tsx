import { AnimatePresence, motion } from "framer-motion";
import { NavItem, NavLinks } from "./NavLinks";

type MobileMenuProps = {
  isOpen: boolean;
  items: NavItem[];
  onNavigate: (href: string) => void;
};

export const MobileMenu = ({ isOpen, items, onNavigate }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-navigation"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/5"
        >
          <NavLinks items={items} onNavigate={onNavigate} mobile />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
