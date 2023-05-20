import Navbar from "./shared/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./shared/Footer";
import GoToTop from "./components/GoToTop";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <div className="py-80"></div>
      <GoToTop />
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default App;
