import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#121212',
      light: '#424242',
      dark: '#000000',
    },
    secondary: {
      main: '#c2151c', // NYT-like red
      light: '#e04e55',
      dark: '#8c0000',
    },
    text: {
      primary: '#121212',
      secondary: '#363636',
    },
    background: {
      default: '#ffffff',
      paper: '#f7f7f7',
    },
  },
  typography: {
    fontFamily: '"Georgia", "Times New Roman", serif',
    h1: {
      fontFamily: '"Cheltenham", "Georgia", "Times New Roman", serif',
      fontSize: '2.75rem',
      fontWeight: 700,
      letterSpacing: '-0.01em',
      lineHeight: 1.1,
    },
    h2: {
      fontFamily: '"Cheltenham", "Georgia", "Times New Roman", serif',
      fontSize: '2.125rem',
      fontWeight: 700,
      letterSpacing: '-0.01em',
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: '"Cheltenham", "Georgia", "Times New Roman", serif',
      fontSize: '1.75rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: '"Cheltenham", "Georgia", "Times New Roman", serif',
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.25,
    },
    h5: {
      fontFamily: '"Cheltenham", "Georgia", "Times New Roman", serif',
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h6: {
      fontFamily: '"Cheltenham", "Georgia", "Times New Roman", serif',
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    subtitle1: {
      fontFamily: '"Georgia", "Times New Roman", serif',
      fontSize: '1.125rem',
      lineHeight: 1.5,
    },
    subtitle2: {
      fontFamily: '"Georgia", "Times New Roman", serif',
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    body1: {
      fontFamily: '"Georgia", "Times New Roman", serif',
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: '"Georgia", "Times New Roman", serif',
      fontSize: '0.925rem',
      lineHeight: 1.5,
    },
    button: {
      fontFamily: '"Arial", "Helvetica", sans-serif',
      textTransform: 'none',
      fontWeight: 500,
    },
    caption: {
      fontFamily: '"Arial", "Helvetica", sans-serif',
      fontSize: '0.8125rem',
      lineHeight: 1.4,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 2,
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: 'none',
          border: '1px solid #e0e0e0',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          margin: '1.5rem 0',
        },
      },
    },
  },
}); 