/**
 * User Model (Placeholder - Fase 6+)
 * Para futuros dados de usuário e ranking
 */

export interface User {
  id: string;
  username: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  stats: {
    gamesPlayed: number;
    wins: number;
    losses: number;
    totalScore: number;
  };
}

// Placeholder: Será integrado com banco de dados na Fase 6
export const createUser = (username: string, email: string): User => ({
  id: Math.random().toString(36).substr(2, 9),
  username,
  email,
  createdAt: new Date(),
  updatedAt: new Date(),
  stats: {
    gamesPlayed: 0,
    wins: 0,
    losses: 0,
    totalScore: 0,
  },
});
