import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/initFirebase";

export const AuthContext = createContext({
  authUser: null,
  loading: false,
  signup: async () => {},
  login: async () => {},
});

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);
  const login = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

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
  };

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};
