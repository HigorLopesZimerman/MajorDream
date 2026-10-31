import { ALL_DATABASE_PLAYERS, CS_DATABASE } from '../data/csDatabase';

const TEAM_IMAGE_EXTENSIONS = ['svg', 'webp', 'png', 'jpg'] as const;
const PLAYER_IMAGE_EXTENSIONS = ['webp', 'png', 'jpg'] as const;

/**
 * Generates candidate local image paths for a team logo inside:
 * 1) Shared logos folder: public/images/logos/<orgSlug>.<ext> (e.g. /images/logos/furia.svg, /images/logos/navi.webp)
 * 2) Specific team folder fallback: public/images/<teamId>/logo.<ext>
 */
export function getTeamLogoCandidates(teamId: string): string[] {
  if (!teamId || teamId === 'user-team') return [];
  const team = CS_DATABASE.find(t => t.id === teamId);
  const baseSlug = teamId.replace(/-\d{4}$/, '').toLowerCase();

  const logoNames = new Set<string>([baseSlug, teamId.toLowerCase()]);
  const folders = new Set<string>([teamId]);

  if (team) {
    const shortLower = team.shortName.toLowerCase();
    const nameSlug = team.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    logoNames.add(shortLower);
    logoNames.add(nameSlug);
    folders.add(shortLower);
    folders.add(nameSlug);
  }

  const urls: string[] = [];

  // 1. Shared public/images/logos/<name>.<ext>
  for (const logoName of logoNames) {
    for (const ext of TEAM_IMAGE_EXTENSIONS) {
      urls.push(`/images/logos/${logoName}.${ext}`);
    }
  }

  // 2. Per-team folder fallback: public/images/<folder>/logo.<ext>
  for (const folder of folders) {
    for (const ext of TEAM_IMAGE_EXTENSIONS) {
      urls.push(`/images/${folder}/logo.${ext}`);
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
