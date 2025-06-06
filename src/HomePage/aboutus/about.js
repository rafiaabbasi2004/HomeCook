import image from '../aboutus/aboutimage.jpeg'
import "./about.css"
import { useNavigate } from 'react-router-dom';


function AboutUs(){
    const navigate = useNavigate();
    const OnClick = () => {
        navigate("/footer");
    };
    return(
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
    );
}

export default AboutUs;