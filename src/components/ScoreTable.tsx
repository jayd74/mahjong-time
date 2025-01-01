import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { defaultScoreBoard } from '@shared/constants';
import PlayerTile from '@components/PlayerTile';
import { getScoreColor } from '@utils/scoreUtils';

interface ScoreTableProps {
  handleOpenScoreModal: (name: string) => void;
  rounds: number[];
}

const ScoreTable = ({ handleOpenScoreModal, rounds }: ScoreTableProps) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {defaultScoreBoard.map(({ id, name, totalScore }) => (
              <TableCell key={id}>
                <PlayerTile
                  name={name}
                  score={totalScore}
                  onClick={() => handleOpenScoreModal(name)}
                />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rounds.map((round) => {
            return (
              <TableRow key={round}>
                {defaultScoreBoard.map(({ id, scores }) => (
                  <TableCell key={id}>
                    <Typography
                      variant="h5"
                      color={getScoreColor(scores[round].type)}
                    >
                      {scores[round].value || '-'}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ScoreTable;
