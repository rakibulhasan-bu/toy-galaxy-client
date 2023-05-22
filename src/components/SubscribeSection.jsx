const SubscribeSection = () => {
  return (
    <section className="container mx-auto flex justify-between px-4 py-8 lg:mb-12 lg:px-6 lg:py-20">
      <div
        data-aos="fade-right"
        data-aos-duration="3000"
        className="ml-20 w-1/5 "
      >
        <img
          className="h-full w-full rotate-45 object-cover"
          src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1684583889/Website-assets/Toy%20Galaxy/newsletter_1_lzffso.png"
          alt=""
        />
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="3000"
        className="mx-auto max-w-screen-lg  sm:text-center"
      >
        <h2 className="mb-4 text-3xl font-semibold tracking-tight text-gray-900  md:text-4xl">
          Join Our <span className="gradient">Toy Galaxy</span> Community
        </h2>
        <p className="mx-auto mb-8 max-w-xl  text-gray-600 sm:text-xl md:mb-12">
          Subscribe to Our Newsletter for Exclusive Deals, New Releases, and
          Exciting Toy Galaxy Updates.
        </p>
        <form>
          <div className="mx-auto mb-3 max-w-screen-sm items-center space-y-4 sm:flex sm:space-y-0">
            <div className="relative w-full">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                className="inputStyle rounded-e-none pl-10"
                placeholder="Enter your email"
                type="email"
                id="email"
                required=""
              />
            </div>

            <button type="submit" className="btn rounded-s-none py-3">
              Subscribe
            </button>
          </div>
          <div className="newsletter-form-footer mx-auto max-w-screen-sm text-left text-sm text-gray-500 dark:text-gray-300">
            We care about the protection of your data.{" "}
            <span className="gradient cursor-pointer hover:underline-offset-1">
              Read our Privacy Policy
            </span>
            .
          </div>
        </form>
      </div>
    </section>
  );
};

export default SubscribeSection;
