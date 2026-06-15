import Button from "../components/button";
import NavBar from "../components/navbar";
import Movieslists from "../components/Movies";
import MoviesRelease from "../components/MoviesRelease";
import RomanceMovies from "../components/RomanceMovies";
import Comedy from "../components/Comedy";
import Pagination from "../components/Pagination";
import { useMovies } from "../context/MovieContext";
import { useNavigate } from "react-router";

function Home() {
  const {
    trendingMovies,
    actionMovies,
    romanceMovies,
    comedyMovies,
    loading,
    error,
  } = useMovies();

  const navigate = useNavigate();

  const handleMovieClick = (movie) => {
    navigate(`/Details/${movie.id}`, { state: { movie } });
  };

  if (loading && trendingMovies.length === 0) {
    return (
      <div className="loading-screen">
        <NavBar />
        <p style={{ textAlign: "center", padding: "50px" }}>Loading movies...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-screen">
        <NavBar />
        <p style={{ textAlign: "center", padding: "50px", color: "red" }}>
          Error: {error}
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="header-container">
        <NavBar />
        <div className="hero-content">
          <div className="hero-image">
            <h1 className="hero-title">STREAM<span style={{ color: "#ff0000" }}>X</span></h1>
          </div>

          <div className="hero-text">
            <button className="btn">CBFC:U/A</button>
            <p>Action .</p>
            <p>Adventures .</p>
            <p>2h 28m</p>
          </div>

          <div className="hero-paragraph">
            <p>
              When a spell goes wrong, dangerous foes from other worlds start to
              appear, forcing Peter to discover what it truly means to be
              Spider-Man
            </p>
          </div>
        </div>

        <Button />

        <div className="Latest">
          <h2>Latest &amp; Trending</h2>
          <div className="movies">
            {trendingMovies.map((movie, index) => (
              <div
                className="latest-movies"
                key={movie.id}
                onClick={() => handleMovieClick(movie)}
              >
                <Movieslists movie={movie} index={index + 1} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="action">
        <h2>Action</h2>
        <div className="movies">
          {actionMovies.map((movie) => (
            <div
              className="action-movies"
              key={movie.id}
              onClick={() => handleMovieClick(movie)}
            >
              <MoviesRelease movie={movie} />
            </div>
          ))}
        </div>
      </div>

      <div className="romance">
        <h2>Romance &amp; Drama</h2>
        <div className="movies">
          {romanceMovies.map((movie) => (
            <div
              className="romance-movies"
              key={movie.id}
              onClick={() => handleMovieClick(movie)}
            >
              <RomanceMovies movie={movie} />
            </div>
          ))}
        </div>
      </div>

      <div className="comedy">
        <h2>Comedy</h2>
        <div className="movies">
          {comedyMovies.map((movie) => (
            <div
              className="comedy-movies"
              key={movie.id}
              onClick={() => handleMovieClick(movie)}
            >
              <Comedy movie={movie} />
            </div>
          ))}
        </div>
      </div>

      <Pagination />
    </>
  );
}

export default Home;
