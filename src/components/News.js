// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay } from "swiper/modules";

export default function News() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={4}
      breakpoints={{
    0: {
      slidesPerView: 1,
    },
   
    639: {
      slidesPerView: 2,
    },
    865:{
      slidesPerView:3
    },
    1000:{
      slidesPerView:4
    }
  
  }}
      navigation
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
  
      
    >
      <SwiperSlide>
        <div className="max-w-xs rounded-md shadow-2xl shadow-gray-500 mb-8   bg-white dark:bg-gray-900 dark:text-gray-100">
          <img
            src={require("../assets/modi.jpg")}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold  text-center">
              Narendra Modi
              </h2>
              <p className="dark:text-gray-100 text-center">
                Hon'ble Prime Minister Of India
                
              </p>
            </div>
            <a href=" https://www.narendramodi.in/" target="_blank"
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-blue-400 hover:bg-blue-600 text-white text-xl  dark:text-gray-900"
            >
              Read more
            </a>
          </div>
        </div>
      </SwiperSlide>



      <SwiperSlide>
        <div className="max-w-xs rounded-md shadow-2xl shadow-gray-500  bg-white dark:bg-gray-900 dark:text-gray-100">
          <img
            src={require("../assets/sachine.jpg")}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-center">
              Sachin Tendulkar
              </h2>
              <p className="dark:text-gray-100 text-center">
              The God of Cricket
              </p>
            </div>
            <a href="https://en.wikipedia.org/wiki/Sachin_Tendulkar" target="_blank"
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-blue-400 hover:bg-blue-600 text-white text-xl  dark:text-gray-900"
            >
              Read more
            </a>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="max-w-xs rounded-md shadow-2xl shadow-gray-500  bg-white dark:bg-gray-900 dark:text-gray-100">
          <img
            src={require("../assets/amitabh.jpg")}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-center">
              Amitabh Bachchan
              </h2>
              <p className="dark:text-gray-100 text-center">
              Bollywood Actor
              </p>
            </div>
            <a href="https://en.wikipedia.org/wiki/Amitabh_Bachchan" target="_blank"
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-blue-400 hover:bg-blue-600 text-white text-xl  dark:text-gray-900"
            >
              Read more
            </a>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="max-w-xs rounded-md shadow-2xl shadow-gray-500  bg-white dark:bg-gray-900 dark:text-gray-100">
          <img
            src={require("../assets/arijit.jpg")}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-center">
              Arijit Singh
              </h2>
              <p className="dark:text-gray-100 text-center">
                Singer
              </p>
            </div>
            <a href="https://en.wikipedia.org/wiki/Arijit_Singh" target="_blank"
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-blue-400 hover:bg-blue-600 text-white text-xl  dark:text-gray-900"
            >
              Read more
            </a>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="max-w-xs rounded-md shadow-2xl shadow-gray-500  bg-white dark:bg-gray-900 dark:text-gray-100">
          <img
            src={require("../assets/nirmala.jpg")}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <p className=" text-2xl font-semibold text-center">
              Nirmala Sitharaman
              </p>
              <p className="dark:text-gray-100 text-center">
              Formar Finance Minister
              </p>
            </div>
            <a href="https://en.wikipedia.org/wiki/Nirmala_Sitharaman" target="_blank"
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-blue-400 hover:bg-blue-600 text-white text-xl  dark:text-gray-900"
            >
              Read more
            </a>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="max-w-xs rounded-md shadow-2xl shadow-gray-500  bg-white dark:bg-gray-900 dark:text-gray-100">
          <img
            src={require("../assets/ambani.jpg")}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-center">
              Mukesh Ambani
              </h2>
              <p className="dark:text-gray-100 text-center">
              Business Magnate
           </p>
            </div>
            <a href="https://en.wikipedia.org/wiki/Mukesh_Ambani" target="_blank"
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-blue-400 hover:bg-blue-600 text-white text-xl  dark:text-gray-900"
            >
              Read more
            </a>
          </div>
        </div>
      </SwiperSlide>

   

      <SwiperSlide>
        <div className="max-w-xs rounded-md shadow-2xl shadow-gray-500  bg-white dark:bg-gray-900 dark:text-gray-100">
          <img
            src={require("../assets/s jai.jpg")}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-center">
              S. Jaishankar
              </h2>
              <p className="dark:text-gray-100 text-center">
              Minister of External Affairs of India
              </p>
            </div>
            <a href="https://en.wikipedia.org/wiki/S._Jaishankar" target="_blank"
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-blue-400 hover:bg-blue-600 text-white text-xl  dark:text-gray-900"
            >
              Read more
            </a>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
