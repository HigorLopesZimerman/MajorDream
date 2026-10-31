import { describe, it, expect } from 'vitest';
import { getPlayerPortrait, getTeamLogoCandidates } from '../utils/playerAssets';

describe('Local Image Asset Resolution Tests', () => {
  it('resolves local team folder and player image candidates for database players', () => {
    const fallen = getPlayerPortrait('fallen-2016', 'FalleN', 'lg-2016');
    expect(fallen.hasVerifiedImage).toBe(true);
    expect(fallen.url).toBe('/images/lg-2016/fallen.webp');
    expect(fallen.candidates).toContain('/images/lg-2016/fallen.png');
    expect(fallen.initials).toBe('FA');

    const simple = getPlayerPortrait('s1mple-2021', 's1mple');
    expect(simple.hasVerifiedImage).toBe(true);
    expect(simple.url).toBe('/images/navi-2021/s1mple.webp');
  });

  it('resolves single-year, year-range, and timeless org logos inside /images/logos/', () => {
    // 1. Timeless org logo (e.g. furia.svg)
    const furiaLogos = getTeamLogoCandidates('furia-2019', ['furia.svg']);
    expect(furiaLogos[0]).toBe('/images/logos/furia.svg');

    // 2. Year-range logo (e.g. navi2018-2022.webp matches navi-2021, but not navi-2024)
    const navi2021Logos = getTeamLogoCandidates('navi-2021', ['navi2018-2022.webp', 'navi.svg']);
    expect(navi2021Logos[0]).toBe('/images/logos/navi2018-2022.webp');

    const navi2024Logos = getTeamLogoCandidates('navi-2024', ['navi2018-2022.webp', 'navi.svg']);
    expect(navi2024Logos[0]).toBe('/images/logos/navi.svg');

    // 3. Single-year logo takes highest priority over range and timeless (e.g. furia2019.webp)
    const furiaSpecific = getTeamLogoCandidates('furia-2019', ['furia.svg', 'furia2018-2021.svg', 'furia2019.webp']);
    expect(furiaSpecific[0]).toBe('/images/logos/furia2019.webp');
  });

  it('returns neutral initials avatar when player has no team association', () => {
    const unverified = getPlayerPortrait('unknown-pro', 'Stewie2K');
    expect(unverified.hasVerifiedImage).toBe(false);
    expect(unverified.url).toBeUndefined();
    expect(unverified.initials).toBe('ST');
  });
});
