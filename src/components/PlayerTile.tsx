import { Box, Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface PlayerTileProps {
  name: string;
  score: number;
  onClick?: () => void;
}

const PlayerTile = ({ name, score, onClick }: PlayerTileProps) => {
  const getScoreColor = (score: number) => {
    if (score > 0) {
      return 'success';
    } else if (score < 0) {
      return 'error';
    } else {
      return 'white';
    }
  };

  return (
    <Button variant="contained" color="secondary" onClick={onClick}>
      <Box
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
        }}
      >
        <AddIcon
          sx={{
            width: '85%',
          }}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h5"
          sx={(theme) => ({
            color: theme.palette.primary.light,
          })}
        >
          {name}
        </Typography>
        <Typography variant="h3" color={getScoreColor(score)}>
          {Math.abs(score)}
        </Typography>
      </Box>
    </Button>
  );
};

export default PlayerTile;
