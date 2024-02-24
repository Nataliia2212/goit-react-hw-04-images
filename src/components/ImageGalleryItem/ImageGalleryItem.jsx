import React from 'react';
import css from './ImageGalleryItem.module.css'

export default function ImageGalleryItem({webformatURL, largeImageURL, tags, openModal }) {
    return (
        <li className={css.ImageGalleryItem} onClick={()=> openModal({largeImageURL, tags})}>
            <img className={css.ImageGalleryItemImage} src={webformatURL} alt={tags} />
        </li>
  )
}
