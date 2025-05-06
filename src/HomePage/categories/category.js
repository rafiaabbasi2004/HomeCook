import React from "react";
import "./category.css";
import main from "./dish.png"
import breakfast from "./breakfast.png"
import desert from "./desert.png"
import drink from "./juice.png"

function Category() {
return(
    <div className="category-container">
        <div className="category-header">
            <h3>-- Our Category --</h3>
            <h2>Explore Our Categories</h2>
        </div>
        <div className="category-list">
            <div className="category-item">
                <img src={main} alt="maindish"/>
                <button className="category-button">Main Dish</button>
            </div>
            <div className="category-item">
                <img src={breakfast} alt="maindish"/>
                <button className="category-button">Breakfast</button>
            </div>
            <div className="category-item">
                <img src={desert} alt="maindish"/>
                <button className="category-button">Desserts</button>
            </div>
            <div className="category-item">
                <img src={drink} alt="maindish"/>
                <button className="category-button">Drinks</button>
            </div>
        </div>



    </div>
);

}

export default Category;