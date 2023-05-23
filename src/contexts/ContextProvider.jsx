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
  const [mobileNav, setMobileNav] = useState(false);
  const [blog, setBlog] = useState({
    title:
      "The Enchanting World of Kids and Toys: Igniting Imagination, Learning, and Adventure",
    photoUrl:
      "https://res.cloudinary.com/dwx2jd8b1/image/upload/v1684827518/Website-assets/Toy%20Galaxy/R_2_p8lols.jpg",
    description:
      "Kids are the vibrant and curious souls who bring light and joy into our lives. They are young explorers, eager to discover the wonders of the world around them. Toys play a significant role in their lives, as they provide avenues for learning, growth, and self-expression. For kids, toys are not merely objects, but gateways to imagination and endless possibilities. They become trusted companions, lending a listening ear to their dreams and aspirations. Toys are bridges that connect kids to different realms, where they can be superheroes, princesses, or fearless adventurers. Through play, kids develop essential life skills such as problem-solving, decision-making, and social interaction. They learn the art of sharing, taking turns, and cooperating with others. Toys become the tools through which they navigate their emotions, allowing them to express themselves freely and understand the world with empathy and compassion. Kids and toys go hand in hand, creating a magical bond that fuels their growth, nurtures their spirit, and reminds us of the beauty of innocence and wonder.",
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
    mobileNav,
    setMobileNav,
    blog,
    setBlog,
  };
  return (
    <AuthContext.Provider value={contextInfo}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;
