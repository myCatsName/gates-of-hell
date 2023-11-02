import "./App.css";

//React
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Pages
import RootLayout from "./Layouts/RootLayout";
import TitleScreen from "./Layouts/TitleScreen";
import { MemoryGame } from "./Components/MemoryGame";

// Audio
// should be broken out and handled in a different way
import {
  playTendaiTensionMusic,
  playSlightBackgroundMusic,
  playGomaDoMusic,
} from "./Sound/BGMusic";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="matching-game" element={<MemoryGame />} />
      <Route path="*" element={<></>} />
    </Route>
  )
);

function App() {
  playSlightBackgroundMusic(); //Night Attack on Sanjo Palace theme
  // playTendaiTensionMusic(); //Tendai Tension theme
  // playGomaDoMusic();
  return (
    <React.Fragment>
      <RouterProvider router={router} />
      <TitleScreen />
    </React.Fragment>
  );
}

export default App;
