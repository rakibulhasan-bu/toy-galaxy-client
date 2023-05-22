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
import PrivateRoute from "./PrivateRoute";
import SingleToy from "../pages/SingleToy";
import SingleBlog from "../components/SingleBlog";
import CreateBlog from "../components/CreateBlog";

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
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/addAToy",
        element: (
          <PrivateRoute>
            <AddAToy />
          </PrivateRoute>
        ),
      },
      {
        path: "/singleToy/:id",
        element: (
          <PrivateRoute>
            <SingleToy />
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs />,
        children: [
          {
            path: "/blogs",
            element: <SingleBlog />,
          },
          {
            path: "/blogs/createBlog",
            element: <CreateBlog />,
          },
        ],
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
