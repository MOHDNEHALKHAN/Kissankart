import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { RouterProvider, createBrowserRouter } from "react-router";

import BuyerRoutes from "./pages/buyer/Index.jsx";
import SellerRoutes from "./pages/seller/Index.jsx";
import StartPage from "./pages/home/StartPage.jsx";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Verify from './pages/auth/Verify';
import AuthLayout from "./layout/AuthLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <StartPage />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/verify",
        element: (
          <AuthLayout authentication={false}>
            <Verify />
          </AuthLayout>
        ),
      },
      {
        path: "/buyer/*",
        element: (
          <AuthLayout authentication={true}>
            <BuyerRoutes />
          </AuthLayout>
        ),
      },
      {
        path: "/seller/*",
        element: (
          <AuthLayout authentication={true}>
            <SellerRoutes />
          </AuthLayout>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
