import Main from "../Layout/Main";

import {createBrowserRouter} from "react-router-dom"
import Home from "../pages/Home/Home/Home";
import OurMenu from "../pages/Menu/OurMenu/OurMenu";

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
                path:"menu",
                element:<OurMenu />
            },
            {
                path:"menu",
                element:<OurMenu />
            },
            {
                path:"menu",
                element:<OurMenu />
            },
        ]
    }
])

export default router