import "./App.css";

//React
import React, { useContext, lazy, Suspense } from "react";

// Pages
import RootLayout from "./Layouts/RootLayout";
import TitleScreen from "./Layouts/TitleScreen";
import GameContext from "./Context/GameContext";
const Preloader = lazy(() => import("./HelperFx/Preloader"));

function App() {
  const { loadGame } = useContext(GameContext);
  //TODO: request fullscreen horizontal if mobile

  return (
    <>
      <TitleScreen />
      {loadGame && <RootLayout />}
      <Suspense>
        <Preloader />
      </Suspense>
    </>
  );
}

export default App;
