

function NavBar() {
    return(
        <>
         <section className="container">
          <div className="box">
            <div className="logo">
              <h1>STREAM<span>X</span></h1>
            </div>
            <div className="navigation">
              <a href="/"><li>Home</li></a>
              <a href="/Details/:id"><li>Movies</li></a>
              <a href="/Details/:id"><li>Series</li></a>
              <a href="/Details/:id"><li>Trending</li></a>
              <a href="/Details/:id"><li>Categories</li></a>
            </div>
          </div>
  
          <div className="search-bar">
          <div id="input">
            <input id="amount-input" placeholder="Search Movies, Series..." />
            {/* <img src="" alt="" /> */}
          </div>
          <img src="https://s3-alpha-sig.figma.com/img/44dd/d9c1/4b2cc5cc64806068acfe1df770c58553?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mHbmX5vFWndAU20EbDmmTKGadypD5kVfNYmFor47Ra3YnoxK472ILpQ-ibBVjRJ~MwQ1YrsPZCYuTZnkM3MF8AtzIiO91qVBnWk4u9ky4~e74TnjL8jOcbFKbcLUlIQkoh-KOx5A9zGmxDHqH8~qG4JoORJImskNE1NifIO9zLufc1u6vYb3R6xAGomSOnwJdj7ZKuURbpQUfef2wWCcyuOSsjw1Dfg~AFQiHIodHReTLUshCrMvJ5~wukHas-RReQPZkJvDCUfB8yCq342eUpdYq1LhZHxmOBTXu5cz6Kc7HU9lU7LCQnhuLZNfTLH0zcSnhfAZ9Z3kVHrLIDPVKw__" alt="" />
          </div>
        </section>
        </>
    )
}

export default NavBar