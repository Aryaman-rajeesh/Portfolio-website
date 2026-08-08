import type { Project } from '../projects.types';

// 1. Import your images directly at the top of the file.
import spdMain from '../../pic/spdmain.png';
import spd2 from '../../pic/spd2.png';
import spd3 from '../../pic/spd3.png';
import spd4 from '../../pic/spd4.png';
import spd5 from '../../pic/spd5.jpg'; 

// 2. Import your PDF (Make sure the file name matches exactly what is in your pic folder)
import spdPdf from '../../pic/spd-research.pdf';

const spdPowerBank: Project = {
  id: 'spd-power-bank',
  title: 'Magsafe Redesign',
  subtitle: 'An Ergonomic Reimagining of the MagSafe Battery Pack.',
  projectType: 'Solo Physical Product Design / Academic',
  problemSolution:
    'Standard MagSafe packs create a physical imbalance causing wrist strain and drop risks. This redesign prioritizes comfort without sacrificing functionality, utilizing lightweight materials and a redesigned internal structure to balance weight evenly.',
  researchCard: 'SPD Ergonomic Research & Foam Prototyping (PDF)',
  
  // 3. Pass the imported PDF variable here
  researchFile: spdPdf,

  processLabel: 'Process Boards',
  processSteps: [
    {
      title: 'Ergonomic Grooves',
      description: 'Enhanced grip solving the bulky, smooth form factor.',
    },
    {
      title: 'The Elastic Strap',
      description: 'A 60% slimmer redesign with a flush, integrated elastic strap.',
    },
    {
      title: 'Modular Base',
      description: 'Detachable 5000mAh base for improved hold.',
    },
  ],
  
  image: spdMain, 
  
  gallery: [
    { image: spdMain, alt: 'SPD Power Bank render', span: 'large' },
    { image: spd2, alt: 'detail 1', span: 'wide' },
    { image: spd3, alt: 'detail 2', span: 'small' },
    { image: spd4, alt: 'detail 3', span: 'small' },
    { image: spd5, alt: 'ideation sketchs', span: 'wide' },
  ],
};

export default spdPowerBank;