import React from "react";
import ReactDOM from "react-dom/client";
import Shopping from "./Shopping.jsx";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import ErrorPage from "./components/OutOfBounds/ErrorPage.jsx";
import AboutUs from "./AboutUs.jsx";
import Cart from "./Cart.jsx";
import Payment from "./components/PaymentPopUp/Payment.jsx";
var isComp = () => {
  const screenWidth = window.innerWidth;
  const mobileScreenWidthThreshold = 600;
  return screenWidth > mobileScreenWidthThreshold;
};
const router = createBrowserRouter([
  {
    path: "shop",
    element: <Shopping isComp={isComp()} />,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/",
    element: <HomePage isComp={isComp()} />,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "cart",
    // element: <HomePage isComp={isComp()} />,
    element: (
      <>
        <Cart></Cart>
      </>
    ),
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "AboutUs",
    element: <AboutUs></AboutUs>,
  },
  {
    id: ":id",
    element: <ErrorPage></ErrorPage>,
  },
  {
    path: "test",
    element: <Payment />,
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
