import { Star } from "lucide-react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
function NavBar() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      // const getMovieId = JSON.parse(localStorage.setItem('movieId'))

      try {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=4d0ec1d71d19ddb26c75450fa7344fb3`;
        const options = {
          method: "GET",
          headers: { accept: "application/json" },
        };

        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(`Failed to fetch movie: ${response.status}`);
        }

        const data = await response.json();
        setData(data);
        setError(null);
      } catch (error) {
        console.error("Failed to fetch movie", error);
        setError(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const toggleFavorites = () => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    const id = data?.id;
  
    console.log("ID: ", id);
    console.log("Current favorites:", favs);
  
    if (id) { 
      const prevExist = favs.find((movie) => movie.id === id);
      console.log("Does movie exist in favorites?", prevExist);
  
      if (prevExist) {
        const updatedFavs = favs.filter((movie) => movie.id !== id);
        console.log("Favorites after removal:", updatedFavs);
        saveToStorage(updatedFavs);
      } else if (data && data[0]) {
        const updatedFavs = [...favs, data[0]];
        console.log("Favorites after addition:", updatedFavs);
        saveToStorage(updatedFavs);
      }
    } else {
      console.log("Invalid ID or data format");
    }
  };
  
  const saveToStorage = (favs) => {
    localStorage.setItem("favorites", JSON.stringify(favs));
  };
  

  return (
    <>
      <section className="container" style={{ alignItems: "center" }}>
        <div className="box">
          <div className="logo">
            <h1>
              STREAM<span>X</span>
            </h1>
          </div>
          <div className="navigation">
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/Details/:id">
              <li>Movies</li>
            </a>
            <a href="/Details/:id">
              <li>Series</li>
            </a>
            <a href="/Details/:id">
              <li>Trending</li>
            </a>
            <a href="/Details/:id">
              <li>Categories</li>
            </a>
          </div>
        </div>

        <div
          className="search-bar"
          style={{ gap: "5px", alignItems: "center" }}
        >
          <div id="input">
            <input id="amount-input" placeholder="Search Movies, Series..." />
            {/* <img src="" alt="" /> */}
          </div>
          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/44dd/d9c1/4b2cc5cc64806068acfe1df770c58553?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mHbmX5vFWndAU20EbDmmTKGadypD5kVfNYmFor47Ra3YnoxK472ILpQ-ibBVjRJ~MwQ1YrsPZCYuTZnkM3MF8AtzIiO91qVBnWk4u9ky4~e74TnjL8jOcbFKbcLUlIQkoh-KOx5A9zGmxDHqH8~qG4JoORJImskNE1NifIO9zLufc1u6vYb3R6xAGomSOnwJdj7ZKuURbpQUfef2wWCcyuOSsjw1Dfg~AFQiHIodHReTLUshCrMvJ5~wukHas-RReQPZkJvDCUfB8yCq342eUpdYq1LhZHxmOBTXu5cz6Kc7HU9lU7LCQnhuLZNfTLH0zcSnhfAZ9Z3kVHrLIDPVKw__"
              alt=""
            />
          </div>
          <div>
            <Star
              // style={{ cursor: "pointer" }}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               }
              className="iconText"
              onClick={toggleFavorites}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default NavBar;
