import React, { useState } from "react";
import PropTypes from "prop-types";
import css from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa"; 
import toast from "react-hot-toast";
const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error("Please enter a search word!");
      return;
    }
    onSubmit(query);
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.searchForm}>
        <button className={css.button} type="submit">
          <FaSearch className={css.icon} />
        </button>
        <input
          className={css.input}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search images and photos"
          />
          </div>
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
