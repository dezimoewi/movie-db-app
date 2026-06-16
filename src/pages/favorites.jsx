import NavBar from "../components/navbar";
import { useMovies } from "../context/MovieContext";
import { useNavigate } from "react-router";

function Favorites() {
  const { favorites, removeFromFavorites } = useMovies();
  const navigate = useNavigate();

  const handleMovieClick = (movie) => {
    navigate(`/Details/${movie.id}`, { state: { movie } });
  };

  return (
    <>
      <NavBar />
      <div className="favorites-page">
        <h1>My Favorites</h1>
        {favorites.length === 0 ? (
          <p className="no-favorites">No favorite movies yet. Browse movies and add some!</p>
        ) : (
          <div className="favorites-grid">
            {favorites.map((movie) => (
              <div className="favorite-card" key={movie.id}>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : "https://via.placeholder.com/200x300?text=No+Image"
                  }
                  alt={movie.title || movie.name}
                  onClick={() => handleMovieClick(movie)}
                />
                <div className="favorite-info">
                  <p>{movie.title || movie.name}</p>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromFavorites(movie.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Favorites;
