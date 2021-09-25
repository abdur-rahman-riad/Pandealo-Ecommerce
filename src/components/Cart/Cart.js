import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import "./Cart.css"

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
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
            <h3>Items Order: <span>{props.cart.length}</span></h3>
            <hr />
            <h4>Items Price: ${total.toFixed(2)}</h4>
            <h4>Delivery Fee: ${deliveryFee.toFixed(2)}</h4>
            <h4>Tax: ${taxCost.toFixed(2)}</h4>
            <hr />
            <h3>Total: ${grandTotal.toFixed(2)}</h3>
            <button className="place-order-btn"> <FontAwesomeIcon icon={faShoppingBag} /> Place Order</button>
        </div>
    );
};

export default Cart;