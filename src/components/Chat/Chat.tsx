import React from "react";

import { NamedCitiesProps } from "@/shared/types/Game/types.ts";

interface ChatProps {
  namedCities: NamedCitiesProps[];
}

const Chat: React.FC<ChatProps> = ({ namedCities }) => {
  return (
    <div className="min-w-[576px] max-h-[500px] min-h-80 overflow-y-auto pt-10 pb-5 relative">
      {!namedCities.length ? (
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400">
          Первый участник вспоминает города...
        </p>
      ) : (
        <div className="flex items-center flex-col px-4 w-full">
          {namedCities.map(({ city, sender }) => (
            <p
              key={city}
              className={`px-4 py-1.5 text-center text-base font-normal rounded-xl mt-2 
                ${
                  sender
                    ? "ml-auto   bg-violet-500 text-white rounded-br-none"
                    : "mr-auto bg-violet-50 text-gray-700 rounded-bl-none"
                }`}
            >
              {city}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Chat;
