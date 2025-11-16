import React from 'react';
import { GiDeliveryDrone } from 'react-icons/gi';

const HowItWorks = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-2 my-24">
      <h2 className="text-2xl text-secondary font-bold ">How it Works</h2>
      <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div className="space-y-2 bg-white rounded p-4">
          <GiDeliveryDrone className="text-4xl" />
          <h2 className="font-bold text-secondary">Booking Pick & Drop</h2>
          <p className="text-sm text-base-200">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="space-y-2 bg-white rounded p-4">
          <GiDeliveryDrone className="text-4xl" />
          <h2 className="font-bold text-secondary">Booking Pick & Drop</h2>
          <p className="text-sm text-base-200">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="space-y-2 bg-white rounded p-4">
          <GiDeliveryDrone className="text-4xl" />
          <h2 className="font-bold text-secondary">Booking Pick & Drop</h2>
          <p className="text-sm text-base-200">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="space-y-2 bg-white rounded p-4">
          <GiDeliveryDrone className="text-4xl" />
          <h2 className="font-bold text-secondary">Booking Pick & Drop</h2>
          <p className="text-sm text-base-200">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
