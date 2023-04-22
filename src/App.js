import Layout from "./UI/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";
import Authentication from "./pages/Authentication";
import CreateBlogPost from "./pages/CreateBlogPost";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/auth",
        element: <Authentication />,
      },
      {
        path: "/blog-post/:blogId",
        errorElement: <ErrorPage />,
        element: <BlogPost />,
      },
      {
        path: "/blog-post/create",
        element: <CreateBlogPost />,
      },
    ],
  },
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
