import { Suspense, lazy, useEffect } from "react";
import Navigation from "@/components/Navigation";
import QuantumBackground from "@/components/QuantumBackground";
import HeroSection from "@/components/HeroSection";
import SectionErrorBoundary from "@/components/SectionErrorBoundary";

const imports = {
  timeline: () => import("@/components/TimelineSection"),
  projects: () => import("@/components/ProjectsSection"),
  skills: () => import("@/components/SkillsSection"),
  contact: () => import("@/components/ContactSection"),
  footer: () => import("@/components/Footer"),
};

const Timeline = lazy(imports.timeline);
const Projects = lazy(imports.projects);
const Skills = lazy(imports.skills);
const Contact = lazy(imports.contact);
const Footer = lazy(imports.footer);

const sections = [
  { id: "timeline", name: "Timeline", Component: Timeline },
  { id: "projects", name: "Projects", Component: Projects },
  { id: "skills", name: "Skills", Component: Skills },
  { id: "contact", name: "Contact", Component: Contact },
];

function Skeleton() {
  return (
    <div aria-hidden className="min-h-96 py-20 sm:py-32">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 space-y-4">
        <div className="h-12 bg-white/5 rounded animate-pulse mb-6" />
        <div className="h-4 bg-white/5 rounded animate-pulse" />
        <div className="h-4 bg-white/5 rounded animate-pulse w-3/4" />
      </div>
    </div>
  );
}

const Home = () => {
  useEffect(() => {
    const preload = () => Object.values(imports).forEach(load => load());
    const id = setTimeout(preload, 1500);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-background focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <QuantumBackground />
      <div className="relative z-10">
        <Navigation />
        <main id="main">
          <section id="home">
            <HeroSection />
          </section>
          {sections.map(({ id, name, Component }) => (
            <section key={id} id={id}>
              <SectionErrorBoundary sectionName={name}>
                <Suspense fallback={<Skeleton />}>
                  <Component />
                </Suspense>
              </SectionErrorBoundary>
            </section>
          ))}
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
