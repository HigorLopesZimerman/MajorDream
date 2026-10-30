import React, { useState, useEffect } from 'react';
import { getTeamLogoCandidates } from '../utils/playerAssets';

interface TeamLogoProps {
  teamId: string;
  name: string;
  logoText: string;
  accentColor: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const TeamLogo: React.FC<TeamLogoProps> = ({
  teamId,
  name,
  logoText,
  accentColor,
  className = '',
  size = 'md'
}) => {
  const candidates = getTeamLogoCandidates(teamId);
  const [candidateIndex, setCandidateIndex] = useState(0);

  useEffect(() => {
    setCandidateIndex(0);
  }, [teamId]);

  const sizeMap = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-lg',
    xl: 'w-24 h-24 text-2xl'
  };

  const dim = sizeMap[size];
  const currentLogoUrl = candidates[candidateIndex];

  if (teamId === 'user-team') {
    return (
      <div
        className={`relative rounded-xl flex items-center justify-center bg-cs-surface border border-cs-border shrink-0 select-none ${dim} ${className}`}
        title={name}
        style={{
          borderColor: `${accentColor}40`,
          boxShadow: `0 0 12px -2px ${accentColor}25`
        }}
      >
        <div className="w-full h-full flex items-center justify-center bg-black/80 rounded-full border border-emerald-500/50">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="w-6 h-6 text-emerald-400" fill="currentColor">
            <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative rounded-xl flex items-center justify-center bg-cs-surface border border-cs-border shrink-0 select-none overflow-hidden ${dim} ${className}`}
      title={name}
      style={{
        borderColor: `${accentColor}40`,
        boxShadow: `0 0 12px -2px ${accentColor}25`
      }}
    >
      {currentLogoUrl ? (
        <img
          src={currentLogoUrl}
          alt={name}
          onError={() => setCandidateIndex(prev => prev + 1)}
          className="w-full h-full object-contain p-1.5"
          decoding="async"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center font-display font-black text-white">
          {logoText}
        </div>
      )}
    </div>
  );
};
