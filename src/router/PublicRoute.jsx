import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/auth/Login";
import Profile from "../pages/auth/Profile";
import Timesheet from "../pages/Timesheet";
import Layout from "../pages/Layout";
import Home from "../pages/Home";

export const PublicRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home />, errorElement: <ErrorPage /> },
      { path: "timesheet", element: <Timesheet />, errorElement: <ErrorPage /> },
      { path: "profile", element: <Profile />, errorElement: <ErrorPage /> },
      { path: "login", element: <Login />, errorElement: <ErrorPage /> },
    ],
  },
]);
