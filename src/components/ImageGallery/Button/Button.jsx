import React from 'react';
import './Button.module.css';

export default function Button({onClickLoadMore}) {
  return ( 
    <button type="button" className="Loadmore-button" onClick={onClickLoadMore}> 
      <span className="SearchForm-button-label">Load more</span>
    </button> 
)}



      