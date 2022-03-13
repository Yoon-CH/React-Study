import { useState, useEffect, useRef } from 'react';

export const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const onScroll = () => {
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return state;
};

export const useScreen = callBack => {
  const element = useRef();
  const checkScreen = isFull => {
    if (callBack && typeof callBack === 'function') {
      callBack(isFull);
    }
  };
  const triggerFullScreen = () => {
    if (element.current) {
      element.current.requestFullscreen();
    }
    checkScreen(true);
  };
  const exitFullScreen = () => {
    document.exitFullscreen();
    checkScreen(false);
  };
  return { element, triggerFullScreen, exitFullScreen };
};
