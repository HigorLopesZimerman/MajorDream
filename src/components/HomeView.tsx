/* Hallmark · redesign: full · keep handlers, wiring, i18n copy · esports dark system */
import React, { useState, useEffect } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { Trophy, ArrowRight, ShieldCheck, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { sound } from '../utils/sound';
import { NavTab } from './Navbar';
import { HISTORICAL_TEAMS, ALL_PLAYERS } from '../data/csData';
import { TeamLogo } from './TeamLogo';
import { CountryFlag } from './CountryFlag';
import { PlayerAvatar } from './PlayerAvatar';
import { HistoricalTeam } from '../types';

interface HomeViewProps {
  onStartDraft: () => void;
  onNavigate: (tab: NavTab) => void;
}

const roleBadgeConfig: Record<string, { label: string; bg: string }> = {
  igl: { label: 'IGL', bg: 'bg-blue-700' },
  awp: { label: 'AWP', bg: 'bg-violet-700' },
  entry: { label: 'ENT', bg: 'bg-red-700' },
  rifler: { label: 'RIF', bg: 'bg-amber-700' },
  lurker: { label: 'LURK', bg: 'bg-teal-700' },
  support: { label: 'SUP', bg: 'bg-indigo-700' }
};

export const HomeView: React.FC<HomeViewProps> = ({ onStartDraft }) => {
  const { t } = useI18n();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoCycling, setIsAutoCycling] = useState(true);

  const activeTeam: HistoricalTeam = HISTORICAL_TEAMS[activeIndex] || HISTORICAL_TEAMS[0];

  // Auto-cycle spotlight team every 4.5s unless paused by user
  useEffect(() => {
    if (!isAutoCycling || HISTORICAL_TEAMS.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % HISTORICAL_TEAMS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoCycling]);

  const handleSelectTeam = (index: number) => {
    sound.playClick();
    setActiveIndex(index);
    setIsAutoCycling(false);
  };

  const handlePrevTeam = () => {
    sound.playClick();
    setActiveIndex(prev => (prev - 1 + HISTORICAL_TEAMS.length) % HISTORICAL_TEAMS.length);
    setIsAutoCycling(false);
  };

  const handleNextTeam = () => {
    sound.playClick();
    setActiveIndex(prev => (prev + 1) % HISTORICAL_TEAMS.length);
    setIsAutoCycling(false);
  };

  const halfIndex = Math.ceil(HISTORICAL_TEAMS.length / 2);
  const row1Teams = HISTORICAL_TEAMS.slice(0, halfIndex);
  const row2Teams = HISTORICAL_TEAMS.slice(halfIndex);

  const renderMarqueeChip = (team: HistoricalTeam, idxInFull: number, duplicateKey: string) => {
    const isSelected = idxInFull === activeIndex;
    return (
      <button
        key={`${team.id}_${duplicateKey}`}
        type="button"
        onClick={() => handleSelectTeam(idxInFull)}
        className={`flex items-center gap-3 px-4 py-2.5 mx-1.5 rounded-xl border transition-colors shrink-0 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-cs-accent focus-visible:outline-none ${
          isSelected
            ? 'bg-cs-accent/15 border-cs-accent text-white shadow-sm'
            : 'bg-cs-card hover:bg-cs-hover border-cs-border text-cs-text hover:text-white'
        }`}
      >
        <TeamLogo
          teamId={team.id}
          name={team.name}
          logoText={team.logoText}
          accentColor={team.accentColor}
          size="sm"
          className="w-8 h-8 rounded-full shrink-0"
        />
        <div className="text-left">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-xs text-white whitespace-nowrap">
              {team.name}
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cs-surface text-cs-accent border border-cs-border">
              {team.year}
            </span>
          </div>
          <div className="text-[10px] text-cs-muted truncate max-w-[175px]">
            {team.roster.map(p => p.nickname).join(', ')}
          </div>
        </div>
      </button>
    );
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Hero Section — Clean Esports Tactical Command Center */}
      <section className="relative rounded-2xl border border-cs-border bg-cs-surface p-7 sm:p-10 lg:p-12 text-center overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white leading-tight">
            {t('hero.title')}
          </h1>

          <div className="flex items-center justify-center gap-2 text-xs font-mono text-cs-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-cs-accent" />
            <span>{t('hero.badge')}</span>
          </div>

          <p className="text-cs-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                onStartDraft();
              }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-cs-accent hover:bg-cs-accentHover active:brightness-95 disabled:opacity-50 disabled:pointer-events-none text-black font-display font-bold text-base flex items-center justify-center gap-2.5 transition-colors shadow-lg shadow-cs-accent/20 focus-visible:ring-2 focus-visible:ring-cs-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cs-bg focus-visible:outline-none"
            >
              <Trophy className="w-5 h-5" />
              <span>{t('hero.startDraft')}</span>
              <ArrowRight className="w-4 h-4 transition-transform motion-safe:group-hover:translate-x-0.5 motion-reduce:transform-none" />
            </button>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-6 pt-8 border-t border-cs-border max-w-sm mx-auto">
            <div>
              <div className="font-display font-black text-2xl md:text-3xl text-cs-accent tabular-nums">
                {HISTORICAL_TEAMS.length}
              </div>
              <div className="text-xs text-cs-muted mt-0.5">{t('hero.statsTeams')}</div>
            </div>
            <div>
              <div className="font-display font-black text-2xl md:text-3xl text-cs-blue tabular-nums">
                {ALL_PLAYERS.length}
              </div>
              <div className="text-xs text-cs-muted mt-0.5">{t('hero.statsLegends')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Showcase & Animated Dual-Stream Marquee of Available Teams */}
      <section className="rounded-2xl border border-cs-border bg-cs-surface overflow-hidden">
        {/* Section Header + Controls */}
        <div className="p-5 sm:p-6 border-b border-cs-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-cs-accent shrink-0" />
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                {t('home.teamsTitle')}
              </h3>
              <p className="text-xs text-cs-muted">
                Clique em qualquer equipe na esteira animada para inspecionar sua escalação completa
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <span className="text-xs font-mono text-cs-muted mr-2 tabular-nums">
              {activeIndex + 1} / {HISTORICAL_TEAMS.length}
            </span>
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                setIsAutoCycling(prev => !prev);
              }}
              aria-label={isAutoCycling ? 'Pausar rotação automática' : 'Retomar rotação automática'}
              title={isAutoCycling ? 'Pausar rotação automática' : 'Retomar rotação automática'}
              className="p-2 rounded-lg bg-cs-card hover:bg-cs-hover active:scale-95 border border-cs-border text-cs-text hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-cs-accent focus-visible:outline-none"
            >
              {isAutoCycling ? <Pause className="w-4 h-4 text-cs-accent" /> : <Play className="w-4 h-4 text-cs-muted" />}
            </button>
            <button
              type="button"
              onClick={handlePrevTeam}
              aria-label="Equipe anterior"
              className="p-2 rounded-lg bg-cs-card hover:bg-cs-hover active:scale-95 border border-cs-border text-cs-text hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-cs-accent focus-visible:outline-none"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNextTeam}
              aria-label="Próxima equipe"
              className="p-2 rounded-lg bg-cs-card hover:bg-cs-hover active:scale-95 border border-cs-border text-cs-text hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-cs-accent focus-visible:outline-none"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Featured Team Spotlight Deck */}
        {activeTeam && (
          <div className="p-5 sm:p-7 bg-gradient-to-b from-cs-card/70 to-cs-surface border-b border-cs-border space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-cs-bg border-2 p-2 flex items-center justify-center shrink-0 shadow-md"
                  style={{ borderColor: activeTeam.accentColor }}
                >
                  <TeamLogo
                    teamId={activeTeam.id}
                    name={activeTeam.name}
                    logoText={activeTeam.logoText}
                    accentColor={activeTeam.accentColor}
                    size="lg"
                    className="w-full h-full"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-cs-accent text-black font-bold text-xs">
                      {activeTeam.year}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-cs-surface border border-cs-border text-cs-muted font-mono text-xs">
                      {activeTeam.shortName}
                    </span>
                  </div>
                  <h4 className="font-display font-black text-2xl sm:text-3xl text-white">
                    {activeTeam.name}
                  </h4>
                  {activeTeam.description && (
                    <p className="text-xs sm:text-sm text-cs-muted max-w-2xl">
                      {activeTeam.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Progress Dots for quick jumping */}
              <div className="flex flex-wrap items-center gap-1.5 max-w-[240px] md:justify-end">
                {HISTORICAL_TEAMS.map((tItem, idx) => (
                  <button
                    key={tItem.id}
                    type="button"
                    onClick={() => handleSelectTeam(idx)}
                    title={`${tItem.name} (${tItem.year})`}
                    aria-label={`${tItem.name} (${tItem.year})`}
                    className={`h-2 rounded-full transition-colors ${
                      idx === activeIndex
                        ? 'w-5 bg-cs-accent'
                        : 'w-2 bg-cs-border hover:bg-cs-muted'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* 5-Player Spotlight Roster Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {activeTeam.roster.map(player => {
                const roleBadge = roleBadgeConfig[player.role] || {
                  label: player.role.toUpperCase(),
                  bg: 'bg-amber-700'
                };
                return (
                  <div
                    key={player.id}
                    className="p-3 rounded-xl bg-cs-surface border border-cs-border hover:border-cs-accent/50 transition-colors flex flex-col items-center text-center gap-2.5"
                  >
                    <div className="relative w-20 h-24 rounded-xl overflow-hidden bg-cs-card border border-cs-border flex items-center justify-center">
                      <PlayerAvatar
                        playerId={player.id}
                        nickname={player.nickname}
                        className="w-full h-full object-cover object-top"
                        size="sm"
                      />
                    </div>

                    <div className="w-full space-y-1.5">
                      <div className="font-display font-black text-base text-white truncate">
                        {player.nickname}
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-3.5 rounded overflow-hidden border border-cs-border/60 shrink-0" title={player.country}>
                          <CountryFlag countryCode={player.country} />
                        </div>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold text-white ${roleBadge.bg}`}>
                          {roleBadge.label}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Dual-Row Infinite Animated Marquee Stream */}
        <div className="py-5 space-y-3 bg-cs-bg/60 relative overflow-hidden marquee-group">
          {/* Edge Fade Overlays */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-cs-surface to-transparent z-10" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-cs-surface to-transparent z-10" />

          {/* Row 1: Scrolls Left */}
          <div className="overflow-hidden">
            <div className="marquee-track-left">
              {row1Teams.map((team, i) => renderMarqueeChip(team, i, 'a'))}
              {row1Teams.map((team, i) => renderMarqueeChip(team, i, 'b'))}
            </div>
          </div>

          {/* Row 2: Scrolls Right */}
          <div className="overflow-hidden">
            <div className="marquee-track-right">
              {row2Teams.map((team, i) => renderMarqueeChip(team, halfIndex + i, 'a'))}
              {row2Teams.map((team, i) => renderMarqueeChip(team, halfIndex + i, 'b'))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
