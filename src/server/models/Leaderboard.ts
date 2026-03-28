/**
 * Leaderboard Model (Placeholder - Fase 6+)
 * Para ranking global de jogadores
 */

export interface LeaderboardEntry {
  rank: number;
  playerId: string;
  username: string;
  score: number;
  wins: number;
  gamesPlayed: number;
  winRate: number;
  updatedAt: Date;
}

// Placeholder: Será integrado com banco de dados na Fase 6
export const createLeaderboardEntry = (
  playerId: string,
  username: string,
  score: number,
  wins: number,
  gamesPlayed: number
): Omit<LeaderboardEntry, 'rank'> => ({
  playerId,
  username,
  score,
  wins,
  gamesPlayed,
  winRate: wins / gamesPlayed,
  updatedAt: new Date(),
});
