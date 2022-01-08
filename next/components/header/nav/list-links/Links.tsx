import React from 'react';
import { HeaderNavItem } from '../Item/Item';
import PropTypes from 'prop-types';

export const HeaderNavListLinks = ({ onClick }) => {
  return (
    <ul>
      <HeaderNavItem onClick={onClick} to="home" i="home-outline">
        Home
      </HeaderNavItem>
      <HeaderNavItem onClick={onClick} to="about" i="person-outline">
        Sobre mi
      </HeaderNavItem>
      <HeaderNavItem onClick={onClick} to="portfolio" i="folder-outline">
        Proyectos
      </HeaderNavItem>
    </ul>
  );
};

HeaderNavListLinks.propTypes = {
  onClick: PropTypes.func.isRequired,
};
