import paper from "@/assets/paper-airplane.svg";
import React, { useMemo, useState } from "react";
import { NamedCitiesProps } from "@/shared/types/Game/types.ts";
import { getLetter } from "@/utils/getLetter.ts";

interface InputProps {
  namedCities: NamedCitiesProps[];
  setNamedCities: (message: NamedCitiesProps) => boolean;
  playersTurn: boolean;
}
const Input: React.FC<InputProps> = ({
  namedCities,
  setNamedCities,
  playersTurn,
}) => {
  const [userInput, setUserInput] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const lastNamedLetter = useMemo<string>(() => {
    if (namedCities.length)
      return getLetter(namedCities[namedCities.length - 1].city, -1);
    return "";
  }, [namedCities]);

  const checkGameRules = () => {
    const firstUserInputLetter = getLetter(userInput, 0);

    return (
      !namedCities?.some(({ city }) => userInput === city) &&
      firstUserInputLetter === lastNamedLetter
    );
  };

  const handleSendClick = () => {
    if (!namedCities.length || checkGameRules()) {
      if (setNamedCities({ city: userInput, sender: true })) {
        setUserInput("");
      }
    }
  };

  return (
    <>
      <div className="p-4 ">
        <p className="flex justify-center text-sm font-normal text-gray-400 mb-2 min-h-5">
          {!namedCities.length || namedCities.length === 1
            ? ""
            : `Всего перечислено городов: ${namedCities.length}`}
        </p>
        <div className="flex justify-between items-center bg-gray-100 rounded-lg ">
          <input
            type="text"
            value={userInput}
            className={`w-full max-w-xl p-3 bg-gray-100 rounded-lg placeholder:text-black placeholder:disabled:text-gray-400`}
            placeholder={
              namedCities.length
                ? playersTurn
                  ? `Знаете город на букву "${lastNamedLetter.toUpperCase()}"?`
                  : `Ожидаем ответа соперника...`
                : "Напишите любой город, например: Где вы живете?"
            }
            onChange={handleInputChange}
            disabled={!playersTurn}
          />
          <button
            className="btn-secondary h-full mr-2"
            disabled={!playersTurn}
            onClick={handleSendClick}
          >
            <img
              className="origin-center pl-0.5 pb-1 rotate-45"
              src={paper}
              alt="send-button"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Input;
