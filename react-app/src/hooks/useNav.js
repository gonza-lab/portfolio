import { useCallback, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

const useNav = (onClick, to) => {
  const location = useLocation();
  const history = useHistory();

  const isOnHome = useMemo(() => !location.pathname.split('/')[1], [
    location.pathname,
  ]);

  const handleNav = useCallback(() => {
    if (onClick) {
      onClick();
    }

    if (!isOnHome) {
      history.push('/');
      setTimeout(() => {
        scroller.scrollTo(to, {
          duration: 500,
          smooth: true,
        });
      }, 100);
    }
  }, [onClick, location, history, to]);

  return { handleNav };
};

export default useNav;
