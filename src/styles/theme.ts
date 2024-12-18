import { createTheme } from '@mui/material';

export const colors = {
  purple: '#262957',
  darkPurple: '#1D1E3F',
  backgroundPurple: '#08091E',
  lightPurple: '#9295C9',
  lightRed: '#FFC4B4',
  red: '#FE744D',
  darkRed: '#912E14',
  grey: '#36374D',
  lightGreen: '#5AFFFB',
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
    fontFamily: `'Roboto', Arial, sans-serif`,
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
