import React, { useState } from 'react';
import './register.css';
import { useNavigate } from 'react-router-dom';

const Register = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const navigate = useNavigate();
  const handleRegister = async (e) => {
    
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert('✅ Registered successfully! Please login.');
        onRegister && onRegister(data); // Optional callback
        navigate('/login');
      } 
      else {
        alert(data.message || 'Registration failed');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong during registration.');
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <h2>👩‍🍳 Join HomeCook</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
