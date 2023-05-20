import Banner from "../components/Banner";
import Faqs from "../components/Faqs";
import Gallery from "../components/Gallery";
import PopularProducts from "../components/PopularProducts";
import SubscribeSection from "../components/SubscribeSection";
import TabCategory from "../components/TabCategory";
import Testimonials from "../components/Testimonials";

const Home = () => {
  document.title = "Toy Galaxy";
  return (
    <div className="">
      <Banner />
      <Gallery />
      <TabCategory />
      <PopularProducts />
      <Testimonials />
      <Faqs />
      <SubscribeSection />
    </div>
  );
};

export default Home;
