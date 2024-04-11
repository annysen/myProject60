import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  //   for registration
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   for sign in
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   show user if sign in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (curentUser) => {
      console.log(curentUser);
      setUser(curentUser);
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //   logout
  const logout = () => {
    return signOut(auth);
  };

  const authInfo = {
    createUser,
    login,
    user,
    logout,
    loader,
  };
  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProviders;
