const DevInfos = () => {
  return (
    <section className="flex gap-4">
      <div className="flex flex-col gap-2 items-center justify-between">
        <div className="flex items-center gap-4 justify-between w-full">
          <span className="text-lg font-semibold">Nome:</span>
          <input
            placeholder="Ex: Enzo Rocha"
            name="nomeDev"
            type="text"
            className="bg-zinc-300 outline-none px-4 py-2 rounded-md"
          />
        </div>

        <div className="flex items-center gap-4 justify-between w-full">
          <span className="text-lg font-semibold">Sexo:</span>
          <input
            placeholder="Ex: M/F"
            name="sexoDev"
            type="text"
            className="bg-zinc-300 outline-none px-4 py-2 rounded-md"
          />
        </div>

        <div className="flex items-center gap-4 justify-between w-full">
          <span className="text-lg font-semibold">Hobby:</span>
          <input
            placeholder="Ex: Futebol"
            name="hobbyDev"
            type="text"
            className="bg-zinc-300 outline-none px-4 py-2 rounded-md"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4 justify-between w-full">
          <span className="text-lg font-semibold">Idade:</span>
          <input
            placeholder="Ex: 20"
            name="idadeDev"
            type="text"
            className="bg-zinc-300 outline-none px-4 py-2 rounded-md"
          />
        </div>

        <div className="flex items-center gap-4 justify-between w-full">
          <span className="text-lg font-semibold">Data de nascimento:</span>
          <input
            name="dataDev"
            type="date"
            className="bg-zinc-300 outline-none px-4 py-2 rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default DevInfos;
