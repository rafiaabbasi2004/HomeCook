import React from "react";
import "./menu.css";
import dish1 from "./dish1.png";
import dish2 from "./dish2.png";
import dish3 from "./dish3.png";
import dish4 from "./dish4.png";

function Menu(){
    return(
        <div className="menu-container">
            <div className="menu-header">
                <h3>-- Our Menu --</h3>   
                <h2>Explore Our Menu</h2>
            </div>

            <div className="menu-list">
                <div className="menu-item">
                    <img src={dish1} alt="Dish 1" />
                    <h3>Chikken Tandori Tikka</h3>
                    <span>Rs 1500</span>
                </div>
                <div className="menu-item">
                    <img src={dish2} alt="Dish 2" />
                    <h3>Crispy Chicken Wings</h3>
                    <span>Rs 1200</span>
                </div>
                <div className="menu-item">
                    <img src={dish3} alt="Dish 3" />
                    <h3>Chicken Mandi</h3>
                    <span>Rs 2000</span>
                </div>
                <div className="menu-item">
                    <img src={dish4} alt="Dish 3" />
                    <h3>Spicy Chicken Spaghetti</h3>
                    <span>Rs 1000</span>
                </div>
            </div>

            <button onClick={()=>{
                window.location.href="/topbar";
            }} >Explore More</button>

        </div>

    );
}
export default Menu;