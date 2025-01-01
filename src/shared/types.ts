export enum WinType {
  OPPONENT = 'Opponent loss',
  SELF = 'Self draw',
}

export interface Score {
  type: ScoreType | null;
  value: number;
}

export interface Player {
  id: number;
  name: string;
  totalScore: number;
  scores: Score[];
}

export enum ScoreType {
  WIN = 'win',
  LOSE = 'lose',
}

export interface ScoreValues {
  opponentLoss: number;
  selfDraw: number;
  coverAll: number;
}

export type Scores = {
  [key: number | string]: ScoreValues;
};
