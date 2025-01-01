import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import PlayerTile from '@components/PlayerTile';
import ScoreModal from '@components/ScoreModal';

const Main = () => {
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);

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
      <Typography
        variant="h3"
        sx={(theme) => ({ color: theme.palette.primary.light })}
      >
        🀄️ Mahjong Time! 🀄️
      </Typography>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button variant="contained" color="primary">
          Contained Primary
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="outlined" color="primary">
          Contained Secondary
        </Button>
        <Button variant="contained" color="warning">
          Outlined Info
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0 20px',
        }}
      >
        {namesList.map((name) => (
          <PlayerTile
            key={name}
            name={name}
            onClick={() => handleOpenScoreModal(name)}
          />
        ))}
      </Box>
      {selectedPlayer && (
        <ScoreModal
          open={showScoreModal}
          name={selectedPlayer}
          namesList={namesList.filter((name) => name !== selectedPlayer)}
          setShowScoreModal={setShowScoreModal}
        />
      )}
    </Box>
  );
};

export default Main;
