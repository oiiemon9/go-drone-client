import React from 'react';
import { Link } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
  const { googleLogin, setLoginUser } = useAuth();

  const handelGoogle = async () => {
    try {
      const result = await googleLogin();
      setLoginUser(result.user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full">
      <div className=" flex items-center justify-center ">
        <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-sm">
          <h1 className="text-3xl font-bold text-secondary">Welcome Back</h1>
          <p className="mt-1 text-sm text-base-200">Login with Go Drone</p>

          <div>
            <div className="form-control mt-6">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered focus:outline-none bg-white"
              />
            </div>

            {/* Password */}
            <div className="form-control mt-3">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered focus:outline-none bg-white"
              />
            </div>

            {/* Forget password */}
            <div className="mt-2 text-right">
              <a className="text-sm text-blue-600 hover:underline cursor-pointer">
                Forget Password?
              </a>
            </div>

            <button className="btn w-full mt-4 bg-lime-300 border-none hover:bg-lime-400 text-black">
              Login
            </button>
          </div>

          <p className="mt-4 text-center text-sm text-gray-600">
            Don’t have any account?{' '}
            <Link
              to="/register"
              className="text-blue-600 font-medium hover:underline cursor-pointer"
            >
              Register
            </Link>
          </p>

          <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">Or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google Login */}
          <button
            onClick={handelGoogle}
            className="btn w-full bg-gray-100 border border-gray-300 hover:bg-gray-200 text-black flex items-center gap-2"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
