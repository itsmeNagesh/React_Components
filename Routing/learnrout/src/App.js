

import About from './components/About';
import Service from './components/Service';
import * as React from "react";
import { createRoot} from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";

const router1 = createBrowserRouter([
  {
    path: "/",
    element: (
      <About/>
    ),
  },
  {
    path: "/services",
    element: (
      <Service/>
    ),
  },
  
]);


const App = () => {
  return (
    <RouterProvider router={router1} />
  );
};

export default App;
