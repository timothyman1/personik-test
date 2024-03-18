import React, { useEffect, useState } from "react";

import { Card, Chat, Input, Timer } from "@/components";
import Data from "@/const/cities.json";
import { NamedCitiesProps } from "@/shared/types/Game/types.ts";
import { getLetter, randomTimeGen } from "@/utils";
import { Result } from "@/pages";

interface GameProps {
  onFinishGame: () => void;
}

const Game: React.FC<GameProps> = ({ onFinishGame }) => {
  const [namedCities, setNamedCities] = useState<NamedCitiesProps[]>([]);
  const [playersTurn, setPlayersTurn] = useState(true);
  const [winner, setWinner] = useState("");

  useEffect(() => {
    if (namedCities.length) {
      if (!playersTurn) {
        let timer: NodeJS.Timeout;
        const searchCity = Data.find(
          (place) =>
            getLetter(place, 0) ===
              getLetter(namedCities[namedCities.length - 1].city, -1) &&
            !namedCities.some(
              ({ city }) => city.toLowerCase() === place.toLowerCase(),
            ),
        );

        timer = setTimeout(() => {
          if (searchCity) {
            setNamedCities([
              ...namedCities,
              { city: searchCity, sender: false },
            ]);
            setPlayersTurn(true);
          }
        }, randomTimeGen());

        if (winner) {
          clearTimeout(timer);
        }

        return () => {
          clearTimeout(timer);
        };
      }
    }
  }, [namedCities, winner]);

  const handleNamedCities = (message: NamedCitiesProps) => {
    if (
      Data.some((city) => city.toLowerCase() === message.city.toLowerCase())
    ) {
      setNamedCities([...namedCities, message]);
      setPlayersTurn(false);
      return true;
    }
    return false;
  };

  return (
    <>
      {!winner ? (
        <Card>
          <div className="flex justify-between items-center p-4">
            <h1 className="font-sans text-base font-normal text-center">
              {playersTurn ? "Сейчас ваша очередь" : "Сейчас очередь соперника"}
            </h1>
            <Timer playersTurn={playersTurn} setWinner={setWinner} />
          </div>

          <hr className="h-1 bg-gray-200" />
          <Chat namedCities={namedCities} />
          <Input
            namedCities={namedCities}
            setNamedCities={handleNamedCities}
            playersTurn={playersTurn}
          />
        </Card>
      ) : (
        <Result
          onRestartGame={onFinishGame}
          lastCity={namedCities[namedCities.length - 1]?.city ?? ""}
          totalCities={namedCities.length ?? 0}
          winner={winner}
        />
      )}
    </>
  );
};

export default Game;
