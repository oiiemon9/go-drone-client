import React from 'react';
import icon from './../../assets/icon/serviceicon.png';

const OurServices = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-2  my-24">
      <div className="p-12 md:p-24 bg-secondary rounded-2xl">
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-white text-2xl font-bold text-center">
            Our Services
          </h1>
          <p className="text-base-100 text-sm max-w-xl text-center">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>
        <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-white hover:bg-primary transition duration-300 p-5 rounded space-y-2">
            <div className="flex justify-center">
              <img className="h-12" src={icon} alt="" />
            </div>
            <h2 className="text-center text-secondary font-bold">
              Express & Standard Delivery
            </h2>
            <p className="text-sm text-base-200 text-center">
              We deliver parcels within 24-72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4-6 hours from pick-up to drop-off.
            </p>
          </div>
          <div className="bg-white hover:bg-primary transition duration-300 p-5 rounded space-y-2">
            <div className="flex justify-center">
              <img className="h-12" src={icon} alt="" />
            </div>
            <h2 className="text-center text-secondary font-bold">
              Express & Standard Delivery
            </h2>
            <p className="text-sm text-base-200 text-center">
              We deliver parcels within 24-72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4-6 hours from pick-up to drop-off.
            </p>
          </div>
          <div className="bg-white hover:bg-primary transition duration-300 p-5 rounded space-y-2">
            <div className="flex justify-center">
              <img className="h-12" src={icon} alt="" />
            </div>
            <h2 className="text-center text-secondary font-bold">
              Express & Standard Delivery
            </h2>
            <p className="text-sm text-base-200 text-center">
              We deliver parcels within 24-72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4-6 hours from pick-up to drop-off.
            </p>
          </div>
          <div className="bg-white hover:bg-primary transition duration-300 p-5 rounded space-y-2">
            <div className="flex justify-center">
              <img className="h-12" src={icon} alt="" />
            </div>
            <h2 className="text-center text-secondary font-bold">
              Express & Standard Delivery
            </h2>
            <p className="text-sm text-base-200 text-center">
              We deliver parcels within 24-72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4-6 hours from pick-up to drop-off.
            </p>
          </div>
          <div className="bg-white hover:bg-primary transition duration-300 p-5 rounded space-y-2">
            <div className="flex justify-center">
              <img className="h-12" src={icon} alt="" />
            </div>
            <h2 className="text-center text-secondary font-bold">
              Express & Standard Delivery
            </h2>
            <p className="text-sm text-base-200 text-center">
              We deliver parcels within 24-72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4-6 hours from pick-up to drop-off.
            </p>
          </div>
          <div className="bg-white hover:bg-primary transition duration-300 p-5 rounded space-y-2">
            <div className="flex justify-center">
              <img className="h-12" src={icon} alt="" />
            </div>
            <h2 className="text-center text-secondary font-bold">
              Express & Standard Delivery
            </h2>
            <p className="text-sm text-base-200 text-center">
              We deliver parcels within 24-72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4-6 hours from pick-up to drop-off.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
