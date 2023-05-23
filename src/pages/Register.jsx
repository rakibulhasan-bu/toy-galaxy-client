import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/ContextProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Register = () => {
  document.title = "Register | Toy Galaxy";
  const MySwal = withReactContent(Swal);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const { googleSignUp, registerAccount, auth } = useContext(AuthContext);
  const [hide, setHide] = useState(true);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { name, email, password, photoUrl } = data;
    console.log(name, photoUrl);
    registerAccount(email, password)
      .then((result) => {
        reset();
        {
          result &&
            MySwal.fire(
              "Congratulations!",
              `Register successful. Welcome to Toy Galaxy!`,
              "success"
            );
        }
        updateProfile(auth.currentUser, {
          displayName: `${name}`,
          photoURL: `${photoUrl}`,
        })
          .then(() => {
            console.log("profile updated");
            navigate("/", { replace: true });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        error &&
          MySwal.fire({
            icon: "error",
            title: "Oops...",
            text: "Your password or name already-in-use",
          });
      });
  };

  const handleGoogleSignUp = () => {
    googleSignUp()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-tl from-blue-400 to-blue-50 px-4 py-20">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="w-full rounded bg-white p-10  shadow hover:shadow-2xl md:w-1/2 lg:w-2/5"
      >
        <p
          aria-label="Login to your account"
          className="text-3xl font-bold leading-7 text-gray-800"
        >
          Register for an Account
        </p>

        <p className="mt-4 text-sm font-medium leading-none text-gray-500">
          Already have an account?{"   "}
          <Link
            to="/login"
            role="link"
            aria-label="Register here"
            className="gradient cursor-pointer text-sm font-medium"
          >
            Log in here
          </Link>
        </p>
        <button
          onClick={handleGoogleSignUp}
          aria-label="Continue with google"
          className="mt-6 flex w-full items-center justify-center rounded-lg border border-blue-200 px-4 py-3 hover:shadow-lg focus:outline-none"
        >
          <svg
            width={19}
            height={20}
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
              fill="#4285F4"
            />
            <path
              d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
              fill="#34A853"
            />
            <path
              d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
              fill="#FBBC05"
            />
            <path
              d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
              fill="#EB4335"
            />
          </svg>
          <p className="ml-4 font-medium text-gray-700">Register with Google</p>
        </button>
        <div className="flex w-full items-center justify-between py-5">
          <hr className="w-full bg-gray-700" />
          <p className=" px-2.5 text-base font-medium leading-4 text-gray-500">
            OR
          </p>
          <hr className="w-full bg-gray-700  " />
        </div>
        {/* form start here  */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <input
            {...register("name")}
            aria-label="enter name"
            type="text"
            required
            placeholder="Please enter your name"
            className="inputStyle"
          />
          <input
            {...register("email")}
            aria-label="enter email address"
            type="email"
            required
            placeholder="Please enter your email"
            className="inputStyle"
          />
          <div className="relative flex items-center justify-center">
            <input
              {...register("password", {
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  message:
                    "Minimum eight characters, at least one letter and one number",
                },
              })}
              autoComplete="current-password"
              aria-label="enter Password"
              type={hide ? "password" : "text"}
              placeholder="Please enter your password"
              className="inputStyle"
              required
            />
            <div className="absolute right-0 mr-3 mt-1 cursor-pointer text-xl">
              {hide ? (
                <AiOutlineEye onClick={() => setHide((prev) => !prev)} />
              ) : (
                <AiOutlineEyeInvisible
                  onClick={() => setHide((prev) => !prev)}
                />
              )}
            </div>
          </div>
          {/* errors will return when field validation fails  */}

          <span className=" text-xs text-red-500">
            {errors.password?.message}
          </span>

          <input
            {...register("photoUrl")}
            aria-label="enter photoUrl"
            type="url"
            required
            placeholder="Please enter your photo URL"
            className="inputStyle"
          />
          <input
            type="submit"
            value="Register"
            className="w-full cursor-pointer rounded-lg bg-gradient-to-tl from-blue-700 to-cyan-300 px-6 py-2.5 text-center text-xl font-semibold text-white hover:bg-gradient-to-tr focus:outline-none"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
