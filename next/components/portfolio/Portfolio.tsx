import { Button, Container, Typography } from '@mui/material';
import React, { useContext } from 'react';
import DataContext from '../../contexts/data';
import { PortfolioItemList } from './item/List';

export const Portfolio = () => {
  const { portfolio } = useContext(DataContext);

  return (
    <section id="portfolio" className="portfolio">
      <Container>
        <Typography variant="h2">{portfolio?.title}</Typography>
        <Typography variant="body1">{portfolio?.description[0]}</Typography>
        <PortfolioItemList />
      </Container>
    </section>
  );
};
