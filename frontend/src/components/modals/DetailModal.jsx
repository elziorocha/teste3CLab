import PropTypes from "prop-types";
import Modal from "../modals/Modal";

const DetailModal = ({ open, onClose, selectedDev }) => {
  if (!selectedDev) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <section className="flex flex-col items-center gap-6 bg-zinc-300 px-7 py-4 rounded-lg w-3/6">
        <div className="flex flex-col gap-8 items-center justify-center">
          <h3 className="font-bold text-2xl">
            Detalhes do Dev: {selectedDev.nome}
          </h3>

          <div className="flex gap-4">
            <p className="dev-info">ID: {selectedDev.id}</p>
            <p className="dev-info">Nome: {selectedDev.nome}</p>
            <p className="dev-info">Sexo: {selectedDev.sexo}</p>
          </div>

          <div className="flex gap-4">
            <p className="dev-info">Idade: {selectedDev.idade}</p>
            <p className="dev-info">
              Data de Nascimento:{" "}
              {
                new Date(selectedDev.data_nascimento)
                  .toISOString()
                  .split("T")[0]
              }
            </p>
            <p className="dev-info">Hobby: {selectedDev.hobby}</p>
          </div>

          <p className="dev-info">Nível: {selectedDev.nivel.nome}</p>

          <button
            className="button-default bg-secondary hover:bg-primary self-end mt-16"
            onClick={onClose}
          >
            Fechar
          </button>
        </div>
      </section>
    </Modal>
  );
};

DetailModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  selectedDev: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nome: PropTypes.string.isRequired,
    sexo: PropTypes.string.isRequired,
    idade: PropTypes.number.isRequired,
    data_nascimento: PropTypes.string.isRequired,
    hobby: PropTypes.string.isRequired,
    nivel: PropTypes.shape({
      nome: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

export default DetailModal;
