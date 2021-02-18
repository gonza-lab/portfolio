import React from 'react';
import { useSelector } from 'react-redux';
import { PortfolioItemList } from './item/List';
import './Portfolio.scss';

export const Portfolio = () => {
  const { portfolio } = useSelector((state) => state.data);

  return (
    <section id="portfolio" className="portfolio">
      <h2>{portfolio?.title}</h2>
      <p>{portfolio?.description[0]}</p>
      <PortfolioItemList />
    </section>
  );
};
