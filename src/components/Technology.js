import React from "react";
import Video from "./Video";

function App() {
  return (
    <div>
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
    <div className="container flex flex-col justify-center p-10 mb-10 mx-auto relative top-2">
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2 sm:grid-cols-2">
          <a href="/Space">
            <img
              style={{ boxShadow: "2px 2px 15px black" }}
              className=" object-cover w-[50vw] cursor-pointer hover:animate-pulse h-[40vh] rounded-xl"
              src={require("../assets/space.jpg")}
              alt=""
            />
            
          </a>

          <a href="/Aiml">
            <img
              style={{ boxShadow: "2px 2px 15px black" }}
              className="object-cover w-[50vw] cursor-pointer hover:animate-pulse h-[40vh] rounded-xl"
              src={require("../assets/ai.jpg")}
              alt=""
            />
           
          </a>

         

          <a href="/Cloud">
            <img
              style={{ boxShadow: "2px 2px 15px black" }}
              className="object-cover w-[50vw] cursor-pointer hover:animate-pulse h-[40vh] rounded-xl"
              src={require("../assets/iot.jpg")}
              alt=""
            />
            
          </a>

          
          <a href="/Bitcoin">
            <img
              style={{ boxShadow: "2px 2px 15px black" }}
              className="object-cover w-[50vw] cursor-pointer hover:animate-pulse h-[40vh] rounded-xl"
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
