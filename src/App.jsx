import "./App.css";
import Footer from "./components/footer";
import Details from "./pages/details";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Details/:id" element={<Details />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
