import "./App.css";
import Footer from "./components/footer";
import Details from "./pages/details";
import Home from "./pages/home";
import Favorites from "./pages/favorites";
import { BrowserRouter, Route, Routes } from "react-router";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Details/:id" element={<Details />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App;
