import { useState } from 'react';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar'
import ImageGallery from './components/ImageGallery/ImageGallery';

export default function App() {
  const [picture, setPicture] = useState('');
  

  const formSubmitHandler = pictureName => {
    if(picture.trim ===''){
      alert('Введите название изображения')
      return;
    }
    setPicture (pictureName.toLowerCase());
  }


  return (
  <div>
      <Searchbar
        onSubmit={formSubmitHandler}
      /> 
      <ImageGallery 
        searchRequest = {picture}
        >
      </ImageGallery> 
  </div>
  );
}

