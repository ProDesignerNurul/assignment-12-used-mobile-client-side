import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import MyOrders from '../../buyerDashboard/MyOrders/MyOrders';
import AllBuyers from '../../DashBoard/AllBuyers';
import AllSellers from '../../DashBoard/AllSellers';
import Dashborad from '../../DashBoard/Dashborad';
import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';
import Main from "../../layouts/Main/Main";
import MyDashboard from '../../layouts/MyDashboard/MyDashboard';
import Login from "../../loginProccess/Login/Login";
import SignUp from "../../loginProccess/SignUp/SignUp";
import About from "../../pages/About/About";
import Article from '../../pages/Article/Article';
import ForOfor from '../../pages/ForOfor/ForOfor';
import Category from "../../pages/home/Category/Category";
import Home from "../../pages/home/Home/Home";
import UsedMobiles from '../../pages/home/UsedMobiles/UsedMobiles';
import AddAproduct from '../../sallerDashboard/AddAproduct/AddAproduct';
import MyProducts from '../../sallerDashboard/MyProducts/MyProducts';
import SallerRoute from '../SallerRoute/SallerRoute';
import AdminRoute from './AdminRoute/AdminRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/article',
                element: <Article></Article>
            },
            {
                path: '/category/:id',
                element: <Category></Category>
            },
            {
                path: '/usedMobiles',
                element: <PrivateRoute><UsedMobiles></UsedMobiles></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyDashboard></MyDashboard>
            },
            {
                path: '/dashboard/allSellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/addAproduct',
                element: <SallerRoute><AddAproduct></AddAproduct></SallerRoute>
            },
            {
                path: '/dashboard/myProducts',
                element: <SallerRoute><MyProducts></MyProducts></SallerRoute>
            },
            {
                path: '/dashboard/myOrders',
                element: <SallerRoute><MyOrders></MyOrders></SallerRoute>
            },
        ]
    },
    {
        path: '*',
        element: <ForOfor></ForOfor>
    }
]);

export default router;