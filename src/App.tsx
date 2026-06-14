import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navigation from "./components/Navigation";
import QuantumBackground from "./components/QuantumBackground";
import HeroSection from "./components/HeroSection";
import TimelineSection from "./components/TimelineSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <ThemeProvider defaultTheme="dark" switchable={true}>
          <TooltipProvider>
            <Toaster />
            <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
              <QuantumBackground />

              <div className="relative z-10">
                <Navigation />
                <section id="home">
                  <HeroSection />
                </section>
                <section id="timeline">
                  <TimelineSection />
                </section>
                <section id="projects">
                  <ProjectsSection />
                </section>
                <section id="skills">
                  <SkillsSection />
                </section>
                <section id="contact">
                  <ContactSection />
                </section>

                <Footer />
              </div>
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
