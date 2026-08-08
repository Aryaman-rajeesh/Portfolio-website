export interface ProjectStep {
  title: string;
  description: string;
}

export interface ProjectGalleryItem {
  image: string;
  alt: string;
  span: 'small' | 'wide' | 'large' | string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  projectType: string;
  myRole?: string;
  problemSolution: string;
  researchCard: string;
  researchFile?: string; // Optional so it doesn't break projects without PDFs
  processLabel: string;
  processSteps: ProjectStep[];
  image: string;
  gallery: ProjectGalleryItem[];
}