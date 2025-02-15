import { Link } from "react-router-dom";

const HomeOptions = () => {
  return (
    <section className="flex flex-col gap-12 items-center justify-center">
      <h2 className="text-5xl font-bold">Qual opção você deseja cadastar?</h2>
      <div className="flex gap-36 font-semibold text-3xl text-defaultWhite">
        <Link to="/dev" className="option-button box-shadow-box">
          Dev
        </Link>
        <Link to="/nivel" className="option-button box-shadow-box">
          Nível
        </Link>
      </div>
    </section>
  );
};

export default HomeOptions;
