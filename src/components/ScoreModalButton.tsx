import { Button, Typography } from '@mui/material';

const ScoreModalButton = ({ text, isSelected, onClick, variant }) => {
  const CircleStyle = (theme) => ({
    background: isSelected ? theme.palette.primary.dark : 'transparent',
    borderRadius: '50%',
    border: '1px solid #323161',
    width: '95px',
    height: '95px',
    padding: '0',
  });

  const DefaultButtonStyle = (theme) => ({
    background: theme.palette.primary.light,
  });

  const getButtonStyle = (theme) => {
    switch (variant) {
      case 'circle':
        return CircleStyle(theme);
      default:
        return DefaultButtonStyle(theme);
    }
  };

  return (
    <Button
      variant="outlined"
      color="success"
      sx={(theme) => getButtonStyle(theme)}
      onClick={onClick}
    >
      <Typography
        variant="body1"
        sx={(theme) => ({ color: theme.palette.text.primary })}
      >
        {text}
      </Typography>
    </Button>
  );
};

export default ScoreModalButton;
