import { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import ScoreTable from '@components/ScoreTable';
import ScoreModal from '@components/ScoreModal';
import EditPlayerModal from '@components/EditPlayerModal';

const Main = () => {
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);
  const rounds = [0, 1, 2, 3, 4];
  const [showEditPlayerModal, setShowEditPlayerModal] = useState(false);
  const [namesList, setNamesList] = useState<string[]>([
    'Veronica',
    'Jason',
    'Caroline',
    'Victoria',
  ]);

  useEffect(() => {
    const savedNames = localStorage.getItem('playerNames');
    if (savedNames) {
      setNamesList(JSON.parse(savedNames));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('playerNames', JSON.stringify(namesList));
  }, [namesList]);

  const handleNameChange = (index: number, newName: string) => {
    setNamesList((prevNames) => {
      const updatedNames = [...prevNames];
      updatedNames[index] = newName;
      return updatedNames;
    });
  };

  const handleOpenScoreModal = (name: string) => {
    setShowScoreModal(true);
    setSelectedPlayer(name);
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
      {showEditPlayerModal && (
        <EditPlayerModal
          open={showEditPlayerModal}
          setShowEditPlayerModal={setShowEditPlayerModal}
          namesList={namesList}
          handleNameChange={handleNameChange}
        />
      )}

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
        <Button
          color="primary"
          variant="contained"
          onClick={() => setShowEditPlayerModal(true)}
        >
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
      <ScoreTable
        handleOpenScoreModal={handleOpenScoreModal}
        rounds={rounds}
        namesList={namesList}
      />
    </Box>
  );
};

export default Main;
