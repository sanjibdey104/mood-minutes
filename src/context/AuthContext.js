import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/initFirebase";

export const AuthContext = createContext({
  authUser: null,
  loading: false,
  signup: async () => {},
});

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

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
  };

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};
