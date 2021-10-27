import { createTheme } from '@mui/material/styles';

const themeBreakpoints = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 994,
      lg: 1320,
      xl: 1536,
    },
  },
});

const theme = createTheme(
  themeBreakpoints,
  createTheme({
    typography: {
      fontFamily: '"Raleway", sans-serif',
      h1: {
        fontSize: '4rem',
        fontWeight: 700,
        [themeBreakpoints.breakpoints.down('sm')]: {
          fontSize: '1.75rem',
        },
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 'bold',
        [themeBreakpoints.breakpoints.down('sm')]: {
          fontSize: '1.5rem',
        },
      },
      body1: {
        fontSize: '1rem',
      },
    },
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            '@media (min-width:1200px)': {
              maxWidth: '1320px',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          outlined: {
            padding: '0 1.2rem',
            height: '45px',
            borderRadius: '290486px',
            border: '2px solid rgb(23, 59, 108)',
            color: 'rgb(23, 59, 108)',
            textTransform: 'none',
            fontSize: '1.2rem',
            ':hover': {
              border: '2px solid rgb(23, 59, 108)',
              backgroundColor: 'rgb(23, 59, 108)',
              color: '#fff',
            },
          },
        },
      },
    },
  })
);

export default theme;
