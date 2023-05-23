import Navbar from "./shared/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./shared/Footer";
import GoToTop from "./components/GoToTop";
import Aos from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "./contexts/ContextProvider";
import NavMobile from "./shared/NavMobile";

const App = () => {
  const { mobileNav } = useContext(AuthContext);
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
      {/* mobile nav here  */}
      <div
        className={`${
          mobileNav ? "right-0" : "-right-full"
        } fixed top-0 z-10 h-full transition-all duration-200`}
      >
        <NavMobile />
      </div>
      <Outlet />
      <GoToTop />
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default App;
