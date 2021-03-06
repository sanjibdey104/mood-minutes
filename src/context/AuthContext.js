import React, { createContext, useEffect, useState } from "react";
import firebase from "firebase/app";
import { auth } from "../firebase/initFirebase";
import Loader from "../components/layout/Loader";

export const AuthContext = createContext({
  authUser: null,
  loading: false,
  signup: async () => {},
  login: async () => {},
  logout: async () => {},
  signInWithGoogle: async () => {},
});

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);
  const login = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);
  const logout = () => auth.signOut();
  const signInWithGoogle = () =>
    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setAuthUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authValues = {
    authUser,
    loading,
    signup,
    login,
    logout,
    signInWithGoogle,
  };

  if (loading) {
    return (
      <div className="container">
        <Loader />
      </div>
    );
  }

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};
