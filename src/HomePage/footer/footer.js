import React from "react";
import "./footer.css";

export default function Footer() {
    return (
        <div className="footer-wrapper">
            {/* Wave at top */}
            <div className="wave-top">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path d="M0.00,49.98 C150.00,150.00 349.81,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" 
                          style={{ stroke: "none", fill: "#fff" }} />
                </svg>
            </div>

            {/* Content */}
            <div className="footer-container">
                <div className="newsletter">
                    <h1>Join Our <span>Newsletter</span></h1>
                    <h3>Stay Updated with Our Latest Offers</h3>
                </div>
                <div className="contactus">
                    <input type="email" placeholder="Enter your email" className="email-input" />
                    <button className="subscribe-btn">Subscribe</button>
                </div>
            </div>
        </div>
    );
}
