import Main from "../Layout/Main";

import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home/Home/Home";
import OurMenu from "../pages/Menu/OurMenu/OurMenu";
import OurShop from "../pages/OurShop/OurShop/OurShop";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/DashBoard/MyCart/MyCart";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />

            },
            {
                path: "menu",
                element: <OurMenu />
            },
            {
                path: "shop/:category",
                element: <OurShop />
            },
            {
                path: "shop",
                element: <OurShop />
            },

            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard />,
        children: [
            {
                path: 'mycart',
                element: <MyCart />
            }
        ]
    },

])

export default router