import { useState, useEffect } from 'react';
const SECOND_COUNTDOWN = 180;
const useCountDown = () => {
  const [timer, setTimer] = useState(SECOND_COUNTDOWN);
  const [isActive, setIsActive] = useState(false);
  function start() {
    setIsActive(true);
  }
  function stop() {
    setIsActive(false);
  }
  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isActive]);

  const minutes = Math.floor(timer / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (timer % 60).toString().padStart(2, '0');
  const countdown = `${minutes}:${seconds}`;

  return { countdown, start, stop };
};
export default useCountDown;
