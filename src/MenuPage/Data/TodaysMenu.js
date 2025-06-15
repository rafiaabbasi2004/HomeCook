import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../CartContext";
import "./todaysmenu.css";

export default function TodaysMenu() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // State to hold all meals fetched from backend
  const [meals, setMeals] = useState([]);

  // Fetch meals from backend on component mount
  useEffect(() => {
    fetch("http://localhost:5000/api/meals") // Change URL if needed
      .then((res) => res.json())
      .then((data) => setMeals(data))
      .catch((err) => console.error("Failed to fetch meals:", err));
  }, []);

  // Filter meals with date = "today" (case-insensitive)
  const todaysMeals = meals.filter(
    (item) => (item.date || "").toLowerCase() === "today"
  );

  // Filter meals by category
  const todaysBreakfast = todaysMeals.filter(
    (item) => item.category === "Breakfast"
  );
  const todaysDesi = todaysMeals.filter((item) => item.category === "Desi");
  const todaysChineese = todaysMeals.filter(
    (item) => item.category === "Chineese"
  );

  // On clicking an item heading
  const onclick = (item) => {
    navigate("/card", { state: { item } });
  };

  return (
    <div className="breakfast-main">
     <div className="breakfast-header">
      <h3>Today's Menu</h3>
      </div>
      <div className="breakfast-content">
        {todaysBreakfast.length > 0 ? (
          todaysBreakfast.map((item, index) => (
            <div key={index} className="breakfast-item">
              <img src={`http://localhost:5000/${item.image}`} alt={item.heading} />
              <h3>
                <a onClick={() => onclick(item)}>{item.heading}</a>
              </h3>
              <p>
                <strong>Serves:</strong> {item.serves || "1"}
              </p>
              <p>
                <strong>Price:</strong> Rs. {item.price}
              </p>
              <button className="breakfast-button" onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No breakfast items for today.</p>
        )}
      </div>

      <div className="breakfast-header">
       <h3>Today's Desi Items</h3>
      </div>

    
      <div className="breakfast-content">
        {todaysDesi.length > 0 ? (
          todaysDesi.map((item, index) => (
            <div key={index} className="breakfast-item">
              <img src={`http://localhost:5000/${item.image}`} alt={item.heading} />
              <h3>
                <a onClick={() => onclick(item)}>{item.heading}</a>
              </h3>
              <p>
                <strong>Serves:</strong> {item.serves || "1"}
              </p>
              <p>
                <strong>Price:</strong> Rs. {item.price}
              </p>
              <button className="breakfast-button" onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No desi items for today.</p>
        )}
      </div>

      <div className="breakfast-header">
       <h3>Today's Chineese Items</h3>
      </div>
      <div className="breakfast-content">
        {todaysChineese.length > 0 ? (
          todaysChineese.map((item, index) => (
            <div key={index} className="breakfast-item">
              <img src={`http://localhost:5000/${item.image}`} alt={item.heading} className="breakfast-image" />
              <h3>
                <a onClick={() => onclick(item)}>{item.heading}</a>
              </h3>
              <p>
                <strong>Serves:</strong> {item.serves || "1"}
              </p>
              <p>
                <strong>Price:</strong> Rs. {item.price}
              </p>
              <button className="breakfast-button" onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No Chinese items for today.</p>
        )}
      </div>
    </div>
  );
}
