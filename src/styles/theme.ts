import { createTheme } from '@mui/material/styles';

const geistSansVariable = '--font-geist-sans';
const geistMonoVariable = '--font-geist-mono';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff5e6',
      light: '#ffe5c4',
    },
    secondary: {
      main: '#000001',
      light: '#4f4944',
    },
    // tertiary: {},
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: '#000001',
      secondary: '#4f4944',
    },
  },
  typography: {
    fontFamily: `var(${geistSansVariable}), "Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    h1: {
      fontSize: '2rem',
      fontFamily: `var(${geistMonoVariable}), "Roboto", "Helvetica", "Arial", sans-serif`,
    },
  },
});

export default theme;
