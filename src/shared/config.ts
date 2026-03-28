/**
 * Configurações compartilhadas
 */

export const config = {
  app: {
    name: 'Snake Battle',
    version: '0.1.0',
    description: 'Multiplayer Snake Game com Phaser 3 e TypeScript',
  },

  server: {
    port: parseInt(process.env.PORT || '3000'),
    host: 'localhost',
    env: process.env.NODE_ENV || 'development',
  },

  game: {
    gridWidth: parseInt(process.env.GAME_GRID_WIDTH || '20'),
    gridHeight: parseInt(process.env.GAME_GRID_HEIGHT || '20'),
    tileSize: parseInt(process.env.GAME_TILE_SIZE || '32'),
  },

  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    credentials: true,
  },

  debug: {
    enabled: process.env.NODE_ENV === 'development',
  },
};

export default config;
