import React from 'react';
import css from "./LoadMoreBtn.module.css"

const LoadMoreBtn = ({ onClick }) => (
  <button className="load-more-btn" onClick={onClick}>
    Load more
  </button>
);

export default LoadMoreBtn;
