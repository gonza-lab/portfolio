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
        [themeBreakpoints.breakpoints.down('sm')]: {
          fontSize: '1.5rem',
        },
      },
      h3: {
        fontSize: '1.5rem',
        [themeBreakpoints.breakpoints.down('sm')]: {
          fontSize: '1.3rem',
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
            ':focus': {
              boxShadow: '0 0 0 0.125em rgb(23, 59, 108, 0.25)',
            },
            '&.Mui-disabled': {
              color: 'rgb(23, 59, 108)',
              border: '2px solid rgb(23, 59, 108)',
              opacity: '0.5',
              cursor: 'not-allowed',
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          standard: {
            transform: 'unset',
            position: 'relative',
            marginBottom: '8px',
            fontSize: '1rem',
            fontHeight: '400',
            lineHeight: '1.5',
          },
          root: {
            '&.Mui-focused': {
              color: 'rgba(0, 0, 0, 0.6)',
            },
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            border: '1px solid #ced4da',
            padding: '0.375rem 0.75rem',
            transition: 'all 0.3s',
            ':focus': {
              color: 'red',
            },
            '.MuiInputLabel-standard + &': {
              margin: '0',
            },
            '&::before, &::after': {
              display: 'none',
            },
            '&.Mui-focused:not(.Mui-disabled)': {
              borderColor: '#86b7fe',
            },
          },
        },
      },
    },
    palette: {
      secondary: {
        main: 'rgb(23, 59, 108)',
        dark: 'rgb(33, 36, 49)',
      },
    },
  })
);

export default theme;
