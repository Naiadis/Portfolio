import React from "react";

const ProcessModal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="process-modal-overlay" onClick={onClose}>
      <div className="process-modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="process-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2>{title}</h2>
        <div className="process-modal-content">{content}</div>
      </div>
    </div>
  );
};

export default ProcessModal;
