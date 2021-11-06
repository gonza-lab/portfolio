import React, { useContext } from 'react';
import { ContactForm } from './form/Form';
import Fade from 'react-reveal/Fade';
import DataContext from '../../contexts/data';
import { Container, Grid, Typography } from '@mui/material';

export const Contact = () => {
  const { contact } = useContext(DataContext);

  return (
    <section id="contact" className="contact">
      <Container>
        <Typography variant="h2">{contact?.title}</Typography>
        <Typography variant="body1">{contact?.description[0]}</Typography>
        <Fade>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={8}>
              <ContactForm />
            </Grid>
          </Grid>
        </Fade>
      </Container>
    </section>
  );
};
