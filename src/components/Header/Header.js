import React from 'react';
import './Header.css'
import logo from '../../imgage/logo.png';

const Header = () => {
    return (
        <div className="header-section">

            {/* Logo */}
            <div className="site-logo">
                <img src={logo} alt="Site Logo Here" />
            </div>

            {/* Nav Bar */}
            <div className="nav-bar">
                <a href="/shop">Shop</a>
                <a href="/orders">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
            </div>
        </div>
    );
};

export default Header;