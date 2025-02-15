import { Link } from "react-router-dom";
import DevList from "../components/DevPage/DevList";

const Dev = () => {
  return (
    <main className="flex flex-col text-center justify-between items-center h-screen p-5">
      <Link
        to="/"
        className="button-default bg-secondary hover:bg-primary self-start text-2xl"
      >
        Voltar para a home
      </Link>

      <div className="flex flex-col justify-around items-center h-full">
        <h2 className="text-4xl font-semibold">
          Lista dos devs cadastrados no sistema
        </h2>

        <DevList />

        <Link
          to="/dev/cadastro"
          className="button-default bg-secondary hover:bg-primary self-center text-2xl"
        >
          Cadastrar dev
        </Link>
      </div>
    </main>
  );
};

export default Dev;
