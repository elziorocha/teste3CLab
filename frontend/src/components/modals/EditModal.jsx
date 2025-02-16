import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Modal from "../modals/Modal";
import axios from "axios";

const EditModal = ({
  open,
  onClose,
  selectedDev,
  editedDev,
  handleEditChange,
  handleEditSubmit,
}) => {
  const [niveis, setNiveis] = useState([]);

  useEffect(() => {
    if (open) {
      axios
        .get("http://localhost:3000/api/nivel")
        .then((response) => {
          setNiveis(response.data);
        })
        .catch((err) => {
          console.error("Erro ao buscar níveis:", err);
        });
    }
  }, [open]);

  if (!selectedDev) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <section className="flex flex-col items-center gap-6 bg-zinc-300 px-7 py-4 rounded-lg w-3/6">
        <h3 className="font-bold text-2xl">Editar Dev: {selectedDev.nome}</h3>

        <div className="flex flex-col gap-4">
          <label value="nome" className="dev-info flex gap-2">
            Nome:
            <input
              type="text"
              id="nome"
              value={editedDev.nome}
              onChange={handleEditChange}
              className="outline-none"
            />
          </label>

          <label value="sexo" className="dev-info flex gap-2">
            Sexo:
            <input
              type="text"
              id="sexo"
              value={editedDev.sexo}
              onChange={handleEditChange}
              className="outline-none"
            />
          </label>

          <label value="idade" className="dev-info flex gap-2">
            Idade:
            <input
              type="text"
              id="idade"
              value={editedDev.idade}
              onChange={handleEditChange}
              className="outline-none"
            />
          </label>

          <label value="data_nascimento" className="dev-info flex gap-2">
            Data de Nascimento:
            <input
              type="date"
              id="data_nascimento"
              value={editedDev.data_nascimento}
              onChange={handleEditChange}
              className="outline-none"
            />
          </label>

          <label value="hobby" className="dev-info flex gap-2">
            Hobby:
            <input
              type="text"
              id="hobby"
              value={editedDev.hobby}
              onChange={handleEditChange}
              className="outline-none"
            />
          </label>

          <label value="nivel_id" className="dev-info flex gap-2 items-center">
            Nível:
            <select
              id="nivel_id"
              value={editedDev.nivel_id || ""}
              onChange={handleEditChange}
              className="bg-zinc-300 outline-none px-4 py-2 rounded-md"
            >
              <option value="" disabled>
                Selecione um nível
              </option>
              {niveis.map((nivel) => (
                <option key={nivel.id} value={nivel.id}>
                  {nivel.nome}
                </option>
              ))}
            </select>
          </label>

          <div className="flex flex-col gap-1">
            <button
              onClick={() => {
                handleEditSubmit();
                onClose();
              }}
              className="button-default bg-secondary hover:bg-primary mt-4"
            >
              Salvar Alterações
            </button>

            <button
              onClick={onClose}
              className="button-default bg-secondary hover:bg-primary mt-2"
            >
              Fechar
            </button>
          </div>
        </div>
      </section>
    </Modal>
  );
};

EditModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  selectedDev: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nome: PropTypes.string.isRequired,
    sexo: PropTypes.string.isRequired,
    idade: PropTypes.number.isRequired,
    data_nascimento: PropTypes.string.isRequired,
    hobby: PropTypes.string.isRequired,
    nivel_id: PropTypes.number.isRequired,
  }),
  editedDev: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    sexo: PropTypes.string.isRequired,
    idade: PropTypes.number.isRequired,
    data_nascimento: PropTypes.string.isRequired,
    hobby: PropTypes.string.isRequired,
    nivel_id: PropTypes.number.isRequired,
  }).isRequired,
  handleEditChange: PropTypes.func.isRequired,
  handleEditSubmit: PropTypes.func.isRequired,
};

export default EditModal;
