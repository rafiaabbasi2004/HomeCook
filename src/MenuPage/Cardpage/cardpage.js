import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // <-- Add this
import { useCart } from "../../CartContext";
import "./cardpage.css"; // Adjust the path as needed
import { Link } from "react-router-dom";

export default function Card() {
    const { addToCart, cartItems } = useCart();
const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const { state } = useLocation(); // <-- Get state
    const item = state?.item;        // <-- Extract item from state

    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrease = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const backbutton = () => {
        window.history.back();
    };

    if (!item) {
        return <p>Error: No item data passed!</p>; // optional: show fallback
    }

    return (
<div className="mainCard-container">
            <div className="Card-container">
            <div className="Top-header">
                <button className="back-button" onClick={backbutton}>Back</button>
                <Link to="/cart" className="cart-icon">
                    🛒 {totalItems}
                </Link>
            </div>

            <div className="Card-contentArea">
            <div className="Card-Image">
                <img src={item.image} alt="Food" className="Card-image" />
            </div>

            <div className="Card-Content">
                <h2 className="card-title">{item.heading}</h2>
                <h4 className="card-description">{item.Description}</h4>
                <p>Price : Rs-{item.price}</p>
                <p>Serving : {item.serves} person</p>
            </div>

            </div>

            
            <div className="Card-Button">
                <button className="Card-quantity-button" onClick={handleDecrease}>-</button>
                <input
                    type="number"
                    className="Card-quantity-input"
                    value={quantity}
                    readOnly
                />
                <button className="Card-quantity-button" onClick={handleIncrease}>+</button>
            </div>
            <button className="Card-button" onClick={() => addToCart(item, quantity)}>
                    Add to Cart
            </button>
        </div>
            </div>
    );        
}
