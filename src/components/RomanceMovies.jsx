import PropTypes from "prop-types";

function RomanceMovies({movie}  ) {
  return (
    <div className="three" style={{cursor: 'pointer'}}>

        {/* <h2>{movie.original_title}</h2> */}
      <img src={
        movie.poster_path
        ?`https://image.tmdb.org/t/p/w500${movie.poster_path}`: 'fallback_image_url'} alt={movie.original_title} />
        <p className="title-paragraph">{movie.original_title}</p>
    </div>
  );
}

RomanceMovies.propTypes = {
  movie: PropTypes.object.isRequired,
  index: PropTypes.number
};

export default RomanceMovies;