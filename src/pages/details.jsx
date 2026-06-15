import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { useMovies } from "../context/MovieContext";
import NavBar from "../components/navbar";
import MovieslistsLike from "../components/MovieslistsLike";
import Button from "../components/button";

export default function Details() {
  const location = useLocation();
  const { movie } = location.state || {};
  const [similarMovies, setSimilarMovies] = useState([]);
  const [cast, setCast] = useState([]);
  const { fetchSimilarMovies, fetchMovieCredits, addToFavorites, removeFromFavorites, isFavorite } = useMovies();

  useEffect(() => {
    if (movie) {
      fetchSimilarMovies(movie.id).then((data) => setSimilarMovies(data));
      fetchMovieCredits(movie.id).then((data) => setCast(data.slice(0, 6)));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie]);

  if (!movie) {
    return <div style={{ textAlign: "center", padding: "50px" }}>No movie data available</div>;
  }

  const favorited = isFavorite(movie.id);

  return (
    <>
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path})`,
          width: "100%",
          minHeight: "70vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <NavBar />

        <div className="details-hero-content">
          <div className="details-poster">
            <img
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/300x450?text=No+Image'}
              alt={movie.title || movie.name}
            />
          </div>
          <div className="details-info">
            <div className="title-movie">
              <h1>{movie.title || movie.name}</h1>
            </div>
            <div className="hero-text-details">
              <button className="btn">CBFC:U/A</button>
              <p>⭐ {movie.vote_average?.toFixed(1)}</p>
              <p>{movie.release_date}</p>
              <p>♥ {movie.vote_count} likes</p>
            </div>

            <div className="details-button">
              <Button />
              <button
                className={favorited ? "bookmark-btn active" : "bookmark-btn"}
                onClick={() =>
                  favorited ? removeFromFavorites(movie.id) : addToFavorites(movie)
                }
              >
                {favorited ? "★ Remove from Favorites" : "☆ Add to Favorites"}
              </button>
            </div>

            <div className="details-text">
              <p className="over">{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-wrapper">
        <h2>Top Cast</h2>
        <div className="cast-grid">
          {cast.map((actor) => (
            <div className="image-wrap" key={actor.id}>
              <div className="image-wrapper">
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                      : "https://via.placeholder.com/60x60?text=No+Image"
                  }
                  alt={actor.name}
                />
              </div>
              <div className="text-wrap">
                <h3>{actor.name}</h3>
                <p>{actor.character}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="more-like">
        <h1>More Like This</h1>
        <div className="rep">
          {similarMovies.map((similarMovie) => (
            <div className="more-movies" key={similarMovie.id}>
              <MovieslistsLike movie={similarMovie} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}


