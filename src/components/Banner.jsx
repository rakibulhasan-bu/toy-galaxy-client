import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-gradient-to-br from-cyan-100  to-blue-100 px-6 pt-16">
      <div className="items-center justify-between lg:flex lg:flex-row-reverse">
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className="w-full lg:w-1/2"
        >
          <div className="space-y-6 lg:max-w-2xl">
            <h1 className="text-3xl font-bold text-gray-600 lg:text-6xl">
              Best place to choose <br /> your{" "}
              <span className="gradient font-bold">Kids Toys</span>
            </h1>

            <p className="max-w-xl text-gray-600">
              Explore a World of Adventure and Imagination. Unleash Your
              Child&apos;s Joy with Our Exciting Collection of Toy Cars!
            </p>

            <p>
              <Link to="#category" className="btn text-lg">
                choose Toy&apos;s
              </Link>
            </p>
          </div>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className="mt-6 flex w-full items-center justify-center lg:mt-0 lg:w-1/2"
        >
          <img
            className="h-full w-full -translate-y-6 scale-110 object-cover lg:max-w-5xl"
            src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1684566400/Website-assets/Toy%20Galaxy/child-with-red-car-removebg-preview_1_jjh040.png"
            alt="child with toy car"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
