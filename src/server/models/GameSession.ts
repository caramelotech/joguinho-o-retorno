/**
 * GameSession Model (Placeholder - Fase 5+)
 * Para gerenciar sessões de jogo
 */

import { DifficultyLevel } from '@shared/types';

export interface GameSession {
  id: string;
  players: string[];
  difficulty: DifficultyLevel;
  startTime: Date;
  endTime?: Date;
  winner?: string;
  scores: { [playerId: string]: number };
  duration: number;
}

// Placeholder: Será mantido em memória na Fase 1
export const createGameSession = (
  players: string[],
  difficulty: DifficultyLevel
): GameSession => ({
  id: Math.random().toString(36).substr(2, 9),
  players,
  difficulty,
  startTime: new Date(),
  scores: players.reduce((acc, id) => ({ ...acc, [id]: 0 }), {}),
  duration: 0,
});
