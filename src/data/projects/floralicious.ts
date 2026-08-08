import type { Project } from '../projects.types';

// 1. Import your images and PDF directly
import floraLogo from '../../pic/flora-logo.png';
import floraMain from '../../pic/floramain.png';
import floraMenu from '../../pic/floramenu.png';
import floraPaper from '../../pic/florapaper.png';
import floraSign from '../../pic/florasign.png';
import floraPdf from '../../pic/floralicious-ideation.pdf';

const floralicious: Project = {
  id: 'floralicious',
  title: 'Floralicious',
  subtitle: 'Brand Identity and Packaging for a Premium Herbal Café.',
  projectType: 'Solo Branding & Identity Design',
  problemSolution:
    'The brand needed to communicate a healthy, relaxing, family-friendly environment. The solution is a cohesive identity anchored by a yellow, green, black, and brown palette, featuring a logo that blends a coffee bean and leaves to symbolize the fusion of herbal and coffee elements.',
  researchCard: 'Floralicious Brand Ideation & Stylescape (PDF)',
  
  // 2. Add the imported PDF variable here
  researchFile: floraPdf, 
  
  processLabel: 'Brand Applications',
  processSteps: [
    {
      title: 'Short-Format',
      description: 'Glass bottle labels and die-cut "Coco Coffee" instant packaging.',
    },
    {
      title: 'Long-Format',
      description: 'Multi-item café menu and conceptual newspaper layouts.',
    },
  ],
  
  // 3. Pass the imported image variables
  image: floraLogo, 
  gallery: [
    { image: floraMain, alt: 'Floralicious hero render', span: 'large' },
    { image: floraLogo, alt: 'Floralicious Logo', span: 'wide' },
    { image: floraMenu, alt: 'Floralicious Menu', span: 'small' },
    { image: floraPaper, alt: 'Floralicious Paper', span: 'small' },
    { image: floraSign, alt: 'Floralicious Sign', span: 'wide' },
  ],
};

export default floralicious;