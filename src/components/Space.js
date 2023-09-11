import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Space = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-x-hidden mb-10">
      <div className="relative overflow-hidden  h-full shadow-gray-800">
        <h1 data-aos="zoom-in-up"
          style={{ fontFamily: " 'Bricolage Grotesque', sans-serif" }}
          className="text-center 
      text-5xl relative top-6 mb-20 font-extrabold text-[#802b2b] font-sans"
        >
          India's Ascent to the Stars: A Journey into Space Exploration
        </h1>
        <img data-aos="fade-up" src={require("../assets/isro.jpg")} className="w-full sm:h-[85vh] mb-4" />
        <div class="relative shadow-2xl shadow-gray-700  p-10 bg-yellow-50  space-y-2 lg:col-span-5">
          <h3
            class="text-2xl font-bold  
        sm:text-4xl font-serif  text-center -solid border-b-2 pb-4 border-blue-800"
          >
            What is ISRO?
          </h3>
          <div className=" relative top-4">
            <h1 class="text-3xl text-center font-serif">
              {" "}
              Formation and Background
            </h1>
            <p class=" text-xl text-center ">
              ISRO, the Indian Space Research Organisation, was officially
              founded on August 15, 1969, with the vision of harnessing space
              technology for peaceful purposes and national development. Dr.
              Vikram Sarabhai, widely regarded as the father of the Indian space
              program, played a pivotal role in its establishment. He emphasized
              the importance of space technology for solving India's
              socioeconomic problems.
            </p>
          </div>
          <div className="relative top-5">
            <h1 class="text-3xl text-center  font-serif"> Objectives</h1>
            <p class=" text-xl text-center ">
              ISRO's primary mission is to develop and utilize space technology
              for peaceful purposes. It focuses on scientific research,
              technological development, and practical applications of space
              science. The organization contributes significantly to national
              development by providing satellite-based services in various
              sectors, including communication, agriculture, weather
              forecasting, natural resource management, and disaster mitigation.
              ISRO's commitment to peaceful use of space is reflected in its
              efforts to promote international cooperation in space research and
              exploration.
            </p>
          </div>
          <div className="relative top-5">
            <h1 class="text-3xl text-center  font-serif"> Achievement</h1>
            <p class=" text-xl text-center ">
              ISRO has made remarkable strides in space technology and
              exploration. One of its standout achievements is the successful
              launch of Chandrayaan-1 in 2008. Chandrayaan-1 was India's first
              lunar mission and made significant discoveries, including the
              detection of water molecules on the moon's surface. Another
              noteworthy accomplishment is the Mars Orbiter Mission, also known
              as Mangalyaan, launched in 2013. It made India the fourth country
              globally to reach Mars and the first to do so on its maiden
              attempt. Mangalyaan demonstrated India's capabilities in
              interplanetary missions and cost-effective space exploration.
              ISRO's Polar Satellite Launch Vehicle (PSLV) earned a reputation
              for reliability and affordability. It has been instrumental in
              launching numerous satellites for both domestic and international
              clients, solidifying India's position as a reliable launch service
              provider.
            </p>
          </div>
        </div>
        <div>
          <section className="py-6 p-4 ">
            <div className="container flex flex-col justify-center mx-auto">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                <img data-aos="fade-right"
                  className="object-cover w-full dark:bg-gray-500 aspect-square"
                  src={require("../assets/space1.jpg")}
                />
                <img data-aos="fade-right"
                  className="object-cover w-full dark:bg-gray-500 aspect-square"
                  src={require("../assets/space2.jpg")}
                />
                <img data-aos="fade-left"
                  className="object-cover w-full dark:bg-gray-500 aspect-square"
                  src={require("../assets/space3.jpg")}
                />
                <img data-aos="fade-left"
                  className="object-cover w-full dark:bg-gray-500 aspect-square"
                  src={require("../assets/space4.jpg")}
                />
              </div>
            </div>
          </section>
        </div>
        <div className="mb-10">
          <h1 className="text-center mb-10 text-5xl relative top-6  font-extrabold text-[#CB337A] font-sans">
            ISRO's Upcomming Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center mb-20">

          <div data-aos="fade-right" className=" relative top-10 sm:left-16 mb-10  shadow-2xl shadow-gray-600">
            <div  class="max-w-sm p-6 bg-white  border border-gray-100 rounded-lg shadow
             dark:bg-gray-800 dark:border-gray-700">
              <a href="https://www.isro.gov.in/Aditya_L1.html">
                <h5 class="mb-2 text-2xl font-extrabold tracking-tight text-gray-900
                 dark:text-white">
                  ADITYA-L1
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                The vehicle has placed the satellite precisely into its intended
                orbit. India's first solar observatory has begun its journey to
                the destination of Sun-Earth L1 point
              </p>
              <a
                href="https://www.isro.gov.in/Aditya_L1.html"
                className="hover:underline dark:text-violet-400
                 bg-blue-400 text-white p-2 rounded-md"
              >
                Read More
              </a>
            </div>
          </div>
          <div  data-aos="fade-left" className="relative  top-10 sm:left-16 mb-10  shadow-2xl shadow-gray-600">
            <div class="max-w-sm p-6 bg-white  border border-gray-100 rounded-lg shadow
             dark:bg-gray-800 dark:border-gray-700">
              <a href="https://www.isro.gov.in/XPoSat.html">
                <h5 class="mb-2 text-2xl font-extrabold tracking-tight text-gray-900
                 dark:text-white">
                  (XPoSat)
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              XPoSat (X-ray Polarimeter Satellite) is India’s first dedicated polarimetry
               mission to study various dynamics of bright astronomical X-ray sources in extreme 
               conditions.
              </p>
              <a
                href="https://www.isro.gov.in/XPoSat.html"
                className="hover:underline dark:text-violet-400
                 bg-blue-400 text-white p-2 rounded-md"
              >
                Read More
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Space;
 