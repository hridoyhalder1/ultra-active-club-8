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
            <div className='shop-blog' >
                <h1>How does react work?</h1>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
                <h1>what are the difference between props and state?</h1>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
                <h1></h1>
            </div>
        </div>
        
    );
};

export default Shop;