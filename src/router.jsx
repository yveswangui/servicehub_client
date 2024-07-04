import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Services from "./pages/services/services.jsx";
import SingleService from "./pages/single_service/single_service.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/services/:serviceId",
    element: <SingleService />,
  },
]);
