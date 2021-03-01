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
          <div className="">
            <h3>{about?.title[1]}</h3>
            <ul>
              {about?.skills.map((info) => (
                <li key={info[0]}>
                  <i className="fas fa-chevron-right"></i>
                  <strong>{info}</strong>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>{about?.title[2]}</h3>
            <ul>
              {about?.skills_to_learn.map((info) => (
                <li key={info[0]}>
                  <i className="fas fa-chevron-right"></i>
                  <strong>{info}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Fade>
    </div>
  );
};
