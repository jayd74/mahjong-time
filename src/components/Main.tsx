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
import { Player } from '@shared/types';
import ScoreModal from '@components/ScoreModal';

const defaultScoreBoard: Player[] = [
  {
    name: 'Veronica',
    totalScore: 0,
    scores: [
      { type: 'lose', value: 128 },
      { type: null, value: 0 },
      { type: 'win', value: 96 },
      { type: 'win', value: 96 },
      { type: null, value: 0 },
    ],
    id: 1,
  },
  {
    name: 'Jason',
    totalScore: 0,
    scores: [
      { type: null, value: 0 },
      { type: 'lose', value: 96 },
      { type: 'lose', value: 96 },
      { type: 'lose', value: 96 },
      { type: null, value: 0 },
    ],
    id: 2,
  },
  {
    name: 'Victoria',
    totalScore: 0,
    scores: [
      { type: 'win', value: 128 },
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
      { type: 'win', value: 96 },
      { type: null, value: 0 },
      { type: null, value: 0 },
      { type: 'lose', value: 128 },
    ],
    id: 4,
  },
];

const Main = () => {
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);
  const rounds = [0, 1, 2, 3, 4];

  const handleOpenScoreModal = (name: string) => {
    setShowScoreModal(true);
    setSelectedPlayer(name);
  };
  const getScoreColor = (type: 'win' | 'lose' | null) => {
    switch (type) {
      case 'win':
        return 'success';
      case 'lose':
        return 'error';
      default:
        return 'info';
    }
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
