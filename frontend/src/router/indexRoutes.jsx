import { createBrowserRouter } from "react-router-dom";
import Error from "../app/Error.jsx";
import Home from "../app/Home.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default Router;
