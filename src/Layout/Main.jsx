import React from 'react';
import Home from '../pages/Home/Home/Home';
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;