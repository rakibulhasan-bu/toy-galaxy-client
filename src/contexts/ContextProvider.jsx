/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../configs/FirebaseConfig";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleSignUp = () => {
    return signInWithPopup(auth, provider);
  };
  const registerAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
      console.log("tjis is i", loggedUser);
      setUser(loggedUser);
    });
    return () => unSubscribe();
  }, []);

  const contextInfo = {
    registerAccount,
    googleSignUp,
    signIn,
    logOut,
    auth,
    user,
    setUser,
  };
  return (
    <AuthContext.Provider value={contextInfo}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;
