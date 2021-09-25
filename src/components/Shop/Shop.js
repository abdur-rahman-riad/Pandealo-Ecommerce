import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    // Declare State for Load Data
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // Fetch Data
        fetch("./products.JSON")
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                    ></Product>)
                }
            </div>

            <div className="cart-container">
                <h2>Order Summary</h2>
            </div>
        </div>
    );
};

export default Shop;