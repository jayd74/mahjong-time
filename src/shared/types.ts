export enum WinType {
  OPPONENT = 'Opponent loss',
  SELF = 'Self draw',
}

export interface Score {
  type: 'win' | 'lose' | null;
  value: number;
}

export interface Player {
  id: number;
  name: string;
  totalScore: number;
  scores: Score[];
}
