import Navbar from "./shared/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./shared/Footer";
import GoToTop from "./components/GoToTop";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  // set useEffect for aos
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
      <GoToTop />
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default App;
