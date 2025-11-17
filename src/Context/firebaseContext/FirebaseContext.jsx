import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase/Firebase.init';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const FirebaseContext = ({ children }) => {
  const [loginUser, setLoginUser] = useState(null);
  const [loader, setLoader] = useState(false);

  const registration = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoginUser(user);
      }
    });
    return () => {
      unsubscribe;
    };
  }, []);

  const authInfo = {
    registration,
    loginUser,
    setLoginUser,
    loader,
    login,
    logOut,
    googleLogin,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default FirebaseContext;
