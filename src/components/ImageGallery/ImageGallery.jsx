import React from 'react'
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css'

export default function ImageGallery({galleryList, openModal}) {
  return (
    <ul className={css.ImageGallery}>
          {galleryList.map( galleryItem => (<ImageGalleryItem key={galleryItem.id} {...galleryItem} openModal={openModal} />))}
    </ul>
  )
}
