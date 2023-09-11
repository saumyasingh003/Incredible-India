import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Heritage from "./components/Heritage"
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Art  from "./components/Art"
import Painting from "./components/Painting";
import Music from "./components/Music";
import Sculpture from "./components/Sculpture";
import Architecture from "./components/Architecture";
import Festivals from "./components/Festivals";
import Infrastructure from "./components/Infrastructure"
import Sports from "./components/Sports";
import Technology from "./components/Technology"
import Video from "./components/Video";
import Space from "./components/Space";
import Aiml from "./components/Aiml";
import  Bitcoin from "./components/Bitcoin";
import Cloud from "./components/Cloud";
import Login from "./components/login";
import Register from "./components/Register";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About />} />
        <Route path="/Heritage" element={<Heritage />} />
        <Route path="/Art" element={<Art />} />
        <Route path="/Gallery" element={<Gallery/>} />
        <Route path="/Painting" element={<Painting/>} />
        <Route path="/Music" element={<Music/>} />
        <Route path="/Arcitecture" element={<Architecture/>} />
        <Route path="/Sculpture" element={<Sculpture/>} />
        <Route path="/Festivals" element={<Festivals/>} />
        <Route path="/Infrastructure" element={<Infrastructure/>} />
        <Route path="/Sports" element={<Sports/>} />
        <Route path="/Technology" element={<Technology/>} />
        <Route path="/Video" element={<Video/>} />
        <Route path="/Space" element={<Space/>} />
        <Route path="/Aiml" element={<Aiml/>} />
        <Route path="/Bitcoin" element={<Bitcoin/>} />
        <Route path="/Cloud" element={<Cloud/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
      </Routes>
      <Footer/>
    </>
  );
}
export default App;
