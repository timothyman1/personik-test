import React, { useEffect } from "react";
import useTimer from "@/shared/hooks/useTimer.tsx";

interface TimerProps {
  playersTurn: boolean;
  setWinner: React.Dispatch<React.SetStateAction<string>>;
}
const Timer: React.FC<TimerProps> = ({ playersTurn, setWinner }) => {
  const [playerClock, startPlayerClock, stopPlayerClock] = useTimer(120);
  const [botClock, startBotClock, stopBotClock] = useTimer(120);

  useEffect(() => {
    if (playersTurn) {
      startPlayerClock();
      stopBotClock();
    } else {
      stopPlayerClock();
      startBotClock();
    }
  }, [playersTurn]);

  useEffect(() => {
    if (playerClock === 0) {
      setWinner("bot");
    } else if (botClock === 0) {
      setWinner("player");
    }
  }, [playerClock, botClock]);

  const getTime = (time: number): string => {
    const min = Math.floor(time / 60);
    const sec = time % 60;

    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  };
  return (
    <>
      {playersTurn ? (
        <h1 className="text-xl font-medium text-center">
          {getTime(playerClock)}
        </h1>
      ) : (
        <h1 className="text-xl font-medium text-center">{getTime(botClock)}</h1>
      )}
    </>
  );
};

export default Timer;
