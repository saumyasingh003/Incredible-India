import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Video from "./Video";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-x-hidden">
      <div>
        <Video />
      </div>
      <div 
         style={{
          background: "rgb(91,92,205)",
          background:
            " linear-gradient(100deg, rgba(91,92,205,0.8941701680672269) 0%, rgba(200,79,63,0.9557948179271709) 76%)",
        }}
        className="relative overflow-x-hidden h-full shadow-gray-800"
      >
        <div className="container flex flex-col justify-center
     p-10 mb-10 mx-auto relative top-2">
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2 sm:grid-cols-2">
          <a href="/Space">
            <img  data-aos="fade-down-right"
              style={{ boxShadow: "2px 2px 15px black" }}
              className=" object-cover sm:w-[50vw] cursor-pointer hover:animate-pulse sm:h-[40vh] rounded-xl"
              src={require("../assets/space.jpg")}
              alt=""
            />
            
          </a>

          <a  data-aos="fade-up-left" href="/Aiml">
            <img
              style={{ boxShadow: "2px 2px 15px black" }}
              className="object-cover sm:w-[50vw] cursor-pointer hover:animate-pulse sm:h-[40vh] rounded-xl"
              src={require("../assets/ai.jpg")}
              alt=""
            />
           
          </a>

         

          <a  data-aos="fade-down-right" href="/Cloud">
            <img
              style={{ boxShadow: "2px 2px 15px black" }}
              className="object-cover sm:w-[50vw] cursor-pointer hover:animate-pulse sm:h-[40vh] rounded-xl"
              src={require("../assets/iot.jpg")}
              alt=""
            />
            
          </a>

          
          <a  data-aos="fade-up-left" href="/Bitcoin">
            <img
              style={{ boxShadow: "2px 2px 15px black" }}
              className="object-cover sm:w-[50vw] cursor-pointer hover:animate-pulse sm:h-[40vh] rounded-xl"
              src={require("../assets/blockchain.jpg")}
              alt=""
            />
           
          </a>

         
         

         
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
