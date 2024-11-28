import React from 'react';
import css from './ImageCard.module.css';

const ImageCard = ({ image, onClick }) => {
  return (
    <li onClick={onClick}>
      <div>
        <img src={image.urls.small} alt={image.alt_description} />
      </div>
    </li>
  );
};

export default ImageCard;
