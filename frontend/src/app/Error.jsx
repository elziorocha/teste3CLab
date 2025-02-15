import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="text-center flex flex-col items-center gap-8">
        <h1 className="text-2xl font-semibold">
          Ops! Essa página não existe! Clique abaixo para voltar à página
          inicial!
        </h1>
        <Link
          to="/"
          className="px-6 py-3 w-30 text-xl bg-primary text-defaultWhite font-semibold rounded-3xl cursor-pointer"
        >
          Voltar
        </Link>
      </div>
    </section>
  );
};

export default Error;
