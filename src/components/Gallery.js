import React from "react";
import Carousel from "./Carousel";

const Gallery = () => {
  return (
    <>
    <h1 className="text-center text-5xl relative top- 9 font-extrabold text-[#CB337A] font-sans">
    Discover the Contemporary India
      </h1>
      <div className="relative  top-10 mx-2  rounded-xl shadow-xl">
        <Carousel />
      </div>
      <h1 className="text-center text-5xl relative top-20 font-extrabold text-[#CB337A] font-sans">
        Immersed in India: Exploring Multisensory Experiences
      </h1>
      <div className="container flex flex-col justify-center p-4 mb-32 mx-auto relative top-36">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
          <a href="/Heritage">
            <img
              style={{ boxShadow: "2px 2px 15px black" }}
              className=" object-cover w-full cursor-pointer hover:animate-pulse h-[40vh] rounded-xl"
              src={require("../assets/heritage.jpg")}
              alt=""
            />
            <h1 className=" font-bold relative bottom-7 rounded-b-xl bg-[#1d1c1c94] hover:bg-[#131314da] text-white text-xl text-center datatitle">
              Heritage
            </h1>
          </a>

          <a href="#">
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

          <a href="#">
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

          <a href="#">
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

          <a href="#">
            <img
              style={{ boxShadow: "2px 2px 15px black" }}
              className="object-cover w-full cursor-pointer hover:animate-pulse h-[40vh] rounded-xl"
              src={require("../assets/Tourism.jpg")}
              alt=""
            />
            <h1 className=" font-bold relative bottom-7 rounded-b-xl bg-[#1d1c1c94] hover:bg-[#131314da] text-white text-xl text-center datatitle">
              Tourism
            </h1>
          </a>

          <a href="#">
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
    </>
  );
};

export default Gallery;
