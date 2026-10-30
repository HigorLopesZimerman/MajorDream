import { describe, it, expect } from 'vitest';
import { calculateSynergy, calculateTeamOvr } from '../utils/simulationEngine';
import { Player } from '../types';
import { HISTORICAL_TEAMS } from '../data/csData';

describe('Major Dream Game Engine Tests', () => {
  const lgTeam = HISTORICAL_TEAMS.find(t => t.id === 'lg-2016')!;

  it('calculates Full Composition synergy correctly when balanced with +2 OVR bonus', () => {
    const balancedRoster: Player[] = [
      { ...lgTeam.roster[0], role: 'igl' },
      { ...lgTeam.roster[1], role: 'lurker' },
      { ...lgTeam.roster[2], role: 'entry' },
      { ...lgTeam.roster[3], role: 'awp' },
      { ...lgTeam.roster[4], role: 'rifler' }
    ];

    const synergy = calculateSynergy(balancedRoster);
    expect(synergy.type).toBe('full');
    expect(synergy.scoreBonus).toBe(2);
  });

  it('penalizes roster without an IGL', () => {
    const noIglRoster: Player[] = [
      { ...lgTeam.roster[0], role: 'rifler' },
      { ...lgTeam.roster[1], role: 'lurker' },
      { ...lgTeam.roster[2], role: 'entry' },
      { ...lgTeam.roster[3], role: 'awp' },
      { ...lgTeam.roster[4], role: 'rifler' }
    ];

    const synergy = calculateSynergy(noIglRoster);
    expect(synergy.type).toBe('no_igl');
    expect(synergy.scoreBonus).toBe(-3);
  });

  it('calculates team average OVR factoring synergy bonus', () => {
    const balancedRoster: Player[] = [
      { ...lgTeam.roster[0], ovr: 90, role: 'igl' },
      { ...lgTeam.roster[1], ovr: 90, role: 'lurker' },
      { ...lgTeam.roster[2], ovr: 90, role: 'entry' },
      { ...lgTeam.roster[3], ovr: 90, role: 'awp' },
      { ...lgTeam.roster[4], ovr: 90, role: 'rifler' }
    ];

    const ovr = calculateTeamOvr(balancedRoster);
    // Base 90 + 2 full comp = 92
    expect(ovr).toBe(92);
  });
});
