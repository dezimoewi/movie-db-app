import { createContext, useContext, useState, useEffect } from "react";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    fetchAllMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  async function fetchAllMovies() {
    setLoading(true);
    setError(null);
    try {
      const [trending, action, romance, comedy] = await Promise.all([
        fetchFromAPI(`/trending/all/week?page=${currentPage}`),
        fetchFromAPI(`/movie/upcoming?language=en-US&page=${currentPage}`),
        fetchFromAPI(`/discover/movie?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=popularity.desc`),
        fetchFromAPI(`/movie/upcoming?language=en-US&page=${currentPage + 5}&sort_by=popularity.desc`),
      ]);

      setTrendingMovies(trending.results || []);
      setTotalPages(trending.total_pages || 1);
      setActionMovies(action.results || []);
      setRomanceMovies(romance.results || []);
      setComedyMovies(comedy.results || []);
    } catch (err) {
      setError(err.message);
      console.error("Failed to fetch movies:", err);
    } finally {
      setLoading(false);
    }
  }

  async function fetchFromAPI(endpoint) {
    const separator = endpoint.includes("?") ? "&" : "?";
    const response = await fetch(
      `${BASE_URL}${endpoint}${separator}api_key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    return response.json();
  }

  async function searchMovies(query) {
    if (!query.trim()) return [];
    try {
      const data = await fetchFromAPI(`/search/movie?query=${encodeURIComponent(query)}`);
      return data.results || [];
    } catch (err) {
      console.error("Search failed:", err);
      return [];
    }
  }

  async function fetchSimilarMovies(movieId) {
    try {
      const data = await fetchFromAPI(`/movie/${movieId}/similar`);
      return data.results || [];
    } catch (err) {
      console.error("Failed to fetch similar movies:", err);
      return [];
    }
  }

  async function fetchMovieCredits(movieId) {
    try {
      const data = await fetchFromAPI(`/movie/${movieId}/credits`);
      return data.cast || [];
    } catch (err) {
      console.error("Failed to fetch credits:", err);
      return [];
    }
  }

  function addToFavorites(movie) {
    setFavorites((prev) => {
      if (prev.find((m) => m.id === movie.id)) return prev;
      return [...prev, movie];
    });
  }

  function removeFromFavorites(movieId) {
    setFavorites((prev) => prev.filter((m) => m.id !== movieId));
  }

  function isFavorite(movieId) {
    return favorites.some((m) => m.id === movieId);
  }

  function goToPage(page) {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  }

  return (
    <MovieContext.Provider
      value={{
        trendingMovies,
        actionMovies,
        romanceMovies,
        comedyMovies,
        favorites,
        loading,
        error,
        currentPage,
        totalPages,
        searchMovies,
        fetchSimilarMovies,
        fetchMovieCredits,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        goToPage,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export function useMovies() {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovies must be used within a MovieProvider");
  }
  return context;
}
