import React from 'react';
import styles from './ImageGalleryItem.module.css';



export default function ImageGalleryItem({picture, onClickOpenModal}) {
  return(
    
    <li className={styles.imageItem} key={picture.id} onClick={() => onClickOpenModal(picture)}>
      <img src={picture.webformatURL} alt="pic" className={styles['imageItem-picture']}/>
    </li>
  );
}