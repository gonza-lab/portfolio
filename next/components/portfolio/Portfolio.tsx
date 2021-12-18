import React from 'react';

import { Container, Typography } from '@mui/material';
import Fade from 'react-reveal/Fade';

import { PortfolioItemList } from './item/List';

export const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <Container>
        <Typography variant="h2">Proyectos</Typography>
        <Typography variant="body1">
          Aquí podrás encontrar mis proyectos
        </Typography>
        <Fade>
          <PortfolioItemList />
        </Fade>
      </Container>
    </section>
  );
};
