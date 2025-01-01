import { Button, Typography, Theme } from '@mui/material';

interface ScoreModalButtonProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
  variant?: 'points' | 'winType' | 'names';
}

const ScoreModalButton = ({
  text,
  isSelected,
  onClick,
  variant,
}: ScoreModalButtonProps) => {
  const PointsStyle = (theme: Theme) => ({
    background: isSelected ? theme.palette.primary.dark : 'transparent',
    borderRadius: '50%',
    border: '1px solid #323161',
    width: '95px',
    height: '95px',
    padding: '0',
  });

  const WinTypeStyle = (theme: Theme) => ({
    background: isSelected ? theme.palette.primary.dark : 'transparent',
    borderRadius: '6px',
    border: '1px solid #323161',
    margin: '20px 0',
    width: '100%',
    padding: '20px 0',
  });

  const NamesStyle = (theme: Theme) => ({
    background: isSelected ? theme.palette.primary.dark : 'transparent',
    borderRadius: '6px',
    border: '1px solid #323161',
    margin: '20px 0',
    width: '30%',
    padding: '20px 0',
  });

  const DefaultButtonStyle = (theme: Theme) => ({
    background: theme.palette.primary.light,
  });

  const getButtonStyle = (theme: Theme) => {
    switch (variant) {
      case 'points':
        return PointsStyle(theme);
      case 'winType':
        return WinTypeStyle(theme);
      case 'names':
        return NamesStyle(theme);
      default:
        return DefaultButtonStyle(theme);
    }
  };

  return (
    <Button
      variant="outlined"
      color="info"
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
