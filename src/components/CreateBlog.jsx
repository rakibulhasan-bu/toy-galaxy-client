import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const CreateBlog = () => {
  const MySwal = withReactContent(Swal);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("https://toy-galaxy-server-two.vercel.app/addABlog", {
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
            "Your blog has been successfully added to the Blog list.",
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
    <div className=" rounded-lg bg-white px-8 py-8 shadow-xl lg:px-20">
      {/* form start here  */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* <div className="grid grid-cols-1 gap-x-6 lg:grid-cols-2">
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
        </div> */}
        <div className="grid grid-cols-1 gap-x-6 lg:grid-cols-2">
          <input
            {...register("title")}
            aria-label="enter title"
            type="text"
            required
            placeholder="Product title"
            className="inputStyle"
          />
          <input
            {...register("photoUrl")}
            aria-label="enter photoUrl"
            type="url"
            required
            placeholder="Product Photo URL"
            className="inputStyle"
          />
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
  );
};

export default CreateBlog;
