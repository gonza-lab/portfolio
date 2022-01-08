import React, { useContext } from 'react';

import { Grid } from '@mui/material';

import Fade from 'react-reveal/Fade';

import DataContext from '../../../contexts/data';

import Markdown from '../../markdown/Markdown';

export const AboutInfo = () => {
  const { about } = useContext(DataContext);

  return (
    <Grid
      container
      className="about-info"
      columnSpacing={{ xs: 0, md: 2 }}
      rowSpacing={{ xs: 2, md: 0 }}
    >
      {/* <Grid item xs={12} md={3}>
        <Fade left>
          <div className="about-info__img">
            <img alt="Gonzalo Flores" src={about?.face_img} />
          </div>
        </Fade>
      </Grid> */}
      <Grid item xs={12}>
        <Fade right>
          <Grid
            container
            className="about-info__data"
            columnSpacing={{ xs: 0, md: 1 }}
            rowSpacing={{ xs: 1, md: 0 }}
          >
            <Grid item xs={12}>
              <h3>Habilidades</h3>
              {about && <Markdown>{about.skills}</Markdown>}
            </Grid>
          </Grid>
        </Fade>
      </Grid>
    </Grid>
  );
};
