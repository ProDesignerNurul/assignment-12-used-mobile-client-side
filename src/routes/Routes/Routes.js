import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../../DashBoard/DashBoard";
import Main from "../../layouts/Main/Main";
import Login from "../../loginProccess/Login/Login";
import SignUp from "../../loginProccess/SignUp/SignUp";
import About from "../../pages/About/About";
import Category from "../../pages/home/Category/Category";
import Home from "../../pages/home/Home/Home";
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
                path: '/category/:id',
                element: <Category></Category>
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
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>
    },
    {
        path: '*',
        element: <div className='text-center mt-20'> <span className='text-6xl text-red-500'>404</span> page not found, please enter valid URL </div>
    }
]);

export default router;