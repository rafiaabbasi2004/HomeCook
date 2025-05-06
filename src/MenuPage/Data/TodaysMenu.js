import React from "react";
import { useNavigate } from "react-router-dom";
import { itemsChineese } from "./Data";
import { useCart } from "../../CartContext"; // Adjust path as needed
import { itemsBreakfast } from "./Data";
import {itemsDesi } from "./Data"
import "./todaysmenu.css"; // Adjust the path as needed



export default function TodaysMenu() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Filter only today's items
  const todaysChineeseItems = itemsChineese.filter(item => {
      // Accept both "Today" and "today" just in case
      return (item.date || item.Date)?.toLowerCase() === "today";
  });

  const todaysbreakfast = itemsBreakfast.filter(item => {
    // Accept both "Today" and "today" just in case
    return (item.date || item.Date)?.toLowerCase() === "today";
});

const todaysDesi = itemsDesi.filter(item => {
  // Accept both "Today" and "today" just in case
  return (item.date || item.Date)?.toLowerCase() === "today";
});


  const onclick = (item) => {
      navigate("/card", { state: { item } });
  };

  return (
      <div className="breakfast-main">
          <div className="breakfast-header">
              <h3>Today's Menu</h3>
          </div>
          <div className="breakfast-subheader">
              <h3>BreakFast Items</h3>
          </div>

          <div className="breakfast-content">
              {todaysbreakfast.map((item, index) => (
                  <div key={index} className="breakfast-item">
                      <img src={item.image} alt={item.heading} className="breakfast-image" />
                      <h3>
                          <a onClick={() => onclick(item)}>{item.heading}</a>
                      </h3>
                      <p><strong>Serves:</strong> {item.serve || "1"}</p>
                      <p><strong>Price:</strong> Rs. {item.price}</p>
                      {/* <p>{item.Description}</p> */}
                      <button className="breakfast-button" onClick={() => addToCart(item)}>
                          Add to Cart
                      </button>
                  </div>
              ))}
          </div>





          <div className="breakfast-subheader">
              <h3>Desi Items</h3>
          </div>

          <div className="breakfast-content">
              {itemsDesi.map((item, index) => (
                  <div key={index} className="breakfast-item">
                      <img src={item.image} alt={item.heading} className="breakfast-image" />
                      <h3>
                          <a onClick={() => onclick(item)}>{item.heading}</a>
                      </h3>
                      <p><strong>Serves:</strong> {item.serve || "1"}</p>
                      <p><strong>Price:</strong> Rs. {item.price}</p>
                      {/* <p>{item.Description}</p> */}
                      <button className="breakfast-button" onClick={() => addToCart(item)}>
                          Add to Cart
                      </button>
                  </div>
              ))}
          </div>




          <div className="breakfast-subheader">
              <h3>Todays chineese</h3>
          </div>

          <div className="breakfast-content">
              {todaysChineeseItems.map((item, index) => (
                  <div key={index} className="breakfast-item">
                      <img src={item.image} alt={item.heading} className="breakfast-image" />
                      <h3>
                          <a onClick={() => onclick(item)}>{item.heading}</a>
                      </h3>
                      <p><strong>Serves:</strong> {item.serve || "1"}</p>
                      <p><strong>Price:</strong> Rs. {item.price}</p>
                      {/* <p>{item.Description}</p> */}
                      <button className="breakfast-button" onClick={() => addToCart(item)}>
                          Add to Cart
                      </button>
                  </div>
              ))}
          </div>
      </div>
  );
}
