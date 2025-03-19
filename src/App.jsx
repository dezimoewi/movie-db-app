import "./App.css";
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
      </BrowserRouter>
    </>
  )
}

export default App
