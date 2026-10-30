import { ALL_DATABASE_PLAYERS, CS_DATABASE } from '../data/csDatabase';

const TEAM_IMAGE_EXTENSIONS = ['webp', 'png', 'svg', 'jpg'] as const;
const PLAYER_IMAGE_EXTENSIONS = ['webp', 'png', 'jpg'] as const;

/**
 * Generates candidate local image paths for a team logo inside:
 * public/images/<teamId>/logo.<ext>
 */
export function getTeamLogoCandidates(teamId: string): string[] {
  if (!teamId || teamId === 'user-team') return [];
  const team = CS_DATABASE.find(t => t.id === teamId);
  const folders = new Set<string>([teamId]);

  if (team) {
    folders.add(team.shortName.toLowerCase());
    folders.add(team.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
  }

  const urls: string[] = [];
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
