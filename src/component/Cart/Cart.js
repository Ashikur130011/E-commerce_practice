import React from 'react';

const Cart = () => {
    return (
      <div>
        <h3>Order Summary</h3>
        <h5>Items ordered: </h5>
        <div className='description'>
          <p>Items:</p>
          <p>Shipping:</p>
          <p>Total before Tax:</p>
          <p>Estimated Tax:</p>
        </div>
        <button className="btn-cmn">Remove</button>
      </div>
    );
};

export default Cart;