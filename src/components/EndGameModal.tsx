import { Box, Button, Modal, Typography } from '@mui/material';

interface EndGameModalProps {
  open: boolean;
  onClose: () => void;
  handleResetScore: () => void;
}

const EndGameModal = ({
  open,
  onClose,
  handleResetScore,
}: EndGameModalProps) => {
  const handleEndGame = () => {
    handleResetScore();
    onClose();
  };

  return (
    <Modal onClose={onClose} open={open}>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.palette.background.default,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '95%',
          padding: '30px',
          height: '80%',
          border: '2px solid #736BCE80',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 10,
        })}
      >
        <Box>
          <Typography
            variant="body1"
            sx={{ textAlign: 'center', margin: '30px 0' }}
            color="textPrimary"
          >
            Are you sure you want to end the game?
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: 'center', margin: '30px 0' }}
            color="textPrimary"
          >
            This will clear the score board
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: '20px' }}>
          <Button
            variant="outlined"
            sx={{ width: '100%', p: '30px' }}
            onClick={onClose}
          >
            <Typography variant="body1">CANCEL</Typography>
          </Button>
          <Button
            variant="contained"
            color="warning"
            sx={{ width: '100%', p: '30px' }}
            onClick={handleEndGame}
          >
            <Typography variant="body1">End game</Typography>
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EndGameModal;
