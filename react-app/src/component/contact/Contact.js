import React from 'react';
import { ContactForm } from './form/Form';
import Fade from 'react-reveal/Fade';
import { useSelector } from 'react-redux';

export const Contact = () => {
  const { contact } = useSelector((state) => state.data);
  return (
    <section id="contact" className="contact">
      <h2>{contact?.title}</h2>
      <p>{contact?.description[0]}</p>
      <Fade>
        <ContactForm />
      </Fade>
    </section>
  );
};
