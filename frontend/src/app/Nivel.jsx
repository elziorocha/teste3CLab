import { Link } from "react-router-dom";

const Nivel = () => {
  return (
    <main className="p-6 h-screen">
      <main className="flex flex-col items-center justify-between py-20">
        <h2 className="text-4xl font-semibold">
          Lista dos níveis cadastrados no sistema
        </h2>
        <Link
          to="/nivel/cadastro"
          className="bg-blue-500 text-2xl px-4 py-2 self-center cursor-pointer text-defaultWhite rounded-md
        hover:bg-blue-600 transition-all"
        >
          Cadastre um nível
        </Link>
      </main>
    </main>
  );
};

export default Nivel;
