import React from 'react';
import './Cart.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () =>{
    toast("first notification")
}
const Cart = (props) => {
    const {cart} = props;
    // console.log(cart);
    let exerciseTime = 0;
    for(let product of cart){
        exerciseTime = exerciseTime + product.time;
    }
    return (
        <div>
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
                    <h3>Exercise Time:{exerciseTime}s</h3>
                    {/* <input type="text" name="" id="" placeholder='Exercise time 200 seconds' /> */}
                    <h3>Break time:</h3>
                    <input type="text" name="" id="" placeholder='Break time 15 seconds' />
                </div>
                <button onClick={notify} className='activity-btn'>
                    <p>Activity Completed</p>
                </button>
                <ToastContainer />
               
            </div>
        </div>
    );
};

export default Cart;