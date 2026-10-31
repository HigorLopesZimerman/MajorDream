/* Hallmark · shape: app screen · genre: modern-minimal · theme: project esports dark (preserved tokens) · screen: teams directory table with inline roster disclosure · states: empty, full · v2.0.0
 * pre-emit critique: P3 H4 E4 S4 R5 V3 · weakest: P, an internal inspection tool first; visual pass planned later by the owner
 * Hallmark · waive 26b · active: and disabled: Tailwind variants on the shared ctrl class · the teams directory controls carry press and disabled states through utilities, not raw CSS */
import React, { useEffect, useMemo, useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
import { TranslationKey } from '../i18n/translations';
import { HISTORICAL_TEAMS } from '../data/csData';
import { HistoricalTeam } from '../types';
import { TeamLogo } from './TeamLogo';
import { CountryFlag } from './CountryFlag';
import { PlayerAvatar } from './PlayerAvatar';

type SortKey = 'ovr' | 'yearDesc' | 'yearAsc' | 'name';

const ROLE_LABEL: Record<string, string> = {
  igl: 'IGL', awp: 'AWP', entry: 'ENT', rifler: 'RIF', lurker: 'LURK', support: 'SUP'
};

const teamAvg = (t: HistoricalTeam) =>
  Math.round(t.roster.reduce((a, p) => a + p.ovr, 0) / (t.roster.length || 1));

const readParams = () => {
  const p = new URLSearchParams(window.location.search);
  return {
    q: p.get('q') ?? '',
    region: p.get('region') ?? '',
    sort: (p.get('sort') as SortKey) || 'ovr'
  };
};

export const TeamsView: React.FC = () => {
  const { t } = useI18n();
  const initial = readParams();
  const [query, setQuery] = useState(initial.q);
  const [region, setRegion] = useState(initial.region);
  const [sort, setSort] = useState<SortKey>(initial.sort);
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    query ? p.set('q', query) : p.delete('q');
    region ? p.set('region', region) : p.delete('region');
    sort !== 'ovr' ? p.set('sort', sort) : p.delete('sort');
    const qs = p.toString();
    window.history.replaceState(null, '', qs ? `?${qs}` : window.location.pathname);
  }, [query, region, sort]);

  const regions = useMemo(
    () => Array.from(new Set(HISTORICAL_TEAMS.map(tm => tm.tags?.[0]).filter(Boolean))).sort() as string[],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = HISTORICAL_TEAMS.filter(tm => {
      if (region && tm.tags?.[0] !== region) return false;
      if (!q) return true;
      return (
        tm.name.toLowerCase().includes(q) ||
        tm.shortName.toLowerCase().includes(q) ||
        String(tm.year).includes(q) ||
        tm.tags?.some(tag => tag.toLowerCase() === q) ||
        tm.roster.some(p => p.nickname.toLowerCase().includes(q))
      );
    });
    return [...list].sort((a, b) => {
      if (sort === 'yearDesc') return b.year - a.year;
      if (sort === 'yearAsc') return a.year - b.year;
      if (sort === 'name') return a.name.localeCompare(b.name);
      return teamAvg(b) - teamAvg(a);
    });
  }, [query, region, sort]);

  const clear = () => { setQuery(''); setRegion(''); setSort('ovr'); };

  const sortOptions: { id: SortKey; key: TranslationKey }[] = [
    { id: 'ovr', key: 'teams.sortOvrDesc' },
    { id: 'yearDesc', key: 'teams.sortYearDesc' },
    { id: 'yearAsc', key: 'teams.sortYearAsc' },
    { id: 'name', key: 'teams.sortNameAsc' }
  ];

  const ctrl =
    'h-10 rounded-lg border border-cs-border bg-cs-surface text-sm text-cs-text transition-colors hover:bg-cs-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-cs-accent focus-visible:outline-offset-2 active:translate-y-px disabled:opacity-55 disabled:cursor-not-allowed';

  return (
    <div className="space-y-6 pb-16">
      <div>
        <h1 className="font-display font-black text-3xl text-white">{t('teams.title')}</h1>
        <p className="text-cs-muted mt-1">{t('teams.subtitle')}</p>
      </div>

      {/* Filter row */}
      <div className="flex flex-col lg:flex-row lg:items-end gap-4">
        <label className="flex-1 min-w-0">
          <span className="block text-sm text-cs-muted mb-1">{t('teams.searchLabel')}</span>
          <span className="relative block">
            <Search aria-hidden="true" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cs-muted" />
            <input
              type="search"
              name="q"
              autoComplete="off"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder={t('teams.searchPlaceholder')}
              className={`${ctrl} w-full pl-9 pr-3 placeholder:text-cs-muted`}
            />
          </span>
        </label>

        <div>
          <span className="block text-sm text-cs-muted mb-1">{t('teams.filterRegion')}</span>
          <div role="radiogroup" aria-label={t('teams.filterRegion')} className="flex flex-wrap gap-1.5">
            {['', ...regions].map(r => {
              const active = region === r;
              return (
                <button
                  key={r || 'all'}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setRegion(r)}
                  className={`${ctrl} px-3 ${active ? 'bg-cs-accent text-cs-dark border-cs-accent hover:bg-cs-accentHover' : ''}`}
                >
                  {r || t('teams.filterAll')}
                </button>
              );
            })}
          </div>
        </div>

        <label>
          <span className="block text-sm text-cs-muted mb-1">{t('teams.sortBy')}</span>
          <select value={sort} onChange={e => setSort(e.target.value as SortKey)} className={`${ctrl} px-3`}>
            {sortOptions.map(o => (
              <option key={o.id} value={o.id}>{t(o.key)}</option>
            ))}
          </select>
        </label>
      </div>

      <p role="status" className="text-sm text-cs-muted tabular-nums">
        {t('teams.showingCount', { shown: filtered.length, total: HISTORICAL_TEAMS.length })}
      </p>

      {filtered.length === 0 ? (
        <div className="py-16 text-center border-t border-cs-border">
          <p className="text-white font-semibold">{t('teams.emptyTitle')}</p>
          <p className="text-cs-muted text-sm mt-1">{t('teams.emptyDesc')}</p>
          <button type="button" onClick={clear} className={`${ctrl} px-4 mt-4`}>
            {t('teams.clearFilters')}
          </button>
        </div>
      ) : (
        <ul className="border-t border-cs-border">
          {filtered.map(team => {
            const open = openId === team.id;
            const avg = teamAvg(team);
            return (
              <li key={team.id} className="border-b border-cs-border">
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`roster-${team.id}`}
                  onClick={() => setOpenId(open ? null : team.id)}
                  className="w-full grid grid-cols-[auto_minmax(0,1fr)_auto_auto] items-center gap-4 py-3 px-2 text-left transition-colors hover:bg-cs-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-cs-accent focus-visible:-outline-offset-2"
                >
                  <TeamLogo
                    teamId={team.id}
                    name={team.name}
                    logoText={team.logoText}
                    accentColor={team.accentColor}
                    size="md"
                  />
                  <span className="min-w-0">
                    <span className="block font-display font-bold text-white truncate">
                      {team.name} <span className="text-cs-muted font-sans font-normal">{team.year}</span>
                    </span>
                    <span className="flex flex-wrap gap-1.5 mt-1">
                      {team.tags?.map(tag => (
                        <span key={tag} className="px-2 py-0.5 rounded bg-cs-card text-xs text-cs-text">
                          {tag}
                        </span>
                      ))}
                    </span>
                  </span>
                  <span className="text-right">
                    <span className="block text-xs text-cs-muted">{t('teams.avgOvr')}</span>
                    <span className="font-display font-black text-xl text-cs-accent tabular-nums">{avg}</span>
                  </span>
                  <ChevronDown
                    aria-hidden="true"
                    className={`w-5 h-5 text-cs-muted transition-transform motion-reduce:transition-none ${open ? 'rotate-180' : ''}`}
                  />
                </button>

                {open && (
                  <div id={`roster-${team.id}`} className="pb-4 px-2 overflow-x-auto">
                    {/* Visual cards inspection grid so photos can be verified at a glance */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 mb-4 pt-1">
                      {team.roster.map(p => (
                        <div
                          key={p.id}
                          className="flex flex-col items-center p-2 rounded-lg bg-cs-card/70 border border-cs-border/60 text-center"
                        >
                          <PlayerAvatar
                            playerId={p.id}
                            nickname={p.nickname}
                            teamId={team.id}
                            size="md"
                            className="mb-1.5"
                          />
                          <div className="flex items-center gap-1.5 justify-center w-full">
                            <span className="w-4 h-2.5 rounded-xs overflow-hidden shrink-0">
                              <CountryFlag countryCode={p.country} />
                            </span>
                            <span className="text-white text-xs font-bold truncate">{p.nickname}</span>
                          </div>
                          <span className="text-[10px] text-cs-muted font-medium mt-0.5">
                            {ROLE_LABEL[p.role] ?? p.role} · <strong className="text-cs-accent">{p.ovr}</strong>
                          </span>
                        </div>
                      ))}
                    </div>

                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left text-cs-muted">
                          <th className="py-2 font-normal">{t('teams.rosterTablePlayer')}</th>
                          <th className="py-2 font-normal">{t('teams.rosterTableRole')}</th>
                          {(['aim', 'imp', 'clu', 'con', 'gs', 'uti', 'mov'] as const).map(k => (
                            <th key={k} className="py-2 font-normal text-right" title={t(`stat.${k}` as TranslationKey)}>
                              {k.toUpperCase()}
                            </th>
                          ))}
                          <th className="py-2 font-normal text-right">{t('teams.rosterTableOvr')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {team.roster.map(p => (
                          <tr key={p.id} className="border-t border-cs-border/60">
                            <td className="py-2">
                              <span className="flex items-center gap-2">
                                <PlayerAvatar
                                  playerId={p.id}
                                  nickname={p.nickname}
                                  teamId={team.id}
                                  size="sm"
                                  className="w-7 h-7 rounded-md"
                                />
                                <span className="w-5 h-3.5 rounded-sm overflow-hidden shrink-0">
                                  <CountryFlag countryCode={p.country} />
                                </span>
                                <span className="text-white font-semibold">{p.nickname}</span>
                              </span>
                            </td>
                            <td className="py-2 text-cs-text">{ROLE_LABEL[p.role] ?? p.role}</td>
                            {(['aim', 'imp', 'clu', 'con', 'gs', 'uti', 'mov'] as const).map(k => (
                              <td key={k} className="py-2 text-right tabular-nums text-cs-text">{p.attributes[k]}</td>
                            ))}
                            <td className="py-2 text-right tabular-nums font-bold text-white">{p.ovr}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
