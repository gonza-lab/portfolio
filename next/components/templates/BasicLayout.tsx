import React from 'react';
import Header from '../header/Header';

interface HeaderProps {
  children?: React.ReactNode;
}

const BasicLayout = ({ children }: HeaderProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default BasicLayout;
