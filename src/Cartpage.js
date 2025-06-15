import React, { useState } from "react";
import { useCart } from "./CartContext";
import "./Cartpage.css";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [deliveryTime, setDeliveryTime] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const totalPersons = cartItems.reduce((sum, item) => sum + item.persons, 0);

  const totalPrice = cartItems.reduce((sum, item) => {
    const requiredServings = Math.ceil(item.persons / item.serves);
    return sum + requiredServings * item.price;
  }, 0);

  const handleDeliveryTimeChange = (e) => {
    const selectedTime = new Date(e.target.value);
    const now = new Date();
    const diffInMs = selectedTime - now;
    const diffInHours = diffInMs / (1000 * 60 * 60);

    if (diffInHours < 5) {
      setErrorMessage("Delivery time must be at least 5 hours from now.");
    } else {
      setErrorMessage("");
    }

    setDeliveryTime(e.target.value);
  };

  return (
    <div className="Cart-Page"> 
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item, index) => {
              const requiredServings = Math.ceil( item.serves);
              const itemTotal = requiredServings * item.price;

              return (
                <li key={index} className="cart-item">
                  <img
                    src={`http://localhost:5000/${item.image}`}
                    alt={item.heading}
                    className="cart-item-img"
                  />
                  <div>
                    <h4>{item.heading}</h4>
                    <p>For Persons: {item.persons}</p>
                    <p>Serves: {item.serves} per serving</p>
                    <p>
                      Price: ${item.price} × {requiredServings} servings = $
                      {itemTotal}
                    </p>
                    <button onClick={() => removeFromCart(item.heading)}>
                      Remove
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="cart-summary">
            <p>Total Persons to Serve: {totalPersons}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>

            <div className="delivery-time-input">
              <label htmlFor="deliveryTime">Select Delivery Time:</label>
              <input
                type="datetime-local"
                id="deliveryTime"
                value={deliveryTime}
                onChange={handleDeliveryTimeChange}
              />
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </div>

            <button onClick={clearCart} className="clear-cart-btn">
              Clear Cart
            </button>

            <Link to="/checkout">
              <button
                className="checkout-btn"
                disabled={!deliveryTime || errorMessage}
              >
                Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
    </div>
  );
};

export default CartPage;
