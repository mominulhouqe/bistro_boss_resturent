import Main from "../Layout/Main";

import {createBrowserRouter} from "react-router-dom"
import Home from "../pages/Home/Home/Home";
import OurMenu from "../pages/Menu/OurMenu/OurMenu";
import OurShop from "../pages/OurShop/OurShop/OurShop";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element:<Home />

            },
            {
                path:"menu",
                element:<OurMenu />
            },
            {
                path:"shop/:category",
                element:<OurShop />
            },
            {
                path:"shop",
                element:<OurShop />
            },
         
            {
                path:"login",
                element:<Login />
            },
            {
                path:"register",
                element:<Register />
            },
        ]
    }
])

export default router