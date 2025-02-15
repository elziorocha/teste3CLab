import { useRef } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const DevForm = ({ getDevs }) => {
  const ref = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = ref.current;
    const nameDev = form.nomeDev.value.trim();

    if (/^\d+$/.test(nameDev)) {
      toast.error("O nome do dev não pode conter números!");
      return;
    } else if (nameDev === "") {
      toast.error("O nome do dev não pode estar em branco!");
      return;
    }

    const newDev = {
      nome: form.nomeDev.value.trim(),
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/dev",
        newDev
      );

      if (response.status === 201) {
        toast.success("Dev cadastrado com sucesso!");
        getDevs();
        form.reset();
      }
    } catch {
      //erro com a utilização de toasts
    }
  };

  return (
    <main className="flex flex-col text-center justify-between items-center h-screen">
      <div className="flex w-full justify-start p-4">
        <Link
          to="/dev"
          className="button-default bg-secondary hover:bg-primary text-2xl"
        >
          Voltar
        </Link>
      </div>
      <div className="flex flex-col gap-7 mb-20">
        <h2 className="text-4xl font-semibold">Cadastre um Dev!</h2>
        <form ref={ref} onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex flex-col gap-2 items-center justify-between">
              <div className="flex items-center gap-4 justify-between w-full">
                <span className="text-lg">Nome:</span>
                <input
                  placeholder="Ex: Enzo Rocha"
                  name="nomeDev"
                  type="text"
                  className="bg-zinc-300 outline-none px-4 py-2 rounded-md"
                />
              </div>

              <div className="flex items-center gap-4 justify-between w-full">
                <span className="text-lg">Sexo:</span>
                <input
                  placeholder="Ex: M/F"
                  name="sexoDev"
                  type="text"
                  className="bg-zinc-300 outline-none px-4 py-2 rounded-md"
                />
              </div>

              <div className="flex items-center gap-4 justify-between w-full">
                <span className="text-lg">Hobby:</span>
                <input
                  placeholder="Ex: Enzo Rocha"
                  name="hobbyDev"
                  type="text"
                  className="bg-zinc-300 outline-none px-4 py-2 rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex items-center gap-4 justify-between w-full">
                <span className="text-lg">Idade:</span>
                <input
                  placeholder="Ex: 20"
                  name="idadeDev"
                  type="text"
                  className="bg-zinc-300 outline-none px-4 py-2 rounded-md"
                />
              </div>

              <div className="flex items-center gap-4 justify-between w-full">
                <span className="text-lg">Data de nascimento:</span>
                <input
                  placeholder="Ex: Enzo Rocha"
                  name="dataDev"
                  type="date"
                  className="bg-zinc-300 outline-none px-4 py-2 rounded-md"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="button-default w-20 self-center text-lg bg-secondary hover:bg-primary"
          >
            Salvar
          </button>
        </form>
      </div>
      <ToastContainer />
    </main>
  );
};

DevForm.propTypes = {
  getDevs: PropTypes.func.isRequired,
};

export default DevForm;
