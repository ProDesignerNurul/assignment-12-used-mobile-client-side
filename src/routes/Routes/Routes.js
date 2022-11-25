import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../../DashBoard/DashBoard";
import Main from "../../layouts/Main/Main";
import Login from "../../loginProccess/Login/Login";
import SignUp from "../../loginProccess/SignUp/SignUp";
import About from "../../pages/About/About";
import Category from "../../pages/home/Category/Category";
import Home from "../../pages/home/Home/Home";

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
        element: <DashBoard></DashBoard>
    },
    {
        path: '*',
        element: <div className="text-4xl text-center mt-40 "> <span className="text-red-500 font-bold text-6xl">404</span> Page Not Found, Please Provide A <span className="text-red-500 font-semibold">Valid</span> URL and Then Try Again!!</div>
    }
]);

export default router;