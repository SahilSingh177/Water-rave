import "./App.css";
import Slider from "./Components/Slider";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cards from "./Components/Cards";
import Place from "./Components/Place";
import Home from "./home";
import Gallery from "./Components/Gallery";

function App() {
  return (
    <>
      <Router>
     <Routes>
     <Route path="*" element={ <Home/>} />
     <Route path="*" element={ <Slider/>} />
     <Route path="*" element={ <Cards/>} />
     <Route path="/place" element={ <><Place/><Footer/></>} />
     <Route path="/gallery" element={ <><Navbar/><Gallery/><Footer/></>} />
     <Route path="*" element={ <Footer/>} />
      </Routes>
      </Router>
      </>
  );
}

export default App;
