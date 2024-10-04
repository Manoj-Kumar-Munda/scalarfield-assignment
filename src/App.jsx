import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Sidebar from "./components/Sidebar";
import Discover from "./pages/Discover";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Discover />
      }
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
