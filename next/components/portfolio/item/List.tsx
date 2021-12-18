import React, { useContext } from 'react';
import { PortfolioItem } from './Item';
import Fade from 'react-reveal/Fade';
import DataContext from '../../../contexts/data';
import { Grid } from '@mui/material';

export const PortfolioItemList = () => {
  const { projects } = useContext(DataContext);

  return (
    <Fade>
      <Grid
        container
        columnSpacing={{ xs: 0, md: 3 }}
        rowSpacing={{ xs: 3, md: 0 }}
        justifyContent="center"
      >
        {projects.map((project, index) => (
          <Grid item xs={12} md={4} key={project.id}>
            <PortfolioItem {...project} />
          </Grid>
        ))}
      </Grid>
    </Fade>
  );
};
