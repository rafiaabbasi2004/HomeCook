import React, { useState } from "react";
import { useCart } from "./CartContext"; // adjust path if needed
import "./Checkout.css";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    phone: "",
  });

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.serves, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    console.log("Order details:", {
      items: cartItems,
      user: formData,
    });
    clearCart(); // clear cart after order
  };

  return (
    <div className="checkout-page">
      <h2>Order Summary</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="checkout-cart-list">
          {cartItems.map((item, index) => (
            <li key={index} className="checkout-cart-item">
              <img src={item.image} alt={item.heading} className="checkout-cart-img" />
              <div>
                <h4>{item.heading}</h4>
                <p>Quantity: {item.quantity}</p>
                <p>Subtotal: ${item.price * item.quantity}</p>
              </div>
            </li>
          ))}
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </ul>
      )}

      <h2>Checkout Details</h2>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} required />
        <input name="address" placeholder="Address" onChange={handleChange} required />
        <input name="city" placeholder="City" onChange={handleChange} required />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
