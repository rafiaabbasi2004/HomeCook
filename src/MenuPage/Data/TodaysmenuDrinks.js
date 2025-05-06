import react from "react";
import { useNavigate } from "react-router-dom";
import { itemsFresh } from "./Data";
import { itemsSmothie } from "./Data";
import { itemsDesiDrink } from "./Data";
import { useCart } from "../../CartContext"; // Adjust path as needed
import "./todaysmenu.css"; 

export default function TodaysMenuDrinks() {
        const addToCart = useCart();
        const navigate = useNavigate();

        const todaysfreshdrinks = itemsFresh.filter(item => {
            return (item.date || item.Date)?.toLowerCase() === "today";
        });

        const todaysSmothie = itemsSmothie.filter(item => {
            return (item.date || item.Date)?.toLowerCase() === "today";
        });

        const todaysDesiDrink = itemsDesiDrink.filter(item => {
            return (item.date || item.Date)?.toLowerCase() === "today";
        });

        const onclick = (item) => {
            navigate("/card", { state : { item } });
        }


        return (
            <div className="breakfast-main">
                <div className="breakfast-header">
                    <h3>Today's Drinks</h3>
                </div>
                <div className="breakfast-subheader">
                    <h3>Fresh Drinks</h3>
                </div>

                <div className="breakfast-content">
                    {todaysfreshdrinks.map((item, index) => (
                        <div key={index} className="breakfast-item">
                            <img src={item.image} alt={item.heading} className="breakfast-image" />
                            <h3>
                                <a onClick={() => onclick(item)}>{item.heading}</a>
                            </h3>
                            <p><strong>Serves:</strong> {item.serve || "1"}</p>
                            <p><strong>Price:</strong> Rs. {item.price}</p>
                            <button className="breakfast-button" onClick={() => onclick(item)}>
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>

               
               

                <div className="breakfast-subheader">
                    <h3>Fresh Drinks</h3>
                </div>

                <div className="breakfast-content">
                    {todaysSmothie.map((item, index) => (
                        <div key={index} className="breakfast-item">
                            <img src={item.image} alt={item.heading} className="breakfast-image" />
                            <h3>
                                <a onClick={() => onclick(item)}>{item.heading}</a>
                            </h3>
                            <p><strong>Serves:</strong> {item.serve || "1"}</p>
                            <p><strong>Price:</strong> Rs. {item.price}</p>
                            <button className="breakfast-button" onClick={() => onclick(item)}>
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>

               



                <div className="breakfast-subheader">
                    <h3>Desi Drinks</h3>
                </div>

                <div className="breakfast-content">
                    {todaysDesiDrink.map((item, index) => (
                        <div key={index} className="breakfast-item">
                            <img src={item.image} alt={item.heading} className="breakfast-image" />
                            <h3>
                                <a onClick={() => onclick(item)}>{item.heading}</a>
                            </h3>
                            <p><strong>Serves:</strong> {item.serve || "1"}</p>
                            <p><strong>Price:</strong> Rs. {item.price}</p>
                            <button className="breakfast-button" onClick={() => onclick(item)}>
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>

               
            </div>

        );  






}