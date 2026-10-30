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

export interface SimulationRoundResult {
  roundNumber: number;
  winner: 'user' | 'opponent';
  userRoundScore: number;
  opponentRoundScore: number;
  highlightText: string;
  isPistol?: boolean;
}

export interface SimulatedMatchResult {
  id: string;
  stage: 'swiss' | 'playoff';
  roundName: string;
  mapName: string;
  opponentTeam: {
    name: string;
    ovr: number;
    logoText: string;
    roster: Player[];
  };
  userScore: number;
  opponentScore: number;
  isOvertime: boolean;
  won: boolean;
  mvp: {
    nickname: string;
    team: 'user' | 'opponent';
    kd: string;
    rating: number;
  };
  playerPerformances: {
    playerId: string;
    nickname: string;
    kills: number;
    deaths: number;
    assists: number;
    rating: number;
    isMvp: boolean;
  }[];
  roundsHistory: SimulationRoundResult[];
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
  swissMatches: SimulatedMatchResult[];
  isSwissFinished: boolean;
  isQualifiedForPlayoffs: boolean;
  playoffStage: 'quarters' | 'semis' | 'finals' | 'champion' | 'eliminated' | 'none';
  playoffMatches: SimulatedMatchResult[];
  isChampion: boolean;
  isInvictus: boolean;
  majorMvp: Player | null;
  status: 'drafting' | 'map_allocation' | 'swiss' | 'playoffs' | 'completed';
}
