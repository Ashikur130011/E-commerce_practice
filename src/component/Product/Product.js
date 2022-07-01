import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    console.log(props);
    const element = <FontAwesomeIcon icon={faShoppingCart} />;
    const{name, ratings, price, stock, seller, img} = props.product
    //console.log(props.product);
    return (
      <div className="card">
        <div className="image">
          <img src={img} alt="Photo isn't available" />
        </div>
        <div className="description">
          <h3>{name}</h3>
          <h5>by {seller}</h5>
          <h2>${price}</h2>
          <h5>only {stock} left in stock - order soon</h5>
          <Rating
            initialRating={ratings}
            readonly
            emptySymbol={"fa-regular fa-star"}
            fullSymbol={"fa-solid fa-star"}
          ></Rating>
          <button
            onClick={() => props.addToCart(props.product)}
            className="btn-cmn"
          >
            {element} add to cart
          </button>
        </div>
      </div>
    );
};

export default Product;