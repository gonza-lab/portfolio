import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { HeaderNavListLinks } from './list-links/Links';

export const HeaderNav = () => {
  const router = useRouter();
  const handleToggleNav = useCallback(() => {
    if (router.asPath !== '/') {
      router.push('/');
    }
  }, []);

  return (
    <nav className="header-nav">
      <HeaderNavListLinks onClick={handleToggleNav} />
    </nav>
  );
};
