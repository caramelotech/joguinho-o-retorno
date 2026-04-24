import Phaser from 'phaser';
import { UI_COLORS } from '@shared/constants';

export class ScoreBoard {
  private scoreText: Phaser.GameObjects.Text;
  private score = 0;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    this.scoreText = scene.add
      .text(x, y, 'SCORE: 0', {
        fontSize: '18px',
        color: UI_COLORS.TEXT,
        fontFamily: 'monospace',
        backgroundColor: UI_COLORS.SCOREBOARD_BG,
        padding: { x: 8, y: 4 },
      })
      .setDepth(10);
  }

  add(points: number): void {
    if (points <= 0) return;
    this.score += points;
    this.scoreText.setText(`SCORE: ${this.score}`);
  }

  getScore(): number {
    return this.score;
  }

  destroy(): void {
    this.scoreText.destroy();
  }
}
