import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const WAIT = 0;

export const useLoadingScreen = (TIME_TRANSITION) => {
  const { isGettingData, isGettingApps } = useSelector((state) => state.ui);
  const [showLoadingScreen, setShowLoading] = useState(true);
  const [showEffect, setShowEffect] = useState(false);

  useEffect(() => {
    let timeOut;
    let timeOut2;

    if (!(isGettingData || isGettingApps)) {
      timeOut = setTimeout(() => {
        setShowLoading(false);
        const root = document.getElementById('root');
        root.className = '';
      }, WAIT + TIME_TRANSITION * 1000);

      timeOut2 = setTimeout(() => setShowEffect(true), WAIT);
    }

    return () => {
      clearTimeout(timeOut);
      clearTimeout(timeOut2);
    };
  }, [isGettingData, isGettingApps]);

  return { showLoadingScreen, showEffect };
};
