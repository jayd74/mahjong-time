import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import PlayerTile from '@components/PlayerTile';
import { getScoreColor } from '@utils/scoreUtils';
import { Player } from '@shared/types';

interface ScoreTableProps {
  handleOpenScoreModal: (name: string) => void;
  rounds: number[];
  namesList: string[];
  scoreData: Player[];
}

const ScoreTable = ({
  handleOpenScoreModal,
  rounds,
  namesList,
  scoreData,
}: ScoreTableProps) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {namesList.map((name, index) => {
              const player = scoreData[index];
              if (!player) return null;

              return (
                <TableCell key={name}>
                  <PlayerTile
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
          {rounds?.map((round) => {
            return (
              <TableRow key={round}>
                {namesList.map((name, index) => {
                  const player = scoreData[index];
                  if (!player) return null;
                  return (
                    <TableCell key={name}>
                      <Typography
                        variant="h5"
                        color={getScoreColor(player.scores[round]?.type)}
                      >
                        {player.scores[round]?.value || '-'}
                      </Typography>
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ScoreTable;
