/**
 * Index de Types do Cliente
 * Será expandido conforme as fases avançam
 */

export interface GameSceneConfig {
  difficulty: string;
  player1Name: string;
  player2Name: string;
}

export interface InputState {
  player1: {
    upPressed: boolean;
    downPressed: boolean;
    leftPressed: boolean;
    rightPressed: boolean;
  };
  player2: {
    upPressed: boolean;
    downPressed: boolean;
    leftPressed: boolean;
    rightPressed: boolean;
  };
}
