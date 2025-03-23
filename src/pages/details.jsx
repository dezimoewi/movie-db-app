import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { fetchMovieDetails, fetchById } from "../context/moviesDetails";
import NavBar from "../components/navbar";
import Movieslists from "../components/MovieslistsLike";
import fetchMovieLike from "../context/similarlike";
import Button from "../components/button";

export default function Details() {
  const location = useLocation();
  const { movie } = location.state || {};
  const [movieDetails, setMovieDetails] = useState(null);
  const [like, setLike] = useState([]);
  const getFavorit = localStorage.getItem("movieId");

  console.log({ getFavorit });

  useEffect(() => {
    if (movie) {
      fetchMovieDetails(movie.id).then((data) => setMovieDetails(data));
    }
  }, [movie]);

  console.log({ movieDetails });

  // useEffect(() => {
  //   const fetchFavorites = async () => {
  //     try {
  //       const response = await fetchById(getFavorit);
  //       console.log(response.data);

  //       // setFavorites(response.data);
  //     } catch (error) {
  //       console.error('Error fetching favorites:', error);
  //       // Handle error state if needed
  //     }
  //   };

  //   fetchFavorites();
  // }, []);

  if (!movie) {
    return <div>No movie data available</div>;
  }

  if (!movie) {
    return <div>No movie data available</div>;
  }

  useEffect(() => {
    getMovieLike();
  }, []);

  async function getMovieLike() {
    const like = await fetchMovieLike();
    console.log(like);
    setLike(like);
  }

  return (
    <>
      <div
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(58, 64, 66, 0.5), rgba(47, 54, 56, 0.5)), url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
          width: "100%",
          height: "50vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          textAlign: "center",
        }}
      >
        <NavBar />

        <div className="title-movie">
          <h1>{movie.title}</h1>
        </div>
        <div className="movie-paragraph-text">
          <div className="hero-text-details">
            <button className="btn">CBFC:U/A</button>
            <p>Drama .</p>
            <p>Adventures .</p>
            <p>2h 28m</p>
          </div>

          <div className="details-button">
            <Button />
          </div>

          <div className="details-text">
            <p className="over">{movie.overview}</p>
          </div>
        </div>
      </div>

      <div className="more-like">
        <h1>More Likes</h1>
        <div className="rep">
          {like.map((movie) => (
            <div className="more-movies" key={movie.id}>
              <Movieslists movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
