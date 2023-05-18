import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AllToys from "../pages/AllToys";
import MyToys from "../pages/MyToys";
import AddAToy from "../pages/AddAToy";
import Blogs from "../pages/Blogs";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allToys",
        element: <AllToys />,
      },
      {
        path: "/myToys",
        element: <MyToys />,
      },
      {
        path: "/addAToy",
        element: <AddAToy />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
