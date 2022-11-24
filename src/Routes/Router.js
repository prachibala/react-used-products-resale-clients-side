import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Error/ErrorPage";
import SignIn from "../Login/SignIn";
import SignUp from "../Login/SignUp/SignUp";
import Blogs from "../Pages/Blogs";
import AllProducts from "../Pages/AllProducts";
import ProdDetails from "../Pages/ProdDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/signin",
                element: <SignIn></SignIn>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>,
            },
            {
                path: "/all-products",
                element: <AllProducts></AllProducts>,
            },
            {
                path: "/product-details",
                element: <ProdDetails></ProdDetails>,
            },
        ],
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    },
]);

export default router;
