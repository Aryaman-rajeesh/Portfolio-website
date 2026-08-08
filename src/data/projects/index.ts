/**
 * ═══════════════════════════════════════════════════════════════
 *  PROJECTS INDEX — Combines all individual project files
 * ═══════════════════════════════════════════════════════════════
 *
 *  Each project lives in its own file under src/data/projects/<slug>.ts.
 *  This file imports them all and exports a single `projects` array
 *  plus the `getProjectById` helper.
 *
 *  TO ADD A NEW PROJECT:
 *   1. Create a new file in src/data/projects/ (copy an existing one)
 *   2. Import it below and add it to the `projects` array
 *   3. The route /project/<id> will automatically pick it up
 */

import type { Project } from '../projects.types';
import spdPowerBank from './spd-power-bank';
import floralicious from './floralicious';
import speakeasy from './speakeasy';
import passportSeva from './passport-seva';
import windowsControlPanel from './windows-control-panel';

export type { Project, ProcessStep, GalleryImage, GallerySpan } from '../projects.types';

export const projects: Project[] = [
  spdPowerBank,
  floralicious,
  speakeasy,
  passportSeva,
  windowsControlPanel,
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
