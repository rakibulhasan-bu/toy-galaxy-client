const Testimonials = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-center text-2xl font-semibold capitalize text-gray-800 dark:text-white lg:text-3xl">
          What our <span className="text-blue-500 ">clients</span> say
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-center text-gray-500 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
          ex placeat modi magni quia error alias, adipisci rem similique, at
          omnis eligendi optio eos harum.
        </p>

        <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2 xl:mt-10">
          <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800 md:p-8">
            <p className="leading-loose text-gray-500 dark:text-gray-300">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              quibusdam ducimus libero ad tempora doloribus expedita laborum
              saepe voluptas perferendis delectus assumenda rerum, culpa aperiam
              dolorum, obcaecati corrupti aspernatur a.”.
            </p>

            <div className="mt-6 flex items-center">
              <img
                className="h-14 w-14 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />

              <div className="mx-4">
                <h1 className="font-semibold text-blue-500">Robbert</h1>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  CTO, Robert Consultency
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800 md:p-8">
            <p className="leading-loose text-gray-500 dark:text-gray-300">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              quibusdam ducimus libero ad tempora doloribus expedita laborum
              saepe voluptas perferendis delectus assumenda rerum, culpa aperiam
              dolorum, obcaecati corrupti aspernatur a.”.
            </p>

            <div className="mt-6 flex items-center">
              <img
                className="h-14 w-14 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div className="mx-4">
                <h1 className="font-semibold text-blue-500">Mia Brown</h1>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  Marketing Manager at Stech
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
