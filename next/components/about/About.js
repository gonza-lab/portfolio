import React from 'react';
import { useSelector } from 'react-redux';
import { AboutInfo } from './info/Info';

export const About = () => {
  const { about } = useSelector((state) => state.data);

  return (
    <section id="about" className="about">
      <h2>{about?.title[0]}</h2>
      <p>{about?.description[0]}</p>
      <AboutInfo />
    </section>
  );
};
