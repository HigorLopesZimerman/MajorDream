import { ALL_DATABASE_PLAYERS, CS_DATABASE } from '../data/csDatabase';
import { AVAILABLE_LOGO_FILES } from 'virtual:logo-manifest';

const TEAM_IMAGE_EXTENSIONS = ['svg', 'webp', 'png', 'jpg'] as const;
const PLAYER_IMAGE_EXTENSIONS = ['webp', 'png', 'jpg'] as const;

function normalizeKey(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

/**
 * Matches a logo filename from `public/images/logos/` against a team's aliases and year.
 * Supported naming patterns:
 *  - Exact single year: `<org><year>.<ext>` or `<org>-<year>.<ext>` (e.g. `furia2019.svg`) -> priority 3
 *  - Year range: `<org><startYear>-<endYear>.<ext>` (e.g. `navi2010-2020.svg`) -> priority 2
 *  - Timeless org logo: `<org>.<ext>` (e.g. `furia.svg`) -> priority 1
 */
export function matchLogoFilenameForTeam(
  filename: string,
  orgAliases: Set<string>,
  teamYear?: number
): number {
  const m = filename.match(/^(.+?)(?:[-_]?(\d{4})(?:[-_](\d{4}))?)?\.(svg|webp|png|jpg|jpeg)$/i);
  if (!m) return 0;

  const rawOrg = normalizeKey(m[1]);
  if (!orgAliases.has(rawOrg)) return 0;

  const startYear = m[2] ? parseInt(m[2], 10) : undefined;
  const endYear = m[3] ? parseInt(m[3], 10) : undefined;

  // 1. Range logo: e.g. navi2010-2020.svg
  if (startYear !== undefined && endYear !== undefined) {
    if (teamYear !== undefined && teamYear >= startYear && teamYear <= endYear) {
      return 2;
    }
    return 0;
  }

  // 2. Single-year logo: e.g. furia2019.svg
  if (startYear !== undefined) {
    if (teamYear === startYear) {
      return 3;
    }
    return 0;
  }

  // 3. Timeless org logo: e.g. furia.svg
  return 1;
}

/**
 * Generates candidate local image paths for a team logo inside:
 * 1) Shared logos folder (`public/images/logos/`):
 *    - `<org><year>.<ext>` (e.g. `furia2019.svg`)
 *    - `<org><startYear>-<endYear>.<ext>` (e.g. `navi2010-2020.svg`, matched against `team.year`)
 *    - `<org>.<ext>` (e.g. `furia.svg`)
 * 2) Specific team folder fallback: `public/images/<teamId>/logo.<ext>`
 */
export function getTeamLogoCandidates(
  teamId: string,
  manifestFiles: string[] = AVAILABLE_LOGO_FILES
): string[] {
  if (!teamId || teamId === 'user-team') return [];
  const team = CS_DATABASE.find(t => t.id === teamId);
  const yearMatch = teamId.match(/-(\d{4})$/);
  const teamYear = team?.year ?? (yearMatch ? parseInt(yearMatch[1], 10) : undefined);
  const baseSlug = teamId.replace(/-\d{4}$/, '').toLowerCase();

  const orgAliases = new Set<string>([normalizeKey(baseSlug)]);
  const rawBaseNames = new Set<string>([baseSlug]);
  const folders = new Set<string>([teamId]);

  if (team) {
    const shortLower = team.shortName.toLowerCase();
    const nameClean = normalizeKey(team.name);
    const nameWithoutTeam = normalizeKey(team.name.replace(/^team\s+/i, '').replace(/\s+(esports|gaming|clan)$/i, ''));

    orgAliases.add(normalizeKey(shortLower));
    orgAliases.add(nameClean);
    if (nameWithoutTeam) orgAliases.add(nameWithoutTeam);

    rawBaseNames.add(shortLower);
    if (nameWithoutTeam) rawBaseNames.add(nameWithoutTeam);
    rawBaseNames.add(nameClean);

    folders.add(shortLower);
  }

  const urls: string[] = [];
  const addUrl = (u: string) => {
    if (!urls.includes(u)) urls.push(u);
  };

  // 1. First, check actual files present in public/images/logos/ (supports year ranges like 2010-2020!)
  if (manifestFiles && manifestFiles.length > 0) {
    const matched = manifestFiles
      .map(file => ({
        file,
        priority: matchLogoFilenameForTeam(file, orgAliases, teamYear)
      }))
      .filter(item => item.priority > 0)
      .sort((a, b) => b.priority - a.priority);

    for (const item of matched) {
      addUrl(`/images/logos/${item.file}`);
    }
  }

  // 2. Direct candidate paths for single-year (`furia2019.<ext>`) and timeless (`furia.<ext>`)
  if (teamYear !== undefined) {
    for (const base of rawBaseNames) {
      for (const ext of TEAM_IMAGE_EXTENSIONS) {
        addUrl(`/images/logos/${base}${teamYear}.${ext}`);
      }
    }
  }

  for (const base of rawBaseNames) {
    for (const ext of TEAM_IMAGE_EXTENSIONS) {
      addUrl(`/images/logos/${base}.${ext}`);
    }
  }

  // 3. Per-team folder fallback: public/images/<folder>/logo.<ext>
  for (const folder of folders) {
    for (const ext of TEAM_IMAGE_EXTENSIONS) {
      addUrl(`/images/${folder}/logo.${ext}`);
    }
  }

  return urls;
}

/**
 * Resolves player portrait metadata and local image candidate paths inside:
 * public/images/<teamId>/<player>.<ext>
 */
export function getPlayerPortrait(playerId: string, nickname: string, teamId?: string) {
  const initials = (nickname || 'CS').slice(0, 2).toUpperCase();
  const dbPlayer = ALL_DATABASE_PLAYERS.find(p => p.id === playerId);
  const resolvedTeamId = teamId || dbPlayer?.teamId;

  if (!resolvedTeamId) {
    return {
      hasVerifiedImage: false,
      url: undefined,
      candidates: [] as string[],
      initials,
      note: 'No team folder associated - using neutral avatar fallback'
    };
  }

  const cleanNick = nickname.trim();
  const lowerNick = cleanNick.toLowerCase();
  const names = Array.from(new Set([lowerNick, cleanNick, playerId]));

  const candidates: string[] = [];
  for (const name of names) {
    for (const ext of PLAYER_IMAGE_EXTENSIONS) {
      candidates.push(`/images/${resolvedTeamId}/${name}.${ext}`);
    }
  }

  return {
    hasVerifiedImage: candidates.length > 0,
    url: candidates[0],
    candidates,
    initials,
    note: `Local image path /images/${resolvedTeamId}/${lowerNick}.(webp|png)`
  };
}
