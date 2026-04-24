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
