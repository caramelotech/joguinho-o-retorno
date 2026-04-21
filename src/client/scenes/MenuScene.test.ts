import { describe, it, expect, vi } from 'vitest';
import { DifficultyLevel } from '@shared/types';

vi.mock('phaser', () => ({ default: { Scene: class {} } }));

import { cycleDifficultyIndex } from './MenuScene';

const DIFFICULTIES = [
  DifficultyLevel.EASY,
  DifficultyLevel.NORMAL,
  DifficultyLevel.HARD,
  DifficultyLevel.INSANE,
];
const TOTAL = DIFFICULTIES.length; // 4

describe('cycleDifficultyIndex', () => {
  it('advances forward by one', () => {
    expect(cycleDifficultyIndex(0, 1, TOTAL)).toBe(1);
    expect(cycleDifficultyIndex(2, 1, TOTAL)).toBe(3);
  });

  it('wraps forward from the last element back to the first', () => {
    expect(cycleDifficultyIndex(3, 1, TOTAL)).toBe(0);
  });

  it('goes backward by one', () => {
    expect(cycleDifficultyIndex(2, -1, TOTAL)).toBe(1);
    expect(cycleDifficultyIndex(1, -1, TOTAL)).toBe(0);
  });

  it('wraps backward from the first element to the last', () => {
    expect(cycleDifficultyIndex(0, -1, TOTAL)).toBe(3);
  });

  it('maps each index to the correct DifficultyLevel after advancing', () => {
    // EASY(0) +1 → NORMAL(1)
    expect(DIFFICULTIES[cycleDifficultyIndex(0, 1, TOTAL)]).toBe(DifficultyLevel.NORMAL);
    // INSANE(3) +1 → EASY(0)
    expect(DIFFICULTIES[cycleDifficultyIndex(3, 1, TOTAL)]).toBe(DifficultyLevel.EASY);
    // EASY(0) -1 → INSANE(3)
    expect(DIFFICULTIES[cycleDifficultyIndex(0, -1, TOTAL)]).toBe(DifficultyLevel.INSANE);
  });
});
