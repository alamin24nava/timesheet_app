import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "./app/store";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { PublicRoute } from "./router/PublicRoute";
// import {ProtectedRoute} from "./router/ProtectedRoute"
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <Toaster position="top-right" reverseOrder={false} />
        <StrictMode>
            <RouterProvider router={PublicRoute}/>
            {/* <RouterProvider router={ProtectedRoute}/> */}
        </StrictMode>
    </Provider>
);
