import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Heritage from "./components/Heritage"
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/About" element={<About />} />
        <Route path="/Heritage" element={<Heritage />} />
        <Route path="/Gallery" element={<Gallery/>} />
      </Routes>
      <Footer/>
    </>
  );
}
export default App;
