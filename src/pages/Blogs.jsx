const Blogs = () => {
  document.title = "Blogs - Toy Galaxy";
  return (
    <section className="container mx-auto px-6 py-12">
      {/* these is title and subtitle part  */}
      <div className="py-2">
        <h1 className="text-center text-2xl font-semibold capitalize text-gray-800 lg:text-4xl ">
          Toy Tales: <span className="gradient">Inspiring Stories</span>
        </h1>

        <p className="mt-2 text-center text-gray-500 ">
          Explore the Wondrous World of Toys through our Blog
        </p>
      </div>
      <div className="py-8 lg:-mx-6 lg:flex">
        <div className="lg:w-3/4 lg:px-6">
          <img
            className="h-80 w-full rounded-xl object-cover object-center xl:h-[28rem]"
            src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />

          <div>
            <p className="mt-6 text-sm uppercase text-blue-500">Want to know</p>

            <h1 className="mt-4 max-w-lg text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
              What do you want to know about UI
            </h1>

            <div className="mt-6 flex items-center">
              <img
                className="h-10 w-10 rounded-full object-cover object-center"
                src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                alt=""
              />

              <div className="mx-4">
                <h1 className="text-sm text-gray-700 dark:text-gray-200">
                  Amelia. Anderson
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Lead Developer
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 lg:mt-0 lg:w-1/4 lg:px-6">
          <div>
            <h3 className="capitalize text-blue-500">Design instument</h3>

            <a
              href="#"
              className="mt-2 block font-medium text-gray-700 hover:text-gray-500 hover:underline dark:text-gray-400 "
            >
              How to raise $100k+ by using blox ui kit on your design
            </a>
          </div>

          <hr className="my-6 border-gray-200 dark:border-gray-700" />

          <div>
            <h3 className="capitalize text-blue-500">UI Resource</h3>

            <a
              href="#"
              className="mt-2 block font-medium text-gray-700 hover:text-gray-500 hover:underline dark:text-gray-400 "
            >
              Should you creat UI Product by using Blox?
            </a>
          </div>

          <hr className="my-6 border-gray-200 dark:border-gray-700" />

          <div>
            <h3 className="capitalize text-blue-500">Premium Collection</h3>

            <a
              href="#"
              className="mt-2 block font-medium text-gray-700 hover:text-gray-500 hover:underline dark:text-gray-400 "
            >
              Top 10 Blocks you can get on Bloxs collection.
            </a>
          </div>

          <hr className="my-6 border-gray-200 dark:border-gray-700" />

          <div>
            <h3 className="capitalize text-blue-500">Premium kits</h3>

            <a
              href="#"
              className="mt-2 block font-medium text-gray-700 hover:text-gray-500 hover:underline dark:text-gray-400 "
            >
              Top 10 Ui kit you can get on Bloxs collection.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
