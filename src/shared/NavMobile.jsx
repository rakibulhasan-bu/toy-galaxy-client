// import nav data
import { useContext } from "react";

// import icons
import { CgClose } from "react-icons/cg";
import { AuthContext } from "../contexts/ContextProvider";
import { NavLink } from "react-router-dom";

const NavMobile = () => {
  const { setMobileNav, user, logOut } = useContext(AuthContext);
  const { displayName, photoURL } = user || {};
  const handleLogOut = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  return (
    <nav className="flex h-full w-80 items-center justify-center bg-gradient-to-br from-cyan-200 via-sky-400 to-blue-500">
      {/* close button  */}
      <div
        onClick={() => setMobileNav(false)}
        className="absolute left-2 top-2 cursor-pointer "
      >
        <CgClose className="text-3xl" />
      </div>
      {/* nav list  */}
      <div className="-mt-40 flex flex-col items-center gap-y-6 text-xl text-white lg:hidden">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/allToys">All Toys</NavLink>
        <NavLink to="/addAToy">Add A Toy</NavLink>
        <NavLink to="/myToys">My Toys</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>

        <div className="">
          {user && user ? (
            <div className="flex flex-col-reverse items-center gap-y-6">
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
    </nav>
  );
};

export default NavMobile;
