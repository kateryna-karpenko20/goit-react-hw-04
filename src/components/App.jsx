import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar/SearchBar';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import Loader from '../components/Loader/Loader';
import LoadMoreBtn from '../components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import ImageModal from '../components/ImageModal/ImageModal';
import toast, { Toaster } from 'react-hot-toast';

const API_KEY = "GvDk5zEt2K4cAwRfAwreNdhEGjpZY-q-35qg-qJsz5U";
const API_URL = "https://api.unsplash.com/search/photos";

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [modalImage, setModalImage] = useState(null);

  const fetchImages = async (newQuery, page = 1) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(API_URL, {
        params: {
          query: newQuery,
          page: page,
          per_page: 12,
        },
        headers: {
          Authorization: `Client-ID ${API_KEY}`,
        },
      });

      if (response.data.results.length === 0) {
        setError("No results found for this search.");
      } else {
        if (page === 1) {
          setImages(response.data.results);
        } else {
          setImages((prev) => [...prev, ...response.data.results]);
        }
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (newQuery) => {
    if (!newQuery.trim()) {
      toast.error("Please enter a search word!");
      return;
    }
    setQuery(newQuery);
    setPage(1);
    fetchImages(newQuery);
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchImages(query, nextPage);
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div>
      <Toaster />
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {loading && <Loader />}
      {!loading && images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
      {modalImage && (
        <ImageModal image={modalImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
