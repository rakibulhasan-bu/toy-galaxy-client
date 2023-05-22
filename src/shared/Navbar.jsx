import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/ContextProvider";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const { displayName, photoURL } = user || {};
  const handleLogOut = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`${sticky ? "sticky z-50" : ""}`}>
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
          <NavLink to="/addAToy">Add A Toy</NavLink>
          <NavLink to="/myToys">My Toys</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>

          <div className="">
            {user && user ? (
              <div className="flex items-center gap-x-8">
                <NavLink onClick={handleLogOut} to="/">
                  Log out
                </NavLink>
                <img
                  src={photoURL}
                  className="h-8 w-8 cursor-pointer rounded-full bg-grey"
                  title={displayName}
                />
              </div>
            ) : (
              <NavLink to="/login">Log in</NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
