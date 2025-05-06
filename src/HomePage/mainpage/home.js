import React from "react";
import "./home.css";
import logo from "../navbar/foodlogo.png";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigateto = useNavigate();


  const handleClick = () => {
    navigateto("/topbar"); // Navigate to the menu page
  };
  return (
    <section className="home">
      <div className="home-content">
        <div className="home-header">
          <h1>
            Welcome to <span>HomeCook</span>
          </h1>
          <h3>
            Fueling your <span>Hunger</span>, Feeding your <span>Hope</span>
          </h3>
          <button className="home-button" onClick={handleClick}>Order Now</button>
        </div>
        <div className="home-logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>

      <div className="wave-container">
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 1440 120"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path
      d="M0,32 C360,180 1050,0 1440,96 L1440,120 L0,120 Z"
      fill="#fff"
    />
  </svg>
</div>

    </section>
  );
};

export default Home;
