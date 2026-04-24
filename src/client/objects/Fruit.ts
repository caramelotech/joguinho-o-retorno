import Phaser from 'phaser';
import { FruitType } from '@shared/types';
import { TILE_SIZE, GRID_WIDTH, GRID_HEIGHT, FRUIT_COLORS, FRUIT_PADDING } from '@shared/constants';

interface GridPosition {
  x: number;
  y: number;
}

export class Fruit {
  readonly x: number;
  readonly y: number;
  readonly type: FruitType;
  private graphics: Phaser.GameObjects.Graphics;

  // Reservoir sampling: O(n) time, O(1) extra space, uniform distribution.
  static findFreePosition(occupied: GridPosition[]): GridPosition | null {
    const occupiedSet = new Set(occupied.map((pos) => `${pos.x},${pos.y}`));
    let chosen: GridPosition | null = null;
    let count = 0;

    for (let x = 0; x < GRID_WIDTH; x++) {
      for (let y = 0; y < GRID_HEIGHT; y++) {
        if (!occupiedSet.has(`${x},${y}`)) {
          count++;
          if (Math.random() < 1 / count) {
            chosen = { x, y };
          }
        }
      }
    }

    return chosen;
  }

  constructor(scene: Phaser.Scene, pos: GridPosition, type: FruitType = FruitType.APPLE) {
    this.type = type;
    this.x = pos.x;
    this.y = pos.y;
    this.graphics = scene.add.graphics();
    this.draw();
  }

  destroy(): void {
    this.graphics.destroy();
  }

  private draw(): void {
    this.graphics.fillStyle(FRUIT_COLORS[this.type], 1);
    this.graphics.fillRect(
      this.x * TILE_SIZE + FRUIT_PADDING,
      this.y * TILE_SIZE + FRUIT_PADDING,
      TILE_SIZE - FRUIT_PADDING * 2,
      TILE_SIZE - FRUIT_PADDING * 2
    );
  }
}
