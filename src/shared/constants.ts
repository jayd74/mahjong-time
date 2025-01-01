import { Player, Scores } from '@shared/types';

export const defaultScoreBoard: Player[] = [
  {
    name: 'Veronica',
    totalScore: 0,
    scores: [],
    id: 1,
  },
  {
    name: 'Derek',
    totalScore: 0,
    scores: [],
    id: 2,
  },
  {
    name: 'Victoria',
    totalScore: 0,
    scores: [],
    id: 3,
  },
  {
    name: 'Caroline',
    totalScore: 0,
    scores: [],
    id: 4,
  },
];

export const defaultNamesList = ['Veronica', 'Derek', 'Victoria', 'Caroline'];

export const scores: Scores = {
  3: {
    opponentLoss: 32,
    selfDraw: 16,
    coverAll: 48,
  },
  4: {
    opponentLoss: 64,
    selfDraw: 32,
    coverAll: 96,
  },
  5: {
    opponentLoss: 96,
    selfDraw: 48,
    coverAll: 144,
  },
  6: {
    opponentLoss: 128,
    selfDraw: 64,
    coverAll: 192,
  },
  7: {
    opponentLoss: 192,
    selfDraw: 96,
    coverAll: 288,
  },
  8: {
    opponentLoss: 256,
    selfDraw: 128,
    coverAll: 288,
  },
  9: {
    opponentLoss: 384,
    selfDraw: 192,
    coverAll: 384,
  },
  10: {
    opponentLoss: 512,
    selfDraw: 256,
    coverAll: 768,
  },
};
