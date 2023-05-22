const Testimonials = () => {
  return (
    <section className="container mx-auto px-6 pb-10 pt-16">
      <h1 className="text-center text-2xl font-semibold text-gray-800 lg:text-4xl">
        Hear from Our
        <span className="gradient font-semibold"> Happy Customers</span>
      </h1>

      <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500">
        Discover What Our Customers Have to Say About Their Toy Car Experience
      </p>

      <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2 xl:mt-10">
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="rounded-lg bg-gradient-to-br from-cyan-200 to-blue-300 p-6  md:p-8"
        >
          <p className="leading-loose text-gray-900 ">
            “Wow! These toy cars have brought endless joy to my son. He spends
            hours racing them around the house, creating his own little
            adventures. The quality is exceptional, and they have proven to be
            very durable. I highly recommend these toy cars to all parents
            looking to spark their child&apos;s imagination and provide hours of
            entertainment.”
          </p>

          <div className="mt-6 flex items-center">
            <img
              className="h-14 w-14 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
            />

            <div className="mx-4">
              <h1 className="text-gray-900-500 font-semibold">Robert</h1>
              <span className="text-sm text-gray-500 ">
                CTO, Robert Consultancy
              </span>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="rounded-lg bg-gradient-to-br from-cyan-200 to-blue-300 p-6  md:p-8"
        >
          <p className="leading-loose text-gray-900 ">
            “I cannot express how impressed I am with the selection and quality
            of toy cars available on this website. My daughter absolutely adores
            her new car. The attention to detail and realistic design make it
            truly special. It has been a great way for us to bond as we create
            racetracks and obstacle courses together. Thank you for bringing
            such joy into our lives!.”
          </p>

          <div className="mt-6 flex items-center">
            <img
              className="h-14 w-14 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />

            <div className="mx-4">
              <h1 className="text-grey-900 font-semibold">Mia Brown</h1>
              <span className="text-sm text-gray-500 ">
                Marketing Manager at MTech
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
