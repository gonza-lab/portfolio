import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import { App } from '../component/app/App';
import './App.scss';

export const ScreenApp = () => {
  const location = useLocation();

  useEffect(() => {
    animateScroll.scrollToBottom({ duration: 100 });
  }, []);

  return (
    <div className="screens-app">
      <main>
        <div className="section">
          <App />
        </div>
      </main>
    </div>
  );
};
