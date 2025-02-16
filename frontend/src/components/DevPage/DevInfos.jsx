import axios from "axios";
import { useEffect, useState } from "react";

const DevInfos = () => {
  const [niveis, setNiveis] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/nivel")
      .then((response) => {
        setNiveis(response.data);
      })
      .catch((err) => {
        throw new err();
      });
  }, []);

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
            onInput={(e) => {
              const target = e.target;
              target.value = target.value.toUpperCase();
            }}
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

        <div className="flex items-center gap-4 justify-between w-full">
          <span className="text-lg font-semibold">Insira o nível:</span>
          <select
            name="nivelDev"
            className="bg-zinc-300 outline-none px-4 py-2 rounded-md"
            defaultValue=""
          >
            <option value="" disabled>
              Selecione um nível
            </option>
            {niveis.map((nivel) => (
              <option key={nivel.id} value={nivel.id} className="capitalize">
                {nivel.nome}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
};

export default DevInfos;
