import PropTypes from "prop-types";

export default function Modal({ open, children }) {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors
        ${open ? "visible bg-black/50" : "invisible"}`}
    >
      {children}
    </div>
  );
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
