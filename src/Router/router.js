import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Bolg/Blog";
import Details from "../Pages/Details/Details";
import HomeLayout from "../Pages/HomeLayout/HomeLayout.jsx";

import Skills from "../Pages/Skills/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
      },
      {
        path: "/Skills",
        element: <Skills></Skills>,
      },
      {
        path: "/Blog",
        element: <Blog></Blog>,
      },
      {
        path: "/Detail/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`https://protfolio-server-bay.vercel.app/project/${params.id}`),
      },
    ],
  },
]);
export default router;
