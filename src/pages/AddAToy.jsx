import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/ContextProvider";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const AddAToy = () => {
  document.title = "Add A Toy - Toy Galaxy";
  const { user } = useContext(AuthContext);
  const MySwal = withReactContent(Swal);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/addAToy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          MySwal.fire(
            "Congratulations!",
            "Your Toy has been successfully added to the marketplace.",
            "success"
          );
        }
        reset();
      })
      .catch((error) => {
        MySwal.fire({
          icon: "error",
          title: "Oops...",
          text: { error },
        });
      });
  };
  return (
    <>
      <div className="h-96 w-full bg-gradient-to-br from-cyan-200 to-blue-950">
        <div className="flex w-full items-center justify-center">
          <div className="absolute top-40 w-3/5 rounded-lg bg-white px-8 py-12 shadow-xl lg:px-20">
            <p className="pb-6 text-center text-xl font-bold leading-7 text-gray-700 md:text-3xl">
              Add Your Products to
              <span className="gradient font-bold"> Toy Galaxy!</span>
            </p>

            {/* form start here  */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* this are hidden div  */}
              <div className="hidden">
                <input
                  {...register("sellerName")}
                  type="text"
                  value={user && user?.displayName}
                />
                <input
                  {...register("email")}
                  type="email"
                  value={user && user?.email}
                />
              </div>
              <div className="grid grid-cols-1 gap-x-6 lg:grid-cols-2">
                <input
                  {...register("name")}
                  aria-label="enter name"
                  type="text"
                  required
                  placeholder="Product name"
                  className="inputStyle"
                />
                <input
                  {...register("price", { valueAsNumber: true })}
                  aria-label="Product price"
                  type="number"
                  required
                  placeholder="Product price"
                  className="inputStyle"
                />
              </div>
              <div className="grid grid-cols-1 gap-x-6 lg:grid-cols-2">
                <input
                  {...register("rating", { valueAsNumber: true })}
                  aria-label="enter rating"
                  type="number"
                  required
                  min="0"
                  max="5"
                  placeholder="Product rating"
                  className="inputStyle"
                />
                <input
                  {...register("quantity", { valueAsNumber: true })}
                  aria-label="available quantity"
                  type="number"
                  required
                  placeholder="Product quantity"
                  className="inputStyle"
                />
              </div>
              <div className="grid grid-cols-1 gap-x-6 lg:grid-cols-2">
                <input
                  {...register("photoUrl")}
                  aria-label="enter photoUrl"
                  type="url"
                  required
                  placeholder="Product Photo URL"
                  className="inputStyle"
                />
                <select className="inputStyle" {...register("subCategory")}>
                  <option value="Speedy Racers">Speedy Racers</option>
                  <option value="Monster Machines">Monster Machines</option>
                  <option value="Rescue Heroes">Rescue Heroes</option>
                  <option value="Everyday City Cars">Everyday City Cars</option>
                  <option value="Construction Crew">Construction Crew</option>
                </select>
              </div>
              <div className="">
                <textarea
                  {...register("description")}
                  required
                  aria-label="product description"
                  placeholder="Product detail description"
                  className="inputStyle resize-none"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <input
                type="submit"
                value="SUBMIT"
                className="btn mt-9 w-full cursor-pointer font-semibold text-white  focus:outline-none"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="py-72"></div>
    </>
  );
};

export default AddAToy;
