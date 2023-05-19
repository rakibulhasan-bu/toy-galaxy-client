import { useState } from "react";

const TabCategory = () => {
  const [activeStatus, setActiveStatus] = useState(1);
  return (
    <div>
      <div className="relative mx-auto w-11/12 rounded bg-white sm:hidden">
        <div className="absolute inset-0 z-0 m-auto mr-4 h-6 w-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-selector"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#A0AEC0"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <polyline points="8 9 12 5 16 9" />
            <polyline points="16 15 12 19 8 15" />
          </svg>
        </div>
        <select
          aria-label="Selected tab"
          className="form-select relative z-10 block w-full appearance-none rounded border border-gray-300 bg-transparent p-3 text-gray-600"
        >
          <option className="text-sm text-gray-600">inactive </option>
          <option className="text-sm text-gray-600">inactive </option>
          <option selected className="text-sm text-gray-600">
            Active
          </option>
          <option className="text-sm text-gray-600">inactive </option>
          <option className="text-sm text-gray-600">inactive </option>
        </select>
      </div>
      <div className="hidden flex-wrap justify-between rounded bg-white shadow sm:block">
        <div className="-b h-12 pl-5 pr-5 xl:mx-0 xl:w-full">
          <ul className="flex h-full items-center">
            <li
              onClick={() => setActiveStatus(1)}
              className={
                activeStatus == 1
                  ? "mr-8 rounded bg-gray-200 px-4 py-2 text-sm font-normal text-indigo-700"
                  : "mr-10 cursor-pointer py-3 text-sm font-normal text-gray-600 hover:text-indigo-700"
              }
            >
              {activeStatus == 1 ? "Active" : "Inactive"}
            </li>
            <li
              onClick={() => setActiveStatus(2)}
              className={
                activeStatus == 2
                  ? "mr-8 rounded bg-gray-200 px-4 py-2 text-sm font-normal text-indigo-700"
                  : "mr-10 cursor-pointer py-3 text-sm font-normal text-gray-600 hover:text-indigo-700"
              }
            >
              {activeStatus == 2 ? "Active" : "Inactive"}
            </li>
            <li
              onClick={() => setActiveStatus(3)}
              className={
                activeStatus == 3
                  ? "mr-8 rounded bg-gray-200 px-4 py-2 text-sm font-normal text-indigo-700"
                  : "mr-10 cursor-pointer py-3 text-sm font-normal text-gray-600 hover:text-indigo-700"
              }
            >
              {activeStatus == 3 ? "Active" : "Inactive"}
            </li>
            <li
              onClick={() => setActiveStatus(4)}
              className={
                activeStatus == 4
                  ? "mr-8 rounded bg-gray-200 px-4 py-2 text-sm font-normal text-indigo-700"
                  : "mr-10 cursor-pointer py-3 text-sm font-normal text-gray-600 hover:text-indigo-700"
              }
            >
              {activeStatus == 4 ? "Active" : "Inactive"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TabCategory;
