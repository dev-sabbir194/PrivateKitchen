import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./layout/Main.jsx";
import Home from "./pages/Home/Home.jsx";
import AllRecipe from "./component/AllRecipe/AllRecipe.jsx";
import Blog from "./component/Blog/Blog.jsx";
import Chef from "./component/Chef/Chef.jsx";
import Recipe from "./component/Recipe/Recipe.jsx";
import Login from "./pages/Login/Login/Login.jsx";
import Registration from "./pages/Login/Registration/Registration.jsx";
import NotFoundPage from "./NotFoundPage/NotFoundPage.jsx";
import OurChefGoals from "./pages/OurChefGoals/OurChefGoals.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
      {
        path: "/home",
        element: <App></App>,
      },
   
      {
        path: "/allrecipes",
        element: <AllRecipe></AllRecipe>,
      },
      {
        path: "/chef",
        element: <Chef></Chef>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/recipe/:id",
        element: <Recipe></Recipe>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/ourchefgoal",
        element: <OurChefGoals></OurChefGoals>,
      },

      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
