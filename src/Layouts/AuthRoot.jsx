import React from 'react';
import authImage from '../assets/authImage.png';
import { Link, Outlet } from 'react-router';
import goDrone from '../assets/goDrone.png';

const AuthRoot = () => {
  return (
    <div className="flex max-w-[1440px] mx-auto px-2 min-h-screen ">
      <div className="flex-1 flex flex-col">
        <Link className="flex items-center gap-px">
          <img className="h-14 w-14" src={goDrone} alt="" />
          <h3 className="text-xl font-bold text-secondary">GoDrone</h3>
        </Link>
        <div className="h-full flex justify-center items-center">
          <Outlet></Outlet>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center ">
        <img src={authImage} alt="" />
      </div>
    </div>
  );
};

export default AuthRoot;
