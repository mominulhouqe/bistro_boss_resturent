import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaBeer, FaShoppingCart } from "react-icons/fa";
import useCart from '../../../hooks/useCart';
const Navber = () => {
    const { user, logOut } = useContext(AuthContext)

    const [cart] = useCart();


    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result)
            })
            .catch(error => console.log(error.message))
    }




    const menuItems = <>
        <li> <Link to='/'> Homepage </Link> </li>
        <li><Link to='/menu'>  Our Menu</Link></li>
        <li> <Link to='/contact'> Contact Us </Link> </li>
        <li> <Link to='/shop'> Our Shop </Link> </li>
        <li>
            <Link to='/dashboard/mycart' className="bg-slate-900 justify-center flex gap-2">
                <FaShoppingCart className='text-3xl' />
                <div className="badge badge-secondary"> + {cart.length || 0}</div>
            </Link>
        </li>
        {
            user ? <>
                <div className='flex gap-5 justify-center items-center mx-2'>
                    <img src={user.photoURL} className='rounded-full w-10 h-10' alt="" />
                    {user.displayName}
                    <li> <Link onClick={handleLogOut} to='/login'> Logout </Link> </li>
                </div>
            </>

                : <li> <Link to='/login'> Login</Link> </li>

        }

    </>


    return (
        <div className="navbar fixed z-10 bg-opacity-30 text-white bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  text-white bg-black rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Bristu Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default Navber;