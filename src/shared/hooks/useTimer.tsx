import { useEffect, useState } from "react";

const useTimer = (initialTime: number): [number, () => void, () => void] => {
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [time, isActive]);

  const startClock = () => {
    setIsActive(true);
  };

  const stopClock = () => {
    setIsActive(false);
  };

  return [time, startClock, stopClock];
};

export default useTimer;
