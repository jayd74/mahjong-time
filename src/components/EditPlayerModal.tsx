import { Box, Typography, Modal, Input, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';

interface EditPlayerModalProps {
  open: boolean;
  setShowEditPlayerModal: (value: boolean) => void;
  namesList: string[];
  setNamesList: (newNames: string[]) => void;
}

const EditPlayerModalStyle = {
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

const EditPlayerModal = ({
  open,
  setShowEditPlayerModal,
  namesList,
  setNamesList,
}: EditPlayerModalProps) => {
  const [editedNames, setEditedNames] = useState<string[]>(namesList);

  useEffect(() => {
    setEditedNames(namesList);
  }, [namesList]);

  const handleEditPlayerModalClose = () => {
    setShowEditPlayerModal(false);
  };

  const handleNameChange = (index: number, newValue: string) => {
    const updatedNames = [...editedNames];
    updatedNames[index] = newValue;
    setEditedNames(updatedNames);
  };

  const handleSaveChanges = () => {
    if (editedNames.some((name) => !name.trim())) {
      alert('Player names cannot be empty.');
      return;
    }
    if (new Set(editedNames).size !== editedNames.length) {
      alert('Player names must be unique.');
      return;
    }

    setNamesList(editedNames);
    handleEditPlayerModalClose();
  };

  return (
    <Modal open={open} onClose={handleEditPlayerModalClose}>
      <Box
        sx={(theme) => ({
          background: theme.palette.background.default,
          ...EditPlayerModalStyle,
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
            onClick={handleEditPlayerModalClose}
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
          Edit player names
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {editedNames.map((name, index) => (
            <Input
              key={index}
              value={name}
              onChange={(e) => handleNameChange(index, e.target.value)}
              placeholder={`Player ${index + 1}`}
            />
          ))}
        </Box>
        <Button
          sx={{ marginTop: 3 }}
          variant="contained"
          color="primary"
          onClick={handleSaveChanges}
        >
          Save Changes
        </Button>
      </Box>
    </Modal>
  );
};

export default EditPlayerModal;
