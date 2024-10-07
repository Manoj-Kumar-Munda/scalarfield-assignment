import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Discover from "./pages/Discover";
import Blog from "./pages/Blog";
import BlogLayout from "./components/BlogLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Discover />,
      },
      {
        path: "blog/:id",
        element: <BlogLayout />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
