import React from "react";
import { BsArrowRight } from 'react-icons/bs'
import News from "./News";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div style={{ height: '65vh', width: '100vw', position: 'relative',top:'1.2rem', overflow: 'hidden' }}>
        <video
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          muted
          autoPlay
          loop
          playsInline
          data-hero-video
          data-src-lg="https://cdn.dribbble.com/uploads/39421/original/963b4f8739cbdf86ca3f3a23245efd18.mp4?1657824985"
          data-src-sm="https://cdn.dribbble.com/uploads/39422/original/2a124f438241970f60b377e881b8dc0b.mp4?1657824997"
        >
          <source src="https://cdn.dribbble.com/uploads/39421/original/963b4f8739cbdf86ca3f3a23245efd18.mp4?1657824985" type="video/mp4" />
        </video>
      </div>
      <div className="relative text-center z-20 bottom-[20rem]">
        <h1 style={{ fontFamily: " 'Bricolage Grotesque', sans-serif" }} className=" text-6xl first-letter: text-white mb-3">
          Explore our India Through our Eyes
        </h1>
        <h3 style={{ fontFamily: " 'Bricolage Grotesque', sans-serif" }} className="text-xl text-white" >Unveiling India: A Personal Journey Through Our Perspective</h3>
        <div className=" flex justify-center">
          <a href="/Gallery" className="flex relative top-32 bg-gray-700 text-white rounded-2xl p-3 space-x-2 hover:bg-gray-900 hover:tracking-widest ">Explore Now <span className="relative left-1  duration-500 group-hover:translate-x-2"><BsArrowRight size={24} /></span></a>
        </div>
      </div>
      <h1 className="text-center text-5xl relative bottom-16 font-extrabold text-[#CB337A] font-sans" style={{ fontFamily: "'Russo One', sans-sarif"}}>
      Iconic Indians in Various Fields
      </h1>
      <div className="relative left-3 mb-8">
        <News />
      </div>
     
    </>
  );
};

export default Home;
