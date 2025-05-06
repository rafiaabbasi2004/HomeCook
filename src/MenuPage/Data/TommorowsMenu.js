import react from "react";
import { useNavigate } from "react-router-dom";
import { itemsChineese } from "./Data"; 
import { itemsBreakfast } from "./Data";
import { itemsDesi } from "./Data";
import { itemsFresh } from "./Data";
import { itemsSmothie } from "./Data";
import { itemsDesiDrink } from "./Data";
import { itemsDeserts } from "./Data";

export default function TommorowsMenu() {
    const Breakfast = itemsBreakfast.filter(item => {
        return (item.date || item.Date)?.toLowerCase() === "tommorow";
    });
    const Chineese = itemsChineese.filter(item => {
        return (item.date || item.Date)?.toLowerCase() === "tommorow";
    });
    const Desi = itemsDesi.filter(item => {
        return (item.date || item.Date)?.toLowerCase() === "tommorow";
    });
    const Fresh = itemsFresh.filter(item => {
        return (item.date || item.Date)?.toLowerCase() === "tommorow";
    });
    const Smothie = itemsSmothie.filter(item => {
        return (item.date || item.Date)?.toLowerCase() === "tommorow";
    });
    const DesiDrink = itemsDesiDrink.filter(item => {
        return (item.date || item.Date)?.toLowerCase() === "tommorow";
    });
    const Deserts = itemsDeserts.filter(item => {
        return (item.date || item.Date)?.toLowerCase() === "tommorow";
    });

    return (
        <div className="breakfast-main">
            <div className="breakfast-header">
                <h3>Tommorows Menu</h3>
            </div>

            <div className="breakfast-subheader">
                        <h3>BreakFast Items</h3>
                    </div>
            {Breakfast.length > 0 ? (
                <>
                    <div className="breakfast-content">
                        {Breakfast.map((item, index) => (
                            <div key={index} className="breakfast-item">
                                <img src={item.image} alt={item.heading} className="breakfast-image" />
                                <h3>{item.heading}</h3>
                                <p><strong>Serves:</strong> {item.serve || "1"}</p>
                                <p><strong>Price:</strong> Rs. {item.price}</p>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <p>No breakfast items available for tomorrow.</p>
            )}


            <div className="breakfast-subheader">
                <h3>Chineese Items</h3>
            </div>
            {Chineese.length > 0 ? (
                <>
                    
                    <div className="breakfast-content">
                        {Chineese.map((item, index) => (
                            <div key={index} className="breakfast-item">
                                <img src={item.image} alt={item.heading} className="breakfast-image" />
                                <h3>{item.heading}</h3>
                                <p><strong>Serves:</strong> {item.serve || "1"}</p>
                                <p><strong>Price:</strong> Rs. {item.price}</p>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <p>No Chinese items available for tomorrow.</p>
            )}



            <div className="breakfast-subheader">
                        <h3>Desi Items</h3>
                    </div>
            {Desi.length > 0 ? (
                <>
                    
                    <div className="breakfast-content">
                        {Desi.map((item, index) => (
                            <div key={index} className="breakfast-item">
                                <img src={item.image} alt={item.heading} className="breakfast-image" />
                                <h3>{item.heading}</h3>
                                <p><strong>Serves:</strong> {item.serve || "1"}</p>
                                <p><strong>Price:</strong> Rs. {item.price}</p>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <p>No desi items available for tomorrow.</p>
            )}


                <div className="breakfast-subheader">
                        <h3>Fresh Drinks</h3>
                    </div>

            {Fresh.length > 0 ? (
                <>
                    
                    <div className="breakfast-content">
                        {Fresh.map((item, index) => (
                            <div key={index} className="breakfast-item">
                                <img src={item.image} alt={item.heading} className="breakfast-image" />
                                <h3>{item.heading}</h3>
                                <p><strong>Serves:</strong> {item.serve || "1"}</p>
                                <p><strong>Price:</strong> Rs. {item.price}</p>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <p>No fresh drinks available for tomorrow.</p>
            )}




<div className="breakfast-subheader">
                        <h3>Smoothies</h3>
                    </div>

            {Smothie.length > 0 ? (
                <>
                    
                    <div className="breakfast-content">
                        {Smothie.map((item, index) => (
                            <div key={index} className="breakfast-item">
                                <img src={item.image} alt={item.heading} className="breakfast-image" />
                                <h3>{item.heading}</h3>
                                <p><strong>Serves:</strong> {item.serve || "1"}</p>
                                <p><strong>Price:</strong> Rs. {item.price}</p>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <p>No smoothies available for tomorrow.</p>
            )}



<div className="breakfast-subheader">
                        <h3>Desi Drinks</h3>
                    </div>
            {DesiDrink.length > 0 ? (
                <>
                    
                    <div className="breakfast-content">
                        {DesiDrink.map((item, index) => (
                            <div key={index} className="breakfast-item">
                                <img src={item.image} alt={item.heading} className="breakfast-image" />
                                <h3>{item.heading}</h3>
                                <p><strong>Serves:</strong> {item.serve || "1"}</p>
                                <p><strong>Price:</strong> Rs. {item.price}</p>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <p>No desi drinks available for tomorrow.</p>
            )}



<div className="breakfast-subheader">
                        <h3>Deserts</h3>
                    </div>
            {Deserts.length > 0 ? (
                <>
                    
                    <div className="breakfast-content">
                        {Deserts.map((item, index) => (
                            <div key={index} className="breakfast-item">
                                <img src={item.image} alt={item.heading} className="breakfast-image" />
                                <h3>{item.heading}</h3>
                                <p><strong>Serves:</strong> {item.serve || "1"}</p>
                                <p><strong>Price:</strong> Rs. {item.price}</p>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <p>No deserts available for tomorrow.</p>
            )}
        </div>
    );

}
