import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../CartContext"; // adjust path
import { useState, useEffect } from "react";
import "./todaysmenu.css"; // adjust path

export default function TodaysDeserts() {
     const [meals, setMeals] = useState([]);
    

      useEffect(() => {
        fetch("http://localhost:5000/api/meals") // Change URL if needed
          .then((res) => res.json())
          .then((data) => setMeals(data))
          .catch((err) => console.error("Failed to fetch meals:", err));
      }, []);
    
    const Deserts = meals.filter(item => {
        return (item.date || item.Date)?.toLowerCase() === "today";
    });
    
  // Filter meals by category
  const todaysDeserts = Deserts.filter(
    (item) => item.category === "Deserts"
  );
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const onclick = (item) => {
        navigate("/card", { state: { item } });
    };

    return (
        <div className="breakfast-main">
            <div className="breakfast-header">
                <h3>Today's Deserts</h3>
            </div>
            <div className="breakfast-content">
                {todaysDeserts.map((item, index) => (
                    <div key={index} className="breakfast-item">
                        <img src={`http://localhost:5000/${item.image}`} alt={item.heading} className="breakfast-image" />
                        <h3>
                            <a onClick={() => onclick(item)}>{item.heading}</a>
                        </h3>
                        <p><strong>Serves:</strong> {item.serve || "1"}</p>
                        <p><strong>Price:</strong> Rs. {item.price}</p>
                        <button className="breakfast-button" onClick={() => addToCart(item)}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}