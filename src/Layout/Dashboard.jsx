import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBook, FaCalendar, FaDiceThree, FaHome, FaPhone, FaShoppingBag, FaShoppingBasket, FaShoppingCart, FaThermometerThreeQuarters, FaUser, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import useCart from '../hooks/useCart';
const Dashboard = () => {
    const [cart] = useCart()

    // todo load data the server from to have dynamic data
    const isAdmin = true;


    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">

                    <Outlet ></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side  ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-[#D1A054]  text-base-content">

                        {
                            isAdmin ? <>

                                <li><NavLink to="/dashboard/admin"><FaHome></FaHome>Admin Home </NavLink> </li>

                                <li><NavLink to="/dashboard/addItems"><FaUtensils></FaUtensils> Add Items </NavLink> </li>

                                <li><NavLink to="/dashboard/manageItems"><FaUsers></FaUsers> Manages Items</NavLink> </li>

                                <li><NavLink to="/dashboard/bookings"><FaBook /> Manages Bookings</NavLink> </li>

                                <li><NavLink to="/dashboard/allUsers"><FaUsers /> All Users</NavLink> </li>


                            </> :

                                <>
                                    <li><NavLink to="/dashboard/userHome"><FaHome></FaHome> User Home </NavLink> </li>

                                    <li><NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar> Reservation </NavLink> </li>

                                    <li><NavLink to="/dashboard/payment"><FaWallet></FaWallet> Payment Histroy</NavLink> </li>

                                    <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart   <span className="badge badge-secondary"> + {cart.length || 0}</span></NavLink> </li>


                                </>

                        }



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