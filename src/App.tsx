import { Suspense, lazy, useEffect } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navigation from "./components/Navigation";
import QuantumBackground from "./components/QuantumBackground";
import HeroSection from "./components/HeroSection";
import ErrorBoundary from "./components/ErrorBoundary";
import SectionErrorBoundary from "./components/SectionErrorBoundary";

// Code splitting: Lazy load sections that are not immediately visible
const TimelineSection = lazy(() => import('./components/TimelineSection'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const SkillsSection = lazy(() => import('./components/SkillsSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const Footer = lazy(() => import('./components/Footer'));

// Loading fallback component
function SectionSkeleton() {
  return (
    <div className="relative py-20 sm:py-32 bg-background">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6">
        <div className="h-12 bg-white/5 rounded animate-pulse mb-6" />
        <div className="space-y-4">
          <div className="h-4 bg-white/5 rounded animate-pulse" />
          <div className="h-4 bg-white/5 rounded animate-pulse w-3/4" />
        </div>
      </div>
    </div>
  );
}

function App() {
  // Register service worker for offline support
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered:', registration);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    }
  }, []);

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
                
                <SectionErrorBoundary sectionName="Timeline">
                  <Suspense fallback={<SectionSkeleton />}>
                    <section id="timeline">
                      <TimelineSection />
                    </section>
                  </Suspense>
                </SectionErrorBoundary>

                <SectionErrorBoundary sectionName="Projects">
                  <Suspense fallback={<SectionSkeleton />}>
                    <section id="projects">
                      <ProjectsSection />
                    </section>
                  </Suspense>
                </SectionErrorBoundary>

                <SectionErrorBoundary sectionName="Skills">
                  <Suspense fallback={<SectionSkeleton />}>
                    <section id="skills">
                      <SkillsSection />
                    </section>
                  </Suspense>
                </SectionErrorBoundary>

                <SectionErrorBoundary sectionName="Contact">
                  <Suspense fallback={<SectionSkeleton />}>
                    <section id="contact">
                      <ContactSection />
                    </section>
                  </Suspense>
                </SectionErrorBoundary>

                <Suspense fallback={null}>
                  <Footer />
                </Suspense>
              </div>
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
