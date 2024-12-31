import { useState } from 'react';
import { Box, Typography, Modal, ButtonGroup } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ScoreModalButton from '@components/ScoreModalButton';

const ScoreModal = ({ setShowScoreModal, open }) => {
  const [selectedPointsButton, setSelectedPointsButton] = useState(null);
  const [selectedWinTypeButton, setSelectedWinTypeButton] =
    useState('Opponent loss');
  const [selectedNameButton, setSelectedNameButton] = useState(null);

  const handleCloseModal = () => {
    setShowScoreModal(false);
    setSelectedPointsButton(null);
    setSelectedWinTypeButton('Opponent loss');
    setSelectedNameButton(null);
  };

  const handlePointsButtonClick = (pointsText) => {
    setSelectedPointsButton((prev) =>
      prev === pointsText ? null : pointsText
    );
  };

  const handleWinTypeButtonClick = (winTypeText) => {
    setSelectedWinTypeButton((prev) =>
      prev === winTypeText ? null : winTypeText
    );
  };

  const handleNameButtonClick = (nameText) => {
    setSelectedNameButton((prev) => (prev === nameText ? null : nameText));
  };

  const ScoreModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '95%',
    padding: '30px',
    height: '80%',
    border: '2px solid #736BCE80',
    borderRadius: '10px',
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
            top: 20,
            right: 20,
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
            margin: '20px 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignContent: 'center',
          }}
        >
          {['3番', '4番', '5番', '6番', '7番', '8番', '9番', '10番'].map(
            (pointsText) => (
              <ScoreModalButton
                key={pointsText}
                variant="points"
                text={pointsText}
                isSelected={selectedPointsButton === pointsText}
                onClick={() => handlePointsButtonClick(pointsText)}
              />
            )
          )}
        </Box>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
          }}
        >
          <ButtonGroup
            variant="contained"
            sx={{
              width: '100%',
            }}
          >
            {['Opponent loss', 'Self draw'].map((winTypeText) => (
              <ScoreModalButton
                key={winTypeText}
                variant="winType"
                text={winTypeText}
                isSelected={selectedWinTypeButton === winTypeText}
                onClick={() => handleWinTypeButtonClick(winTypeText)}
              />
            ))}
          </ButtonGroup>
        </Box>
        {selectedWinTypeButton === 'Opponent loss' && (
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignContent: 'center',
            }}
          >
            {['Veronica', 'Jason', 'Caroline'].map((nameText) => (
              <ScoreModalButton
                key={nameText}
                variant="names"
                text={nameText}
                isSelected={selectedNameButton === nameText}
                onClick={() => handleNameButtonClick(nameText)}
              />
            ))}
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default ScoreModal;
