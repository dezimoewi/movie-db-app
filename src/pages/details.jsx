import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useMovies } from "../context/MovieContext";
import NavBar from "../components/navbar";
import MovieslistsLike from "../components/MovieslistsLike";
import Button from "../components/button";

export default function Details() {
  const location = useLocation();
  const { id } = useParams();

  // Keep current behavior: if location.state?.movie exists, use it immediately.
  const locationStateMovie = location?.state?.movie;

  const [movieData, setMovieData] = useState(locationStateMovie || null);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [cast, setCast] = useState([]);

  const [loading, setLoading] = useState(!locationStateMovie);
  const [error, setError] = useState(null);

  const {
    fetchSimilarMovies,
    fetchMovieCredits,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  } = useMovies();

  // Fallback fetch on hard refresh / direct navigation.
  useEffect(() => {
    if (!id) return;

    // If we already have the movie from router state, don't fetch.
    if (locationStateMovie) return;

    let isMounted = true;

    const fetchMovieById = async () => {
      setLoading(true);
      setError(null);

      try {
        const endpoint = `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
        const res = await fetch(endpoint);
        if (!res.ok) {
          throw new Error(`Failed to fetch movie (HTTP ${res.status})`);
        }
        const data = await res.json();
        if (isMounted) setMovieData(data);
      } catch (err) {
        if (isMounted) setError(err?.message || "Failed to load movie details");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchMovieById();

    return () => {
      isMounted = false;
    };
  }, [id, locationStateMovie]);

  // Fetch similar movies and credits when we have movieData
  useEffect(() => {
    if (!movieData) return;

    fetchSimilarMovies(movieData.id).then((data) => setSimilarMovies(data || []));
    fetchMovieCredits(movieData.id).then((data) => setCast((data || []).slice(0, 6)));
  }, [movieData, fetchSimilarMovies, fetchMovieCredits]);

  const favorited = movieData ? isFavorite(movieData.id) : false;

  return (
    <>

      <div
        className="hero-section"
        style={{
          backgroundImage: movieData ? `url(https://image.tmdb.org/t/p/original${movieData.backdrop_path || movieData.poster_path})` : "none",
          width: "100%",
          minHeight: "70vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <NavBar />

        <div className="details-hero-content">
          {loading ? (
            <div style={{ padding: 40, color: "#fff" }}>Loading movie details…</div>
          ) : error ? (
            <div style={{ padding: 40, color: "#fff" }}>Error: {error}</div>
          ) : movieData ? (
            <>
              <div className="details-poster">
                <img
                  src={movieData.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : 'https://via.placeholder.com/300x450?text=No+Image'}
                  alt={movieData.title || movieData.name}
                />
              </div>
              <div className="details-info">
                <div className="title-movie">
                  <h1>{movieData.title || movieData.name}</h1>
                </div>
                <div className="hero-text-details">
                  <button className="btn">CBFC:U/A</button>
                  <p>⭐ {movieData.vote_average?.toFixed(1)}</p>
                  <p>{movieData.release_date}</p>
                  <p>♥ {movieData.vote_count} likes</p>
                </div>

                <div className="details-button">
                  <Button />
                  <button
                    className={favorited ? "bookmark-btn active" : "bookmark-btn"}
                    onClick={() =>
                      favorited ? removeFromFavorites(movieData.id) : addToFavorites(movieData)
                    }
                  >
                    {favorited ? "★ Remove from Favorites" : "☆ Add to Favorites"}
                  </button>
                </div>

                <div className="details-text">
                  <p className="over">{movieData.overview}</p>
                </div>
              </div>
            </>
          ) : (
            <div style={{ padding: 40, color: "#fff" }}>No movie data available</div>
          )}
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


