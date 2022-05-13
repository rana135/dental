import React from 'react';
import { Link } from 'react-router-dom';
import titleLogo from '../../../assets/images/dental_LOGO.png'

const Navbar = () => {
    const menuItems = <>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/appointment'>APPOINTMENT</Link></li>
        <li><Link to='/reviews'>REVIEWS</Link></li>
        <li><Link to='/contact'>CONTACT US</Link></li>
        <li><Link to='/about'>ABOUT</Link></li>
        <li><Link to='/login'>LOGIN</Link></li>
    </>
    return (
        <div className="navbar bg-gradient-to-r from-secondary to-primary text-white ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/">
                    <img className='h-10 mx-8' src={titleLogo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;