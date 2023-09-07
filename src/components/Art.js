import React from "react";

const Art = () => {
  return (
    <div
      style={{
        background: "rgb(255,132,248)",
          background:
            "linear-gradient(90deg, rgba(255,132,248,1) 0%, rgba(239,144,10,1) 80%)",
      }}
    >
    <div className="relative top-28 mb-16">
    <h1 className="text-center text-5xl relative bottom-16 font-extrabold text-[#CB337A] font-sans" style={{ fontFamily: "'Russo One', sans-sarif"}}>
      Indian Arts And its Vibrant History
      </h1>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2  justify-items-center ">
        <div className="max-w-lg p-4 bg-gray-300 shadow-2xl  shadow-gray-900 rounded-2xl
         dark:text-gray-100 my-5">
          <div className="flex justify-between pb-4 border-bottom">
            <div className="flex items-center">
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src={require("../assets/painting.jpg")}
                alt=""
                className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              />
              <div className="flex items-center text-xs">
               
              </div>
            </div>
            <div className="space-y-2 h-28">
              <a rel="noopener noreferrer" href="/Painting" target="_block" className="block">
                <h3 className="text-xl font-semibold dark:text-violet-400 text-center">
                  Painting
                </h3>
              </a>
              <p className=" dark:text-gray-400 text-center">
              Paintings in India showcase a rich tapestry of cultural diversity,
              reflecting centuries of tradition and artistic expression through
              intricate designs, vibrant colors, and spiritual themes.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-lg p-4   bg-gray-300 shadow-2xl shadow-gray-900 rounded-2xl dark:text-gray-100 my-5">
          <div className="flex justify-between pb-4 border-bottom">
            <div className="flex items-center">
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src={require("../assets/music.jpg")}
                alt=""
                className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              />
              <div className="flex items-center text-xs">
               
              </div>
            </div>
            <div className="space-y-2 h-28">
              <a rel="noopener noreferrer" href="/Music"target="_block" className="block">
                <h3 className="text-xl font-semibold dark:text-violet-400 text-center">
                  Music
                </h3>
              </a>
              <p className=" dark:text-gray-400 text-center">
              Indian music resonates with a  blend of ancient melodies
              and contemporary innovation, encompassing diverse styles such as
              rages, rhythmic  tunes, and dynamic Bollywood
              compositions.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-lg p-4 shadow-2xl shadow-gray-900 bg-gray-300 rounded-2xl dark:text-gray-100 my-5">
          <div className="flex justify-between pb-4 border-bottom">
            <div className="flex items-center">
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src={require("../assets/architecture.jpg")}
                alt=""
                className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              />
              <div className="flex items-center text-xs">
               
              </div>
            </div>
            <div className="space-y-2 h-28">
              <a rel="noopener noreferrer" href="/Art"  className="block">
                <h3 className="text-xl font-semibold dark:text-violet-400 text-center">
                  Architecture
                </h3>
              </a>
              <p className=" dark:text-gray-400 text-center">
              Indian architecture showcases a captivating fusion of intricate
              detailing, from the awe-inspiring symmetry of Mughal monuments
             to the  geometry of Hindu temples, historical and cultural narrative.

              </p>
            </div>
          </div>
        </div>
        <div className="max-w-lg p-4 shadow-2xl shadow-gray-900  bg-gray-300 rounded-2xl dark:text-gray-100 my-5">
          <div className="flex justify-between pb-4 border-bottom">
            <div className="flex items-center">
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src={require("../assets/sculpture.jpg")}
                alt=""
                className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              />
              <div className="flex items-center text-xs">
               
              </div>
            </div>
            <div className="space-y-2 h-28">
              <a rel="noopener noreferrer" href="/Sculpture" target="_block" className="block">
                <h3 className="text-xl font-semibold dark:text-violet-400 text-center">
                  Sculpture
                </h3>
              </a>
              <p className=" dark:text-gray-400 text-center">
              Indian sculptures exemplify a profound artistic heritage, sculpted
              with meticulous craftsmanship and spiritual devotion, spanning
              from ancient temple carvings to modern interpretations.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Art;
