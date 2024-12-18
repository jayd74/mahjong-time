import { createTheme } from '@mui/material';

export const colors = {
  purple: 'rgba(115, 107, 206, 0.4)',
  darkPurple: 'rgba(8, 9, 29, 0.2)',
  backgroundPurple: 'rgba(8, 9, 30, 1)',
  lightPurple: 'rgba(146, 149, 201, 1)',
  lightRed: 'rgba(255, 156, 128, 1)',
  red: 'rgba(254, 116, 77, 1)',
  darkRed: 'rgba(254, 116, 77, 0.4)',
  grey: 'rgba(95, 95, 95, 0.4)',
  lightGreen: 'rgba(73, 255, 222, 1)',
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.purple,
      light: colors.lightPurple,
      dark: colors.darkPurple,
    },
    secondary: {
      main: colors.red,
      light: colors.lightRed,
      dark: colors.darkRed,
    },
    background: {
      default: colors.backgroundPurple,
    },
    text: {
      primary: colors.lightPurple,
      secondary: colors.lightRed,
    },
    success: {
      main: colors.lightGreen,
    },
    error: {
      main: colors.red,
      light: colors.lightRed,
    },
  },
  typography: {
    fontFamily: `'Helvetica Neue', Arial, sans-serif`,
    h3: {
      fontSize: '48px',
      fontWeight: 700,
      lineHeight: '56.02px',
    },
    body1: {
      fontSize: '30px',
      fontWeight: 500,
      lineHeight: '26px',
    },
    body2: {
      fontSize: '24px',
      fontWeight: 400,
      lineHeight: '32.02px',
    },
  },
});
