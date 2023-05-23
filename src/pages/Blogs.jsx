import { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/ContextProvider";

const Blogs = () => {
  document.title = "Blogs | Toy Galaxy";
  const [blogs, setBlogs] = useState([]);
  const [control, setControl] = useState(false);
  const { setBlog } = useContext(AuthContext);

  const handleBlogPost = (blogPost) => {
    setBlog(blogPost);
  };
  useEffect(() => {
    fetch("https://toy-galaxy-server-two.vercel.app/allBlog")
      .then((res) => res.json())
      .then((result) => {
        setBlogs(result);
        setControl(!control);
      })
      .catch((error) => console.log(error));
  }, [control]);
  return (
    <section className="container mx-auto px-6 py-12">
      {/* these is title and subtitle part  */}
      <div className="py-2">
        <h1 className="text-center text-2xl font-semibold capitalize text-gray-800 lg:text-4xl ">
          Toy Tales: <span className="gradient">Inspiring Stories</span>
        </h1>

        <p className="mt-2 text-center text-gray-500 ">
          Explore the Wondrous World of Toys through our Blog
        </p>
      </div>

      {/* these is blog body  */}
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="py-8 lg:-mx-6 lg:flex"
      >
        <div className="lg:w-3/4 lg:px-6">
          <Outlet />
        </div>
        {/* these are right side  */}
        <div className="mt-8 lg:mt-0 lg:w-1/4 lg:px-6">
          <div className="flex justify-center pb-4">
            <Link to="/blogs/createBlog">
              <button className="btn">Create blog</button>
            </Link>
          </div>
          <div>
            {blogs &&
              blogs.map((blog) => (
                <div key={blog._id} className="py-4">
                  <h3 className="capitalize  text-blue-500">Blog Title</h3>
                  <Link
                    onClick={() => handleBlogPost(blog)}
                    to="/blogs"
                    className="mt-2 block font-medium text-gray-700 hover:text-gray-500 hover:underline dark:text-gray-400 "
                  >
                    {blog.title}
                  </Link>
                </div>
              ))}
          </div>

          <hr className="my-6 border-gray-200 dark:border-gray-700" />
        </div>
      </div>
    </section>
  );
};

export default Blogs;
