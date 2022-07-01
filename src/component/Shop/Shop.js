import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [displayProducts, setDisplayProducts] = useState([])
    const [products, setProducts] = useState([])
    const[cart, setCart] = useState([])

    useEffect( () => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setDisplayProducts(data)
        })
    },[])
    
    const addToCart= (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }

    const element = <FontAwesomeIcon icon={faShoppingCart} />;

    const displaySearchItem = e => {
        const searchText = e.target.value;
        const displayProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProducts(displayProduct);
    }

    return (
      <>
        <div className="input-div">
          <input
            type="search"
            onChange={displaySearchItem}
            placeholder="type here to search..."
            name=""
            id=""
          />
          <button>{element}</button>
        </div>
        <div className="shop-container">
          <div className="product-container">
            {displayProducts.map((product) => (
              <Product
                product={product}
                key={product.id}
                addToCart={addToCart}
              ></Product>
            ))}
          </div>
          <div className="cart-container">
            <Cart cart={cart}></Cart>
          </div>
        </div>
      </>
    );
};

export default Shop;