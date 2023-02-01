// router dashboard and login

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Login from "../Pages/auth/login";
import Dashboard from "../Pages/Dashboard";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

function AppRouter() {
  return (
    <RouterProvider router={BrowserRouter} />
  );
}

export default AppRouter;
