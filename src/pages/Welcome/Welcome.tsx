import React from "react";

import { Card } from "@/components";

interface WelcomeProps {
  onStartGame: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onStartGame }) => {
  return (
    <>
      <Card>
        <h1 className="font-sans text-base font-normal p-4 text-center w-full">
          Игра в города на время
        </h1>
        <hr className="h-1 bg-gray-200" />
        <article className="px-8 py-6 prose font-sans text-sm max-w-xl">
          <p>Цель: Назвать как можно больше реальных городов.</p>
          <ul className="list-disc">
            <li>Запрещается повторение городов.</li>
            <li>
              Названий городов на твердый <q>ъ</q> и мягкий <q>ъ</q> знак нет.
              Из-за этого бы пропускаем эту букву и игрок должен назвать город
              на букву стоящую перед ъ или ь знаком.
            </li>
            <li>
              Каждому игроку дается 2 минуты на размышления, если спустя это
              время игрок не вводит слово он считается проигравшим
            </li>
          </ul>
          <div className="flex justify-center">
            <button className="btn-primary align-middle" onClick={onStartGame}>
              Начать игру
            </button>
          </div>
        </article>
      </Card>
    </>
  );
};

export default Welcome;
