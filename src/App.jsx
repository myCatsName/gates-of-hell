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
      <Route path="*" element={<TitleScreen />} />
    </Route>
  )
);

function App() {
  window.screen.orientation.lock("landscape").then(
    (success) => console.log("Orientation locked to landscape", success),
    (failure) => console.log("Orientation not locked/ not mobile", failure)
  );

  playSlightBackgroundMusic(); //Night Attack on Sanjo Palace theme

  /*TODO: BUG:
  Routing in iFrame on itch.io works, but does not load all assets.
  Check for iFrame, and use a modal if so, or a router in other cases. */
  if (window.self !== window.top) {
    console.log("Page is loaded inside an iframe");
    return (
      <>
        <RouterProvider router={router} />
        <RootLayout />
      </>
    );
  } else {
    console.log("not framed");
    return <RouterProvider router={router} />;
  }
}

export default App;
