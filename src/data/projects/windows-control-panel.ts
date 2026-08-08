import type { Project } from '../projects.types';

// 1. Import your images
import conMain from '../../pic/conmain.png';
import con1 from '../../pic/con1.png';
import con2 from '../../pic/con2.png';
import con3 from '../../pic/con3.png';
import con4 from '../../pic/con4.png';
import con5 from '../../pic/con5.png';

// 2. Import your PDF (Update this name!)
import conPdf from '../../pic/control-panel-research.pdf';

const windowsControlPanel: Project = {
  id: 'windows-control-panel',
  title: 'Windows Control Panel Redesign',
  subtitle: 'Modernizing the UX architecture of a legacy system tool for rapid functionality.',
  projectType: 'Team Project / System Software Redesign',
  myRole:
    'Ideation & Prototyping — Drove core ideation and collaboratively prototyped high-fidelity Figma screens alongside two teammates.',
  problemSolution:
    'Unchanged since 2009, the tool is overcrowded and lacks visual hierarchy. Designed strictly for rapid functionality, settings were restructured by intuitive user goals (Display, Network, Security), eliminating duplicates and introducing presets for differently-abled workflows.',
  researchCard: 'Control Panel Interaction Design Analysis (PDF)',
  
  // 3. Attach PDF
  researchFile: conPdf,

  processLabel: 'System Deconstruction',
  processSteps: [
    {
      title: 'Desirability Mapping',
      description: 'Focus on core settings, driver updates, and performance resets.',
    },
    {
      title: 'Capability Constraints',
      description: 'Balancing Administrator Access with highly visible display adjustments.',
    },
    {
      title: 'Core Insights',
      description: 'Minimalist, goal-categorized design drastically reduces cognitive load for legacy navigation.',
    },
  ],
  
  // 4. Main Cover Image
  image: conMain,
  
  // 5. Gallery (The 'alt' text will now act as your visible label for all images!)
  gallery: [
    { image: con1, alt: 'Redesigned Control Panel Interface (After)', span: 'wide' },
    { image: con2, alt: 'Original Control Panel Interface (Before)', span: 'wide' },
    { image: con3, alt: 'Radial Menu Concept - Root Level', span: 'small' },
    { image: con4, alt: 'Radial Menu Concept - System Selected', span: 'small' },
    { image: con5, alt: 'Radial Menu Concept - Expanded View', span: 'wide' },
  ],
};

export default windowsControlPanel;