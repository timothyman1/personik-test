import { Card } from "../../components";
import React from "react";

interface ResultProps {
  onRestartGame: () => void;
  lastCity: string;
  totalCities: number;
}

const Result: React.FC<ResultProps> = ({
  onRestartGame,
  lastCity,
  totalCities,
}) => {
  return (
    <>
      <Card>
        <div className="p-10 text-xl font-normal text-center max-w-xl w-full xl:w-[576px]">
          <h1 className="mb-8 w-full">
            К сожалению твое время вышло!
            <br />
            Твой противник победил
          </h1>
          <p className="mb-8 text-3xl text-red-600 font-medium w-full">0:00</p>
          <p className="mb-8 w-full">
            Всего было перечислено городов: {totalCities}
            <br />
            Очень не плохой результат!
          </p>
          <p className="mb-1.5 w-full">Последний город названный победителем</p>
          <p className="text-2xl font-medium mb-8 w-full">{lastCity}</p>
          <button className="btn-primary text-base" onClick={onRestartGame}>
            Начать новую игру
          </button>
        </div>
      </Card>
    </>
  );
};

export default Result;
