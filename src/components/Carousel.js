// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay } from 'swiper/modules';

export default function  Carousel() {
  return (
    
    <Swiper
     modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      autoplay ={{delay:3000}}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
    
      <SwiperSlide><img className='sm:h-[95vh] w-screen rounded-xl' src={require("../assets/mountains.jpg")} alt="logo"/></SwiperSlide>
      <SwiperSlide><img className='sm:h-[95vh] w-screen rounded-xl' src={require("../assets/img1.jpg")} alt="logo"/></SwiperSlide>
      <SwiperSlide><img className='sm:h-[95vh] w-screen rounded-xl' src={require("../assets/taj.jpg")} alt="logo"/></SwiperSlide>
      <SwiperSlide><img className='sm:h-[95vh] w-screen rounded-xl' src={require("../assets/img4.jpg")} alt="logo"/></SwiperSlide>
      <SwiperSlide><img className='sm:h-[95vh] w-screen rounded-xl' src={require("../assets/img2.jpg")} alt="logo"/></SwiperSlide>
       <SwiperSlide><img className='sm:h-[95vh] w-screen rounded-xl' src={require("../assets/terrace.jpg")} alt="logo"/></SwiperSlide>
      
    </Swiper>
  );
};