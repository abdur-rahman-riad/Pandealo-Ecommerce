import React from 'react';
import './Header.css'
import logo from '../../imgage/logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = { backgroundColor: "orangered", color: "white" }
    return (
        <div className="header-section">

            {/* Logo */}
            <div className="site-logo">
                <img src={logo} alt="Site Logo Here" />
            </div>

            {/* Nav Bar */}
            <div className="nav-bar">
                <NavLink activeStyle={activeStyle} to="/shop">Shop</NavLink>
                <NavLink activeStyle={activeStyle} to="/revieworder">Order Review</NavLink>
                <NavLink activeStyle={activeStyle} to="/inventory">Manage Inventory</NavLink>
            </div>
        </div>
    );
};

export default Header;