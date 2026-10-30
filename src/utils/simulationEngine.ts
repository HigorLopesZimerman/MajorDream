import { Player, SynergyResult } from '../types';

// Calculate team synergy based on roles
export function calculateSynergy(lineup: Player[]): SynergyResult {
  if (lineup.length < 5) {
    return {
      type: 'neutral',
      scoreBonus: 0,
      labelKey: 'draft.synergy',
      descriptionKey: 'draft.emptySlot'
    };
  }

  const roleCounts: Record<string, number> = {};
  lineup.forEach(p => {
    roleCounts[p.role] = (roleCounts[p.role] || 0) + 1;
  });

  const hasIgl = (roleCounts['igl'] || 0) >= 1;
  const hasAwp = (roleCounts['awp'] || 0) >= 1;
  const hasEntry = (roleCounts['entry'] || 0) >= 1;
  const hasLurker = (roleCounts['lurker'] || 0) >= 1;

  // Broken Core: no IGL AND duplicate AWPs or severe duplicate
  if (!hasIgl && (roleCounts['awp'] || 0) > 2) {
    return {
      type: 'broken',
      scoreBonus: -5,
      labelKey: 'draft.synergyBroken',
      descriptionKey: 'draft.synergyBrokenDesc'
    };
  }

  // No IGL
  if (!hasIgl) {
    return {
      type: 'no_igl',
      scoreBonus: -3,
      labelKey: 'draft.synergyNoIgl',
      descriptionKey: 'draft.synergyNoIglDesc'
    };
  }

  // Full Comp: has IGL, AWP, Entry, and either Lurker or balanced roles (+2 OVR bonus)
  if (hasIgl && hasAwp && hasEntry && hasLurker) {
    return {
      type: 'full',
      scoreBonus: 2,
      labelKey: 'draft.synergyFull',
      descriptionKey: 'draft.synergyFullDesc'
    };
  }

  // No Lurker
  if (hasIgl && hasAwp && hasEntry && !hasLurker) {
    return {
      type: 'no_lurker',
      scoreBonus: 0,
      labelKey: 'draft.synergyNoLurker',
      descriptionKey: 'draft.synergyNoLurkerDesc'
    };
  }

  // Broken fallback
  return {
    type: 'broken',
    scoreBonus: -2,
    labelKey: 'draft.synergyBroken',
    descriptionKey: 'draft.synergyBrokenDesc'
  };
}

// Calculate team average OVR including synergy bonus
export function calculateTeamOvr(lineup: Player[]): number {
  if (lineup.length === 0) return 0;
  const sum = lineup.reduce((acc, p) => acc + p.ovr, 0);
  const baseAvg = Math.round(sum / lineup.length);
  if (lineup.length === 5) {
    const synergy = calculateSynergy(lineup);
    return Math.max(60, Math.min(99, baseAvg + synergy.scoreBonus));
  }
  return baseAvg;
}
