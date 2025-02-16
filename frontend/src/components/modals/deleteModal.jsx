import PropTypes from "prop-types";

export default function DeleteModal({ open, onClose, children }) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors
        ${open ? "visible bg-black/50" : "invisible"}`}
    >
      {children}
    </div>
  );
}

DeleteModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
