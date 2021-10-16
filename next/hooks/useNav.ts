import { useCallback, useMemo } from 'react';
import { scroller } from 'react-scroll';

const useNav = (onClick, to) => {
  // const isOnHome = useMemo(() => !location.pathname.split('/')[1], [
  //   location.pathname,
  // ]);

  const isOnHome = true;

  const handleNav = useCallback(() => {
    if (onClick) {
      onClick();
    }

    if (!isOnHome) {
      // history.push('/');
      setTimeout(() => {
        scroller.scrollTo(to, {
          duration: 500,
          smooth: true,
        });
      }, 100);
    }
  }, [onClick, to]);

  return { handleNav };
};

export default useNav;
