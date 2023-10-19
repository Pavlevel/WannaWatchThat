import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [uid, setUid] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setUid(user?.uid);
      } else {
        setUser(null);
        setUid(null);
      }

      setIsLoading(false);
    });

    return () => {
      listen();
    };
  }, []);

  const signUpNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginFunction = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signinGoogle = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  };

  const logout = () => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        signUpNewUser,
        loginFunction,
        logout,
        signinGoogle,
        user,
        uid,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
