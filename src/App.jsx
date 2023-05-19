import Navbar from "./shared/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./shared/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <div className="py-80"></div>
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default App;
