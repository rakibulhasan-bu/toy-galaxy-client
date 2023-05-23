import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-gradient-to-br from-cyan-100  to-blue-100 px-6 pb-8 pt-8 lg:pb-0 lg:pt-8">
      <div className="flex flex-col-reverse items-center justify-between gap-y-6 lg:flex lg:flex-row-reverse">
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="w-full lg:w-1/2"
        >
          <div className="space-y-6 text-center lg:max-w-2xl lg:text-left">
            <h1 className="text-3xl font-bold text-gray-600 lg:text-6xl">
              Best place to choose <br /> your{" "}
              <span className="gradient font-bold">Kids Toys</span>
            </h1>

            <p className="max-w-xl text-gray-600">
              Explore a World of Adventure and Imagination. Unleash Your
              Child&apos;s Joy with Our Exciting Collection of Toy Cars!
            </p>

            <p className="text-center lg:text-left">
              <Link to="#category" className="btn text-lg">
                choose Toy&apos;s
              </Link>
            </p>
          </div>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="flex w-full items-center justify-center lg:mt-6 lg:w-1/2"
        >
          <img
            className="h-full w-full object-cover md:max-w-5xl md:-translate-y-6 md:scale-110"
            src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1684566400/Website-assets/Toy%20Galaxy/child-with-red-car-removebg-preview_1_jjh040.png"
            alt="child with toy car"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
