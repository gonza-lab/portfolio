import React, { useCallback } from 'react';
import { HeaderNavListLinks } from './list-links/Links';

export const HeaderNav = () => {
  const handleToggleNav = useCallback(() => {
    // dispatch(ui.toggleNav());
  }, []);

  return (
    <nav className="header-nav">
      <HeaderNavListLinks onClick={handleToggleNav} />
    </nav>
  );
};
