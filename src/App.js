import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Topbar from "./MenuPage/topbar/topbar";
import Navbar from "./components/navbar/navbar";
import CartPage from "./Cartpage";
import Card from "./MenuPage/Cardpage/cardpage";
import Checkout from "./Checkout";
import Homepage from "./pages/Homepage";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardHeader from "./components/cardheader";
import Login from "./pages/login";
import Register from "./pages/register";

export default function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData); // Save user in state
    navigate("/home"); // Redirect after login
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/home" element={
          <>
            <Navbar />
            <Homepage />
            <CardHeader />
          </>
        } />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/card" element={<Card />} />
        <Route path="/topbar" element={<Topbar />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}
