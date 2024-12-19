import { Box, Button, Typography } from '@mui/material';

const Main = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('/bg.svg')`,
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Typography
        variant="h3"
        sx={(theme) => ({ color: theme.palette.primary.light })}
      >
        🀄️ Mahjong Time! 🀄️
      </Typography>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button variant="contained" color="primary" disableRipple>
          Contained Primary
        </Button>
        <Button variant="contained" disabled disableRipple>
          Disabled
        </Button>
        <Button variant="outlined" color="primary" disableRipple>
          Contained Secondary
        </Button>
        <Button variant="contained" color="warning" disableRipple>
          Outlined Info
        </Button>
      </Box>
    </Box>
  );
};

export default Main;
