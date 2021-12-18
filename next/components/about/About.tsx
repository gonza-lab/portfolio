import { Container, Typography } from '@mui/material';
import React, { useContext } from 'react';

import ReactMarkdown from 'react-markdown';

import DataContext from '../../contexts/data';
import { AboutInfo } from './info/Info';

export const About = () => {
  const { about } = useContext(DataContext);

  return (
    <section id="about" className="about">
      <Container>
        <Typography variant="h2">Sobre mi</Typography>
        <Typography variant="body1">
          <ReactMarkdown>{about.content}</ReactMarkdown>
        </Typography>
        <AboutInfo />
      </Container>
    </section>
  );
};
