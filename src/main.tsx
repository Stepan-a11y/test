import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SomeRoute } from "./SomeRoute.tsx";
import { Desktop } from "./Desktop.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/some-route",
    element: <SomeRoute />,
  },
]);

const isAndroid = () =>
  typeof navigator !== "undefined" && /Android/.test(navigator.userAgent || "");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {!isAndroid() ? <Desktop /> : <RouterProvider router={router} />}
  </React.StrictMode>
);
