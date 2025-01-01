import { useState } from 'react';
import { Box, Button } from '@mui/material';
import ScoreTable from '@components/ScoreTable';
import ScoreModal from '@components/ScoreModal';

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
      {selectedPlayer && (
        <ScoreModal
          open={showScoreModal}
          name={selectedPlayer}
          namesList={namesList.filter((name) => name !== selectedPlayer)}
          setShowScoreModal={setShowScoreModal}
        />
      )}
      <ScoreTable handleOpenScoreModal={handleOpenScoreModal} rounds={rounds} />
    </Box>
  );
};

export default Main;
