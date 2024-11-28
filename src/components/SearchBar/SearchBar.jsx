import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import toast from 'react-hot-toast';
import css from './SearchBar.module.css';


const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      toast.error('Please enter a search term!');
      return;
    }
    onSubmit(inputValue.trim());
    setInputValue('');
  };

  return (
    <header className="search-bar">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search images and photos"
            autoFocus
          />
          <button type="submit" className="search-btn">
            <FaSearch className="search-icon" />
          </button>
        </div>
      </form>
    </header>
  );
};

export default SearchBar;
