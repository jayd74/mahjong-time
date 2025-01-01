import { useState } from 'react';
import { Box, Typography, Modal, ButtonGroup, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ScoreModalButton from '@components/ScoreModalButton';
import { WinType } from '@shared/types';
import scores from '@shared/constants';

interface ScoreModalProps {
  setShowScoreModal: (value: boolean) => void;
  open: boolean;
  name: string;
  namesList: string[];
  handleAddScore: (
    points: string,
    winType: WinType | null,
    winner: string | null,
    loser: string | null
  ) => void;
}

const ScoreModal = ({
  setShowScoreModal,
  open,
  name,
  namesList,
  handleAddScore,
}: ScoreModalProps) => {
  const [selectedPoints, setSelectedPoints] = useState<string | null>(null);
  const [selectedWinType, setSelectedWinType] = useState<WinType>(
    WinType.OPPONENT
  );
  const [selectedName, setSelectedName] = useState<string | null>(null);

  const getNameList = () =>
    selectedWinType === WinType.OPPONENT
      ? namesList
      : ['All Players', ...namesList];

  const handleCloseModal = () => {
    setShowScoreModal(false);
    setSelectedPoints(null);
    setSelectedWinType(WinType.OPPONENT);
    setSelectedName(null);
  };

  const handlePointsButtonClick = (pointsText: string) => {
    setSelectedPoints(pointsText);
  };

  const handleWinTypeButtonClick = (winTypeText: WinType) => {
    setSelectedWinType(winTypeText);

    if (winTypeText === WinType.OPPONENT) {
      setSelectedName(null);
    } else {
      setSelectedName('All Players');
    }
  };

  const handleNameButtonClick = (nameText: string) => {
    setSelectedName(nameText);
  };

  const handleAddScoreClick = () => {
    handleAddScore(selectedPoints || '', selectedWinType, name, selectedName);
    handleCloseModal();
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
          Add winning score for {name}
        </Typography>
        <Box
          sx={{
            margin: '20px 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignContent: 'center',
          }}
        >
          {Object.keys(scores).map((pointsText) => (
            <ScoreModalButton
              key={pointsText}
              variant="points"
              text={`${pointsText}番`}
              isSelected={selectedPoints === pointsText}
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
                isSelected={selectedWinType === winType}
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
              isSelected={selectedName === nameText}
              onClick={() => handleNameButtonClick(nameText)}
            />
          ))}
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '100%', margin: '20px 0', padding: '20px 0' }}
            onClick={handleAddScoreClick}
            disabled={!selectedPoints || !selectedName}
          >
            <Typography variant="body1">ADD SCORE</Typography>
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ScoreModal;
