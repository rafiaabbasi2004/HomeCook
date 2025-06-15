import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send to backend
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
       
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        onLogin(data.user); // You can pass user data up if needed
         navigate('/home');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred during login.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>🍽️ HomeCook Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
       <p className='register-link'>Dont have an account? <a href="/register">Register here</a></p>
        <button type="submit" >Login</button>
      </form>
    </div>
  );
};

export default Login;
