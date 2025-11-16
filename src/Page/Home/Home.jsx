import React from 'react';
import Slider from './Slider';
import HowItWorks from './HowItWorks';
import OurServices from './OurServices';
import Sponsor from './Sponsor';

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <HowItWorks></HowItWorks>
      <OurServices></OurServices>
      <Sponsor></Sponsor>
    </div>
  );
};

export default Home;
