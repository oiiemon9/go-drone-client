import React, { use } from 'react';
import { AuthContext } from '../Context/firebaseContext/FirebaseContext';

const useAuth = () => {
  const firebaseAuth = use(AuthContext);
  return firebaseAuth;
};

export default useAuth;
