import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className="image-gallery">
      {images.map((img) => (
        <ImageCard
          key={img.id}
          image={img}
          onClick={() => onImageClick(img)}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
