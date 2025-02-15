import { useRef } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const NivelForm = ({ getNiveis }) => {
  const ref = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = ref.current;
    const nameNivel = form.nomeNivel.value.trim();

    if (/^\d+$/.test(nameNivel)) {
      toast.error("O nome do nível não pode conter apenas números!");
      return;
    } else if (nameNivel === "") {
      toast.error("O nome do nível não pode estar em branco!");
      return;
    }

    const newNivel = {
      nome: form.nomeNivel.value.trim(),
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/nivel",
        newNivel
      );

      if (response.status === 201) {
        toast.success("Nível cadastrado com sucesso!");
        getNiveis();
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
          to="/nivel"
          className="bg-blue-500 text-2xl px-4 py-2 cursor-pointer text-defaultWhite rounded-md hover:bg-blue-600 transition-all"
        >
          Voltar
        </Link>
      </div>
      <div className="flex flex-col gap-7">
        <h2 className="text-4xl font-semibold">Cadastre um Nível!</h2>
        <form ref={ref} onSubmit={handleSubmit} className="flex flex-col gap-2">
          <span className="text-lg">Nome do Nível</span>

          <div className="flex gap-2 items-center justify-center">
            <input
              name="nomeNivel"
              type="text"
              className="bg-zinc-300 outline-none px-4 py-2 rounded-md"
            />

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 transition-all p-2 w-20 self-center cursor-pointer text-defaultWhite rounded-md"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </main>
  );
};

NivelForm.propTypes = {
  getNiveis: PropTypes.func.isRequired,
};

export default NivelForm;
