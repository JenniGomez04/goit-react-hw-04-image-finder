import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGallery/ImageGallery';
import { Li } from './ImageGallery.styled';

function ImageGallery({ images, onImageClick }) {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      onImageClick(selectedImage);
    }
  }, [selectedImage, onImageClick]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <ul className="gallery">
      {images && images.map((image) => (
        <Li className="gallery-item" key={image.id}>
          <ImageGalleryItem image={image} onImageClick={handleImageClick} />
        </Li>
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
