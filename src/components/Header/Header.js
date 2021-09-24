import React from 'react';
import './Header.css'
import logo from '../../imgage/logo.png';

const Header = () => {
    return (
        <div className="site-logo">
            <img src={logo} alt="Site Logo Here" />
        </div>
    );
};

export default Header;