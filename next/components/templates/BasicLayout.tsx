import React from 'react';
import Header from '../header/Header';

const BasicLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default BasicLayout;
