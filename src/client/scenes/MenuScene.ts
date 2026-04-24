import Phaser from 'phaser';
import { DifficultyLevel } from '@shared/types';
import { CANVAS_WIDTH, CANVAS_HEIGHT, UI_COLORS } from '@shared/constants';

const DIFFICULTIES = Object.values(DifficultyLevel);

export function cycleDifficultyIndex(current: number, delta: number, total: number): number {
  return (current + delta + total) % total;
}

export class MenuScene extends Phaser.Scene {
  private difficultyIndex = 1;
  private difficultyText!: Phaser.GameObjects.Text;

  constructor() {
    super({ key: 'MenuScene' });
  }

  create(): void {
    this.cameras.main.setBackgroundColor(UI_COLORS.BACKGROUND);

    const cx = CANVAS_WIDTH / 2;

    this.add
      .text(cx, 110, 'SNAKE BATTLE', {
        fontSize: '52px',
        color: UI_COLORS.ACCENT,
        fontFamily: 'monospace',
      })
      .setOrigin(0.5);

    this.add
      .text(cx, 240, 'DIFFICULTY', {
        fontSize: '16px',
        color: '#888888',
        fontFamily: 'monospace',
      })
      .setOrigin(0.5);

    this.difficultyText = this.add
      .text(cx, 280, DIFFICULTIES[this.difficultyIndex], {
        fontSize: '30px',
        color: UI_COLORS.ACCENT,
        fontFamily: 'monospace',
      })
      .setOrigin(0.5);

    this.add
      .text(cx, 320, '< Q/E or LEFT/RIGHT to change >', {
        fontSize: '13px',
        color: '#555555',
        fontFamily: 'monospace',
      })
      .setOrigin(0.5);

    this.add
      .text(cx, 420, 'WASD - Move', {
        fontSize: '15px',
        color: UI_COLORS.TEXT,
        fontFamily: 'monospace',
      })
      .setOrigin(0.5);

    const startText = this.add
      .text(cx, CANVAS_HEIGHT - 110, 'PRESS SPACE TO START', {
        fontSize: '22px',
        color: UI_COLORS.TEXT,
        fontFamily: 'monospace',
      })
      .setOrigin(0.5);

    this.tweens.add({
      targets: startText,
      alpha: 0,
      duration: 600,
      ease: 'Linear',
      yoyo: true,
      repeat: -1,
    });

    this.setupInput();
  }

  private setupInput(): void {
    const kb = this.input.keyboard!;

    kb.on('keydown-SPACE', () => {
      this.scene.start('GameScene', { difficulty: DIFFICULTIES[this.difficultyIndex] });
    });

    kb.on('keydown-LEFT', () => this.changeDifficulty(-1));
    kb.on('keydown-RIGHT', () => this.changeDifficulty(1));
    kb.on('keydown-Q', () => this.changeDifficulty(-1));
    kb.on('keydown-E', () => this.changeDifficulty(1));
  }

  private changeDifficulty(delta: number): void {
    this.difficultyIndex = cycleDifficultyIndex(this.difficultyIndex, delta, DIFFICULTIES.length);
    this.difficultyText.setText(DIFFICULTIES[this.difficultyIndex]);
  }
}
