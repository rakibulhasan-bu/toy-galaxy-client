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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [blog, setBlog] = useState({
    title: "r",
    photoUrl:
      "https://res.cloudinary.com/dwx2jd8b1/image/upload/v1684751709/Website-assets/Toy%20Galaxy/Screenshot_195_vijkwe.png",
    description: "a",
  });

  const googleSignUp = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const registerAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
      console.log("tjis is i", loggedUser);
      setUser(loggedUser);
      setLoading(false);
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
    loading,
    setLoading,
    error,
    setError,
    blog,
    setBlog,
  };
  return (
    <AuthContext.Provider value={contextInfo}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;
