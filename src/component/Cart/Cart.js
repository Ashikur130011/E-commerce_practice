import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const{cart} = props
    let total = 0
    for(const product of cart){
        total = total + product.price
    }
    return (
      <div className='cart-container'>
        <h3>Order Summary</h3>
        <h5>Items ordered: {cart.length}</h5>
        <div className='description'>
          <p>Items:</p>
          <p>Shipping:</p>
          <p>Total before Tax: ${total}</p>
          <p>Estimated Tax:</p>
        </div>
        <button className="btn-cmn">Remove</button>
      </div>
    );
};

export default Cart;