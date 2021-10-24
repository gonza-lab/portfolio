import { Container, Typography } from '@mui/material';
import React, { useContext } from 'react';
import DataContext from '../../contexts/data';
import { AboutInfo } from './info/Info';

export const About = () => {
  const { about } = useContext(DataContext);

  return (
    <section id="about" className="about">
      <Container>
        <Typography variant="h2">{about?.title[0]}</Typography>
        <Typography variant="body1">{about?.description[0]}</Typography>
        <AboutInfo />
      </Container>
    </section>
  );
};
