import { useEffect, useState } from 'react';
const useCountdown = () => {
  const currentDate = new Date();
  const timeRemaining = currentDate.setDate(currentDate.getDate() + 4);
  const [countdown, setCountdown] = useState(timeRemaining - new Date().getTime());
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(timeRemaining - new Date().getTime());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(countdown % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  const minutes = Math.floor(countdown % (1000 * 60 * 60) / (1000 * 60));
  const seconds = Math.floor(countdown % (1000 * 60) / 1000);
  return {
    days,
    hours,
    minutes,
    seconds
  };
};
export default useCountdown;