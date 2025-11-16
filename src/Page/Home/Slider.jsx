import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import banner1 from '../../assets/banner/banner1.png';
import banner2 from '../../assets/banner/banner2.png';
import banner3 from '../../assets/banner/banner3.png';
import { Autoplay } from 'swiper/modules';

const Slider = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-2 mt-5">
      <Swiper
        autoplay={true}
        modules={[Autoplay]}
        className="mySwiper rounded-2xl"
      >
        <SwiperSlide>
          <img className="w-full" src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={banner3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
