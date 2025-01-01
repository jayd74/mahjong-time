import { Box, Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface PlayerTileProps {
  onClick: () => void;
  name: string;
}

const PlayerTile = ({ onClick, name }: PlayerTileProps) => {
  return (
    <Button onClick={onClick} variant="contained" color="secondary">
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
        <Typography
          variant="h3"
          sx={(theme) => ({
            color: theme.palette.success.main,
          })}
        >
          192
        </Typography>
      </Box>
    </Button>
  );
};

export default PlayerTile;
