import { Route, Routes, BrowserRouter, createBrowserRouter, createRoutesFromElements, RouterProvider, Navigate } from "react-router-dom";
import Layout from "../Layouts";
import { GuardAuth } from "../Middleware";
import Register from "../Pages/auth/register/form";
import Dashboard from "../Pages/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}  >
      <Route path="login" element={<GuardAuth component={"Login"}></GuardAuth>} />
      <Route path="" element={<Dashboard />} />
      <Route path="register" element={<Register/>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

// const App = () => {
//   return (
//     <BrowserRouter basename="/">
//       <Layout>
//         <Routes>
//           <Route
//             path="login"
//             element={<GuardAuth component={"Login"}></GuardAuth>}
//           />
//           <Route path="dashboard" element={<Dashboard />} />
//         </Routes>
//       </Layout>
//     </BrowserRouter>
//   );
// };

export default App;
