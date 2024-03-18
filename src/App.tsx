import "./App.css";
import { Game, Welcome } from "@/pages";
import React, { useState } from "react";

enum WindowState {
  Welcome,
  Game,
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
        <Game onFinishGame={() => setCurrentWindow(WindowState.Welcome)} />
      )}
    </>
  );
};

export default App;
