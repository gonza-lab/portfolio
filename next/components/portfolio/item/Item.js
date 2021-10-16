import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Item.scss';

export const PortfolioItem = ({ name }) => {
  return (
    <div className="portfolio-item">
      <img alt="Web app" src={`/api/img/app/${name}/${name}_thumb.png`} />
      <div className="portfolio-item__details">
        <Link to={`/app/${name}`}>
          <i className="fas fa-link"></i>
        </Link>
      </div>
    </div>
  );
};

PortfolioItem.propTypes = {
  app: PropTypes.string,
};
