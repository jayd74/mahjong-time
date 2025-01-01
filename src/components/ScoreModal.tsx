import { useState } from 'react';
import { Box, Typography, Modal, ButtonGroup, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ScoreModalButton from '@components/ScoreModalButton';
import { WinType } from '@shared/types';

interface ScoreModalProps {
  setShowScoreModal: (value: boolean) => void;
  open: boolean;
}

const ScoreModal = ({ setShowScoreModal, open }: ScoreModalProps) => {
  const [selectedPointsButton, setSelectedPointsButton] = useState<
    string | null
  >(null);
  const [selectedWinTypeButton, setSelectedWinTypeButton] = useState<WinType>(
    WinType.OPPONENT
  );
  const [selectedNameButton, setSelectedNameButton] = useState<string | null>(
    'All Players'
  );

  const namesList = ['Veronica', 'Jason', 'Caroline'];
  const getNameList = () =>
    selectedWinTypeButton === WinType.OPPONENT
      ? namesList
      : ['All Players', ...namesList];

  const handleCloseModal = () => {
    setShowScoreModal(false);
    setSelectedPointsButton(null);
    setSelectedWinTypeButton(WinType.OPPONENT);
    setSelectedNameButton(null);
  };

  const handlePointsButtonClick = (pointsText: string) => {
    setSelectedPointsButton((prev) =>
      prev === pointsText ? null : pointsText
    );
  };

  const handleWinTypeButtonClick = (winTypeText: WinType) => {
    setSelectedWinTypeButton((prev) =>
      prev === winTypeText ? WinType.OPPONENT : winTypeText
    );

    if (winTypeText === WinType.OPPONENT) {
      setSelectedNameButton(null);
    } else {
      setSelectedNameButton('All Players');
    }
  };

  const handleNameButtonClick = (nameText: string) => {
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
            sx={(theme) => ({
              width: '85%',
              color: theme.palette.primary.light,
              '&:hover': {
                cursor: 'pointer',
              },
            })}
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
          {['3', '4', '5', '6', '7', '8', '9', '10'].map((pointsText) => (
            <ScoreModalButton
              key={pointsText}
              variant="points"
              text={`${pointsText}番`}
              isSelected={selectedPointsButton === pointsText}
              onClick={() => handlePointsButtonClick(pointsText)}
            />
          ))}
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
            {Object.values(WinType).map((winType) => (
              <ScoreModalButton
                key={winType}
                variant="winType"
                text={winType}
                isSelected={selectedWinTypeButton === winType}
                onClick={() => handleWinTypeButtonClick(winType)}
              />
            ))}
          </ButtonGroup>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignContent: 'center',
          }}
        >
          {getNameList().map((nameText) => (
            <ScoreModalButton
              key={nameText}
              variant="names"
              text={nameText}
              isSelected={selectedNameButton === nameText}
              onClick={() => handleNameButtonClick(nameText)}
            />
          ))}
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '100%', margin: '20px 0', padding: '20px 0' }}
          >
            <Typography variant="body1">ADD SCORE</Typography>
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ScoreModal;
