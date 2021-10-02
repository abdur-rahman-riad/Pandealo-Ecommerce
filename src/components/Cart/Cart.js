import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import "./Cart.css"

const Cart = (props) => {
    const cart = props.cart;

    let totalQuantity = 0;

    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    let deliveryFee = 0;
    if (total > 0) {
        deliveryFee = 20;
    }
    const taxCost = total * 0.10;
    const grandTotal = total + deliveryFee + taxCost;

    return (
        <div className="cart-design">
            <h2>Order Summary</h2>
            <h3>Items Order: <span>{totalQuantity}</span></h3>
            <hr />

            <h4 className="cart-item"><span>Items Price:</span> <span className="cart-item-design">${total.toFixed(2)}</span></h4>

            <h4 className="cart-item"><span>Delivery Fee: </span><span className="cart-item-design">${deliveryFee.toFixed(2)}</span></h4>
            <h4 className="cart-item"><span>Tax: </span><span className="cart-item-design">${taxCost.toFixed(2)}</span></h4>
            <hr />
            <h3 className="total-price">Total: ${grandTotal.toFixed(2)}</h3>
            <button className="place-order-btn"> <FontAwesomeIcon icon={faShoppingBag} /> Order Review</button>
        </div>
    );
};

export default Cart;