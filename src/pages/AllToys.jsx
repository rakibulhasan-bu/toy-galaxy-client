import { Link } from "react-router-dom";

const AllToys = () => {
  document.title = "All Toys - Toy Galaxy";
  return (
    <section className="container mx-auto px-4 py-12">
      {/* these is title and subtitle part  */}
      <div className="py-2">
        <h1 className="text-center text-2xl font-semibold capitalize text-gray-800 lg:text-4xl ">
          All Toys <span className="gradient">Collection</span>
        </h1>

        <p className="mt-2 text-center text-gray-500 ">
          Explore a Wide Variety of Toys Available for Purchase
        </p>
      </div>

      {/* these is upper heading part  */}
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 dark:text-white">
          Total Products:
        </h2>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-600 dark:bg-gray-800 dark:text-blue-400">
          100 Toys
        </span>
      </div>

      {/* these is main table section  */}
      <div className="mt-6 flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                {/* table header  */}
                <thead className="bg-gray-50 ">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3 text-center font-normal text-gray-600"
                    >
                      <p>Seller Name</p>
                    </th>

                    <th
                      scope="col"
                      className="px-8 py-3 text-left font-normal text-gray-600"
                    >
                      <p>Toy Name</p>
                    </th>

                    <th
                      scope="col"
                      className="px-12 py-3 text-left font-normal text-gray-600"
                    >
                      <p>Sub-category</p>
                    </th>

                    <th
                      scope="col"
                      className="px-12 py-3 text-left font-normal text-gray-600"
                    >
                      Price
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3 text-left font-normal text-gray-600"
                    >
                      Available Quantity
                    </th>

                    <th scope="col" className="relative px-4 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                {/* table body here  */}
                <tbody className="divide-y divide-gray-200 bg-white">
                  {/* table body row here  */}
                  <tr>
                    {/* seller name document here  */}
                    <td className="whitespace-nowrap py-4 pl-10 font-medium text-gray-700">
                      <div className="inline-flex items-center gap-x-3">
                        <img
                          className="h-10 w-10 rounded-full object-cover"
                          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                          alt=""
                        />

                        <h2 className="font-medium text-gray-800">
                          Arthur Melo
                        </h2>
                      </div>
                    </td>
                    {/* toy name document here  */}
                    <td className="whitespace-nowrap px-8 py-4 text-gray-600">
                      <p>Monster Crusher</p>
                    </td>
                    {/* sub category document here  */}
                    <td className="whitespace-nowrap px-12 py-4 text-gray-600">
                      Design Director
                    </td>
                    {/* price document here  */}
                    <td className="whitespace-nowrap px-12 py-4 text-gray-600">
                      $599
                    </td>
                    {/* available Quantity document here  */}
                    <td className="whitespace-nowrap px-4 py-4 text-gray-600">
                      <p>45</p>
                    </td>
                    {/* view details button here  */}
                    <td className="whitespace-nowrap px-4 py-4 text-sm">
                      <button className="btn rounded-md px-2.5 py-1.5 text-sm">
                        <Link to="/">View details</Link>
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-700">
                      <div className="inline-flex items-center gap-x-3">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:ring-offset-gray-900"
                        />

                        <div className="flex items-center gap-x-2">
                          <img
                            className="h-10 w-10 rounded-full object-cover"
                            src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                            alt=""
                          />
                          <div>
                            <h2 className="font-medium text-gray-800 dark:text-white ">
                              Amelia. Anderson
                            </h2>
                            <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                              @ameliaanderson
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-12 py-4 text-sm font-medium text-gray-700">
                      <div className="inline-flex items-center gap-x-2 rounded-full bg-emerald-100/60 px-3 py-1 dark:bg-gray-800">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                        <h2 className="text-sm font-normal text-emerald-500">
                          Active
                        </h2>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                      Lead Developer
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
                      ameliaanderson@example.com
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm">
                      <div className="flex items-center gap-x-2">
                        <p className="rounded-full bg-indigo-100/60 px-3 py-1 text-xs text-indigo-500 dark:bg-gray-800">
                          Design
                        </p>
                        <p className="rounded-full bg-blue-100/60 px-3 py-1 text-xs text-blue-500 dark:bg-gray-800">
                          Product
                        </p>
                        <p className="rounded-full bg-pink-100/60 px-3 py-1 text-xs text-pink-500 dark:bg-gray-800">
                          Marketing
                        </p>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm">
                      <div className="flex items-center gap-x-6">
                        <button className="text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none dark:text-gray-300 dark:hover:text-red-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-5 w-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>

                        <button className="text-gray-500 transition-colors duration-200 hover:text-yellow-500 focus:outline-none dark:text-gray-300 dark:hover:text-yellow-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-5 w-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* these is for pagination  */}
      <div className="mt-6 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5 rtl:-scale-x-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>

          <span>previous</span>
        </a>

        <div className="hidden items-center gap-x-3 lg:flex">
          <a
            href="#"
            className="rounded-md bg-blue-100/60 px-2 py-1 text-sm text-blue-500 dark:bg-gray-800"
          >
            1
          </a>
          <a
            href="#"
            className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            2
          </a>
          <a
            href="#"
            className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            3
          </a>
          <a
            href="#"
            className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            ...
          </a>
          <a
            href="#"
            className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            12
          </a>
          <a
            href="#"
            className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            13
          </a>
          <a
            href="#"
            className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            14
          </a>
        </div>

        <a
          href="#"
          className="flex items-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
        >
          <span>Next</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5 rtl:-scale-x-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default AllToys;
