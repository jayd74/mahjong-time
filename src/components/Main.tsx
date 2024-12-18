import { Box, Typography } from '@mui/material';

const Main = () => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.background.default,
        width: '100vw',
        height: '100vh',
      })}
    >
      <Typography
        variant="h1"
        sx={(theme) => ({ color: theme.palette.primary.main })}
      >
        Mahjong Time
      </Typography>
    </Box>
  );
};

export default Main;
