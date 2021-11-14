import { useState } from 'react';
import './Searchbar.css';


export default function Searchbar (props) {
  const [inputValue, setInputValue] = useState('');
 

  const handleInputChange = (event) => {
    setInputValue(event.currentTarget.value) 
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(inputValue);
    setInputValue(event.currentTarget.value);
    event.target.reset();
  }

  return (
    <div>
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          required
          onChange={handleInputChange}
          // id={numberInputId}
          >
          </input>
        </form>
      </header>
    </div>
  );
}
