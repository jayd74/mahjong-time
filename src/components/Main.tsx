import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import PlayerTile from '@components/PlayerTile';
import ScoreModal from '@components/ScoreModal';

const Main = () => {
  const [showScoreModal, setShowScoreModal] = useState(false);

  const handleOpenScoreModal = () => {
    setShowScoreModal(true);
  };

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
      <Box variant="contained" onClick={handleOpenScoreModal}>
        <PlayerTile />
      </Box>
      <ScoreModal open={showScoreModal} setShowScoreModal={setShowScoreModal} />
    </Box>
  );
};

export default Main;
