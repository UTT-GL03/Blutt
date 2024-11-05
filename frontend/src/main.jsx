import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./routes/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CarpoolSearch from "./routes/CarpoolSearch.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "carpool-search",
    element: <CarpoolSearch />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
