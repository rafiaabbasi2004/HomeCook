import "./Homepage.css";
import logo from "../assets/foodlogo.png";
import { useNavigate } from "react-router-dom";

import image from '../assets/aboutimage.jpeg';
import breakfast from "../assets/breakfast.png";
import desert from "../assets/desert.png";
import main from "../assets/dish.png";
import drink from "../assets/juice.png";
import React from "react";
import dish1 from "../assets/dish1.png";
import dish2 from "../assets/dish2.png";
import dish3 from "../assets/dish3.png";
import dish4 from "../assets/dish4.png";
import pic1 from "../assets/1.jpeg";
import pic2 from "../assets/2.jpeg";
import pic3 from "../assets/3.jpeg";




const Homepage = () => {

  const navigateto = useNavigate();
 
    const OnClick = () => {
        navigateto("/footer");
    };
  const handleClick = () => {
    navigateto("/topbar"); // Navigate to the menu page
  };
  const testimonials = [
  {
    name: "Sarah O'Brien",
    rating: 5,
    text: "I usually find it so hard to please all of the in-laws, and I finally did. The kebabs are amazing. We barely made it back to the kitchen and the presentation was stunning. We’ll be back in a week!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Daniel Kim",
    rating: 5,
    text: "The meat here is cooked to perfection! I’ve never had a better dining experience. The staff was friendly and attentive. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const foodImages = [
  pic1,
  pic2,
  pic3,
  
];


  return (
    <div className="Home-Page">

    
    <section id="home">
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


    {/* Abouttt */}


    <section id="about">
        <div className="main-container">

           <div className='imageside'>
           <div image="aboutus-image">
                <img src={image} alt="About Us" className="aboutus-image" />
            </div>

           </div>
            <div className="text-box">
                <div className='heading'>
                    <h3>-- ABOUT US --</h3>
                    
                </div>
            
                <h2>Bringing Delicious Meals to Your Doorstep</h2>
                <p>
                    Our food delivery service offers chef-prepared meals from fresh
                    ingredients right to your home.
                    We believe in the power of food to bring people together and create
                    memorable experiences. Our mission is to make it easy for you to enjoy  
                    the best meals without the hassle of cooking or grocery shopping.
                </p>
                <button className="explore-btn" onclick={OnClick}>Explore More</button>
            </div>
        </div>
    </section>


    {/* Categoriess */}

    <section id="Categories">
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
    </section>


    {/* Menu */}
    <section id="Menu">
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
    </section>


    {/* textimonial */}
    <section id="testimonial-section">
      <div className="testimonial-images">
        <div className="img-grid">
          <img src={foodImages[0]} alt="Kebab 1" className="img-large" />
          <img src={foodImages[1]} alt="Kebab 2" className="img-small" />
          <img src={foodImages[2]} alt="Kebab 3" className="img-small" />
        </div>
      </div>
      <div className="testimonial-content">
        <h3>-- Testimonials --</h3>
        <h2>What Our Customers Say<br />About Us</h2>
        <div className="testimonial-cards">
          {testimonials.map((t, idx) => (
            <div className="testimonial-card" key={idx}>
              <div className="testimonial-header">
                <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-rating">
                    {"★".repeat(t.rating)}
                  </div>
                </div>
              </div>
              <div className="testimonial-text">{t.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>



    <section id="footer">
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
    </section>

    </div>
  );
};

export default Homepage;
