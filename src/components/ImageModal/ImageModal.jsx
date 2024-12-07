import React, { useEffect } from "react";
import PropTypes from "prop-types";
import css from "./ImageModal.module.css";

const ImageModal = ({ image, onClose }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose(); // Закриває модальне вікно при натисканні Escape
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // Закриває модальне вікно при кліку на фон
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown); 
    return () => {
      document.removeEventListener("keydown", handleKeyDown); 
    };
  }, []);

  return (
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <img src={image.urls.regular} alt={image.alt_description || "Image"} />
      </div>
    </div>
  );
};

ImageModal.propTypes = {
  image: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired, 
};

export default ImageModal;
