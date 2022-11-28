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
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardLayout from "../Layout/DashboardLayout";
import AddProducts from "../Pages/Dashboard/AddProducts";
import MyProducts from "../Pages/Dashboard/MyProducts";
import MyOrders from "../Pages/Dashboard/MyOrders";
import AllSellers from "../Pages/Dashboard/AllSellers";
import AllBuyers from "../Pages/Dashboard/AllBuyers";
import AddCategory from "../Pages/Dashboard/AddCategory";
import CategoryProducts from "../Pages/CategoryProducts";
import EditProducts from "../Pages/Dashboard/EditProducts";
import Orders from "../Pages/Dashboard/Orders";

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
				path: "/category/:id",
				element: <CategoryProducts />,
			},
			{
				path: "/product-details/:id",
				element: <ProdDetails></ProdDetails>,
			},
		],
	},
	{
		path: "/dashboard",
		element: <DashboardLayout></DashboardLayout>,
		children: [
			{
				path: "/dashboard",
				element: <Dashboard></Dashboard>,
			},
			{
				path: "/dashboard/add-products",
				element: <AddProducts></AddProducts>,
			},
			{
				path: "/dashboard/edit-products/:id",
				element: <EditProducts></EditProducts>,
			},
			{
				path: "/dashboard/my-products",
				element: <MyProducts></MyProducts>,
			},
			{
				path: "/dashboard/my-orders",
				element: <MyOrders></MyOrders>,
			},
			{
				path: "/dashboard/orders",
				element: <Orders></Orders>,
			},
			{
				path: "/dashboard/all-sellers",
				element: <AllSellers></AllSellers>,
			},
			{
				path: "/dashboard/all-buyers",
				element: <AllBuyers></AllBuyers>,
			},
			{
				path: "/dashboard/add-category",
				element: <AddCategory></AddCategory>,
			},
		],
	},
	{
		path: "*",
		element: <ErrorPage></ErrorPage>,
	},
]);

export default router;
