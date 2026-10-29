export interface ProjectData {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  status: string;
  year: number;
  links?: {
    github?: string;
    demo?: string;
    blog?: string;
  };
  images?: {
    thumbnail?: string;
    hero?: string;
    screenshots?: string[];
  };
  features?: string[];
  challenges?: string;
  learnings?: string;
  innovationScore?: number;
}
