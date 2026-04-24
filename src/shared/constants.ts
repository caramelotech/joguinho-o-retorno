import { DifficultyLevel, Direction, FruitType } from './types';

// Grid Configuration
export const GRID_WIDTH = 20;
export const GRID_HEIGHT = 20;
export const TILE_SIZE = 32;

export const CANVAS_WIDTH = GRID_WIDTH * TILE_SIZE; // 640px
export const CANVAS_HEIGHT = GRID_HEIGHT * TILE_SIZE; // 640px

// Game Configuration
export const INITIAL_SNAKE_LENGTH = 3;
export const INITIAL_SNAKE_P1_X = 5;
export const INITIAL_SNAKE_P1_Y = 10;
export const INITIAL_SNAKE_P2_X = 15;
export const INITIAL_SNAKE_P2_Y = 10;

// Velocidades (ms por movimento)
export const GAME_SPEEDS: { [key in DifficultyLevel]: number } = {
  [DifficultyLevel.EASY]: 150,
  [DifficultyLevel.NORMAL]: 100,
  [DifficultyLevel.HARD]: 80,
  [DifficultyLevel.INSANE]: 60,
};

export const OPPOSITE_DIRECTION: Record<Direction, Direction> = {
  [Direction.UP]: Direction.DOWN,
  [Direction.DOWN]: Direction.UP,
  [Direction.LEFT]: Direction.RIGHT,
  [Direction.RIGHT]: Direction.LEFT,
};

// Score Configuration
export const FRUIT_POINTS = 10;
export const GOLDEN_FRUIT_POINTS = 20;

// Frutas no mapa simultâneas
export const FRUITS_COUNT: { [key in DifficultyLevel]: number } = {
  [DifficultyLevel.EASY]: 3,
  [DifficultyLevel.NORMAL]: 2,
  [DifficultyLevel.HARD]: 1,
  [DifficultyLevel.INSANE]: 1,
};

export const MIN_FRUITS = 1;
export const MAX_FRUITS = 4;

// Power-ups Configuration
export const POWER_UP_SPAWN_CHANCE = 0.15; // 15% chance ao comer fruta

export const POWER_UP_DURATIONS: { [key: string]: number } = {
  SPEED_BOOST: 8000,
  INVISIBILITY: 5000,
  SPEED_REVERSAL: 8000,
  SLICE: 0,
  INVERT_CONTROLS: 6000,
  PETRIFY: 3000,
};

export const POWER_UP_DURATION_MODIFIERS: { [key in DifficultyLevel]: number } = {
  [DifficultyLevel.EASY]: 1.2,
  [DifficultyLevel.NORMAL]: 1.0,
  [DifficultyLevel.HARD]: 0.8,
  [DifficultyLevel.INSANE]: 0.7,
};

export const POWER_UP_SPAWN_CHANCES: { [key: string]: number } = {
  SPEED_BOOST: 0.15,
  INVISIBILITY: 0.1,
  SPEED_REVERSAL: 0.12,
  SLICE: 0.08,
  INVERT_CONTROLS: 0.07,
  PETRIFY: 0.05,
};

// Obstacles
export const OBSTACLE_COUNTS: { [key in DifficultyLevel]: number } = {
  [DifficultyLevel.EASY]: 0,
  [DifficultyLevel.NORMAL]: 0,
  [DifficultyLevel.HARD]: 8,
  [DifficultyLevel.INSANE]: 17,
};

export const MOVING_OBSTACLE_COUNTS: { [key in DifficultyLevel]: number } = {
  [DifficultyLevel.EASY]: 0,
  [DifficultyLevel.NORMAL]: 0,
  [DifficultyLevel.HARD]: 0,
  [DifficultyLevel.INSANE]: 1,
};

// Colors
export const SNAKE_COLORS = {
  P1: '#00FF00',
  P2: '#FF00FF',
};

export const UI_COLORS = {
  BACKGROUND: '#1a1a1a',
  GRID_LINE: '#333333',
  TEXT: '#FFFFFF',
  ACCENT: '#00FF00',
  WARNING: '#FF0000',
  SCOREBOARD_BG: '#00000066',
};

export const FRUIT_COLORS: Record<FruitType, number> = {
  [FruitType.APPLE]: 0xff3333,
  [FruitType.GOLDEN]: 0xffd700,
};

export const FRUIT_PADDING = 6;

// Fruit Spawn
export const GOLDEN_FRUIT_CHANCE = 0.1; // 10% chance ao spawnar fruta

// UI Timing
export const GAME_OVER_DELAY_MS = 600;
