import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../link/Link';
import Image from 'next/image';
import { Button, Typography } from '@mui/material';
import Project from '../../../interfaces/Project';

export const PortfolioItem = ({ title, coverImage, hero, slug }: Project) => {
  return (
    <div className="portfolio-item">
      <Image
        layout="fill"
        alt={coverImage.alternativeText}
        src={coverImage.formats.large.url}
      />
      <div className="portfolio-item__details">
        <Typography
          className="portfolio-item__details-content"
          variant="body1"
          marginBottom={{ xs: '1.8rem' }}
        >
          {hero}
        </Typography>
        <Link href={`/app/${slug}`}>
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
