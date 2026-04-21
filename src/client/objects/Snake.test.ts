import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Direction } from '@shared/types';
import { GRID_WIDTH, GRID_HEIGHT } from '@shared/constants';

vi.mock('phaser', () => ({ default: {} }));

import { Snake } from './Snake';

function makeScene(): Phaser.Scene {
  return {
    add: {
      graphics: () => ({
        clear: vi.fn(),
        fillStyle: vi.fn(),
        fillRect: vi.fn(),
        destroy: vi.fn(),
      }),
    },
  } as unknown as Phaser.Scene;
}

function setHead(snake: Snake, x: number, y: number): void {
  (snake as unknown as { segments: { x: number; y: number }[] }).segments[0] = { x, y };
}

function setSegments(snake: Snake, segs: { x: number; y: number }[]): void {
  (snake as unknown as { segments: { x: number; y: number }[] }).segments = segs;
}

describe('Snake.checkWallCollision', () => {
  let snake: Snake;

  beforeEach(() => {
    snake = new Snake(makeScene(), 5, 5, 1, 0);
  });

  it('returns false when head is inside the grid', () => {
    expect(snake.checkWallCollision()).toBe(false);
  });

  it('returns false at the top-left corner (0, 0)', () => {
    setHead(snake, 0, 0);
    expect(snake.checkWallCollision()).toBe(false);
  });

  it('returns false at the bottom-right corner', () => {
    setHead(snake, GRID_WIDTH - 1, GRID_HEIGHT - 1);
    expect(snake.checkWallCollision()).toBe(false);
  });

  it('returns true when head is past the left wall (x < 0)', () => {
    setHead(snake, -1, 5);
    expect(snake.checkWallCollision()).toBe(true);
  });

  it('returns true when head is past the right wall (x >= GRID_WIDTH)', () => {
    setHead(snake, GRID_WIDTH, 5);
    expect(snake.checkWallCollision()).toBe(true);
  });

  it('returns true when head is past the top wall (y < 0)', () => {
    setHead(snake, 5, -1);
    expect(snake.checkWallCollision()).toBe(true);
  });

  it('returns true when head is past the bottom wall (y >= GRID_HEIGHT)', () => {
    setHead(snake, 5, GRID_HEIGHT);
    expect(snake.checkWallCollision()).toBe(true);
  });
});

describe('Snake.checkSelfCollision', () => {
  let snake: Snake;

  beforeEach(() => {
    snake = new Snake(makeScene(), 5, 5, 3, 0);
  });

  it('returns false for a freshly spawned snake', () => {
    expect(snake.checkSelfCollision()).toBe(false);
  });

  it('returns false when no segment overlaps the head', () => {
    setSegments(snake, [
      { x: 5, y: 5 },
      { x: 4, y: 5 },
      { x: 3, y: 5 },
    ]);
    expect(snake.checkSelfCollision()).toBe(false);
  });

  it('returns true when head overlaps a body segment', () => {
    setSegments(snake, [
      { x: 5, y: 5 },
      { x: 4, y: 5 },
      { x: 3, y: 5 },
      { x: 5, y: 5 }, // loops back to head position
    ]);
    expect(snake.checkSelfCollision()).toBe(true);
  });

  it('returns true when head overlaps the segment immediately after it', () => {
    setSegments(snake, [
      { x: 3, y: 5 },
      { x: 3, y: 5 },
    ]);
    expect(snake.checkSelfCollision()).toBe(true);
  });
});

describe('Snake direction queue', () => {
  it('queues a valid direction and applies it on next move', () => {
    const snake = new Snake(makeScene(), 5, 5, 1, 0);
    // default direction is RIGHT; UP is perpendicular, so it should be accepted
    snake.setDirection(Direction.UP);
    snake.move();
    const head = snake.getHead();
    expect(head).toEqual({ x: 5, y: 4 });
  });

  it('ignores the opposite direction (prevents 180-degree reversal)', () => {
    const snake = new Snake(makeScene(), 5, 5, 1, 0);
    // default direction is RIGHT; LEFT is opposite and must be rejected
    snake.setDirection(Direction.LEFT);
    snake.move();
    const head = snake.getHead();
    // should have moved RIGHT, not LEFT
    expect(head).toEqual({ x: 6, y: 5 });
  });

  it('preserves the first queued direction when a second key is pressed before the tick', () => {
    const snake = new Snake(makeScene(), 5, 5, 1, 0);
    // Queue UP, then try to queue DOWN (opposite of UP) — DOWN must be rejected
    snake.setDirection(Direction.UP);
    snake.setDirection(Direction.DOWN);
    snake.move();
    const head = snake.getHead();
    expect(head).toEqual({ x: 5, y: 4 }); // moved UP, not DOWN
  });
});
