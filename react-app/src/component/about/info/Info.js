import React from 'react';
import { useSelector } from 'react-redux';
import Fade from 'react-reveal/Fade';
import './Info.scss';

export const AboutInfo = () => {
  const { about } = useSelector((state) => state.data);

  return (
    <div className="about-info">
      <Fade left>
        <div className="about-info__img">
          <img alt="Gonzalo Flores" src={about?.face_img} />
        </div>
      </Fade>
      <Fade right>
        <div>
          <h3>{about?.title[1]}</h3>
          <p>{about?.description[1]}</p>
          <ul>
            {about?.info.map((info) => (
              <li key={info[0]}>
                <i className="fas fa-chevron-right"></i>
                <strong>{info[0]}:</strong> {info[1]}
              </li>
            ))}
          </ul>
          <p>{about?.description[2]}</p>
        </div>
      </Fade>
    </div>
  );
};
