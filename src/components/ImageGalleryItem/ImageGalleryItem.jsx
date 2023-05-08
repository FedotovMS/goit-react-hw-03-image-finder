import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, image, bigImage, tags, onClick }) => {
  return (
    <li className={css.imageGalleryItem} key={id}>
      <img
        className={css.ImageGalleryItemImage}
        src={image}
        alt={tags}
        onClick={() => onClick(bigImage)}
      />
    </li>
  );
};

export default ImageGalleryItem;
