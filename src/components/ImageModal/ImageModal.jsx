import React from 'react';
import Modal from 'react-modal';

// Modal.setAppElement('#root');
import css from'./ImageModal.module.css';

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal isOpen={!!image} onRequestClose={onClose} className="modal">
      <img src={image.urls.regular} alt={image.alt_description} />
      <p>{image.alt_description}</p>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default ImageModal;
