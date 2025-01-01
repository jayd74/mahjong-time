import { Player, ScoreType } from '@shared/types';

export const defaultScoreBoard: Player[] = [
  {
    name: 'Veronica',
    totalScore: 0,
    scores: [
      { type: ScoreType.LOSE, value: 128 },
      { type: null, value: 0 },
      { type: ScoreType.WIN, value: 96 },
      { type: ScoreType.WIN, value: 96 },
      { type: null, value: 0 },
    ],
    id: 1,
  },
  {
    name: 'Jason',
    totalScore: 0,
    scores: [
      { type: null, value: 0 },
      { type: ScoreType.LOSE, value: 96 },
      { type: ScoreType.LOSE, value: 96 },
      { type: ScoreType.LOSE, value: 96 },
      { type: null, value: 0 },
    ],
    id: 2,
  },
  {
    name: 'Victoria',
    totalScore: 0,
    scores: [
      { type: ScoreType.WIN, value: 128 },
      { type: null, value: 0 },
      { type: null, value: 0 },
      { type: null, value: 0 },
      { type: null, value: 0 },
    ],
    id: 3,
  },
  {
    name: 'Caroline',
    totalScore: 0,
    scores: [
      { type: null, value: 0 },
      { type: ScoreType.WIN, value: 96 },
      { type: null, value: 0 },
      { type: null, value: 0 },
      { type: ScoreType.LOSE, value: 128 },
    ],
    id: 4,
  },
];
