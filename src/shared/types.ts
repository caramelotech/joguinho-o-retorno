/**
 * Tipos compartilhados entre Cliente e Servidor
 */

// Game State
export interface SnakeSegment {
  x: number;
  y: number;
}

export interface Snake {
  id: string;
  playerId: string;
  segments: SnakeSegment[];
  direction: Direction;
  nextDirection: Direction;
  color: string;
  isAlive: boolean;
}

export interface Fruit {
  id: string;
  x: number;
  y: number;
  type: FruitType;
}

export interface PowerUp {
  id: string;
  x: number;
  y: number;
  type: PowerUpType;
  activatedBy?: string;
  duration: number;
  startTime: number;
}

export interface Obstacle {
  id: string;
  x: number;
  y: number;
  type: ObstacleType;
}

export interface GameState {
  id: string;
  snakes: Snake[];
  fruits: Fruit[];
  powerUps: PowerUp[];
  obstacles: Obstacle[];
  score: { [playerId: string]: number };
  isRunning: boolean;
  difficulty: DifficultyLevel;
  timestamp: number;
}

// Enums
export enum Direction {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export enum FruitType {
  APPLE = 'APPLE', // +1 segment
  GOLDEN = 'GOLDEN', // +2 segments
}

export enum PowerUpType {
  SPEED_BOOST = 'SPEED_BOOST', // Maçã Escura
  INVISIBILITY = 'INVISIBILITY', // Estrela
  SPEED_REVERSAL = 'SPEED_REVERSAL', // Acelerador Invertido
  SLICE = 'SLICE', // Sabre
  INVERT_CONTROLS = 'INVERT_CONTROLS', // Caracol
  PETRIFY = 'PETRIFY', // Pedra
}

export enum ObstacleType {
  STATIC = 'STATIC',
  MOVING = 'MOVING',
  PORTAL = 'PORTAL',
}

export enum DifficultyLevel {
  EASY = 'EASY',
  NORMAL = 'NORMAL',
  HARD = 'HARD',
  INSANE = 'INSANE',
}

// Input
export interface PlayerInput {
  playerId: string;
  direction: Direction;
  timestamp: number;
}

// Game Events
export interface GameEvent {
  type: GameEventType;
  playerId: string;
  timestamp: number;
  data?: any;
}

export enum GameEventType {
  GAME_STARTED = 'GAME_STARTED',
  PLAYER_MOVED = 'PLAYER_MOVED',
  FRUIT_EATEN = 'FRUIT_EATEN',
  POWER_UP_COLLECTED = 'POWER_UP_COLLECTED',
  POWER_UP_ACTIVATED = 'POWER_UP_ACTIVATED',
  COLLISION = 'COLLISION',
  GAME_OVER = 'GAME_OVER',
  MATCH_END = 'MATCH_END',
}

// Player
export interface Player {
  id: string;
  username: string;
  score: number;
  snakeId: string;
  color: string;
  isReady: boolean;
}

// Match
export interface Match {
  id: string;
  players: Player[];
  gameState: GameState;
  difficulty: DifficultyLevel;
  startTime: number;
  endTime?: number;
  winner?: string;
  status: MatchStatus;
}

export enum MatchStatus {
  WAITING = 'WAITING',
  RUNNING = 'RUNNING',
  PAUSED = 'PAUSED',
  FINISHED = 'FINISHED',
}
