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

// Audio
import { playSlightBackgroundMusic } from "./Sound/BGMusic";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<TitleScreen />} />
      <Route path="main" element={<RootLayout />} />
      <Route path="*" element={<></>} />
    </Route>
  )
);

function App() {
  playSlightBackgroundMusic(); //Night Attack on Sanjo Palace theme

  return <RouterProvider router={router} />;
}

export default App;
