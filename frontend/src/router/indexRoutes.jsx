import { createBrowserRouter } from "react-router-dom";
import Error from "../app/Error.jsx";
import Home from "../app/Home.jsx";
import Dev from "../app/Dev.jsx";
import Nivel from "../app/Nivel.jsx";
import NivelForm from "../components/NivelPage/NivelForm.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/dev",
    element: <Dev />,
  },
  {
    path: "/nivel",
    element: <Nivel />,
  },
  {
    path: "/nivel/cadastro",
    element: <NivelForm />,
  },
]);

export default Router;
