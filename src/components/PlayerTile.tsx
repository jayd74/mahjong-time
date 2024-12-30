import { Box, Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const PlayerTile = () => {
  return (
    <Box>
      <Button variant="contained" color="primary">
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
              width: '100%',
            })}
          >
            Victoria
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
    </Box>
  );
};

export default PlayerTile;
