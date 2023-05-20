const SubscribeSection = () => {
  return (
    // <section className="bg-white dark:bg-gray-900">
    //   <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
    //     <div className="mx-auto max-w-screen-md sm:text-center">
    //       <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
    //         Sign up for our newsletter
    //       </h2>
    //       <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 dark:text-gray-400 sm:text-xl md:mb-12">
    //         Stay up to date with the roadmap progress, announcements and
    //         exclusive discounts feel free to sign up with your email.
    //       </p>
    //       <form action="#">
    //         <div className="mx-auto mb-3 max-w-screen-sm items-center space-y-4 sm:flex sm:space-y-0">
    //           <div className="relative w-full">
    //             <label
    //               htmlFor="email"
    //               className="mb-2 hidden text-sm font-medium text-gray-900 dark:text-gray-300"
    //             >
    //               Email address
    //             </label>
    //             <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
    //               <svg
    //                 className="h-5 w-5 text-gray-500 dark:text-gray-400"
    //                 fill="currentColor"
    //                 viewBox="0 0 20 20"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
    //                 <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
    //               </svg>
    //             </div>
    //             <input
    //               className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 pl-10 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:rounded-none sm:rounded-l-lg"
    //               placeholder="Enter your email"
    //               type="email"
    //               id="email"
    //               required=""
    //             />
    //           </div>
    //           <div>
    //             <button
    //               type="submit"
    //               className="bg-primary-700 border-primary-600 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full cursor-pointer rounded-lg border px-5 py-3 text-center text-sm font-medium text-white focus:ring-4 sm:rounded-none sm:rounded-r-lg"
    //             >
    //               Subscribe
    //             </button>
    //           </div>
    //         </div>
    //         <div className="newsletter-form-footer mx-auto max-w-screen-sm text-left text-sm text-gray-500 dark:text-gray-300">
    //           We care about the protection of your data.{" "}
    //           <a
    //             href="#"
    //             className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
    //           >
    //             Read our Privacy Policy
    //           </a>
    //           .
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </section>

    <div className="relative bg-gray-900">
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="-mb-1 w-full text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl sm:text-center md:max-w-2xl">
          <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            The quick, brown fox
            <br className="hidden md:block" />
            jumps over a{" "}
            <span className="relative inline-block">
              lazy dog{" "}
              <div className="bg-deep-purple-accent-400 -mt-3 h-3 w-full" />
            </span>
          </h2>
          <p className="mb-6 text-base font-thin tracking-wide text-gray-300 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae. explicabo. Sed ut perspiciatis unde omnis.
          </p>
          <form className="mb-4 flex w-full flex-col items-center md:flex-row md:px-16">
            <input
              placeholder="Email"
              required
              type="text"
              className="focus:border-deep-purple-accent-200 focus:shadow-outline mb-3 h-12 w-full flex-grow appearance-none rounded border-2 border-gray-400 bg-transparent px-4 text-white transition duration-200 focus:outline-none md:mb-0 md:mr-2"
            />
            <button
              type="submit"
              className="bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline inline-flex h-12 w-full items-center justify-center rounded px-6 font-medium tracking-wide text-white shadow-md transition duration-200 focus:outline-none md:w-auto"
            >
              Subscribe
            </button>
          </form>
          <p className="mb-10 max-w-md text-xs font-thin tracking-wide text-gray-500 sm:mx-auto sm:text-sm md:mb-16">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
          <a
            href="/"
            aria-label="Scroll down"
            className="hover:text-teal-accent-400 hover:border-teal-accent-400 mx-auto flex h-10 w-10 transform items-center justify-center rounded-full border border-gray-400 text-white duration-300 hover:scale-110 hover:shadow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
            >
              <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
