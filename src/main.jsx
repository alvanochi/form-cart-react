import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RegistPage from "./pages/register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./404";
import LoginPage from "./pages/login";
import ProductPage from "./pages/products";
import TesPages from "./pages/tes";
import DetailProductPage from "./pages/detailProduct";
import { Provider } from "react-redux";
import store from "./redux/store";
import DarkModeContextProvider from "./context/DarkMode";
import { TotalPriceProvider } from "./context/TotalPrice";

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
  {
    path: "/products/:id",
    element: <DetailProductPage />,
  },
  {
    path: "/tes",
    element: <TesPages />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <TotalPriceProvider>
          <RouterProvider router={router} />
        </TotalPriceProvider>
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>
);
