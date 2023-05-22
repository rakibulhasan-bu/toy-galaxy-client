import { useContext } from "react";
import { AuthContext } from "../contexts/ContextProvider";

const SingleBlog = () => {
  const { blog } = useContext(AuthContext);
  const { title, photoUrl, description } = blog || {};
  console.log(blog);
  return (
    <div>
      <img
        className="h-56 w-full rounded-xl object-cover object-center xl:h-[28rem]"
        src={photoUrl}
        alt=""
        loading="lazy"
      />

      <div>
        <p className="mt-6 text-sm uppercase text-blue-500">Let&apos;s learn</p>

        <h1 className="mt-4 max-w-lg text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
          {title}
        </h1>
      </div>
      <div className="py-4">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SingleBlog;
