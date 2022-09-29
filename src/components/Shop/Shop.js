import React from 'react';
import logo from '../../Images/logo.png';
import './Shop.css';

const Shop = () => {
    return (
        <div className='shop-container'>
            <div className="products-container">
                <div className='logo'>
                    <img src={logo} alt=''></img>
                    <h2>Neuro Exercise</h2>
                </div>
                <h3>Select Today's Exercise</h3>
            </div>
            <div className="cart-container">
                <h1>Profile summary</h1>
            </div>
        </div>
    );
};

export default Shop;