import React, { useState } from "react";
import "./topbar.css";
import Navbar from "../../HomePage/navbar/navbar";
import { Link } from "react-router-dom";
import { useCart } from "../../CartContext"; // Adjust the path as needed

import TodaysMenu from "../Data/TodaysMenu";
import TodaysMenuDrinks from "../Data/TodaysmenuDrinks";
import TodaysDeserts from "../Data/TodaysDeserts";
import TommorowsMenu from "../Data/TommorowsMenu";

export default function Topbar() {
    const { cartItems } = useCart();
    const totalItems = cartItems.reduce((sum, item) => sum + item.persons, 0);



    const [activeCategory, setActiveCategory] = useState("BreakFast");

    const menuItems = ["Today's Food", "Today's Drinks", "Today's Deserts", "Tommorows Menu"];

    const renderSection = () => {
        switch (activeCategory) {
            case "Today's Food":
                return <TodaysMenu />;
            case "Today's Drinks":
                return <TodaysMenuDrinks />;
            case "Today's Deserts":
                return <TodaysDeserts />;
            case "Tommorows Menu":
                return <TommorowsMenu />;
            default:
                return null;
        }
    };

    return (
        <div className="topbar-container">
            <Navbar />
            <div className="topbar">
                <div className="topbar-header">
                    <h3>Menu</h3>
                </div>

                <div className="List">
                    <ul className="menu-list-menupage">
                        {menuItems.map((item) => (
                            <li
                                key={item}
                                className={`menu-item-menupage ${activeCategory === item ? "active" : ""}`}
                                style={{
                                    backgroundColor: activeCategory === item ? "orange" : "transparent",
                                    color: activeCategory === item ? "white" : "black",
                                }}
                                onClick={() => setActiveCategory(item)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <Link to="/cart" className="cart-icon">
                    🛒 {totalItems}
                </Link>

                <div className="menu-content">
                    {renderSection()}
                </div>
            </div>
        </div>
    );
}
