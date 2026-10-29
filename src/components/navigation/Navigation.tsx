import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { NavItem, NavLinks } from "./NavLinks";
import { LanguageToggle } from "./LanguageToggle";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";

const translations = {
  no: {
    home: "Hjem",
    timeline: "Reise",
    projects: "Prosjekter",
    skills: "Ferdigheter",
    contact: "Kontakt",
  },
  en: {
    home: "Home",
    timeline: "Journey",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
  },
};

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme, switchable } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = translations[language];

  const navItems: NavItem[] = [
    { label: t.home, href: "#home" },
    { label: t.timeline, href: "#timeline" },
    { label: t.projects, href: "#projects" },
    { label: t.skills, href: "#skills" },
    { label: t.contact, href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <NavLinks items={navItems} onNavigate={scrollToSection} />
        <motion.button
          onClick={() => setMobileMenuOpen(open => !open)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-1.5 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.96 }}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
        {switchable && toggleTheme && (
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        )}
        <LanguageToggle
          language={language}
          onToggle={() => setLanguage(language === "no" ? "en" : "no")}
        />
      </div>
      <MobileMenu
        isOpen={mobileMenuOpen}
        items={navItems}
        onNavigate={scrollToSection}
      />
    </motion.nav>
  );
}
