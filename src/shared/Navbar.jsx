import { NavLink } from "react-router-dom";
const Navbar = () => {
  const user = {};
  return (
    <div className="container mx-auto flex items-center justify-between">
      <div className="h-20 w-64">
        <NavLink to="/">
          <img
            className="h-full w-full object-cover"
            src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1684397704/Website-assets/Toy%20Galaxy/logo_ymxuub.png"
            alt=""
          />
        </NavLink>
      </div>
      <div className="flex items-center gap-x-8 text-xl">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/allToys">All Toys</NavLink>
        <NavLink to="/myToys">My Toys</NavLink>
        <NavLink to="/addAToy">Add A Toy</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
        <div className="">
          {user?.email ? (
            <img
              src=""
              className="h-8 w-8 cursor-pointer rounded-full bg-grey"
              title="user name"
            />
          ) : (
            <NavLink to="/login">Log in</NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
