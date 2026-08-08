import type { Project } from '../projects.types';

// 1. Import your images directly at the top of the file
import passMain from '../../pic/passmain.png';
import pass1 from '../../pic/pass1.png';
import pass2 from '../../pic/pass2.png';
import pass3 from '../../pic/pass3.png';

// 2. Import your PDF report (Make sure this matches your actual file name!)
import passPdf from '../../pic/passport-seva-report.pdf';

const passportSeva: Project = {
  id: 'passport-seva',
  title: 'Passport Seva Redesign',
  subtitle: 'A comprehensive UI/UX overhaul of India’s passport portal for seamless e-governance.',
  projectType: 'Team Project / UI/UX & Information Architecture Redesign',
  myRole:
    'Led the UX/UI redesign of the "Payment & Appointment Scheduling" flow and contributed to collaborative high-fidelity Figma prototyping.',
  problemSolution:
    'The existing site suffers from non-responsive design, cluttered interfaces, and vague errors. The overhaul introduces intuitive navigation, descriptive error notifications, and autofill capabilities, transforming a cumbersome process into a modern digital experience.',
  researchCard: 'Passport Seva UX Research, Heuristics & IA Deconstruction (PDF)',
  
  // 3. Connect the PDF variable
  researchFile: passPdf,

  processLabel: 'User Journey',
  processSteps: [
    {
      title: 'Registration',
      description: 'Simplified sign-up with responsive design.',
    },
    {
      title: 'Re-issue',
      description: 'Streamlined forms with autosave to prevent data loss.',
    },
    {
      title: 'Payment & Scheduling (My Core Focus)',
      description: 'Re-engineered interface and calendar tool for reviewing appointments and payments on a single, clear screen.',
    },
  ],
  
  // 4. Set the main display image
  image: passMain,
  
  // 5. Map the 4 images into the dynamic bento grid
  gallery: [
    { image: passMain, alt: 'Passport Seva Redesign Main Cover', span: 'large' },
    { image: pass1, alt: 'Passport Seva Interface Redesign 1', span: 'wide' },
    { image: pass2, alt: 'Passport Seva Interface Redesign 2', span: 'small' },
    { image: pass3, alt: 'Passport Seva Interface Redesign 3', span: 'small' },
  ],
};

export default passportSeva;