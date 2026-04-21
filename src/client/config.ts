/**
 * Configuração do Cliente Phaser
 */

import Phaser from 'phaser';
import { DifficultyLevel } from '@shared/types';
import { CANVAS_WIDTH, CANVAS_HEIGHT, TILE_SIZE } from '@shared/constants';

export interface GameConfig {
  difficulty: DifficultyLevel;
  player1Name: string;
  player2Name: string;
  onlineMode: boolean;
}

export const phaser3Config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: CANVAS_WIDTH,
  height: CANVAS_HEIGHT,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 0,
        x: 0,
      },
      debug: false,
    },
  },
  render: {
    pixelArt: true,
    antialiasGL: false,
    antialias: false,
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

/**
 * Configurações do jogo por dificuldade
 */
export const getDifficultyConfig = (difficulty: DifficultyLevel) => {
  const configs: { [key in DifficultyLevel]: any } = {
    [DifficultyLevel.EASY]: {
      speed: 150,
      fruitsCount: 3,
      fruitSpawnRate: 2000,
      obstaclesCount: 0,
      powerUpDurationMultiplier: 1.2,
    },
    [DifficultyLevel.NORMAL]: {
      speed: 100,
      fruitsCount: 2,
      fruitSpawnRate: 3000,
      obstaclesCount: 0,
      powerUpDurationMultiplier: 1.0,
    },
    [DifficultyLevel.HARD]: {
      speed: 80,
      fruitsCount: 1,
      fruitSpawnRate: 4000,
      obstaclesCount: 8,
      powerUpDurationMultiplier: 0.8,
    },
    [DifficultyLevel.INSANE]: {
      speed: 60,
      fruitsCount: 1,
      fruitSpawnRate: 4000,
      obstaclesCount: 17,
      movingObstacles: 1,
      powerUpDurationMultiplier: 0.7,
    },
  };

  return configs[difficulty];
};
