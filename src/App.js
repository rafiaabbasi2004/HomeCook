import React from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./MenuPage/topbar/topbar";
import Navbar from "./components/navbar/navbar";
import Home from "./HomePage/mainpage/home";
import About from "./HomePage/aboutus/about";
import Category from "./HomePage/categories/category";
import Menu from "./HomePage/menu/menu";
import Testimonial from "./HomePage/testimonial/testimonial";
import Footer from "./HomePage/footer/footer";
import CartPage from "./Cartpage"; // optional, if you make a cart page
import Card from "./MenuPage/Cardpage/cardpage";
import Checkout from "./Checkout";
import Homepage from "./pages/Homepage";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardHeader from "./components/cardheader";
// import CartPage from "./MenuPage/Cardpage/CartPage"; // optional, if you make a cart page

export default function App() {
  return (
    <>
      <Routes>
        {/* Home route with all homepage components */}
        <Route
          path="/"
          element={
            <>
              {/* <Navbar />
              <Homepage /> */}
              <CardHeader />
            </>
          }
        />

        {/* Other app routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/category" element={<Category />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/footer" element={<Footer />} />
        {/* <Route path="/cartpage" element={<CartPage />} /> */}
        {/* <Route path="/cartpage" element={<CartPage />} /> */}

        <Route path="/card" element={<Card />} />
        <Route path="/topbar" element={<Topbar />} />
        <Route path="/checkout" element={<Checkout />} />
        

        {/* <Route path="/cart" element={<CartPage />} /> */}
      </Routes>
    </>
  );
}
