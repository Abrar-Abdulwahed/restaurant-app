import { createTheme } from '@mui/material/styles';

const geistSansVariable = '--font-geist-sans';
const geistMonoVariable = '--font-geist-mono';

// Extend the Palette interface to add a tertiary color
declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#B88E2F',
      light: '#F9F1E7',
      dark: '#FFF3E3'
    },
    secondary: {
      main: '#000000',
      light: '#F4F5F7',
      dark: '#9F9F9F',
    },
    tertiary: {
      main: '#E97171',
      light: '#2EC1AC',
    },
    background: {
      default: '#fff',
    }
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
