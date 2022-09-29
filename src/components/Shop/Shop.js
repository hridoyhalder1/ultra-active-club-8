import React, { useEffect, useState } from 'react';
import logo from '../../Images/logo.png';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const handleAddToClick = (product) =>{
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className='logo'>
                <img src={logo} alt=''></img>
                <h2>Neuro Exercise</h2>
            </div>
            <h3>Select Today's Exercise</h3>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        handleAddToClick={handleAddToClick}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            <div className='shop-blog' >
                <h1>How does react work?</h1>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
                <h1>what are the difference between props and state?</h1>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
                <h1>what is the use of 'useEffect' without data load?</h1>
                <p>1. You must have a thorough understanding of when components (re-)render because effects run after every render cycle.
                2. Effects are always executed after render, but you have options to opt out from this behavior.
                3. To opt out or skip effects, you have to understand basic JavaScript concepts about values. An effect is only rerun if at least one of the values specified as part of the effect’s dependencies has changed since the last render cycle.
                4. You should ensure that components are not re-rendered unnecessarily. This constitutes another strategy to skip unnecessary reruns of effects.</p>
            </div>
        </div>
        
    );
};

export default Shop;