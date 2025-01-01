import { ScoreType } from '@shared/types';

export const getScoreColor = (type: ScoreType | null) => {
  switch (type) {
    case ScoreType.WIN:
      return 'success';
    case ScoreType.LOSE:
      return 'error';
    default:
      return 'white';
  }
};
