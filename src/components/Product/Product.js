import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const {picture, name, blog, time, age} = props.product
    return (
        <div className='product'>
            <img src={picture} alt=''></img>
            <div className='product-info'>
                <h3 className='product-name'>{name}</h3>
                <p className='blog'>{blog}</p>
                <p>For Age: {age}</p>
                <p>Time required: {time}</p>
            </div>
            <button onClick={()=> props.handleAddToClick(props.product)} className="btn-cart">
                <p>Add To List</p>
            </button>
        </div>
    );
};

export default Product;