import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import About from "../../pages/About/About";
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
                path: '/about',
                element: <About></About>
            }
        ]
    }
]);

export default router;