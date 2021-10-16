import React from 'react';
import { HeaderNavItem } from '../Item/Item';
import PropTypes from 'prop-types';

export const HeaderNavListLinks = ({ onClick }) => {
  return (
    <ul>
      <HeaderNavItem onClick={onClick} to="home" i="fas fa-home">
        Home
      </HeaderNavItem>
      <HeaderNavItem onClick={onClick} to="about" i="fas fa-user">
        Sobre mi
      </HeaderNavItem>
      <HeaderNavItem onClick={onClick} to="portfolio" i="fas fa-folder">
        Portfolio
      </HeaderNavItem>
      <HeaderNavItem onClick={onClick} to="contact" i="fas fa-envelope">
        Contacto
      </HeaderNavItem>
    </ul>
  );
};

HeaderNavListLinks.propTypes = {
  onClick: PropTypes.func.isRequired,
};
