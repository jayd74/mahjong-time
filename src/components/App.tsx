import { CssBaseline, ThemeProvider } from '@mui/material';
import Main from '@components/Main';
import { theme } from '@styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  );
};

export default App;
