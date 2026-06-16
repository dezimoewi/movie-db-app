import { useState } from "react";
import { useMovies } from "../context/MovieContext";
import MovieModal from "./MovieModal";

export default function Search() {
  const { searchMovies } = useMovies();
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuery = (event) => {
    setQuery(event.target.value);
  };

  const handleSearchMovies = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const results = await searchMovies(query);
      setSearchedMovie(results);
      setError(null);
      setIsModalOpen(true);
    } catch (err) {
      console.error("Search failed:", err);
      setSearchedMovie([]);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="search-bar">
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
        {loading && <p className="search-loading">Loading...</p>}
        {error && <p className="search-error">Error: {error.message}</p>}
      </div>

      <MovieModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        movies={searchedMovie}
      />
    </>
  );
}
