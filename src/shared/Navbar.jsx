import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/ContextProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  const photoUrl = `"${user?.photoURL}"`;
  console.log(("src", photoUrl));
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
        <NavLink to="/blogs">Blogs</NavLink>

        <div className="">
          {user ? (
            <div className="flex items-center gap-x-8">
              <NavLink to="/addAToy">Add A Toy</NavLink>
              <NavLink to="/myToys">My Toys</NavLink>
              <NavLink onClick={handleLogOut} to="/">
                Log out
              </NavLink>
              <img
                src={photoUrl}
                className="h-8 w-8 cursor-pointer rounded-full bg-grey"
                title={user?.displayName}
              />
            </div>
          ) : (
            <NavLink to="/login">Log in</NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
