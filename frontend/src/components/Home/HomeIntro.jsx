const HomeIntro = () => {
  return (
    <section className="flex items-center justify-center px-20">
      <div className="flex flex-col gap-6 p-4 bg-secondary rounded-t-2xl box-shadow-box">
        <div className="text-4xl flex gap-2.5">
          <h1 className="text-gray-300 font-semibold">
            Seja Bem-vindo(a) ao sistema de cadastro de desenvolvedores
          </h1>
          <span className="text-yellow-400 font-bold">
            3C<span className="text-cyan-600 font-bold">LAB</span>
          </span>
        </div>

        <h2 className="text-center text-gray-300 font-semibold text-4xl">
          O melhor sistema de cadastro na cidade e região!
        </h2>
      </div>
    </section>
  );
};

export default HomeIntro;
