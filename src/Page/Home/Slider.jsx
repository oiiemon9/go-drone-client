import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import banner1 from '../../assets/banner/banner1.png';
import banner2 from '../../assets/banner/banner2.png';
import banner3 from '../../assets/banner/banner3.png';

const Slider = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-2 mt-5">
      <Swiper className="mySwiper rounded-2xl">
        <SwiperSlide>
          <img src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
