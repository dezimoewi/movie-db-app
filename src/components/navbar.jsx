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
            <a href="/favorites">
              <li>Favorites</li>
            </a>
            <a href="/">
              <li>Trending</li>
            </a>
          </div>
          <Search/>
        </div>
      </section>
    </>
  );
}

export default NavBar;
