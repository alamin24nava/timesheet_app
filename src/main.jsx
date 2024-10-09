import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import Login from "./pages/auth/Login";
import Profile from "./pages/auth/Profile";
import Timesheet from "./pages/Timesheet";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Toaster position="top-right" reverseOrder={false} />
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="profile" element={<Profile />} />
            <Route path="timesheet" element={<Timesheet />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </Provider>
);
