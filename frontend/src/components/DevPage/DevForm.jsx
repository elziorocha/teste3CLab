import { useRef } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import DevInfos from "./DevInfos";

const DevForm = ({ getDevs }) => {
  const ref = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = ref.current;
    const nomeDev = form.nomeDev.value.trim();
    const sexoDev = form.sexoDev.value.trim();
    const idadeDev = form.idadeDev.value.trim();
    const dataDev = form.dataDev.value.trim();
    const hobbyDev = form.hobbyDev.value.trim();

    if (/[\d]/.test(nomeDev)) {
      toast.error(`O campo "nome" não pode conter números.`);
      return;
    } else if (sexoDev != "F" && sexoDev != "M") {
      toast.error(`O campo "sexo" deve conter apenas M ou F`);
      return;
    } else if (!/^\d+$/.test(idadeDev)) {
      toast.error(`O campo "idade" deve conter apenas números`);
      return;
    } else if (!nomeDev || !sexoDev || !idadeDev || !dataDev || !hobbyDev) {
      toast.error("Nenhum campo pode estar em branco!");
      return;
    }

    const newDev = {
      nome: nomeDev,
      sexo: sexoDev,
      idade: idadeDev,
      data_nascimento: dataDev,
      hobby: hobbyDev,
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
      // toast.error("Erro ao cadastrar dev!");
      // console.error("Erro ao cadastrar dev:", error);
      //código apresenta problemas ao efetuar o toast no catch de error.
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
          <DevInfos />

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
