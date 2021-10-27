import React, { useContext } from 'react';
import { PortfolioItem } from './Item';
import Fade from 'react-reveal/Fade';
import DataContext from '../../../contexts/data';
import { Grid } from '@mui/material';

export const PortfolioItemList = () => {
  const { apps: list } = useContext(DataContext);

  return (
    <Fade>
      <Grid
        container
        columnSpacing={{ xs: 0, md: 3 }}
        rowSpacing={{ xs: 3, md: 0 }}
        justifyContent="center"
      >
        {list.map((app) => (
          <Grid item xs={12} md={4}>
            <PortfolioItem key={app._id} name={app.app} />
          </Grid>
        ))}
      </Grid>
    </Fade>
  );
};
