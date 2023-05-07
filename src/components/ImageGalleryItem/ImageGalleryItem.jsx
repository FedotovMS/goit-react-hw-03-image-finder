import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = item => {
  // console.log(item.id);
  return (
    <li className={css.imageGalleryItem} key={item.id}>
      <img
        className={css.ImageGalleryItemImage}
        src={item.image}
        alt={item.tags}
      />
    </li>
  );
};

export default ImageGalleryItem;
