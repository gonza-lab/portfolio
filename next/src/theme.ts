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
    // components: {
    //   MuiContainer: {
    //     styleOverrides: {
    //       root: {
    //         paddingLeft: '8px',
    //         paddingRight: '8px',
    //       },
    //     },
    //   },
    // },
  })
);

export default theme;
