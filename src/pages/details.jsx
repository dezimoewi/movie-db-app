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

      <div class="content-wrapper">
        <h2>Top Cast</h2>
      
          <div class="image-wrap">
            <div class="image-wrapper">
              <img
                src="https://s3-alpha-sig.figma.com/img/27fe/f004/d5061280211badb97d6c6538b9c51ab7?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=he--f557q8-5bMCTnYQd3n3zgHVklVcjM98g6t1W2yTJU7slnHvuXWWuzCwlnj-7AMVUQ7B5hAYgiqvUTpB~1eD0Ta7SygITHL627Z9Na0AoHXPn71KhmiowGg2WKwJNXe9O6E6nkerpGwrevDtlCRWmtoNUN7b00Qbuftf55IMgjFbxZbZ5hsEHW4Uq-Jo26L96Fj0UMoKeS0Tsg7jIwrk6i8qMqe-e-MAZOQ9Z3BFoyLe0-UFec~3spDfEoOuJgSDNbpREddfhZZLYW3g9gAi7iwcBuqiREUyisQhsoNPgAszFYeYpmdAtRkxwHzhU9RItEMZHg0XpufxxLgJK9w__"
                alt="jerica"
              />
            </div>
            <div class="text-wrap">
              <h3>Pedro Pascal</h3>
              <p>Joel miller</p>
            </div>
          </div>
          <div class="image-wrap">
            <div class="image-wrapper">
              <img
                src="https://s3-alpha-sig.figma.com/img/00eb/30a4/9dfa1512fc80a2cfae839fc611904bae?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rQyV5Vs8hAF0MLNtSQMhpsinoKODl98oHqaqLA~YEmjPbeej6~agibyI4KQp2ffTQKD96ZUlE9AORmVTxAqj7ti4~7oH9rB8beCbrpQmeE92vQavtwYuMpNjv7bk6BQ~7SKsElzxt~M8QBzgRzdRfuW9cyJBd5W0CZ1xSuimDxqwwZ9zN-k1GL9bdzSzpgQ7YOiUCpkbFKxuLUXz69M33TyaCgyZxPMwiPGdEV~HPXXNrctYqGZRQKWz1f-pt~Iibp7i07HQ1cX4oWOh1CaVuMW-jZyqPa6z2~Qrbg1SlPVHj8BJW8YKNtCxE0w32uU58q8EtlFuxsUCykdWzNVpJg__"
                alt="jerica"
              />
            </div>
            <div class="text-wrap">
              <h3>Bella Ramsey</h3>
              <p>Joel miller</p>
            </div>
          </div>
          <div class="image-wrap">
            <div class="image-wrapper">
              <img
                src="https://s3-alpha-sig.figma.com/img/672d/ac66/38cbf29a4140899b7322b7f2a8749fa5?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aDPVkFI4lMR~dly5spIFtEbBv0uWTjyX2xMN6Wv-M1GrEitQhgqjIIkbWCUlhnbdKWd9C5ORwt6Vy~uecGZD9pcyB5Kl3qLhcsDQYcB7wM~3eDD0nmh0ptX4yrbMYRehB1mB-wWvO~Qp3Tdz4uSWSZmoZyGDGpAYz91lx39qqhxELWLyCfDKkeBDE0i5YoCtMpYvFZmW~JbSDv3rQslkifqY5zjakH6I~Y2TwxpJ52FPAcJykRS7mDNZNBl~TMD-AaF13MhpYB8DE7s0UOofwysAySyk17pc97s-ik7Fz3CKUy0t6UQPrPSIuc68A2yXsuan86FmayVwlJLtiDIsQg__"
                alt="christopher"
              />
            </div>
            <div class="text-wrap">
              <h3>Anna Torv</h3>
              <p>Joel miller</p>
            </div>
          </div>
          <div class="image-wrap">
            <div class="image-wrapper">
              <img
                src="https://s3-alpha-sig.figma.com/img/01bb/376a/c7fb5ba7048d740c94fbff8ada7e13f3?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cJkYmzxbXFJYTEJuspFP55H3-xeoBKrwkUYAp-sqGJdEkG1r7~RUAQL2h6Zq7gzVifsO4KjBm4~kA5TxGCEG2xZrIeo2qPvSjcO-346MxbUpqeTBFr4CcFIxUgegKZank6OoKLCuhFMMCdBx81AoZOv9dS5m0ZImOW-qqLSMH2yilPyRYARD2E1OBndv~TYTNAQt8RCbWvid78UFuylMbVsR-IyC-mu6ZdtfEOEDbai05h0rifZaVsBf0fXBtRqb9bTre-LgNe9Trc0y6WVO5h64Or3tk7Bi66ydTxd6MTYaSWRLBAAR9K1yGkadqtjhnURj-5oAJBrwdpXVu84YaA__"
                alt="micheal"
              />
            </div>
            <div class="text-wrap">
              <h3>Ashley Johnson</h3>
              <p>Joel miller</p>
            </div>
          </div>
          <div class="image-wrap">
            <div class="image-wrapper">
              <img
                src="https://s3-alpha-sig.figma.com/img/b4b6/6ffc/ead735e8e96a8f7efd1af3bf6b91b9d9?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gmTXBbAncNXf4KdJaXTQKoRVQBzcnZNee0qqycY1PcCPS0W~xJ-THvcWheSUGDZyMKrbXE4jkNKAf7U~iBQeFTsIih5Dmrt4K9iUDo16krtW2I2uBU8ZcTmsOSMwCG99dJf7isCSuYXGMaFVLlQSLGuMNB1bC3Qdz8y~N6o5ICWLm6rNPwodRqOuPsg4DbkAbrODDOaiB1ozZaFBnhondhxV36r32Qb7uxKfP9eaVfFLfcZfrKt0zTkSwXmFBUinfTFWLtnNQxUge9CFC1Tu6U6RBNqYUF6BiGXAJBzZ5~ToF6fDPZNTWRdPsWpEicrUo-IHmYgcups3ksscBDzm0A__"
                alt="rachel"
              />
            </div>
            <div class="text-wrap">
              <h3>Nicko Paker</h3>
              <p>Joel miller</p>
            </div>
          </div>
          <div class="image-wrap">
            <div class="image-wrapper">
              <img
                src="https://s3-alpha-sig.figma.com/img/c120/3050/f6c03eea8ac485a7c1dabebb46f0c081?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LgOV9a8-N8eKn0Y~oILtsCvwIPkmDgHSABFlitMggAtuP1z4aLhmZN3ZN31xdJSDxs81K~soWzneqMgogsefD1kJ6~dpeDxmOJ4oosJsqwEiqZOAXZQvRyMA1GR7ksn2ckptTi0ucRvGCuLueH60BdHr0gE0CieCK-0pqZI7yvA8142jv8csmQD9exggJby1ZhM8~sfcccJHrotsKs4ciiaLhuRkZNTilYZfrcWvnSidDpGnfHZFW548qG-TYcvEcY9SFFliN6tmuUZ3uLY9UnPE4fpedueWIFdnJGeMzGAjCHYC4e4uB2mj9EdcxMOujphCTzzQKvnnoiAarGBBhA__"
                alt="jerica"
              />
            </div>
            <div class="text-wrap">
              <h3>Nick Offerman</h3>
              <p>Joel miller</p>
            </div>
          </div>
        
      </div>

      {/* <div top-cast>
        <h1>Top Cast</h1>
        <div top-cast-img>
             {Cast.map((movie) =>(
              <div className="cast-img" key={movie.poster_path}>
                <MoviesList movie={movie} />
              </div>
             ))}
        </div>
      </div> */}

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
