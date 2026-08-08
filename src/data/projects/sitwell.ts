import type { Project } from '../projects.types';

// 1. Import your images
import sitMain from '../../pic/sitmain.png';
import sit1 from '../../pic/sit1.png';
import sit2 from '../../pic/sit2.png';
import sit3 from '../../pic/sit3.png';
import sit4 from '../../pic/sit4.png';

// 2. Import your PDF (The space in the filename is handled exactly as shown in your screenshot)
import sitPdf from '../../pic/sitwell-poster.pdf';

const sitwell: Project = {
  id: 'sitwell',
  title: 'SitWell',
  subtitle: 'A chair-based wellness system aimed at relieving physical distress, improper posture, and mental stress.',
  projectType: 'Team Project / Wellness Technology & Hardware Integration',
  myRole:
    'Hardware Developer — Led the development and wiring of the physical device, including the integration of the ESP32 microcontroller, 40kg load cell, and accelerometer.',
  problemSolution:
    'Desk workers face physical distress, improper posture, and mental stress from prolonged sitting. Current wellness tools generate excessive notifications, which can contribute to stress rather than relieve it. SitWell solves this by offering a low-cost, ambient system that monitors sitting habits using a load cell and accelerometer. It provides gentle, non-intrusive feedback through a digital Wellness Hub to encourage appropriate work habits without breaking concentration.',
  researchCard: 'SitWell Wellness Solution & IPR Report (PDF)',
  
  // 3. Connect the PDF variable
  researchFile: sitPdf,

  processLabel: 'System Architecture',
  processSteps: [
    {
      title: 'Hardware Sensors',
      description: 'A 40kg load cell measures weight to track sitting duration, while an accelerometer tracks device tilt for posture analysis.',
    },
    {
      title: 'Local Microcontroller',
      description: 'An ESP32 microcontroller collects the sensor data and uses Wi-Fi to send it to the cloud for processing.',
    },
    {
      title: 'The Wellness Hub',
      description: 'A digital interface that translates intricate ergonomic data into visual indications and simple ergonomic scores.',
    },
  ],
  
  // 4. Set the main cover image to the large chair render
  image: sitMain,
  
  // 5. Map the 4 images into the dynamic bento grid
  gallery: [
    { image: sit3, alt: 'SitWell Ergonomic Chair Prototype', span: 'large' },
    { image: sit1, alt: 'Wellness Hub - Live Sensor Monitoring', span: 'wide' },
    { image: sit2, alt: 'Wellness Hub - AI Posture Detection', span: 'small' },
    { image: sit4, alt: 'User demonstrating SitWell posture tracking', span: 'small' },
  ],
};

export default sitwell;