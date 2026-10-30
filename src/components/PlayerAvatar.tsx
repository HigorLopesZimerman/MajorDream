import React, { useState, useEffect } from 'react';
import { getPlayerPortrait } from '../utils/playerAssets';

interface PlayerAvatarProps {
  playerId: string;
  nickname: string;
  teamId?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const PlayerAvatar: React.FC<PlayerAvatarProps> = ({
  playerId,
  nickname,
  teamId,
  className = '',
  size = 'md'
}) => {
  const portrait = getPlayerPortrait(playerId, nickname, teamId);
  const [candidateIndex, setCandidateIndex] = useState(0);

  useEffect(() => {
    setCandidateIndex(0);
  }, [playerId, nickname, teamId]);

  const sizeClasses = {
    sm: 'w-10 h-10 text-xs',
    md: 'w-16 h-16 text-sm',
    lg: 'w-24 h-24 text-lg',
    xl: 'w-32 h-32 text-2xl'
  };

  const dim = sizeClasses[size];
  const currentImgUrl = portrait.candidates[candidateIndex];

  if (currentImgUrl) {
    return (
      <div className={`relative rounded-xl overflow-hidden bg-cs-surface border border-cs-border shrink-0 select-none ${dim} ${className}`}>
        <img
          src={currentImgUrl}
          alt={nickname}
          onError={() => setCandidateIndex(prev => prev + 1)}
          className="w-full h-full object-cover object-center"
          decoding="async"
        />
      </div>
    );
  }

  // Neutral fallback avatar (initials + dark esports surface)
  return (
    <div
      className={`relative rounded-xl overflow-hidden bg-cs-surface border border-cs-border flex items-center justify-center shrink-0 select-none font-display font-black text-slate-300 ${dim} ${className}`}
      title={nickname}
    >
      <span>{portrait.initials}</span>
      <div className="absolute inset-0 border border-white/5 pointer-events-none rounded-xl" />
    </div>
  );
};
