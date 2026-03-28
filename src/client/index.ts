/**
 * Cliente Phaser 3 para Snake Battle
 * Entrypoint do jogo
 */

import Phaser from "phaser";

import { CANVAS_WIDTH, CANVAS_HEIGHT } from "@shared/constants";

// Importar Scenes (será feito quando forem criadas)
// import MenuScene from '@client/scenes/MenuScene';
// import GameScene from '@client/scenes/GameScene';
// import GameOverScene from '@client/scenes/GameOverScene';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: CANVAS_WIDTH,
  height: CANVAS_HEIGHT,
  parent: "game",
  physics: {
    default: "arcade",
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
  scene: [
    // MenuScene,
    // GameScene,
    // GameOverScene,
  ],
};

const game = new Phaser.Game(config);

// Debug: Log phaser version
console.log(`🎮 Phaser ${Phaser.VERSION} iniciado`);
console.log(`📐 Canvas: ${CANVAS_WIDTH}x${CANVAS_HEIGHT}`);
