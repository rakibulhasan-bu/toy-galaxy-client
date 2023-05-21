/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

const UpdateToyModal = ({ setShowModal, updateToy, handleToyUpdate }) => {
  const { _id, description, photoUrl, quantity, price } = updateToy || {};

  const { register, handleSubmit } = useForm();

  return (
    <div className="fixed inset-0 z-50 flex w-full justify-center">
      <div className="absolute inset-0 z-0 h-full w-full bg-gray-900" />
      <div className="container mx-auto">
        <div className="flex h-full w-full items-center justify-center">
          {/* main div start here  */}
          <div className="fixed w-10/12 overflow-y-auto rounded-md bg-white shadow sm:h-auto md:w-8/12 lg:w-1/2 2xl:w-2/5">
            <div className="flex items-center justify-between rounded-t-md bg-cyan-100 px-4 py-4 md:px-8 md:py-2">
              <p className="text-lg font-semibold">
                Update existing <span className="gradient">Toy info</span>
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
            {/* main body here  */}

            <div className="px-4 py-4 md:px-8 md:py-6">
              <div className="mx-auto flex h-60 w-4/5 items-center justify-center rounded-lg">
                <img
                  className="h-full w-full rounded-lg object-cover object-center"
                  src={photoUrl}
                  alt="car image"
                  loading="lazy"
                />
              </div>

              {/* form start here  */}
              <form
                onSubmit={handleSubmit(handleToyUpdate)}
                className="space-y-4 pt-4"
              >
                <div className="grid grid-cols-1 gap-x-6 lg:grid-cols-2">
                  <input
                    {...register("price", { valueAsNumber: true })}
                    aria-label="Product price"
                    type="number"
                    defaultValue={price}
                    required
                    placeholder="Product price"
                    className="inputStyle py-2"
                  />
                  <input
                    {...register("quantity", { valueAsNumber: true })}
                    aria-label="available quantity"
                    type="number"
                    defaultValue={quantity}
                    required
                    placeholder="Product quantity"
                    className="inputStyle py-2"
                  />
                  <input
                    {...register("id")}
                    type="text"
                    value={_id}
                    className="hidden"
                  />
                </div>

                <div className="">
                  <textarea
                    {...register("description")}
                    defaultValue={description}
                    required
                    aria-label="product description"
                    placeholder="Product detail description"
                    className="inputStyle resize-none"
                    cols="30"
                    rows="5"
                  ></textarea>
                </div>
                <input
                  type="submit"
                  value="SUBMIT"
                  className="btn w-full cursor-pointer py-2 font-semibold text-white  focus:outline-none"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateToyModal;
