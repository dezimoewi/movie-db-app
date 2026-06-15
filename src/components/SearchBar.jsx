import React, { useState } from "react";
import { useNavigate } from "react-router";
import MovieModal from "./MovieModal"; // Import the MovieModal component

export default function Search() {
  const API_KEY = "7e6a1ec889d282a86311b6babd0a9b70";
  const BASE_MOVIE_URL = "https://api.themoviedb.org/3";
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const navigate = useNavigate();

  // Handle search input change
  const handleQuery = (event) => {
    setQuery(event.target.value);
  };

  // Perform movie search when the button is clicked
  const handleSearchMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${BASE_MOVIE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
      );

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      setSearchedMovie(data.results); // Set the fetched movie data
      setError(null);
      setIsModalOpen(true); // Open the modal after search results are fetched
    } catch (error) {
      console.error("Search failed:", error);
      setSearchedMovie([]);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <>
      <div className="search-bar" style={{ gap: "5px", alignItems: "center" }}>
        <div id="input">
          <input
            onChange={handleQuery}
            value={query}
            id="amount-input"
            placeholder="Search Movies, Series..."
          />
          <button className="search-button" onClick={handleSearchMovies}>
            Search
          </button>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
      </div>

      {/* Modal to show search results */}
      <MovieModal
        isOpen={isModalOpen} // If the modal is open
        closeModal={closeModal} // Pass the close function
        movies={searchedMovie} // Pass the movie data
      />
    </>
  );
}
