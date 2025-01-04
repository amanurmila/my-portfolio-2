import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ProjectDetails from "../Components/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/project/:id",
    loader: () => fetch("/projects.json"),
    element: <ProjectDetails />,
  },
]);
