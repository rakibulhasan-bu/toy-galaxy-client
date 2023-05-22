import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/ContextProvider";

const AllToys = () => {
  document.title = "All Toys - Toy Galaxy";
  const { user } = useContext(AuthContext);
  const { photoURL } = user || {};
  const [allToys, setAllToys] = useState([]);
  // const { photoURL } = user;
  useEffect(() => {
    fetch("https://toy-galaxy-server-two.vercel.app/allToys/all")
      .then((res) => res.json())
      .then((result) => setAllToys(result))
      .catch((error) => console.log(error));
  }, []);
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
          {allToys.length} Toys
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
                  {allToys &&
                    allToys.map((toys) => {
                      return (
                        <tr key={toys._id}>
                          {/* seller name document here  */}
                          <td className="whitespace-nowrap py-4 pl-10 font-medium text-gray-700">
                            <div className="inline-flex items-center gap-x-3">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={photoURL}
                                alt=""
                              />

                              <h2 className="font-medium text-gray-800">
                                {toys.sellerName}
                              </h2>
                            </div>
                          </td>
                          {/* toy name document here  */}
                          <td className="whitespace-nowrap px-8 py-4 text-gray-600">
                            {toys.name}
                          </td>
                          {/* sub category document here  */}
                          <td className="whitespace-nowrap px-12 py-4 text-gray-600">
                            {toys.subCategory}
                          </td>
                          {/* price document here  */}
                          <td className="whitespace-nowrap px-12 py-4 text-gray-600">
                            ${toys.price}
                          </td>
                          {/* available Quantity document here  */}
                          <td className="whitespace-nowrap px-4 py-4 text-gray-600">
                            {toys.quantity}
                          </td>
                          {/* view details button here  */}
                          <td className="whitespace-nowrap px-4 py-4 text-sm">
                            <button className="btn rounded-md px-2.5 py-1.5 text-sm">
                              <Link to={`/singleToy/${toys._id}`}>
                                View details
                              </Link>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
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
