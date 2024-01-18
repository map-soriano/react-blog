import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NewBlog from "./components/NewBlog";
import BlogView from "./components/BlogView";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new",
        element: <NewBlog />,
      },
      {
        path: "/blog/:id",
        element: <BlogView />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
