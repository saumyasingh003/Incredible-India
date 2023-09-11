
import Carousel from "./Carousel";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Gallery = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
    <h1 data-aos="zoom-out-right"  className="text-center md:text-5xl relative top- 12 font-extrabold text-[#CB337A] font-sans">
    Discover the Contemporary India
      </h1>
      <div className="relative  top-10 mx-2  rounded-xl shadow-xl">
        <Carousel />
      </div>
      <h1 data-aos="zoom-out-left"  className="text-center md:text-5xl relative top-20 font-extrabold text-[#CB337A] font-sans">
        Immersed in India: Exploring Multisensory Experiences
      </h1>
      <div className="container flex flex-col justify-center p-4 mb-32 mx-auto relative top-36">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
          <a data-aos="zoom-in-up"  href="/Heritage">
            <img
              style={{ boxShadow: "2px 2px 15px black" }}
              className=" object-cover w-full cursor-pointer hover:animate-pulse h-[40vh] rounded-xl"
              src={require("../assets/heritage.jpg")}
              alt=""
            />
            <h1 className=" font-bold relative bottom-7 rounded-b-xl bg-[#1d1c1c94] hover:bg-[#131314da]
             text-white text-xl text-center datatitle">
              Heritage
            </h1>
          </a>

          <a data-aos="zoom-in-up" href="/Art">
            <img
              style={{ boxShadow: "2px 2px 15px black" }}
              className="object-cover w-full cursor-pointer hover:animate-pulse h-[40vh] rounded-xl"
              src={require("../assets/art.jpg")}
              alt=""
            />
            <h1 className=" font-bold relative bottom-7 rounded-b-xl bg-[#1d1c1c94] hover:bg-[#131314da] text-white text-xl text-center datatitle">
              Art
            </h1>
          </a>

          <a data-aos="zoom-in-up"  href="/Technology">
            <img
              style={{ boxShadow: "2px 2px 15px black" }}
              className="object-cover w-full cursor-pointer hover:animate-pulse h-[40vh] rounded-xl"
              src={require("../assets/technology.jpg")}
              alt=""
            />
            <h1 className=" font-bold relative bottom-7 rounded-b-xl bg-[#1d1c1c94] hover:bg-[#131314da] text-white text-xl text-center datatitle">
              Technology
            </h1>
          </a>

          <a data-aos="zoom-in-up" href="/Infrastructure">
            <img
              style={{ boxShadow: "2px 2px 15px black" }}
              className="object-cover w-full cursor-pointer hover:animate-pulse h-[40vh] rounded-xl"
              src={require("../assets/infrastructure.jpg")}
              alt=""
            />
            <h1 className=" font-bold relative bottom-7 rounded-b-xl bg-[#1d1c1c94] hover:bg-[#131314da] text-white text-xl text-center datatitle">
              Infrastructure
            </h1>
          </a>

          <a data-aos="zoom-in-up"href="/Festivals">
            <img
              style={{ boxShadow: "2px 2px 15px black" }}
              className="object-cover w-full cursor-pointer hover:animate-pulse h-[40vh] rounded-xl"
              src={require("../assets/festivals.jpg")}
              alt=""
            />
            <h1 className=" font-bold relative bottom-7 rounded-b-xl bg-[#1d1c1c94] hover:bg-[#131314da] text-white text-xl text-center datatitle">
              Festivals
            </h1>
          </a>

          <a data-aos="zoom-in-up" href="/Sports">
            <img
              style={{ boxShadow: "2px 2px 15px black" }}
              className="object-cover w-full cursor-pointer hover:animate-pulse h-[40vh] rounded-xl"
              src={require("../assets/sports.jpg")}
              alt=""
            />
            <h1 className=" font-bold relative bottom-7 rounded-b-xl bg-[#1d1c1c94] hover:bg-[#131314da] text-white text-xl text-center datatitle">
              Sports
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
