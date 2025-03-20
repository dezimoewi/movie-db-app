
import Button from '../components/button'
import NavBar from '../components/navbar'
import { useState, useEffect } from "react";
import Movieslists from "../components/Movies";
import { fetchMovie } from '../context/context';
import { fetchMovieOne } from '../context/context';
import MoviesRelease from '../components/MoviesRelease';
import RomanceMovies from '../components/RomanceMovies';
import { fetchMovieTwo } from '../context/context';
import Comedy from '../components/Comedy';
import { fetchMovieThree } from '../context/context';
import { useNavigate } from "react-router";
import Footer from '../components/footer';

function Home() {

    const [movies, setMovies] = useState([]);
    const [release, setrelease] = useState([])
    const [action, setAction] = useState([])
    const [comedy, setComedy] = useState([])
  
    const navigate = useNavigate()
  
    const handleMovieClick = (movie) => {
      navigate(`/Details/${movie.id}`, {state: {movie}})
    }
  
    useEffect(() => {
      getMovie();
    }, []);
    async function getMovie() {
      const movies = await fetchMovie();
      console.log({movies});
      setMovies(movies);
    }
  
    useEffect(() => {
      getMovieOne();
    }, []);
    async function getMovieOne() {
      const release = await fetchMovieOne();
      console.log(release);
      setrelease(release);
    }
  
    useEffect(() => {
      getMovieTwo();
    }, []);
    async function getMovieTwo() {
      const action = await fetchMovieTwo();
      console.log(action);
      setAction(action);
    }
  
    useEffect(() => {
      getMovieThree();
    }, []);
    async function getMovieThree() {
      const comedy = await fetchMovieThree();
      console.log(comedy);
      setComedy(comedy);
    }

  return (
      <>
      <NavBar />
      <div className="hero-content">
        <div className="hero-image">
          <img
            src="https://s3-alpha-sig.figma.com/img/dffb/b860/559f834e0275c009608027ccae5ee787?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XSPU13DO8hOuQnMKAXgbV0xtZMZqIR8AGJRQzHhODGf6hsLetVxauzEeSDxGVsiIJM7X2gn7b8913JyApEHMXHES8mPeKNKjfg5jFn0PdlkEzfdNIb4pyyYZYKdM4xnPqpxZdaVOs1YXZQNzDsvvPYEjh9qMzNxC-YlFLp-IZ~Ndt~PXJgg5W38-F2pTCyOnUVxiaINP1HisMs7M61fW-G6KCgpmbWuV~d44-WXVzdgvitAdykgfYhwUkrAs-i9q3ckRkgTEcdHWZKIgvlLrwKLm9pD3IqBOyqu0PND4iL2GeD2txYS7sBgZI59RLWnzLu~k0JyG71ZapkgjAe73zg__"
            alt="logo"
          />
        </div>

        <div className="hero-text">
          <button className="btn">CBFC:U/A</button>
          <p>Action .</p>
          <p>Adventures .</p>
          <p>2h 28m</p>
        </div>

        <div className="hero-paragraph">
          <p>
            When a spell goes wrong, dangerous faes from other words start to
            appear, forcing Peter to discover what it truly means to be
            Spider-Man
          </p>
        </div>
      </div>

      <Button />


      <div className="Latest">
        <h2>Latest & Trending</h2>
       <div className="movies" >
       {movies.map((movie, index) => (
          <div className='latest-movies' key={movie.id} onClick={() => handleMovieClick(movie)}>
          <Movieslists movie={movie} index={index + 1} />
        </div>
        ))}
       </div>
        </div>

        <div className="action">
          <h2>Action</h2>
        <div className="movies">
        {release.map((movie) => (
          <div className='action-movies' key={movie.id} onClick={() => handleMovieClick(movie)} >
            <MoviesRelease movie={movie}  />
          </div>
        ))}
        </div>
        </div>

        <div className="romance">
            <h2>Romance & Drama</h2>
       <div className="movies">
       {action.map((movie) => (
          <div className='romance-movies' key={movie.id} onClick={() => handleMovieClick(movie)}>
            <RomanceMovies movie={movie}  />
          </div>
        ))}
       </div>
        </div>

        <div className="comedy">
            <h2>Comedy</h2>
       <div className="movies">
       {comedy.map((movie) => (
        <div className='comedy-movies' key={movie.id} onClick={() => handleMovieClick(movie)}>
          <Comedy  movie={movie}  />
        </div>
        ))}
       </div>
        </div>
       <Footer/>
      </>
  )
}

export default Home