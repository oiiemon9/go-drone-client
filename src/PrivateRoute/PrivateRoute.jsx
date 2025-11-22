import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate } from 'react-router';
import Loader from '../Components/Loader/Loader';

const PrivateRoute = ({ children }) => {
  const { loginUser, loader } = useAuth();

  if (loader) {
    return <Loader></Loader>;
  }

  if (loginUser) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
