import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar/SearchBar';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import Loader from '../components/Loader/Loader';
import LoadMoreBtn from '../components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import ImageModal from '../components/ImageModal/ImageModal';
import toast, { Toaster } from 'react-hot-toast';


const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchImages = async (newQuery = query, newPage = 1) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${newQuery}&page=${newPage}&client_id=GvDk5zEt2K4cAwRfAwreNdhEGjpZY-q-35qg-qJsz5U`
      );
      const data = await response.json();
      if (newPage === 1) setImages(data.results);
      else setImages((prev) => [...prev, ...data.results]);
      setPage(newPage);
    } catch (err) {
      setError('Failed to fetch images. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    fetchImages(newQuery);
  };

  const handleLoadMore = () => {
    fetchImages(query, page + 1);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={setSelectedImage} />
      {loading && <Loader />}
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default App;
