import Lottie from "react-lottie";
import lottieFile from "./../assets/page404.json";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  document.title = "Error page | Toy Galaxy";
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieFile,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="container mx-auto">
      <div className="mx-auto max-w-4xl ">
        <Lottie options={defaultOptions} height={500} />
      </div>
      <div className="my-2 flex items-center justify-center">
        <Link
          to="/"
          className="mb-2 mr-2 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-6 py-2.5 text-center text-2xl font-semibold text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 dark:focus:ring-blue-800"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
