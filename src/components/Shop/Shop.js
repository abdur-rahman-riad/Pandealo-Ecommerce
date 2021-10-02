import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
// import NotFound from '../NotFound/NotFound';
import './Shop.css';

const Shop = () => {
    // Declare State
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProduct, setDisplayProduct] = useState([]);

    // Use Effect for Loading Data from API
    useEffect(() => {
        // Fetch Data
        fetch("./products.JSON")
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setDisplayProduct(data);
            })
    }, []);

    // Use Effect for Loading Data from Local Storage
    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);

                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products]);

    // Handle Add to Cart Button
    const handleAddToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);

        // Save to Local Storage
        addToDb(product.key);
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProduct(matchedProduct);
    }

    return (
        <div>
            <div className="shop-container">
                <div>
                    <div className="search-container">
                        <input onChange={handleSearch} type="text" placeholder="Search Your Product Here..." />
                    </div>
                    <div className="product-container">
                        {
                            displayProduct.map(product => <Product
                                key={product.key}
                                product={product}
                                addToCartButton={handleAddToCart}
                            ></Product>)
                        }
                    </div>
                </div>

                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;