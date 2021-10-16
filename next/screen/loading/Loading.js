import React, { useState } from 'react';
import PropTypes from 'prop-types';
import vegeta1 from './vegeta_1.png';
import vegeta2 from './vegeta_2.png';
import vegeta_counter from './vegeta_counter.png';
import './Loading.scss';

export const ScreenLoading = ({ isExit }) => {
  const [counter, setCounter] = useState(0);

  const handleEvent = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div
      className={
        'screen-loading animate__animated' +
        (isExit ? ' animate__fadeOut' : '')
      }
      onClick={handleEvent}
      onKeyPress={handleEvent}
      tabIndex="0"
    >
      <div className="vegeta">
        {!(counter % 2) ? (
          <img className="vegeta1" src={vegeta1} />
        ) : (
          <img className="vegeta2" src={vegeta2} />
        )}
        <div className="vegeta-counter">
          <img src={vegeta_counter} />
          <span>{counter}</span>
        </div>
      </div>
    </div>
  );
};

ScreenLoading.propTypes = {
  isExit: PropTypes.bool.isRequired,
};
