import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const { name, img, price, quantity, key } = props.product;
    const { handleRemove } = props;
    return (
        <div className="review-item-container">
            <div className="review-product-img">
                <img src={img} alt="Product Banner" />
            </div>
            <div className="review-product-details">
                <h4>{name}</h4>
                <h3>Price: ${price}</h3>
                <h4>Quantity: {quantity}</h4>
                <button onClick={() => handleRemove(key)} className="remove-btn"><FontAwesomeIcon icon={faBan} /> Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;