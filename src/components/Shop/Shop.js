import React, { useEffect, useState } from 'react';
import logo from '../../Images/logo.png';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className='logo'>
                <img src={logo} alt=''></img>
                <h2>Neuro Exercise</h2>
            </div>
            <h3>Select Today's Exercise:{products.length}</h3>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <h1>Profile summary</h1>
            </div>
        </div>
    );
};

export default Shop;