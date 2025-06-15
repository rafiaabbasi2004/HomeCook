import React, { useState } from "react";
import { useCart } from "./CartContext"; // adjust path if needed
import "./Checkout.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // If you want to redirect

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


// Inside the component
const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

  const token = localStorage.getItem('token'); // Ensure you're storing token on login

  const orderPayload = {
    meals: cartItems.map(item => ({
      meal: item._id, // Must be real MongoDB ID from the DB
      quantity: item.persons || 1,
      totalPrice: item.price * (item.persons || 1),
    })),
    deliveryAddress: `${formData.address}, ${formData.city}`,
  };

  try {
    const response = await axios.post(
      'http://localhost:5000/api/orders/place',
      orderPayload,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    alert("Order placed successfully!");
    clearCart();
    console.log(response.data);
    navigate('/thankyou'); // optional redirect
  } catch (err) {
    console.error("Order error:", err);
    alert("Failed to place order");
  }
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
              <img src={`http://localhost:5000/${item.image}`} alt={item.heading} className="checkout-cart-img" />
              <div>
                <h4>{item.heading}</h4>
                <p>Quantity: {item.serves}</p>
                <p>Subtotal: ${item.price * item.serves}</p>
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
