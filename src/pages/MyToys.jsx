import { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/ContextProvider";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import UpdateToyModal from "../components/UpdateToyModal";

const MyToys = () => {
  document.title = "My Toys - Toy Galaxy";
  const { user } = useContext(AuthContext);
  const { email, displayName, photoURL } = user || {};
  const [myToys, setMyToys] = useState([]);
  const [updateToy, setUpdateToy] = useState({});
  const [control, setControl] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const MySwal = withReactContent(Swal);

  const handleModal = (myToy) => {
    setShowModal(true);
    setUpdateToy(myToy);
  };

  const handleToyUpdate = (updatedToy) => {
    setShowModal(false);
    fetch(
      `https://toy-galaxy-server-two.vercel.app/updateToyInfo/${updatedToy.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedToy),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          setControl(true);
          MySwal.fire(
            "Update successful!",
            "Toy has been updated successfully.",
            "success"
          );
        }
      })
      .catch((error) => console.log(error));
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchText = form.search.value;
    fetch(
      `https://toy-galaxy-server-two.vercel.app/searchByToyName/${searchText}`
    )
      .then((res) => res.json())
      .then((result) => {
        setMyToys(result);
        form.reset();
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch(`https://toy-galaxy-server-two.vercel.app/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((result) => setMyToys(result))
      .catch((error) => console.log(error));
  }, [user, control]);

  const handleDelete = (id) => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-galaxy-server-two.vercel.app/deleteToy/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount) {
              setControl((prev) => !prev);
              MySwal.fire(
                "Delete successful!",
                "Toy has been deleted successfully.",
                "success"
              );
            }
          });
      }
    });
  };
  return (
    <section className="container mx-auto px-4 py-12">
      {showModal && (
        <UpdateToyModal
          updateToy={updateToy}
          handleToyUpdate={handleToyUpdate}
          setShowModal={setShowModal}
        />
      )}
      {/* these is title and subtitle part  */}
      <div className="py-2">
        <h1 className="text-center text-2xl font-semibold capitalize text-gray-800 lg:text-4xl ">
          Toy <span className="gradient">Management</span>
        </h1>

        <p className="mt-2 text-center text-gray-500 ">
          Effortlessly Manage and Update Your Toy Listings
        </p>
      </div>

      {/* these is upper heading part  */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white">
            You added Products:
          </h2>

          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-600 dark:bg-gray-800 dark:text-blue-400">
            {myToys.length} Toys
          </span>
        </div>
        <form
          onSubmit={handleSearch}
          className="flex max-w-screen-sm space-y-0"
        >
          <input
            className="inputStyle rounded-e-none py-2 pl-4"
            placeholder="Search by toy name"
            type="text"
            name="search"
            required
          />
          <input
            type="submit"
            value="Search"
            className="btn cursor-pointer rounded-s-none px-3 py-1"
          />
        </form>
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
                      className="px-4 py-3 text-left font-normal text-gray-600"
                    >
                      <p>Toy Name</p>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left font-normal text-gray-600"
                    >
                      <p>Toy Image</p>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3 text-left font-normal text-gray-600"
                    >
                      <p>Sub-category</p>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3 text-left font-normal text-gray-600"
                    >
                      Price
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3 text-left font-normal text-gray-600"
                    >
                      Rating
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
                  {myToys &&
                    myToys.map((myToy) => (
                      <tr key={myToy._id}>
                        {/* seller name document here  */}
                        <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-700">
                          <div className="flex items-center gap-x-2">
                            <img
                              className="h-10 w-10 rounded-full object-cover"
                              src={photoURL}
                              alt=""
                              loading="lazy"
                            />
                            <div>
                              <h2 className="font-medium text-gray-800 dark:text-white ">
                                {displayName}
                              </h2>
                              <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                                {email}
                              </p>
                            </div>
                          </div>
                        </td>
                        {/* toy name document here  */}
                        <td className="whitespace-nowrap px-4 py-4 text-gray-600">
                          {myToy.name}
                        </td>
                        {/* toy image document here  */}
                        <td className="whitespace-nowrap px-4 py-4 text-gray-600">
                          <img
                            className="h-16 w-16 rounded-md object-cover"
                            src={myToy.photoUrl}
                            alt=""
                            loading="lazy"
                          />
                        </td>
                        {/* sub category document here  */}
                        <td className="whitespace-nowrap px-4 py-4 text-gray-600">
                          {myToy.subCategory}
                        </td>
                        {/* price document here  */}
                        <td className="whitespace-nowrap px-4 py-4 text-gray-600">
                          ${myToy.price}
                        </td>
                        {/* Rating document here  */}
                        <td className="whitespace-nowrap px-4 py-4 text-center text-gray-600">
                          {myToy.rating}
                        </td>
                        {/* available Quantity document here  */}
                        <td className="whitespace-nowrap px-4 py-4 text-center text-gray-600">
                          {myToy.quantity}
                        </td>
                        {/* view details button here  */}
                        <td className="whitespace-nowrap px-4 py-4 text-sm">
                          <div className="flex items-center gap-x-6">
                            <button
                              onClick={() => handleDelete(myToy._id)}
                              className="text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none "
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </button>

                            <button
                              onClick={() => handleModal(myToy)}
                              className="text-gray-500 transition-colors duration-200 hover:text-yellow-500 focus:outline-none "
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
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
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyToys;
