import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <a href="/Shop">Shop</a>
                <a href="/Review">Order review</a>
                <a href="/Manage">Manage inventory</a>
            </nav>
        </div>
    );
};

export default Header;