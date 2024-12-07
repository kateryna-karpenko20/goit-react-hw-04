import React from "react";
import css from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  const handleClick = () => {
    onClick(image);
  };

  return (
    <div className={css.card} onClick={handleClick}>
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description || "Image"}
      />
    </div>
  );
};

export default ImageCard;
