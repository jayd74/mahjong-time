import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { getScoreColor } from '@utils/scoreUtils';
import PlayerTile from '@components/PlayerTile';
import { defaultScoreBoard } from '@shared/constants';

interface ScoreTableProps {
  handleOpenScoreModal: (name: string) => void;
  rounds: number[];
  namesList: string[];
}

const ScoreTable = ({
  handleOpenScoreModal,
  rounds,
  namesList,
}: ScoreTableProps) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {namesList.map((name, index) => {
              const player = defaultScoreBoard[index];
              if (!player) return null;

              return (
                <TableCell key={index}>
                  <PlayerTile
                    key={player.id}
                    name={name}
                    score={player.totalScore}
                    onClick={() => handleOpenScoreModal(player.name)}
                  />
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rounds.map((round) => (
            <TableRow key={round}>
              {namesList.map((name, index) => {
                const player = defaultScoreBoard[index];
                if (!player) return null;

                const score = player.scores[round];
                return (
                  <TableCell key={index}>
                    <Typography variant="h5" color={getScoreColor(score.type)}>
                      {score.value || '-'}
                    </Typography>
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ScoreTable;
