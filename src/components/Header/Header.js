import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <div>
                    <a href="/shop">Shop</a>
                    <a href="/review">Review</a>
                    <a href="/manage">Manage Inventory</a>
                </div>
                <div>
                    <input type="text" placeholder="Type here for search"></input>
                </div>
                
            </nav>
            
        </div>
    );
};

export default Header;