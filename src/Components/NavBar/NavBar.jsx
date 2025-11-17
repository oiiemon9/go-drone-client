import React, { use } from 'react';
import goDrone from '../../assets/goDrone.png';
import { Link } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const NavBar = () => {
  const { loginUser, logOut } = useAuth();

  const navLinks = (
    <>
      <li>
        <Link>Services</Link>
      </li>
      <li>
        <Link to="/coverage">Coverage</Link>
      </li>
      <li>
        <Link to="/about-us">About Us</Link>
      </li>
      <li>
        <Link>Pricing</Link>
      </li>
      <li>
        <Link>Be a Rider</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-white max-w-[1440px] mx-auto px-2 shadow-sm rounded-2xl mt-5">
      <div className="navbar-start gap-1">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost hover:bg-primary border-base-100 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link className="flex items-center gap-px">
          <img className="h-14 w-14" src={goDrone} alt="" />
          <h3 className="text-xl font-bold text-secondary">GoDrone</h3>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-base-200 px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-2">
        {loginUser ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={loginUser?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow z-50"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button onClick={handelLogout}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn bg-transparent border-base-100 shadow-none"
          >
            Sign In
          </Link>
        )}

        <Link className="btn bg-primary border-primary shadow-none">
          Be a rider
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
