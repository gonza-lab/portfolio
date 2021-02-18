import React from 'react';
import { useSelector } from 'react-redux';
import Typewriter from 'typewriter-effect';
import './Hero.scss';

export const Hero = () => {
  const { hero } = useSelector((state) => state.data);

  return (
    <section id="hero">
      <img alt="" src={hero?.bg_img} />
      <div className="hero__presentation">
        <h1>Gonzalo Flores</h1>
        <div>
          <span>Yo soy </span>
          <Typewriter
            options={{
              strings: hero?.words,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </section>
  );
};
