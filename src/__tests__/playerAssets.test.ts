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

  it('resolves shared logos inside /images/logos/<org>.(svg|webp|png) and falls back to /images/<teamId>/logo.(webp|png)', () => {
    const logos = getTeamLogoCandidates('astralis-2018');
    expect(logos[0]).toBe('/images/logos/astralis.svg');
    expect(logos).toContain('/images/logos/astralis.webp');
    expect(logos).toContain('/images/astralis-2018/logo.webp');
    expect(logos).toContain('/images/astralis-2018/logo.png');
  });

  it('returns neutral initials avatar when player has no team association', () => {
    const unverified = getPlayerPortrait('unknown-pro', 'Stewie2K');
    expect(unverified.hasVerifiedImage).toBe(false);
    expect(unverified.url).toBeUndefined();
    expect(unverified.initials).toBe('ST');
  });
});
