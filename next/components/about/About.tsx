import React, { useContext } from 'react';

import { Container, Typography } from '@mui/material';

import DataContext from '../../contexts/data';

import { AboutInfo } from './info/Info';

import Markdown from '../markdown/Markdown';

export const About = () => {
  const { about } = useContext(DataContext);

  return (
    <section id="about" className="about">
      <Container>
        <Typography variant="h2" fontWeight="bolder">
          Sobre mi
        </Typography>
        {about && (
          <Typography variant="body1">
            <Markdown>{about.content}</Markdown>
          </Typography>
        )}
        <AboutInfo />
      </Container>
    </section>
  );
};
