export type Role = 'igl' | 'awp' | 'entry' | 'rifler' | 'lurker' | 'support';

export interface Player {
  id: string;             // e.g. "coldzera-2016"
  nickname: string;       // "coldzera"
  country: string;        // "BR", "UA", "DK", "FR", "BA", etc.
  role: Role;
  ovr: number;            // 60-99
  teamId: string;         // "lg-2016"
  teamName: string;       // "Luminosity Gaming"
}

export interface HistoricalTeam {
  id: string;             // "lg-2016"
  name: string;           // "Luminosity Gaming"
  shortName: string;      // "LG"
  year: number;           // 2016
  logoText: string;       // "LG"
  accentColor: string;    // "#00A3E0"
  description?: string;
  roster: Player[];
}

export interface MapData {
  id: string;
  name: string;
  activeDuty: boolean;
  imageBg: string;
}

export type SynergyType = 'full' | 'no_lurker' | 'no_igl' | 'broken' | 'neutral';

export interface SynergyResult {
  type: SynergyType;
  scoreBonus: number;     // e.g. +2, 0, -3, -5
  labelKey: string;
  descriptionKey: string;
}

export interface CampaignState {
  campaignId: string;
  teamName: string;
  lineup: Player[];
  overallOvr: number;
  synergy: SynergyResult;
  mapPoints: Record<string, number>;
  baseProficiencies?: Record<string, number>;
  swissRound: number;
  userWins: number;
  userLosses: number;
  isSwissFinished: boolean;
  isQualifiedForPlayoffs: boolean;
  isChampion: boolean;
  status: 'drafting' | 'map_allocation' | 'swiss' | 'playoffs' | 'completed';
}
