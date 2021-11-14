import {useState, useEffect} from 'react';
import style from './ImageGallery.module.css';
import './Loader.css';
import pictureApi from '../pictureApi';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import Loader from "react-loader-spinner";
import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    overflow: 'hidden',
  },
};

export default function ImageGallery({searchRequest}) {
  const [pictures, setPictures] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [picture, setPicture] = useState(null);


  const onClickLoadMore = event => {
    setCurrentPage(currentPage + 1);    
  }

  const onClickOpenModal = picture => {
    setModal(true);
    setPicture(picture);
  }

  const winScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    if (searchRequest === ''){
      return;
    } else {
      setPictures([]);
      setCurrentPage(1);
      setLoading(true);

      pictureApi(1, searchRequest)
        .then(
          data => {
            setPictures([
              ...data.hits.map(
                ({id, webformatURL,largeImageURL}) => ({id, webformatURL,largeImageURL})
              )
            ]);
            winScroll();
          }
        )
        .finally(() => setLoading(false))}
  }, [searchRequest]);


  useEffect(() => {
    if (searchRequest === ''){
      return;
    }
    setLoading(true);
    
    pictureApi(currentPage, searchRequest)
      .then(
        data => { setPictures([
          ...pictures,
          ...data.hits.map(
            ({id, webformatURL,largeImageURL}) => ({id, webformatURL,largeImageURL})
          )
        ])
        winScroll();
      })
      
      .finally(() => setLoading(false))
    }, [currentPage]
  );

  return(
    <div>
      <ul className={style.imageGallery}>{
        pictures.map(picture=>
          <ImageGalleryItem
            picture={picture}
            onClickOpenModal={onClickOpenModal}
            key={picture.id}
          />
        )}
      </ul>
      
      {pictures.length >= 12 &&
        <Button 
          onClickLoadMore={onClickLoadMore} 
        /> 
      }

      {loading && 
        <Loader className={style.imgLoader}
          type="Grid" color="#00BFFF" height={80} width={80}
        /> 
      }

      {picture &&
        <Modal
          preventScroll={true}
          isOpen={modal}
          onRequestClose={() => {
            setModal(false);
            setPicture(null);}}
          style={customStyles}>
            <img src={picture.largeImageURL} alt="Error" className="imgModal"></img>
        </Modal>
      }
    </div>
  );
}
