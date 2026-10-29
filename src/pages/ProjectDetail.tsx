import { useEffect, useState } from "react";
import { useLocation, useParams } from "wouter";
import Navigation from "@/components/Navigation";
import QuantumBackground from "@/components/QuantumBackground";
import type { ProjectData } from "@/types/project";
import LoadingState from "@/components/LoadingState";
import ErrorState from "@/components/ErrorState";
import {
  FeaturesSection,
  InnovationScoreSection,
  ProjectHero,
  ProjectOverview,
  ScreenshotsSection,
  TechnologiesSection,
} from "@/components/project/ProjectSections";
import ProjectLinks from "@/components/project/ProjectLinks";
import { BackLink } from "@/components/BackLink";
import { ContentSection } from "@/components/ContentSection";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [, setLocation] = useLocation();
  const [project, setProject] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("The project you are looking for does not exist.");
      setProject(null);
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    async function fetchProject() {
      try {
        setLoading(true);

        const response = await fetch(`/projects-data/${id}.json`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Project not found");
        }

        const data: ProjectData = await response.json();
        setProject(data);
        setError(null);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;

        setError(err instanceof Error ? err.message : "Failed to load project");
        setProject(null);
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchProject();

    return () => controller.abort();
  }, [id]);

  const goBack = () => setLocation("/");

  if (loading) {
    return <LoadingState message="Loading project..." />;
  }

  if (error || !project) {
    return (
      <ErrorState
        title="Project Not Found"
        message={error || "The project you are looking for does not exist."}
        actionLabel="Back to Portfolio"
        onAction={goBack}
      />
    );
  }

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <QuantumBackground />
      <div className="relative z-10">
        <Navigation />
        <div className="sticky top-20 z-40 bg-background/80 backdrop-blur border-b border-white/5">
          <div className="container max-w-6xl mx-auto px-6 py-4">
            <BackLink label="Back to Portfolio" onBack={goBack} />
          </div>
        </div>
        <ProjectHero project={project} />
        <main className="container max-w-4xl mx-auto px-6 py-16">
          <ProjectOverview project={project} />
          <ProjectLinks links={project.links} />
          <TechnologiesSection technologies={project.technologies} />
          <FeaturesSection features={project.features} />
          <ContentSection
            title="Challenges"
            text={project.challenges}
            delay={0.3}
          />
          <ContentSection
            title="Key Learnings"
            text={project.learnings}
            delay={0.4}
          />
          <ScreenshotsSection screenshots={project.images?.screenshots} />
          <InnovationScoreSection score={project.innovationScore} />
        </main>
      </div>
    </div>
  );
};

export default ProjectDetail;
