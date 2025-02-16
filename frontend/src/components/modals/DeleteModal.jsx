import PropTypes from "prop-types";
import Modal from "../modals/Modal";
import { FaTrash } from "react-icons/fa";

const DeleteModal = ({ open, onClose, handleDelete, devId }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <section className="flex flex-col items-center gap-6 bg-zinc-300 px-7 py-4 rounded-lg">
        <div className="flex gap-4 items-center">
          <h3 className="font-bold text-xl">Você tem certeza?</h3>
          <FaTrash className="text-red-600 size-8" />
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => handleDelete(devId)}
            className="button-default bg-red-700 hover:bg-red-800"
          >
            Sim
          </button>
          <button
            onClick={onClose}
            className="button-default bg-secondary hover:bg-primary"
          >
            Não
          </button>
        </div>
      </section>
    </Modal>
  );
};

DeleteModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  devId: PropTypes.number.isRequired,
};

export default DeleteModal;