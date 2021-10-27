import React from 'react';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';
import useNav from '../../../../hooks/useNav';

export const HeaderNavItem = ({ to, children, i, onClick }) => {
  const { handleNav } = useNav(onClick, to);

  return (
    <li className="header-nav-item">
      <Link
        activeClass="header-nav-item__active"
        to={to}
        spy={true}
        smooth={true}
        duration={500}
        onClick={handleNav}
      >
        <ion-icon name={i}></ion-icon>
        {children}
      </Link>
    </li>
  );
};

HeaderNavItem.propTypes = {
  to: PropTypes.string.isRequired,
  i: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
