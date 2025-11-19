import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./ui/Layout";
import Home from "./page/Home";
import Project from "./page/Project";
import Service from "./page/Service";
import Education from "./page/Education";
import Resume from "./page/Resume";
import ProjectDetails from "./Components/ProjectDetails";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/project",
          element: <Project />,
        },
        {
          path: "/service",
          element: <Service />,
        },
        {
          path: "/education",
          element: <Education />,
        },
        {
          path: "/Resume",
          element: <Resume />,
        },
        {
          path: "/details/:id",
          element: <ProjectDetails />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}
export default App;
