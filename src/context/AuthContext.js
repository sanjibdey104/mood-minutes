import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/initFirebase";
import Loader from "../components/Loader";

export const AuthContext = createContext({
  authUser: null,
  loading: false,
  signup: async () => {},
  login: async () => {},
  logout: async () => {},
});

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);
  const login = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);
  const logout = () => auth.signOut();

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
