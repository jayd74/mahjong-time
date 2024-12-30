import { useState } from 'react';
import { Box, Typography, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ScoreModalButton from '@components/ScoreModalButton';

const ScoreModal = ({ setShowScoreModal, open }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleCloseModal = () => {
    setShowScoreModal(false);
  };

  const handlePointsButtonClick = (text) => {
    setSelectedButton((prev) => (prev === text ? null : text));
  };

  const ScoreModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '95%',
    padding: '20px',
    height: '80%',
  };

  return (
    <Modal open={open} onClose={handleCloseModal}>
      <Box
        sx={(theme) => ({
          background: theme.palette.background.default,
          ...ScoreModalStyle,
        })}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
          }}
        >
          <CloseIcon
            sx={{
              width: '85%',
              color: 'white',
            }}
            onClick={handleCloseModal}
          />
        </Box>
        <Typography
          variant="body1"
          sx={(theme) => ({
            color: theme.palette.primary.light,
            textAlign: 'center',
            margin: '30px 0',
          })}
        >
          Add winning score for Victoria
        </Typography>
        <Box
          sx={{
            borderRadius: '6px',
            padding: '20px 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignContent: 'center',
          }}
        >
          {['3番', '4番', '5番', '6番', '7番', '8番', '9番', '10番'].map(
            (text) => (
              <ScoreModalButton
                key={text}
                variant="circle"
                text={text}
                isSelected={selectedButton === text}
                onClick={() => handlePointsButtonClick(text)}
              />
            )
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default ScoreModal;
