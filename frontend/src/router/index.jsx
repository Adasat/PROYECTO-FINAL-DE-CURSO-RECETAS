import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../layouts/Layout";
import App from "../App";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import NewRecipes from "../pages/NewRecipes";
import LoginForm from "../components/LoginForm/LoginForm";
import Recipes from "../pages/Recipes/Recipes";
import AboutUs from "../components/AboutUs/AboutUs";
import Profile from "../pages/profile/Profile";

function authLoader() {
  if (!localStorage.getItem("token")) return redirect("/");
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/register",
        element: <RegisterForm />,
        //loader: () => authLoader()
      },
      {
        path: "/recipes",
        element: <Recipes />,
        //loader: () => authLoader()
      },
      {
        path: "/login",
        element: <LoginForm />,
        //loader: () => authLoader()
      },
      {
        path: "/newrecipe",
        element: <NewRecipes />,
      },
      {
        path: "/aboutus",
        element: <AboutUs/>
      },
      {
        path: "/myprofile",
        element: <Profile />,
      },
    ],
  },
]);
