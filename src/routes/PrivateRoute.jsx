/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../contexts/ContextProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <>
        <div className="bg-gray-100">
          <div className="bg-white px-4 py-12">
            <div className="mx-auto flex justify-center">
              <div className="relative">
                <div className="h-[160px] w-[160px] rounded-full border border-indigo-400" />
                <div className="absolute right-2.5 top-2.5 h-[140px] w-[140px] rounded-full border border-indigo-400" />
                <div>
                  <svg
                    className="absolute right-[26px] top-[22px] animate-spin"
                    width={113}
                    height={113}
                    viewBox="0 0 113 113"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M56.7631 110.374C46.061 110.374 35.5993 107.2 26.7008 101.255C17.8023 95.3088 10.8668 86.8579 6.77128 76.9704C2.67576 67.083 1.60419 56.2031 3.69207 45.7066C5.77994 35.2102 10.9335 25.5686 18.501 18.001C26.0686 10.4335 35.7102 5.27994 46.2066 3.19207C56.7031 1.10419 67.583 2.17576 77.4704 6.27128C87.3579 10.3668 95.8088 17.3023 101.755 26.2008C107.7 35.0993 110.874 45.561 110.874 56.2631"
                      stroke="#4338CA"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeDasharray="16 16"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-base text-gray-600">
              Your Request Is Being Loaded, Please Wait
            </p>
          </div>
        </div>
      </>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
