import Search from "./SearchBar";

function NavBar() {
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
          <Search/>
        </div>
      </section>
    </>
  );
}

export default NavBar;
