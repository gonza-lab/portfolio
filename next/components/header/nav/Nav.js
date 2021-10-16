import React, { useCallback } from 'react';
import { HeaderNavListLinks } from './list-links/Links';
import { useDispatch } from 'react-redux';
import ui from '../../../redux/ui/actions';

export const HeaderNav = () => {
  const dispatch = useDispatch();
  const handleToggleNav = useCallback(() => {
    dispatch(ui.toggleNav());
  }, []);

  return (
    <nav className="header-nav">
      <HeaderNavListLinks onClick={handleToggleNav} />
    </nav>
  );
};
