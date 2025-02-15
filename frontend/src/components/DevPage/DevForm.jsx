import { useRef } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DevForm = ({ getDevs }) => {
  const ref = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = ref.current;

    const newDev = {
      nome: form.nome.value,
      sexo: form.sexo.value,
      data_nascimento: form.data_nascimento.value,
      idade: form.idade.value,
      hobby: form.hobby.value,
      nivel: form.nivel.value,
    };

    if (!newDev.nome || !newDev.sexo || !newDev.data_nascimento || !newDev.idade || !newDev.hobby || !newDev.nivel) {
      return toast.warn("Preencha todos os campos!");
    }

    try {
      await axios.post("http://localhost:3000/api/dev", newDev);
      toast.success("Dev cadastrado com sucesso!");
      getDevs();
      form.reset();
    } catch {
      toast.error("Erro ao cadastrar dev.");
    }
  };

  return (
    <section className="flex flex-col">
      <form ref={ref} onSubmit={handleSubmit} className="flex flex-col gap-4">
        <span>Nome</span>
        <input name="nome" type="text" required />

        <span>Sexo (M/F)</span>
        <input name="sexo" type="text" required />

        <span>Data de nascimento</span>
        <input name="data_nascimento" type="date" required />

        <span>Idade</span>
        <input name="idade" type="number" required />

        <span>Hobby</span>
        <input name="hobby" type="text" required />

        <span>Nível</span>
        <select name="nivel" required>
          <option value="">Selecione o nível do Dev</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <button type="submit" className="bg-green-500 p-4 text-white rounded">Salvar</button>
      </form>
      <ToastContainer />
    </section>
  );
};

DevForm.propTypes = {
  getDevs: PropTypes.func.isRequired,
};

export default DevForm;