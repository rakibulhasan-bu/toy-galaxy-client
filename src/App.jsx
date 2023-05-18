import Navbar from "./shared/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./shared/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default App;
