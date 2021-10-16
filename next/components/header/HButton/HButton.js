import React from 'react';
import PropTypes from 'prop-types';

export const HeaderHButton = ({ onChange, isActive }) => {
  return (
    <button
      className={
        'header-hbutton hamburger hamburger--collapse' +
        (isActive ? ' is-active' : '')
      }
      type="button"
      onClick={onChange}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

HeaderHButton.propTypes = {
  onChange: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};
