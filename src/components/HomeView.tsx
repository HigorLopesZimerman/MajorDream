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

const roleBadgeConfig: Record<string, { label: string; fullName: string; bg: string }> = {
  igl: { label: 'IGL', fullName: 'In-Game Leader', bg: 'bg-blue-700' },
  awp: { label: 'AWP', fullName: 'AWPer Principal', bg: 'bg-violet-700' },
  entry: { label: 'ENT', fullName: 'Entry Fragger', bg: 'bg-red-700' },
  rifler: { label: 'RIF', fullName: 'Star Rifler', bg: 'bg-amber-700' },
  lurker: { label: 'LURK', fullName: 'Lurker', bg: 'bg-teal-700' },
  support: { label: 'SUP', fullName: 'Support / Anchor', bg: 'bg-indigo-700' }
};

export const HomeView: React.FC<HomeViewProps> = ({ onStartDraft }) => {
  const { t } = useI18n();
  const [activeIndex, setActiveIndex] = useState(0);
  const [focusedPlayerIndex, setFocusedPlayerIndex] = useState(0);
  const [isAutoCycling, setIsAutoCycling] = useState(true);

  const activeTeam: HistoricalTeam = HISTORICAL_TEAMS[activeIndex] || HISTORICAL_TEAMS[0];
  const focusedPlayer = activeTeam.roster[focusedPlayerIndex] || activeTeam.roster[0];

  // Auto-cycle spotlight team every 7s unless paused by user
  useEffect(() => {
    if (!isAutoCycling || HISTORICAL_TEAMS.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % HISTORICAL_TEAMS.length);
      setFocusedPlayerIndex(0);
    }, 7000);
    return () => clearInterval(timer);
  }, [isAutoCycling]);

  const handleSelectTeam = (index: number) => {
    sound.playClick();
    setActiveIndex(index);
    setFocusedPlayerIndex(0);
    setIsAutoCycling(false);
  };

  const handlePrevTeam = () => {
    sound.playClick();
    setActiveIndex(prev => (prev - 1 + HISTORICAL_TEAMS.length) % HISTORICAL_TEAMS.length);
    setFocusedPlayerIndex(0);
    setIsAutoCycling(false);
  };

  const handleNextTeam = () => {
    sound.playClick();
    setActiveIndex(prev => (prev + 1) % HISTORICAL_TEAMS.length);
    setFocusedPlayerIndex(0);
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

  const focusedRoleBadge = focusedPlayer
    ? roleBadgeConfig[focusedPlayer.role] || {
        label: focusedPlayer.role.toUpperCase(),
        fullName: focusedPlayer.role.toUpperCase(),
        bg: 'bg-amber-700'
      }
    : null;

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
                Passe o mouse ou clique em um jogador ao lado para ampliar o card em destaque
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
          <div className="relative p-5 sm:p-7 bg-gradient-to-b from-cs-card/70 to-cs-surface border-b border-cs-border space-y-6 overflow-hidden">
            {/* Ambient Watermark Team Logo in Background */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-6 right-8 w-56 h-56 sm:w-72 sm:h-72 opacity-[0.045] select-none hidden md:flex items-center justify-center"
            >
              <TeamLogo
                teamId={activeTeam.id}
                name={activeTeam.name}
                logoText={activeTeam.logoText}
                accentColor={activeTeam.accentColor}
                variant="bare"
                size="xl"
                className="w-full h-full"
              />
            </div>

            {/* Team Header Row */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div className="flex items-center gap-5">
                <div
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-cs-bg border-2 p-3 flex items-center justify-center shrink-0"
                  style={{
                    borderColor: activeTeam.accentColor,
                    boxShadow: `0 0 28px -6px ${activeTeam.accentColor}50`
                  }}
                >
                  <TeamLogo
                    teamId={activeTeam.id}
                    name={activeTeam.name}
                    logoText={activeTeam.logoText}
                    accentColor={activeTeam.accentColor}
                    variant="bare"
                    size="xl"
                    className="w-full h-full"
                  />
                </div>
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-cs-accent text-black font-bold text-xs">
                      {activeTeam.year}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-cs-surface border border-cs-border text-cs-muted font-mono text-xs">
                      {activeTeam.shortName}
                    </span>
                  </div>
                  <h4 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                    {activeTeam.name}
                  </h4>
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

            {/* Split Roster Showcase: Left Hero Spotlight Card + Right 5-Player Formation Grid */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
              {/* Left Side: FIFA-Style Zoomed Player Card */}
              {focusedPlayer && focusedRoleBadge && (
                <div
                  className="relative lg:col-span-5 rounded-2xl bg-cs-bg/95 border-2 p-5 sm:p-6 flex flex-col items-center justify-between text-center gap-4 shadow-lg overflow-hidden"
                  style={{ borderColor: `${activeTeam.accentColor}90` }}
                >
                  {/* Subtle Watermark Crest Behind Spotlight Player */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.06] select-none"
                  >
                    <TeamLogo
                      teamId={activeTeam.id}
                      name={activeTeam.name}
                      logoText={activeTeam.logoText}
                      accentColor={activeTeam.accentColor}
                      variant="bare"
                      size="xl"
                      className="w-64 h-64"
                    />
                  </div>

                  {/* Top FIFA Card Header: Role/Flag on Left, Team Crest on Right (No OVR spoiler) */}
                  <div className="relative z-10 w-full flex items-center justify-between border-b border-cs-border pb-3">
                    <div className="flex items-center gap-2.5 text-left">
                      <span
                        className={`px-3 py-1 rounded-lg text-xs font-bold text-white shadow-sm ${focusedRoleBadge.bg}`}
                      >
                        {focusedRoleBadge.label}
                      </span>
                      <div
                        className="w-6 h-4 rounded overflow-hidden border border-cs-border shrink-0 shadow-sm"
                        title={focusedPlayer.country}
                      >
                        <CountryFlag countryCode={focusedPlayer.country} />
                      </div>
                      <span className="text-xs text-cs-muted">
                        {focusedRoleBadge.fullName}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <TeamLogo
                        teamId={activeTeam.id}
                        name={activeTeam.name}
                        logoText={activeTeam.logoText}
                        accentColor={activeTeam.accentColor}
                        variant="bare"
                        size="sm"
                        className="w-6 h-6"
                      />
                      <span className="text-xs font-bold text-white">{activeTeam.shortName}</span>
                      <span className="font-mono text-xs text-cs-muted tabular-nums ml-1">
                        {focusedPlayerIndex + 1}/{activeTeam.roster.length}
                      </span>
                    </div>
                  </div>

                  {/* Extra-Large Portrait Frame */}
                  <div className="relative z-10 w-40 h-48 sm:w-44 sm:h-52 rounded-2xl overflow-hidden bg-cs-surface border-2 border-cs-border flex items-center justify-center shadow-md">
                    <PlayerAvatar
                      playerId={focusedPlayer.id}
                      nickname={focusedPlayer.nickname}
                      teamId={focusedPlayer.teamId}
                      className="w-full h-full object-cover object-top"
                      size="xl"
                    />
                  </div>

                  {/* Big Readable Nickname */}
                  <div className="relative z-10 w-full">
                    <h5 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                      {focusedPlayer.nickname}
                    </h5>
                  </div>

                  {/* 7 Individual Attributes Grid (FIFA / HLTV Card Style) */}
                  <div className="relative z-10 w-full pt-3 border-t border-cs-border">
                    <div className="grid grid-cols-7 gap-1.5">
                      {(
                        [
                          { key: 'AIM', title: 'Mira (Aim)', val: focusedPlayer.attributes.aim },
                          { key: 'IMP', title: 'Impacto', val: focusedPlayer.attributes.imp },
                          { key: 'CLU', title: 'Clutch', val: focusedPlayer.attributes.clu },
                          { key: 'CON', title: 'Consistência', val: focusedPlayer.attributes.con },
                          { key: 'GS', title: 'Game Sense', val: focusedPlayer.attributes.gs },
                          { key: 'UTI', title: 'Utilitários (Utility)', val: focusedPlayer.attributes.uti },
                          { key: 'MOV', title: 'Movimentação (Movement)', val: focusedPlayer.attributes.mov }
                        ] as const
                      ).map(stat => {
                        const valColor =
                          stat.val >= 90
                            ? 'text-cs-green'
                            : stat.val >= 84
                              ? 'text-cs-accent'
                              : 'text-white';
                        return (
                          <div
                            key={stat.key}
                            title={`${stat.title}: ${stat.val}`}
                            className="p-1.5 rounded-lg bg-cs-surface/90 border border-cs-border flex flex-col items-center justify-center"
                          >
                            <span className="text-[10px] font-bold text-cs-muted">
                              {stat.key}
                            </span>
                            <span className={`font-mono font-bold text-sm sm:text-base tabular-nums ${valColor}`}>
                              {stat.val}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Right Side: 5-Player Formation Selector (2 + 2 + 1 centered) */}
              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-6 gap-3.5 content-center">
                {activeTeam.roster.map((player, pIdx) => {
                  const roleBadge = roleBadgeConfig[player.role] || {
                    label: player.role.toUpperCase(),
                    fullName: player.role.toUpperCase(),
                    bg: 'bg-amber-700'
                  };
                  const isFocused = pIdx === focusedPlayerIndex;
                  // 2 cards on top row, 2 cards on middle row, 5th card centered on bottom row
                  const formationSpan =
                    pIdx === 4
                      ? 'col-span-2 sm:col-span-4 sm:col-start-2'
                      : 'col-span-1 sm:col-span-3';

                  return (
                    <button
                      key={player.id}
                      type="button"
                      onMouseEnter={() => {
                        setFocusedPlayerIndex(pIdx);
                        setIsAutoCycling(false);
                      }}
                      onFocus={() => {
                        setFocusedPlayerIndex(pIdx);
                      }}
                      onClick={() => {
                        sound.playClick();
                        setFocusedPlayerIndex(pIdx);
                        setIsAutoCycling(false);
                      }}
                      className={`${formationSpan} p-3.5 sm:p-4 rounded-xl border text-left transition-colors flex items-center gap-3.5 focus-visible:ring-2 focus-visible:ring-cs-accent focus-visible:outline-none ${
                        isFocused
                          ? 'bg-cs-card border-cs-accent shadow-md'
                          : 'bg-cs-surface/90 hover:bg-cs-card border-cs-border hover:border-cs-accent/50'
                      }`}
                    >
                      <div
                        className={`relative w-16 h-20 sm:w-20 sm:h-24 rounded-xl overflow-hidden bg-cs-bg border shrink-0 flex items-center justify-center transition-colors ${
                          isFocused ? 'border-cs-accent' : 'border-cs-border'
                        }`}
                      >
                        <PlayerAvatar
                          playerId={player.id}
                          nickname={player.nickname}
                          teamId={player.teamId}
                          className="w-full h-full object-cover object-top"
                          size="md"
                        />
                      </div>

                      <div className="min-w-0 flex-1 space-y-2">
                        <div className="font-display font-black text-lg sm:text-xl text-white truncate">
                          {player.nickname}
                        </div>

                        <div className="flex items-center gap-2">
                          <div
                            className="w-6 h-4 rounded overflow-hidden border border-cs-border/60 shrink-0"
                            title={player.country}
                          >
                            <CountryFlag countryCode={player.country} />
                          </div>
                          <span
                            className={`px-2.5 py-0.5 rounded text-xs font-bold text-white ${roleBadge.bg}`}
                          >
                            {roleBadge.label}
                          </span>
                        </div>

                        <div className="text-[11px] text-cs-muted truncate">
                          {roleBadge.fullName}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
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
