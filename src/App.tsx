import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const App = () => {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
