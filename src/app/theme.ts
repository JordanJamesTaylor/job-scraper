'use client';

import { responsiveFontSizes } from '@mui/material';
import createTheme from '@mui/material/styles/createTheme'; 

const theme = createTheme({
  palette: {
    primary: {
      main: '#000'
    },
    secondary: {
      main: '#808080'
    }
  },
  typography: {
    allVariants: {
      fontFamily: 'Comfortaa',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          width: '100%',
          border: '#000 solid 1px',
          borderRadius: '5px'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          border: '#000 solid 1px',
          borderRadius: '5px'
        } 
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          border: '#000 solid 1px',
          borderRadius: '5px'
        }
      }
    }
  }
});
  
export default responsiveFontSizes(theme);