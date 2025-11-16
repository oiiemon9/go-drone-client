import React from 'react';
import Marquee from 'react-fast-marquee';
import amazonVector from '../../assets/brands/amazon_vector.png';
import amazon from '../../assets/brands/amazon.png';
import casio from '../../assets/brands/casio.png';
import moonstar from '../../assets/brands/moonstar.png';
import randstad from '../../assets/brands/randstad.png';
import star from '../../assets/brands/star.png';
import start_people from '../../assets/brands/start_people.png';

const Sponsor = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-2 my-24">
      <h1 className="text-xl font-bold text-secondary text-center">
        We've helped thousands of sales teams
      </h1>
      <div className="mt-5">
        <Marquee autoFill={true} gradient gradientColor="#eaeced">
          <img src={amazon} className="me-10" alt="" />
          <img src={casio} className="me-10" alt="" />
          <img src={moonstar} className="me-10" alt="" />
          <img src={randstad} className="me-10" alt="" />
          <img src={amazonVector} className="me-10" alt="" />
          <img src={star} className="me-10" alt="" />
          <img src={start_people} className="me-10" alt="" />
        </Marquee>
      </div>
    </div>
  );
};

export default Sponsor;
