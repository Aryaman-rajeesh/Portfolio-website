import type { Project } from '../projects.types';

// 1. Import your images directly at the top of the file.
// (Matching the exact .png and .jpg extensions from your folder)
import speakMain from '../../pic/speakmain.png';
import speak1 from '../../pic/speak1.jpg';
import speak2 from '../../pic/speak2.jpg';
import speak3 from '../../pic/speak3.jpg';
import speak4 from '../../pic/speak4.jpg';

// 2. Import the PDF
// (Make sure to drag your actual PDF into the pic folder and ensure this name matches perfectly)
import speakPdf from '../../pic/speakeasy-research.pdf';

const speakeasy: Project = {
  id: 'speakeasy',
  title: 'SpeakEasy',
  subtitle: 'Turning hesitant speakers into confident communicators through immersive AR and VR.',
  projectType: 'Team Project / Immersive Tech Ecosystem',
  myRole:
    'The Developer — Technical execution in Unity, bringing conceptual environments to life. Collaborated with a Storyteller and a Strategist.',
  problemSolution:
    'Public speaking anxiety affects 3/4 of people. Trainers cannot provide personalized feedback at scale. SpeakEasy is a holistic ecosystem integrating AR-guided practice, VR simulations, and analytics. It centers around "Buddy," a digital guide providing instant feedback to turn high-pressure practice into natural conversation.',
  researchCard: 'SpeakEasy Research & Usability Report (PDF)',
  
  // Pass the imported PDF variable here
  researchFile: speakPdf,

  processLabel: 'System Architecture',
  processSteps: [
    {
      title: 'Onboarding (Hologram)',
      description: 'Tactile, low-pressure physical engagement.',
    },
    {
      title: 'Practice (AR App)',
      description: 'Teleprompter tracking voice clarity and pace.',
    },
    {
      title: 'Performance (VR Simulation)',
      description: 'High-pressure scenarios in Unity (Elevator Pitch, Pitch Tank).',
    },
    {
      title: 'Feedback (Analytics)',
      description: 'Data-driven performance dashboard.',
    },
  ],
  
  // Pass the imported main image
  image: speakMain,
  
  // Update gallery to use imported variables to populate the bento grid
  gallery: [
  
    { image: speak1, alt: 'SpeakEasy VR Environment 1', span: 'wide' },
    { image: speak2, alt: 'SpeakEasy VR Environment 2', span: 'small' },
    { image: speak3, alt: 'SpeakEasy Buddy Character', span: 'small' },
    { image: speak4, alt: 'SpeakEasy Interface', span: 'wide' },
  ],
};

export default speakeasy;