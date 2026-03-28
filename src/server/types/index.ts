/**
 * Index de Types do Servidor
 * Será expandido conforme as fases avançam
 */

export interface ServerConfig {
  port: number;
  host: string;
  env: string;
}

export interface GameRoom {
  id: string;
  players: string[];
  isActive: boolean;
  createdAt: Date;
}
