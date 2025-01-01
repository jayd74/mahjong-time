import { useState } from 'react';
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import PlayerTile from '@components/PlayerTile';
import ScoreModal from '@components/ScoreModal';
import { defaultScoreBoard } from '@shared/constants';
import { getScoreColor } from 'src/utils/scoreUtils';

const Main = () => {
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);
  const rounds = [0, 1, 2, 3, 4];

  const handleOpenScoreModal = (name: string) => {
    setShowScoreModal(true);
    setSelectedPlayer(name);
  };

  const namesList = ['Veronica', 'Jason', 'Caroline', 'Victoria'];

  return (
    <Box
      sx={{
        backgroundImage: `url('/bg.svg')`,
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        <Button color="primary" variant="contained">
          End Game
        </Button>
        <Button color="primary" variant="contained">
          Edit names
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0 20px',
        }}
      ></Box>
      {selectedPlayer && (
        <ScoreModal
          open={showScoreModal}
          name={selectedPlayer}
          namesList={namesList.filter((name) => name !== selectedPlayer)}
          setShowScoreModal={setShowScoreModal}
        />
      )}
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
    </Box>
  );
};

export default Main;
