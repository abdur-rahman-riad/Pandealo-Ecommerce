import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
import "./Product.css"

const Product = (props) => {
    const { name, price, star, starCount, stock, img } = props.product;
    return (
        <div className="single-card">
            {/* Product Image */}
            <div className="product-image">
                <img src={img} alt="" />
            </div>

            {/* Product Description */}
            <div className="product-description">
                <h4>{name}</h4>
                <p>Stock: {stock}</p>
                <p>Review: <FontAwesomeIcon icon={faStar} /> {star} ({starCount})</p>
            </div>

            {/* Add to Cart Button */}
            <div className="product-button">
                <h3>Price: ${price}</h3>
                <button onClick={() => props.addToCartButton(props.product)} className="addToCart-btn"> <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;