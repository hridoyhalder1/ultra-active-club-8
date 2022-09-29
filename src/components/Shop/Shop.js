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
                <h1>Hriday Haldar</h1>
                <small>Dhaka, Bangladesh</small>
                <div className='detail-info'>
                    <h3>75kg Weight</h3>
                    <h3>6.5 Height</h3>
                    <h3>25 year</h3>
                </div>
                <h2>Add a Break</h2>
                <div className='break'>
                    <h5>10s</h5>
                    <h5>20s</h5>
                    <h5>30s</h5>
                    <h5>40s</h5>
                </div>
                <h2>Exercise Details</h2>
                <div className='exercise-detail'>
                    <input type="text" name="" id="" placeholder='Exercise time 200 seconds' />
                    <h3>Break time:</h3>
                    <input type="text" name="" id="" placeholder='Break time 15 seconds' />
                </div>
                <button className='activity-btn'>
                    <p>Activity Completed</p>
                </button>
            </div>
        </div>
    );
};

export default Shop;