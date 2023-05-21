/* eslint-disable react/prop-types */
const UpdateToyModal = ({ setShowModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex w-full justify-center">
      <div className="absolute inset-0 z-0 h-full w-full bg-gray-900" />
      <div className="container mx-auto">
        <div className="flex h-full w-full items-center justify-center">
          {/* main div start here  */}
          <div className="fixed w-10/12 overflow-y-auto rounded-md bg-white shadow sm:h-auto md:w-8/12 lg:w-1/2 2xl:w-2/5">
            <div className="flex items-center justify-between rounded-t-md bg-cyan-100 px-4 py-4 md:px-8 md:py-2">
              <p className="text-lg font-semibold">
                Update existing <span className="gradient">Toy data</span>
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="focus:outline-none"
              >
                <svg
                  width={30}
                  height={30}
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 7L7 21"
                    stroke="#4A5568"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 7L21 21"
                    stroke="#4A5568"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="px-4 pb-7 pt-6 md:px-10 md:pb-4 md:pt-12">
              <div className="flex items-center justify-center">
                <div className="flex h-40 w-40 items-center justify-center rounded-md bg-gray-100 p-16">
                  <svg
                    width={36}
                    height={36}
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.5 12H22.515"
                      stroke="#94A3B8"
                      strokeWidth="2.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25.5 6H10.5C8.01472 6 6 8.01472 6 10.5V25.5C6 27.9853 8.01472 30 10.5 30H25.5C27.9853 30 30 27.9853 30 25.5V10.5C30 8.01472 27.9853 6 25.5 6Z"
                      stroke="#94A3B8"
                      strokeWidth="2.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 22.4999L12 16.4999C12.6841 15.8417 13.4601 15.4951 14.25 15.4951C15.0399 15.4951 15.8159 15.8417 16.5 16.4999L24 23.9999"
                      stroke="#94A3B8"
                      strokeWidth="2.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 20.9999L22.5 19.4999C23.1841 18.8417 23.9601 18.4951 24.75 18.4951C25.5399 18.4951 26.3159 18.8417 27 19.4999L30 22.4999"
                      stroke="#94A3B8"
                      strokeWidth="2.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <form className="mt-11">
                <div className="flex items-center space-x-9">
                  <input
                    placeholder="Full Name"
                    className="w-1/2 rounded border border-gray-200 bg-white px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 focus:outline-none"
                  />
                  <input
                    placeholder="Age"
                    type="number"
                    min={0}
                    className="w-1/2 rounded border border-gray-200 bg-white px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 focus:outline-none"
                  />
                </div>
                <div className="mt-8 flex items-center space-x-9">
                  <input
                    placeholder="Email"
                    type="email"
                    className="w-1/2 rounded border border-gray-200 bg-white px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 focus:outline-none"
                  />
                  <div className="w-1/2 rounded border border-gray-200 bg-white px-3 py-2.5">
                    <select className="w-full text-sm text-gray-500 focus:outline-none">
                      <option selected disabled value>
                        Category
                      </option>
                      <option>Designer</option>
                      <option>Developer</option>
                    </select>
                  </div>
                </div>
                <div className="mt-8">
                  <textarea
                    placeholder="Description"
                    className="h-24 w-full resize-none overflow-y-auto rounded border border-gray-200 py-3 pl-3 focus:outline-none"
                    defaultValue={""}
                  />
                </div>
              </form>
              <div className="mt-9 flex items-center justify-between">
                <button
                  onClick={() => setShowModal(false)}
                  className="rounded bg-gray-400 px-6 py-3 text-sm text-white shadow hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button className="rounded bg-indigo-700 px-6 py-3 text-sm text-white shadow hover:bg-opacity-80">
                  Add User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateToyModal;
