import react from "react";
import "./navbar.css";
import logo from "./foodlogo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="logo" className="logo" />
                <h2 className="name-title">HomeCook</h2>
            </div>

            <ul className="navbar-list">
                <li className="navbar-item"><a href="/">Home</a></li>
                <li className="navbar-item"><a href="#about">About us</a></li>
                <li className="navbar-item"><a href="#footer">Contact</a></li>
                <li className="navbar-item"><a href="/topbar">Menu</a></li>
            </ul>
        </nav>
    );

}
export default Navbar;