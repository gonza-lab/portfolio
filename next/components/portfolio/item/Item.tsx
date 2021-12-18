import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../link/Link';
import Image from 'next/image';
import { Button, Typography } from '@mui/material';
import Project from '../../../interfaces/Project';

export const PortfolioItem = ({ title, coverImage }: Project) => {
  return (
    <div className="portfolio-item">
      <Image alt="Web app" layout="fill" src={coverImage.url} />
      <div className="portfolio-item__details">
        <Typography
          className="portfolio-item__details-content"
          variant="body1"
          marginBottom={{ xs: '1.8rem' }}
        >
          Results-oriented, responsive and flexible full service civil
          engineering firm.
        </Typography>
        <Link href={`/app/${title}`}>
          <Button variant="outlined">
            Visitar
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </Button>
        </Link>
      </div>
      <div className="portfolio-item__overlay"></div>
    </div>
  );
};

PortfolioItem.propTypes = {
  app: PropTypes.string,
};
