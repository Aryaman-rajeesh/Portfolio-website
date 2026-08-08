// 1. Import the single source of truth for your types
import type { Project } from './projects.types';

// 2. Import all of your separate project files
import floralicious from './projects/floralicious';
import spdPowerBank from './projects/spd-power-bank';
import speakeasy from './projects/speakeasy';
import passportSeva from './projects/passport-seva';
import windowsControlPanel from './projects/windows-control-panel';
import sitwell from './projects/sitwell'; // <-- Added SitWell import!

/* ── THE PROJECTS ────────────────────────────────────────────── */

export const projects: Project[] = [
  floralicious,
  spdPowerBank,
  speakeasy,
  passportSeva,
  windowsControlPanel,
  sitwell, // <-- Added SitWell to the array!
];

/* ── HELPER ──────────────────────────────────────────────────── */
export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}