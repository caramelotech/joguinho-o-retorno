import Phaser from 'phaser';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '@shared/constants';
import { MenuScene } from '@client/scenes/MenuScene';
import { GameScene } from '@client/scenes/GameScene';
import { GameOverScene } from '@client/scenes/GameOverScene';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: CANVAS_WIDTH,
  height: CANVAS_HEIGHT,
  parent: 'game',
  render: {
    pixelArt: true,
    antialiasGL: false,
    antialias: false,
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [MenuScene, GameScene, GameOverScene],
};

new Phaser.Game(config);
