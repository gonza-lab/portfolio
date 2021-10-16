import React from 'react';
import { PortfolioItem } from './Item';
import Fade from 'react-reveal/Fade';
import './List.scss';
import { useSelector } from 'react-redux';

export const PortfolioItemList = () => {
  const { list } = useSelector((state) => state.app);
  return (
    <Fade>
      <div className="portfolio-item-list">
        <h3>Proyectos reales</h3>
        <div>
          {list
            ?.filter((app) => !app.isPersonal)
            .map((app) => (
              <PortfolioItem key={app._id} name={app.app} />
            ))}
        </div>
        <h3>Proyectos personales</h3>
        <div>
          {list
            ?.filter((app) => app.isPersonal)
            .map((app) => (
              <PortfolioItem key={app._id} name={app.app} />
            ))}
        </div>
      </div>
    </Fade>
  );
};
