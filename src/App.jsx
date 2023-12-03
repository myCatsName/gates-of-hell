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
import { playSlightBackgroundMusic } from "./Sound/BGMusic";

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

  return (
    <React.Fragment>
      <TitleScreen />
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
