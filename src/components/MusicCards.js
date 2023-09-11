// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay } from "swiper/modules";

export default function MusicCards() {
  return (
    <div className="overflow-x-hidden mt-7 mb-10 p-3">
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={8}
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
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="max-w-xs rounded-md  shadow-2xl shadow-gray-500 mb-8 top-2
         bg-white dark:bg-gray-900 dark:text-gray-100">
          <img
            src={require("../assets/classical.jpg")}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold  text-center">
               Classical Music
              </h2>
              <p className="dark:text-gray-100 text-center">
              From North India involves expressive improvisation and intricate rhythms within 
              a structured raga system, spanning vocal  and instrumental (Sitar, Tabla) forms.
              </p>
            </div>
            <a href="https://en.wikipedia.org/wiki/Hindustani_classical_music" target="_blank"
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-blue-400 hover:bg-blue-600 text-white text-xl  dark:text-gray-900"
            >
              Read more
            </a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="max-w-xs rounded-md shadow-2xl shadow-gray-500  bg-white
         dark:bg-gray-900 dark:text-gray-100">
          <img
            src={require("../assets/folk.jpg")}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-center">
              Folk Music
              </h2>
              <p className="dark:text-gray-100 text-center">
              Each region in India has its own folk music, representing the
               local culture and traditions. Examples include Bhangra, Bihu,
                Lavani, and Rajasthani folk songs.
              </p>
            </div>
            <a href="https://en.wikipedia.org/wiki/Folk_music" target="_blank"
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
            src={require("../assets/bollywood.jpg")}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-center">
              Bollywood Music
              </h2>
              <p className="dark:text-gray-100 text-center">
              A fusion of various styles, songs accompany Indian films are known
               for their catchy tunes, diverse instrumentation , ability to capture a
                wide range of emotions.
              </p>
            </div>
            <a href="https://en.wikipedia.org/wiki/Hindi_film_music" target="_blank"
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
            src={require("../assets/qawali.jpg")}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-center">
              Qawwali </h2>
              <p className="dark:text-gray-100 text-center">
              A form of devotional music rooted in Sufi traditions,
               Qawwali is characterized by its rhythmic patterns, vocal improvisation, 
               and spiritual themes.
              </p>
            </div>
            <a href="https://en.wikipedia.org/wiki/Qawwali" target="_blank"
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
            src={require("../assets/carnatic.jpg")}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <p className=" text-2xl font-semibold text-center">
              Carnatic Cl. Music
              </p>
              <p className="dark:text-gray-100 text-center">
              Originating in South India, Carnatic music focuses on structured compositions, 
              intricate rhythmic patterns,
               and ornamented melodies. It includes vocal and instruments.
            
              </p>
            </div>
            <a href="https://en.wikipedia.org/wiki/Carnatic_music" target="_blank"
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
            src={require("../assets/instument.jpg")}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-center">
              Instrumental Music
              </h2>
              <p className="dark:text-gray-100 text-center">
              Beyond classical music, India has a rich tradition of
               instrumental music, including solo performances on instruments
                like the Flute, Sarod, and Santoor.


           </p>
            </div>
            <a href="https://en.wikipedia.org/wiki/Instrumental" target="_blank"
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-blue-400 hover:bg-blue-600 text-white text-xl  dark:text-gray-900"
            >
              Read more
            </a>
          </div>
        </div>
      </SwiperSlide>

   

    
    </Swiper>
    </div>
  );
}