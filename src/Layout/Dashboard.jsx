import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaCalendar, FaDiceThree, FaHome, FaPhone, FaShoppingBag, FaShoppingBasket, FaShoppingCart, FaThermometerThreeQuarters, FaWallet } from 'react-icons/fa';
const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">

                    <Outlet ></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-[#D1A054] ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">

                        <li><NavLink to="/dashboard/userHome"><FaHome></FaHome> User Home </NavLink> </li>

                        <li><NavLink  to="/dashboard/reservation"><FaCalendar></FaCalendar> Reservation </NavLink> </li>

                        <li><NavLink to="/dashboard/payment"><FaWallet></FaWallet> Payment Histroy</NavLink> </li>

                        <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart</NavLink> </li>

                        <div className='divider'></div>
                        <li><NavLink to='/'><FaHome></FaHome> Home </NavLink> </li>

                        <li><NavLink to="/menu"><FaDiceThree /> Our Menu</NavLink> </li>
                        <li><NavLink to="/shop"><FaShoppingBasket></FaShoppingBasket> Our Shop </NavLink> </li>
                        <li><NavLink to="/contact"><FaPhone /> Contact </NavLink> </li>

                    </ul>


                </div>
            </div>
        </div>
    );
};

export default Dashboard;