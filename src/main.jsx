import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./assets/Layout/Main.jsx";
import Login from "./Components/Login.jsx";
import Registration from "./Components/Registration.jsx";
import Order from "./Components/Order";
import Home from "./Components/Home.jsx";
import Profile from "./Components/Profile.jsx";
import AuthProviders from "./Provider/AuthProviders.jsx";
import PrivetRoute from "./PrivetRoute/PrivetRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/reg",
        element: <Registration />,
      },
      {
        path: "/order",
        element: (
          <PrivetRoute>
            <Order></Order>
          </PrivetRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivetRoute>
            <Profile />
          </PrivetRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
