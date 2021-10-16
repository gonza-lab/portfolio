import React from 'react';
import { Element } from 'react-scroll';
import { Hero } from '../component/hero/Hero';
import { About } from '../component/about/About';
import { Portfolio } from '../component/portfolio/Portfolio';
import { Contact } from '../component/contact/Contact';
import './Root.scss';

export const ScreenRoot = () => {
  return (
    <div className="screens-root">
      <Element name="home" className="section">
        <Hero />
      </Element>
      <main>
        <Element name="about" className="section">
          <About />
        </Element>
        <Element name="portfolio" className="section">
          <Portfolio />
        </Element>
        <Element name="contact" className="section">
          <Contact />
        </Element>
      </main>
    </div>
  );
};
