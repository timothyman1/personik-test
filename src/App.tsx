import "./App.css";
import { Game, Result, Welcome } from "./pages";
import React, { useState } from "react";

enum WindowState {
  Welcome,
  Game,
  Result,
}

const App: React.FC = () => {
  const [currentWindow, setCurrentWindow] = useState<WindowState>(
    WindowState.Welcome,
  );
  return (
    <>
      {currentWindow === WindowState.Welcome && (
        <Welcome onStartGame={() => setCurrentWindow(WindowState.Game)} />
      )}
      {currentWindow === WindowState.Game && (
        <Game onFinishGame={() => setCurrentWindow(WindowState.Result)} />
      )}
      {currentWindow === WindowState.Result && (
        <Result
          onRestartGame={() => setCurrentWindow(WindowState.Welcome)}
          lastCity="Москва"
          totalCities={2}
        />
      )}
    </>
  );
};

export default App;
