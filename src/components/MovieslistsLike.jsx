import PropTypes from "prop-types";

function MovieslistsLike({movie}) {
  return (
    <div className="movie-card" style={{cursor: 'pointer'}}>
      <div className="movie-card-image">
        <img src={
          movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'fallback_image_url'} alt={movie.original_title} />
        <div className="movie-card-rating">
          <span>⭐ {movie.vote_average?.toFixed(1)}</span>
        </div>
      </div>
      <div className="movie-card-info">
        <p className="movie-card-title">{movie.original_title}</p>
        <div className="movie-card-meta">
          <span className="movie-card-date">{movie.release_date?.split('-')[0]}</span>
          <span className="movie-card-votes">♥ {movie.vote_count}</span>
        </div>
      </div>
    </div>
  );
}

MovieslistsLike.propTypes = {
  movie: PropTypes.object.isRequired,
  index: PropTypes.number
};

export default MovieslistsLike;