import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import {fetchMovieDetails , fetchById}from "../context/moviesDetails";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Movieslists from "../components/MovieslistsLike";
import fetchMovieLike from "../context/similarlike";


export default function Details() {
  const location = useLocation();
  const { movie } = location.state || {};
  const [movieDetails, setMovieDetails] = useState(null);
  const [like, setLike] = useState([])
  const getFavorit = localStorage.getItem('movieId')

console.log({getFavorit});

  useEffect(() => {
    if (movie) {
      fetchMovieDetails(movie.id).then((data) => setMovieDetails(data));
    }
  }, [movie]);

  console.log({movieDetails});
  

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
      <div className="hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(58, 64, 66, 0.5), rgba(47, 54, 56, 0.5)), url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
          width: "100%",
          height: "50vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          textAlign:'center',
        }}
      >
        <NavBar />
        <div className="hero-infos">
        <h1>{movie.title}</h1>
        {/* <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "fallback_image_url"
          }
          alt={movie.original_title}
        /> */}
        {/* <div className="sp">
          <button className="btn">CBFC:U/A</button>
          <p>Action . Adventure . 2h28m</p>
        </div> */}
        <p className="over">{movie.overview}</p>
        <div className="s">
          <button className="btnone">
            <img src="\src\assets\Group.png" alt="" />
            Watch Now
          </button>
          <button className="btntwo">Add Watchlist</button>
        </div>

        {movieDetails && <div></div>}</div>
      </div>

  <div className="more-like">
        <h1>More Likes</h1>
          <div className="rep">
          {like.map((movie) => (
            <div className="more-movies" key={movie.id}  >
              <Movieslists movie={movie}  />
            </div>
          ))}
          </div>
          </div>
      <Footer />
    </>
  );
}
