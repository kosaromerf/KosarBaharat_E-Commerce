import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./Components/App";
import Cart from "./Components/Cart";
import Shop from "./Components/Shop";
import About from "./Components/About";
import Contact from "./Components/Contact";
import "./index.css";

//------------------------------------------------
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);

//-----------------------------------------------

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
