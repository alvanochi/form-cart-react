import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RegistPage from "./pages/register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./404";
import LoginPage from "./pages/login";
import ProductPage from "./pages/products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <RegistPage />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
