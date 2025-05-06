import React from "react";
import "./testimonial.css";
import pic1 from "./1.jpeg"
import pic2 from "./2.jpeg"
import pic3 from "./3.jpeg"
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
    
export default function TestimonialSection() {
  return (
    <section className="testimonial-section">
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
  );
}
