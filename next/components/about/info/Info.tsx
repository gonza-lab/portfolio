import { Grid } from '@mui/material';
import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import DataContext from '../../../contexts/data';

export const AboutInfo = () => {
  const { about } = useContext(DataContext);

  return (
    <Grid
      container
      className="about-info"
      columnSpacing={{ xs: 0, md: 2 }}
      rowSpacing={{ xs: 2, md: 0 }}
    >
      <Grid item xs={12} md={3}>
        <Fade left>
          <div className="about-info__img">
            <img alt="Gonzalo Flores" src={about?.face_img} />
          </div>
        </Fade>
      </Grid>
      <Grid item xs={12} md={9}>
        <Fade right>
          <Grid
            container
            className="about-info__data"
            columnSpacing={{ xs: 0, md: 1 }}
            rowSpacing={{ xs: 1, md: 0 }}
          >
            <Grid item xs={12} md={6}>
              <h3>{about?.title[1]}</h3>
              <ul>
                {about?.skills.map((info) => (
                  <li key={typeof info === 'object' ? info[0] : info}>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                    {typeof info === 'object' ? (
                      <>
                        <strong>{info[0]}: </strong>
                        {info[1]}
                      </>
                    ) : (
                      <>
                        <strong>{info}</strong>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </Grid>
            {/* <Grid item xs={12} md={6}>
              <h3>{about?.title[2]}</h3>
              <ul>
                {about?.skills_to_learn.map((info) => (
                  <li key={info}>
                    <i className="fas fa-chevron-right"></i>
                    <strong>{info}</strong>
                  </li>
                ))}
              </ul>
            </Grid> */}
          </Grid>
        </Fade>
      </Grid>
    </Grid>
  );
};