import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className='header-container'>
            <div>
                <img src={logo} alt="" />
            </div>
            <nav className='nav'>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory here</a>
            </nav>
            <div className='input-div'>
            <input type="search" placeholder='type here to search...' name="" id="" />
            <button>{element}</button>
            </div>
        </div>
    );
};

export default Header;