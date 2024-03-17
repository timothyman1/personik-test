import React from "react";

import { Card } from "../../components";
import paper from "../../assets/paper-airplane.svg";

interface GameProps {
  onFinishGame: () => void;
}

const Game: React.FC<GameProps> = ({ onFinishGame }) => {
  return (
    <Card>
      <div className="flex justify-between items-center p-4">
        <h1 className="font-sans text-base font-normal text-center">
          Сейчас ваша очередь
        </h1>
        <h1 className="text-xl font-medium text-center">2:00</h1>
      </div>

      <hr className="h-1 bg-gray-200" />

      <div className="w-[576px] h-80 flex justify-center items-center">
        <p>Первый участник вспоминает города...</p>
      </div>

      <div className="p-4 ">
        <div className="flex justify-between items-center bg-gray-100 rounded-lg">
          <input
            className="w-full max-w-xl  p-3 bg-gray-100 rounded-lg"
            placeholder="Напишите любой город, например: Где вы живете?"
          />
          <button className="btn-secondary h-full mr-2" onClick={onFinishGame}>
            <img
              className="origin-center pl-0.5 pb-1 rotate-45"
              src={paper}
              alt=""
            />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default Game;
